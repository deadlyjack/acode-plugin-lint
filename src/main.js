import plugin from '../plugin.json';

const { WorkerClient } = ace.require('ace/worker/worker_client');
const net = ace.require('ace/lib/net');
const config = ace.require('ace/config');
const appSettings = acode.require('settings');

class AcodePlugin {
  baseUrl = '';

  constructor() {
    this.startWorker = this.startWorker.bind(this);
  }

  async init() {
    const { editor } = editorManager;

    if (BuildInfo.versionCode < 314) {
      editor.renderer.setMargin(0, 0, 0, 0);
    } else {
      appSettings.update({
        showAnnotations: true,
      });
    }

    editor.on('changeMode', this.startWorker);
    this.startWorker();
    this.#commands.forEach((command) => {
      editor.commands.addCommand(command);
    });
  }

  async destroy() {
    const { editor } = editorManager;
    this.#commands.forEach((command) => {
      editor.commands.removeCommand(command);
    });
    editor.off('changeMode', this.startWorker);
    if (BuildInfo.versionCode < 314) {
      editor.renderer.setMargin(0, 0, -16, 0);
    } else {
      appSettings.update({
        showAnnotations: false,
      });
    }
  }

  async startWorker() {
    try {
      const { editor } = editorManager;
      const { session } = editor;
      await this.initWorker(session, session.$mode);
    } catch (error) {
      console.error(error);
    }
  }

  async initWorker(session, mode) {
    if (typeof mode === 'string') {
      mode = config.$modes[mode];
    }

    if (!mode) return;
    const modeName = mode.$id.split('/').pop();
    await this.createWorker(modeName, session, mode);
  }

  async createWorker(modeName, session, mode) {
    try {
      if (session.$worker) {
        session.$worker.terminate();
        session.$worker = null;
      }
      const workerScript = `workers/worker-${modeName}.js`;
      const workerMode = `ace/mode/${modeName}_worker`;
      const script = acode.joinUrl(this.baseUrl, workerScript);
      const workerClass = AcodePlugin.getWorkerClass(modeName);
      const worker = new WorkerClient(['ace'], workerMode, workerClass, script);
      worker.attachToDocument(session.getDocument());
      session.$worker = worker;

      if (modeName === 'xquery') {
        worker.on("ok", function (e) {
          session.clearAnnotations();
        });

        worker.on("markers", function (e) {
          session.clearAnnotations();
          mode.addMarkers(e.data, session);
        });

        worker.on("highlight", function (tokens) {
          mode.$tokenizer.tokens = tokens.data.tokens;
          mode.$tokenizer.lines = session.getDocument().getAllLines();

          const rows = Object.keys(mode.$tokenizer.tokens);
          for (let i = 0; i < rows.length; i++) {
            const row = parseInt(rows[i]);
            delete session.bgTokenizer.lines[row];
            delete session.bgTokenizer.states[row];
            session.bgTokenizer.fireUpdateEvent(row, row);
          }
        });
        return;
      }

      if (modeName === 'html' || modeName === 'xml') {
        if (mode.fragmentContext) {
          worker.call("setOptions", [{ context: this.fragmentContext }]);
        }

        worker.on("error", function (e) {
          session.setAnnotations(e.data);
        });
        worker.on("terminate", function () {
          session.clearAnnotations();
        });
        return;
      }

      if (mode.inlinePhp) {
        worker.call("setOptions", [{ inline: true }]);
      }

      if (modeName === 'javascript') {
        this.esversion = this.settings.esversion;
      }

      worker.on('annotate', (e) => {
        session.setAnnotations(e.data);
      });
      worker.on('terminate', () => {
        session.clearAnnotations();
      });

      return worker;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async loadScript(script) {
    const id = script.hashCode();
    if (document.getElementById(id)) return;
    const $script = document.createElement('script');
    $script.src = script;
    $script.id = id;
    document.head.appendChild($script);

    return new Promise((resolve, reject) => {
      $script.onload = resolve;
      $script.onerror = reject;
    });
  }

  get #commands() {
    return [
      {
        name: 'setJshintEsversion',
        description: "Set JShint esversion.",
        exec: async () => {
          const defaultValue = this.settings.esversion;
          const esversion = await acode.prompt('Enter esversion', defaultValue, 'number', {
            required: true,
          });
          this.settings.esversion = esversion;
          appSettings.update();
          this.esversion = esversion;
        }
      }
    ]
  }

  get settings() {
    const settings = appSettings.value[plugin.id];
    if (!settings) {
      appSettings.value[plugin.id] = { esversion: 11 };
      appSettings.update(false);
    }
    return appSettings.value[plugin.id];
  }

  get settingsList() {
    return [
      {
        key: 'esversion',
        text: 'JShint esversion',
        value: this.settings.esversion,
        prompt: 'Enter esversion',
        promptType: 'number',
      }
    ]
  }

  settingsCallback(key, value) {
    if (key === 'esversion') {
      this.esversion = value || 11;
      this.settings.esversion = value;
      appSettings.update();
    }
  }

  get esversion() {
    return this.settings?.esversion || 8;
  }

  set esversion(value) {
    const worker = editorManager.session?.$worker;
    if (!worker) return;
    worker.call("setOptions", [{ esversion: value }]);
  }

  static workerBlob(workerUrl) {
    const script = "importScripts('" + net.qualifyURL(workerUrl) + "');";
    try {
      return new Blob([script], { "type": "application/javascript" });
    } catch (e) { // Backwards-compatibility
      const BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;
      const blobBuilder = new BlobBuilder();
      blobBuilder.append(script);
      return blobBuilder.getBlob("application/javascript");
    }
  }

  static getWorkerClass(mode) {
    switch (mode) {
      case 'javascript':
        return 'JavaScriptWorker';

      case 'json':
        return 'JsonWorker';

      case 'xquery':
        return 'XQueryWorker';

      case 'php':
        return 'PhpWorker';

      case 'yaml':
        return 'YamlWorker';

      default:
        return 'Worker';
    }
  }
}

if (window.acode) {
  const acodePlugin = new AcodePlugin();
  acode.setPluginInit(plugin.id, (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
    if (!baseUrl.endsWith('/')) {
      baseUrl += '/';
    }
    acodePlugin.baseUrl = baseUrl;
    acodePlugin.init($page, cacheFile, cacheFileUrl);
  }, {
    list: acodePlugin.settingsList,
    cb: acodePlugin.settingsCallback.bind(acodePlugin),
  });
  acode.setPluginUnmount(plugin.id, () => {
    acodePlugin.destroy();
  });
}