/*! For license information please see main.js.LICENSE.txt */
!function(){"use strict";var t=JSON.parse('{"id":"acode.plugin.lint"}');function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(){r=function(){return t};var t={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=f(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var h={};function p(){}function d(){}function v(){}var y={};u(y,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(S([])));g&&g!==n&&o.call(g,a)&&(y=g);var w=v.prototype=p.prototype=Object.create(y);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,r){function n(i,a,c,s){var u=f(t[i],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==e(h)&&o.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):r.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,s)}))}s(u.arg)}var i;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:W}}function W(){return{value:void 0,done:!0}}return d.prototype=v,u(w,"constructor",v),u(v,"constructor",d),d.displayName=u(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},k(b.prototype),u(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(w),u(w,s,"Generator"),u(w,a,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=function(t,e,r){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)}(t,e);return function(t,e){return e.get?e.get.call(t):e.value}(t,r)}var s=ace.require("ace/worker/worker_client").WorkerClient,u=ace.require("ace/lib/net"),l=ace.require("ace/config"),f=new WeakMap,h=function(){function e(){var t,r,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n={get:p,set:void 0},function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t=this,r=f),r.set(t,n),a(this,"baseUrl",""),a(this,"settings",{esversion:11}),this.startWorker=this.startWorker.bind(this)}var n,h,d,v,y,m,g,w,k;return n=e,h=[{key:"init",value:(k=o(r().mark((function e(){var n,o,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=editorManager,o=n.editor,(i=appSettings.value[t.id])?this.settings=i:(appSettings.value[t.id]=this.settings,appSettings.update(!1)),o.renderer.setMargin(0,0,0,0),o.on("changeMode",this.startWorker),this.startWorker(),c(this,f).forEach((function(t){o.commands.addCommand(t)}));case 7:case"end":return e.stop()}}),e,this)}))),function(){return k.apply(this,arguments)})},{key:"destroy",value:(w=o(r().mark((function t(){var e,n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=editorManager,n=e.editor,c(this,f).forEach((function(t){n.commands.removeCommand(t)})),n.off("changeMode",this.startWorker);case 3:case"end":return t.stop()}}),t,this)}))),function(){return w.apply(this,arguments)})},{key:"startWorker",value:(g=o(r().mark((function t(){var e,n,o;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=editorManager,n=e.editor,o=n.session,t.next=5,this.initWorker(o,o.$mode);case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,this,[[0,7]])}))),function(){return g.apply(this,arguments)})},{key:"initWorker",value:(m=o(r().mark((function t(e,n){var o;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("string"==typeof n&&(n=l.$modes[n]),n){t.next=3;break}return t.abrupt("return");case 3:return o=n.$id.split("/").pop(),t.next=6,this.createWorker(o,e,n);case 6:case"end":return t.stop()}}),t,this)}))),function(t,e){return m.apply(this,arguments)})},{key:"createWorker",value:(y=o(r().mark((function t(n,o,i){var a,c,u,l,f;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,o.$worker&&(o.$worker.terminate(),o.$worker=null),a="workers/worker-".concat(n,".js"),c="ace/mode/".concat(n,"_worker"),u=acode.joinUrl(this.baseUrl,a),l=e.getWorkerCalss(n),(f=new s(["ace"],c,l,u)).attachToDocument(o.getDocument()),o.$worker=f,"xquery"!==n){t.next=14;break}return f.on("ok",(function(t){o.clearAnnotations()})),f.on("markers",(function(t){o.clearAnnotations(),i.addMarkers(t.data,o)})),f.on("highlight",(function(t){i.$tokenizer.tokens=t.data.tokens,i.$tokenizer.lines=o.getDocument().getAllLines();for(var e=Object.keys(i.$tokenizer.tokens),r=0;r<e.length;r++){var n=parseInt(e[r]);delete o.bgTokenizer.lines[n],delete o.bgTokenizer.states[n],o.bgTokenizer.fireUpdateEvent(n,n)}})),t.abrupt("return");case 14:if("html"!==n&&"xml"!==n){t.next=19;break}return i.fragmentContext&&f.call("setOptions",[{context:this.fragmentContext}]),f.on("error",(function(t){o.setAnnotations(t.data)})),f.on("terminate",(function(){o.clearAnnotations()})),t.abrupt("return");case 19:return i.inlinePhp&&f.call("setOptions",[{inline:!0}]),"javascript"===n&&(this.esversion=this.settings.esversion),f.on("annotate",(function(t){o.setAnnotations(t.data)})),f.on("terminate",(function(){o.clearAnnotations()})),t.abrupt("return",f);case 26:return t.prev=26,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",null);case 30:case"end":return t.stop()}}),t,this,[[0,26]])}))),function(t,e,r){return y.apply(this,arguments)})},{key:"loadScript",value:(v=o(r().mark((function t(e){var n,o;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.hashCode(),!document.getElementById(n)){t.next=3;break}return t.abrupt("return");case 3:return(o=document.createElement("script")).src=e,o.id=n,document.head.appendChild(o),t.abrupt("return",new Promise((function(t,e){o.onload=t,o.onerror=e})));case 8:case"end":return t.stop()}}),t)}))),function(t){return v.apply(this,arguments)})},{key:"esversion",get:function(){var t;return(null===(t=this.settings)||void 0===t?void 0:t.esversion)||8},set:function(t){var e,r=null===(e=editorManager.session)||void 0===e?void 0:e.$woker;r&&r.call("setOptions",[{esversion:t}])}}],d=[{key:"workerBlob",value:function(t){var e="importScripts('"+u.qualifyURL(t)+"');";try{return new Blob([e],{type:"application/javascript"})}catch(t){var r=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder);return r.append(e),r.getBlob("application/javascript")}}},{key:"getWorkerCalss",value:function(t){switch(t){case"javascript":return"JavaScriptWorker";case"json":return"JsonWorker";case"xquery":return"XQueryWorker";case"php":return"PhpWorker";case"yaml":return"YamlWorker";default:return"Worker"}}}],h&&i(n.prototype,h),d&&i(n,d),Object.defineProperty(n,"prototype",{writable:!1}),e}();function p(){var e,n=this;return[{name:"setJshintEsversion",description:"Set JShint esversion.",exec:(e=o(r().mark((function e(){var o,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.settings.esversion,e.next=3,acode.prompt("Enter esversion",o,"number",{required:!0});case 3:i=e.sent,appSettings.value[t.id].esversion=i,appSettings.update(),n.esversion=i;case 7:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})}]}if(window.acode){var d=new h;acode.setPluginInit(t.id,(function(t,e,r){var n=r.cacheFileUrl,o=r.cacheFile;t.endsWith("/")||(t+="/"),d.baseUrl=t,d.init(e,o,n)})),acode.setPluginUnmount(t.id,(function(){d.destroy()}))}}();