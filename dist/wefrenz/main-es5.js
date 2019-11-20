(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./libs/socket.io.js":
/*!***************************!*\
  !*** ./libs/socket.io.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Socket.IO v2.3.0
 * (c) 2014-2019 Guillermo Rauch
 * Released under the MIT License.
 */
!function(t,e){ true?module.exports=e():undefined}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t,e){"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{};var r,n=i(t),s=n.source,p=n.id,h=n.path,u=c[p]&&h in c[p].nsps,f=e.forceNew||e["force new connection"]||!1===e.multiplex||u;return f?r=a(s,e):(c[p]||(c[p]=a(s,e)),r=c[p]),n.query&&!e.query&&(e.query=n.query),r.socket(n.path,e)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(1),s=r(4),a=r(9);r(3)("socket.io-client");t.exports=e=n;var c=e.managers={};e.protocol=s.protocol,e.connect=n,e.Manager=r(9),e.Socket=r(33)},function(t,e,r){"use strict";function n(t,e){var r=t;e=e||"undefined"!=typeof location&&location,null==t&&(t=e.protocol+"//"+e.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?e.protocol+t:e.host+t),/^(https?|wss?):\/\//.test(t)||(t="undefined"!=typeof e?e.protocol+"//"+t:"https://"+t),r=o(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";var n=r.host.indexOf(":")!==-1,i=n?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+i+":"+r.port,r.href=r.protocol+"://"+i+(e&&e.port===r.port?"":":"+r.port),r}var o=r(2);r(3)("socket.io-client:url");t.exports=n},function(t,e){var r=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,n=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(t){var e=t,o=t.indexOf("["),i=t.indexOf("]");o!=-1&&i!=-1&&(t=t.substring(0,o)+t.substring(o,i).replace(/:/g,";")+t.substring(i,t.length));for(var s=r.exec(t||""),a={},c=14;c--;)a[n[c]]=s[c]||"";return o!=-1&&i!=-1&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a}},function(t,e){"use strict";t.exports=function(){return function(){}}},function(t,e,r){function n(){}function o(t){var r=""+t.type;if(e.BINARY_EVENT!==t.type&&e.BINARY_ACK!==t.type||(r+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(r+=t.nsp+","),null!=t.id&&(r+=t.id),null!=t.data){var n=i(t.data);if(n===!1)return m;r+=n}return r}function i(t){try{return JSON.stringify(t)}catch(t){return!1}}function s(t,e){function r(t){var r=l.deconstructPacket(t),n=o(r.packet),i=r.buffers;i.unshift(n),e(i)}l.removeBlobs(t,r)}function a(){this.reconstructor=null}function c(t){var r=0,n={type:Number(t.charAt(0))};if(null==e.types[n.type])return u("unknown packet type "+n.type);if(e.BINARY_EVENT===n.type||e.BINARY_ACK===n.type){for(var o="";"-"!==t.charAt(++r)&&(o+=t.charAt(r),r!=t.length););if(o!=Number(o)||"-"!==t.charAt(r))throw new Error("Illegal attachments");n.attachments=Number(o)}if("/"===t.charAt(r+1))for(n.nsp="";++r;){var i=t.charAt(r);if(","===i)break;if(n.nsp+=i,r===t.length)break}else n.nsp="/";var s=t.charAt(r+1);if(""!==s&&Number(s)==s){for(n.id="";++r;){var i=t.charAt(r);if(null==i||Number(i)!=i){--r;break}if(n.id+=t.charAt(r),r===t.length)break}n.id=Number(n.id)}if(t.charAt(++r)){var a=p(t.substr(r)),c=a!==!1&&(n.type===e.ERROR||d(a));if(!c)return u("invalid payload");n.data=a}return n}function p(t){try{return JSON.parse(t)}catch(t){return!1}}function h(t){this.reconPack=t,this.buffers=[]}function u(t){return{type:e.ERROR,data:"parser error: "+t}}var f=(r(3)("socket.io-parser"),r(5)),l=r(6),d=r(7),y=r(8);e.protocol=4,e.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=n,e.Decoder=a;var m=e.ERROR+'"encode error"';n.prototype.encode=function(t,r){if(e.BINARY_EVENT===t.type||e.BINARY_ACK===t.type)s(t,r);else{var n=o(t);r([n])}},f(a.prototype),a.prototype.add=function(t){var r;if("string"==typeof t)r=c(t),e.BINARY_EVENT===r.type||e.BINARY_ACK===r.type?(this.reconstructor=new h(r),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",r)):this.emit("decoded",r);else{if(!y(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,this.emit("decoded",r))}},a.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},h.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){var e=l.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},h.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(t,e,r){function n(t){if(t)return o(t)}function o(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var n,o=0;o<r.length;o++)if(n=r[o],n===e||n.fn===e){r.splice(o,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks["$"+t];if(r){r=r.slice(0);for(var n=0,o=r.length;n<o;++n)r[n].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,r){function n(t,e){if(!t)return t;if(s(t)){var r={_placeholder:!0,num:e.length};return e.push(t),r}if(i(t)){for(var o=new Array(t.length),a=0;a<t.length;a++)o[a]=n(t[a],e);return o}if("object"==typeof t&&!(t instanceof Date)){var o={};for(var c in t)o[c]=n(t[c],e);return o}return t}function o(t,e){if(!t)return t;if(t&&t._placeholder)return e[t.num];if(i(t))for(var r=0;r<t.length;r++)t[r]=o(t[r],e);else if("object"==typeof t)for(var n in t)t[n]=o(t[n],e);return t}var i=r(7),s=r(8),a=Object.prototype.toString,c="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===a.call(Blob),p="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===a.call(File);e.deconstructPacket=function(t){var e=[],r=t.data,o=t;return o.data=n(r,e),o.attachments=e.length,{packet:o,buffers:e}},e.reconstructPacket=function(t,e){return t.data=o(t.data,e),t.attachments=void 0,t},e.removeBlobs=function(t,e){function r(t,a,h){if(!t)return t;if(c&&t instanceof Blob||p&&t instanceof File){n++;var u=new FileReader;u.onload=function(){h?h[a]=this.result:o=this.result,--n||e(o)},u.readAsArrayBuffer(t)}else if(i(t))for(var f=0;f<t.length;f++)r(t[f],f,t);else if("object"==typeof t&&!s(t))for(var l in t)r(t[l],l,t)}var n=0,o=t;r(o),n||e(o)}},function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},function(t,e){function r(t){return n&&Buffer.isBuffer(t)||o&&(t instanceof ArrayBuffer||i(t))}t.exports=r;var n="function"==typeof Buffer&&"function"==typeof Buffer.isBuffer,o="function"==typeof ArrayBuffer,i=function(t){return"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer}},function(t,e,r){"use strict";function n(t,e){if(!(this instanceof n))return new n(t,e);t&&"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.nsps={},this.subs=[],this.opts=e,this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new f({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this.readyState="closed",this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[];var r=e.parser||c;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this.autoConnect=e.autoConnect!==!1,this.autoConnect&&this.open()}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(10),s=r(33),a=r(5),c=r(4),p=r(35),h=r(36),u=(r(3)("socket.io-client:manager"),r(32)),f=r(37),l=Object.prototype.hasOwnProperty;t.exports=n,n.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var t in this.nsps)l.call(this.nsps,t)&&this.nsps[t].emit.apply(this.nsps[t],arguments)},n.prototype.updateSocketIds=function(){for(var t in this.nsps)l.call(this.nsps,t)&&(this.nsps[t].id=this.generateId(t))},n.prototype.generateId=function(t){return("/"===t?"":t+"#")+this.engine.id},a(n.prototype),n.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},n.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},n.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&&this.backoff.setMin(t),this):this._reconnectionDelay},n.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&&this.backoff.setJitter(t),this):this._randomizationFactor},n.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&&this.backoff.setMax(t),this):this._reconnectionDelayMax},n.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},n.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},n.prototype.open=n.prototype.connect=function(t,e){if(~this.readyState.indexOf("open"))return this;this.engine=i(this.uri,this.opts);var r=this.engine,n=this;this.readyState="opening",this.skipReconnect=!1;var o=p(r,"open",function(){n.onopen(),t&&t()}),s=p(r,"error",function(e){if(n.cleanup(),n.readyState="closed",n.emitAll("connect_error",e),t){var r=new Error("Connection error");r.data=e,t(r)}else n.maybeReconnectOnOpen()});if(!1!==this._timeout){var a=this._timeout,c=setTimeout(function(){o.destroy(),r.close(),r.emit("error","timeout"),n.emitAll("connect_timeout",a)},a);this.subs.push({destroy:function(){clearTimeout(c)}})}return this.subs.push(o),this.subs.push(s),this},n.prototype.onopen=function(){this.cleanup(),this.readyState="open",this.emit("open");var t=this.engine;this.subs.push(p(t,"data",h(this,"ondata"))),this.subs.push(p(t,"ping",h(this,"onping"))),this.subs.push(p(t,"pong",h(this,"onpong"))),this.subs.push(p(t,"error",h(this,"onerror"))),this.subs.push(p(t,"close",h(this,"onclose"))),this.subs.push(p(this.decoder,"decoded",h(this,"ondecoded")))},n.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},n.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},n.prototype.ondata=function(t){this.decoder.add(t)},n.prototype.ondecoded=function(t){this.emit("packet",t)},n.prototype.onerror=function(t){this.emitAll("error",t)},n.prototype.socket=function(t,e){function r(){~u(o.connecting,n)||o.connecting.push(n)}var n=this.nsps[t];if(!n){n=new s(this,t,e),this.nsps[t]=n;var o=this;n.on("connecting",r),n.on("connect",function(){n.id=o.generateId(t)}),this.autoConnect&&r()}return n},n.prototype.destroy=function(t){var e=u(this.connecting,t);~e&&this.connecting.splice(e,1),this.connecting.length||this.close()},n.prototype.packet=function(t){var e=this;t.query&&0===t.type&&(t.nsp+="?"+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(r){for(var n=0;n<r.length;n++)e.engine.write(r[n],t.options);e.encoding=!1,e.processPacketQueue()}))},n.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},n.prototype.cleanup=function(){for(var t=this.subs.length,e=0;e<t;e++){var r=this.subs.shift();r.destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},n.prototype.close=n.prototype.disconnect=function(){this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},n.prototype.onclose=function(t){this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()},n.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var e=this.backoff.duration();this.reconnecting=!0;var r=setTimeout(function(){t.skipReconnect||(t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):t.onreconnect()}))},e);this.subs.push({destroy:function(){clearTimeout(r)}})}},n.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",t)}},function(t,e,r){t.exports=r(11),t.exports.parser=r(18)},function(t,e,r){function n(t,e){return this instanceof n?(e=e||{},t&&"object"==typeof t&&(e=t,t=null),t?(t=p(t),e.hostname=t.host,e.secure="https"===t.protocol||"wss"===t.protocol,e.port=t.port,t.query&&(e.query=t.query)):e.host&&(e.hostname=p(e.host).host),this.secure=null!=e.secure?e.secure:"undefined"!=typeof location&&"https:"===location.protocol,e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.agent=e.agent||!1,this.hostname=e.hostname||("undefined"!=typeof location?location.hostname:"localhost"),this.port=e.port||("undefined"!=typeof location&&location.port?location.port:this.secure?443:80),this.query=e.query||{},"string"==typeof this.query&&(this.query=h.decode(this.query)),this.upgrade=!1!==e.upgrade,this.path=(e.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!e.forceJSONP,this.jsonp=!1!==e.jsonp,this.forceBase64=!!e.forceBase64,this.enablesXDR=!!e.enablesXDR,this.withCredentials=!1!==e.withCredentials,this.timestampParam=e.timestampParam||"t",this.timestampRequests=e.timestampRequests,this.transports=e.transports||["polling","websocket"],this.transportOptions=e.transportOptions||{},this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=e.policyPort||843,this.rememberUpgrade=e.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=e.onlyBinaryUpgrades,this.perMessageDeflate=!1!==e.perMessageDeflate&&(e.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=e.pfx||null,this.key=e.key||null,this.passphrase=e.passphrase||null,this.cert=e.cert||null,this.ca=e.ca||null,this.ciphers=e.ciphers||null,this.rejectUnauthorized=void 0===e.rejectUnauthorized||e.rejectUnauthorized,this.forceNode=!!e.forceNode,this.isReactNative="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase(),("undefined"==typeof self||this.isReactNative)&&(e.extraHeaders&&Object.keys(e.extraHeaders).length>0&&(this.extraHeaders=e.extraHeaders),e.localAddress&&(this.localAddress=e.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,void this.open()):new n(t,e)}function o(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e}var i=r(12),s=r(5),a=(r(3)("engine.io-client:socket"),r(32)),c=r(18),p=r(2),h=r(26);t.exports=n,n.priorWebsocketSuccess=!1,s(n.prototype),n.protocol=c.protocol,n.Socket=n,n.Transport=r(17),n.transports=r(12),n.parser=r(18),n.prototype.createTransport=function(t){var e=o(this.query);e.EIO=c.protocol,e.transport=t;var r=this.transportOptions[t]||{};this.id&&(e.sid=this.id);var n=new i[t]({query:e,socket:this,agent:r.agent||this.agent,hostname:r.hostname||this.hostname,port:r.port||this.port,secure:r.secure||this.secure,path:r.path||this.path,forceJSONP:r.forceJSONP||this.forceJSONP,jsonp:r.jsonp||this.jsonp,forceBase64:r.forceBase64||this.forceBase64,enablesXDR:r.enablesXDR||this.enablesXDR,withCredentials:r.withCredentials||this.withCredentials,timestampRequests:r.timestampRequests||this.timestampRequests,timestampParam:r.timestampParam||this.timestampParam,policyPort:r.policyPort||this.policyPort,pfx:r.pfx||this.pfx,key:r.key||this.key,passphrase:r.passphrase||this.passphrase,cert:r.cert||this.cert,ca:r.ca||this.ca,ciphers:r.ciphers||this.ciphers,rejectUnauthorized:r.rejectUnauthorized||this.rejectUnauthorized,perMessageDeflate:r.perMessageDeflate||this.perMessageDeflate,extraHeaders:r.extraHeaders||this.extraHeaders,forceNode:r.forceNode||this.forceNode,localAddress:r.localAddress||this.localAddress,requestTimeout:r.requestTimeout||this.requestTimeout,protocols:r.protocols||void 0,isReactNative:this.isReactNative});return n},n.prototype.open=function(){var t;if(this.rememberUpgrade&&n.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)t="websocket";else{if(0===this.transports.length){var e=this;return void setTimeout(function(){e.emit("error","No transports available")},0)}t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(t){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},n.prototype.setTransport=function(t){var e=this;this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",function(){e.onDrain()}).on("packet",function(t){e.onPacket(t)}).on("error",function(t){e.onError(t)}).on("close",function(){e.onClose("transport close")})},n.prototype.probe=function(t){function e(){if(u.onlyBinaryUpgrades){var t=!this.supportsBinary&&u.transport.supportsBinary;h=h||t}h||(p.send([{type:"ping",data:"probe"}]),p.once("packet",function(t){if(!h)if("pong"===t.type&&"probe"===t.data){if(u.upgrading=!0,u.emit("upgrading",p),!p)return;n.priorWebsocketSuccess="websocket"===p.name,u.transport.pause(function(){h||"closed"!==u.readyState&&(c(),u.setTransport(p),p.send([{type:"upgrade"}]),u.emit("upgrade",p),p=null,u.upgrading=!1,u.flush())})}else{var e=new Error("probe error");e.transport=p.name,u.emit("upgradeError",e)}}))}function r(){h||(h=!0,c(),p.close(),p=null)}function o(t){var e=new Error("probe error: "+t);e.transport=p.name,r(),u.emit("upgradeError",e)}function i(){o("transport closed")}function s(){o("socket closed")}function a(t){p&&t.name!==p.name&&r()}function c(){p.removeListener("open",e),p.removeListener("error",o),p.removeListener("close",i),u.removeListener("close",s),u.removeListener("upgrading",a)}var p=this.createTransport(t,{probe:1}),h=!1,u=this;n.priorWebsocketSuccess=!1,p.once("open",e),p.once("error",o),p.once("close",i),this.once("close",s),this.once("upgrading",a),p.open()},n.prototype.onOpen=function(){if(this.readyState="open",n.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause)for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])},n.prototype.onPacket=function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data)}},n.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},n.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){"closed"!==e.readyState&&e.onClose("ping timeout")},t||e.pingInterval+e.pingTimeout)},n.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},n.prototype.ping=function(){var t=this;this.sendPacket("ping",function(){t.emit("ping")})},n.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},n.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},n.prototype.write=n.prototype.send=function(t,e,r){return this.sendPacket("message",t,e,r),this},n.prototype.sendPacket=function(t,e,r,n){if("function"==typeof e&&(n=e,e=void 0),"function"==typeof r&&(n=r,r=null),"closing"!==this.readyState&&"closed"!==this.readyState){r=r||{},r.compress=!1!==r.compress;var o={type:t,data:e,options:r};this.emit("packetCreate",o),this.writeBuffer.push(o),n&&this.once("flush",n),this.flush()}},n.prototype.close=function(){function t(){n.onClose("forced close"),n.transport.close()}function e(){n.removeListener("upgrade",e),n.removeListener("upgradeError",e),t()}function r(){n.once("upgrade",e),n.once("upgradeError",e)}if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var n=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?r():t()}):this.upgrading?r():t()}return this},n.prototype.onError=function(t){n.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},n.prototype.onClose=function(t,e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){var r=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),r.writeBuffer=[],r.prevBufferLen=0}},n.prototype.filterUpgrades=function(t){for(var e=[],r=0,n=t.length;r<n;r++)~a(this.transports,t[r])&&e.push(t[r]);return e}},function(t,e,r){function n(t){var e,r=!1,n=!1,a=!1!==t.jsonp;if("undefined"!=typeof location){var c="https:"===location.protocol,p=location.port;p||(p=c?443:80),r=t.hostname!==location.hostname||p!==t.port,n=t.secure!==c}if(t.xdomain=r,t.xscheme=n,e=new o(t),"open"in e&&!t.forceJSONP)return new i(t);if(!a)throw new Error("JSONP disabled");return new s(t)}var o=r(13),i=r(15),s=r(29),a=r(30);e.polling=n,e.websocket=a},function(t,e,r){var n=r(14);t.exports=function(t){var e=t.xdomain,r=t.xscheme,o=t.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!e||n))return new XMLHttpRequest}catch(t){}try{if("undefined"!=typeof XDomainRequest&&!r&&o)return new XDomainRequest}catch(t){}if(!e)try{return new(self[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(t){}}},function(t,e){try{t.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(e){t.exports=!1}},function(t,e,r){function n(){}function o(t){if(c.call(this,t),this.requestTimeout=t.requestTimeout,this.extraHeaders=t.extraHeaders,"undefined"!=typeof location){var e="https:"===location.protocol,r=location.port;r||(r=e?443:80),this.xd="undefined"!=typeof location&&t.hostname!==location.hostname||r!==t.port,this.xs=t.secure!==e}}function i(t){this.method=t.method||"GET",this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.withCredentials=t.withCredentials,this.requestTimeout=t.requestTimeout,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}function s(){for(var t in i.requests)i.requests.hasOwnProperty(t)&&i.requests[t].abort()}var a=r(13),c=r(16),p=r(5),h=r(27);r(3)("engine.io-client:polling-xhr");if(t.exports=o,t.exports.Request=i,h(o,c),o.prototype.supportsBinary=!0,o.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.withCredentials=this.withCredentials,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.requestTimeout=this.requestTimeout,t.extraHeaders=this.extraHeaders,new i(t)},o.prototype.doWrite=function(t,e){var r="string"!=typeof t&&void 0!==t,n=this.request({method:"POST",data:t,isBinary:r}),o=this;n.on("success",e),n.on("error",function(t){o.onError("xhr post error",t)}),this.sendXhr=n},o.prototype.doPoll=function(){var t=this.request(),e=this;t.on("data",function(t){e.onData(t)}),t.on("error",function(t){e.onError("xhr poll error",t)}),this.pollXhr=t},p(i.prototype),i.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var e=this.xhr=new a(t),r=this;try{e.open(this.method,this.uri,this.async);try{if(this.extraHeaders){e.setDisableHeaderCheck&&e.setDisableHeaderCheck(!0);for(var n in this.extraHeaders)this.extraHeaders.hasOwnProperty(n)&&e.setRequestHeader(n,this.extraHeaders[n])}}catch(t){}if("POST"===this.method)try{this.isBinary?e.setRequestHeader("Content-type","application/octet-stream"):e.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(t){}try{e.setRequestHeader("Accept","*/*")}catch(t){}"withCredentials"in e&&(e.withCredentials=this.withCredentials),this.requestTimeout&&(e.timeout=this.requestTimeout),this.hasXDR()?(e.onload=function(){r.onLoad()},e.onerror=function(){r.onError(e.responseText)}):e.onreadystatechange=function(){if(2===e.readyState)try{var t=e.getResponseHeader("Content-Type");(r.supportsBinary&&"application/octet-stream"===t||"application/octet-stream; charset=UTF-8"===t)&&(e.responseType="arraybuffer")}catch(t){}4===e.readyState&&(200===e.status||1223===e.status?r.onLoad():setTimeout(function(){r.onError("number"==typeof e.status?e.status:0)},0))},e.send(this.data)}catch(t){return void setTimeout(function(){r.onError(t)},0)}"undefined"!=typeof document&&(this.index=i.requestsCount++,i.requests[this.index]=this)},i.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},i.prototype.onData=function(t){this.emit("data",t),this.onSuccess()},i.prototype.onError=function(t){this.emit("error",t),this.cleanup(!0)},i.prototype.cleanup=function(t){if("undefined"!=typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=n:this.xhr.onreadystatechange=n,t)try{this.xhr.abort()}catch(t){}"undefined"!=typeof document&&delete i.requests[this.index],this.xhr=null}},i.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader("Content-Type")}catch(t){}t="application/octet-stream"===e||"application/octet-stream; charset=UTF-8"===e?this.xhr.response||this.xhr.responseText:this.xhr.responseText}catch(t){this.onError(t)}null!=t&&this.onData(t)},i.prototype.hasXDR=function(){return"undefined"!=typeof XDomainRequest&&!this.xs&&this.enablesXDR},i.prototype.abort=function(){this.cleanup()},i.requestsCount=0,i.requests={},"undefined"!=typeof document)if("function"==typeof attachEvent)attachEvent("onunload",s);else if("function"==typeof addEventListener){var u="onpagehide"in self?"pagehide":"unload";addEventListener(u,s,!1)}},function(t,e,r){function n(t){var e=t&&t.forceBase64;p&&!e||(this.supportsBinary=!1),o.call(this,t)}var o=r(17),i=r(26),s=r(18),a=r(27),c=r(28);r(3)("engine.io-client:polling");t.exports=n;var p=function(){var t=r(13),e=new t({xdomain:!1});return null!=e.responseType}();a(n,o),n.prototype.name="polling",n.prototype.doOpen=function(){this.poll()},n.prototype.pause=function(t){function e(){r.readyState="paused",t()}var r=this;if(this.readyState="pausing",this.polling||!this.writable){var n=0;this.polling&&(n++,this.once("pollComplete",function(){--n||e()})),this.writable||(n++,this.once("drain",function(){--n||e()}))}else e()},n.prototype.poll=function(){this.polling=!0,this.doPoll(),this.emit("poll")},n.prototype.onData=function(t){var e=this,r=function(t,r,n){return"opening"===e.readyState&&e.onOpen(),"close"===t.type?(e.onClose(),!1):void e.onPacket(t)};s.decodePayload(t,this.socket.binaryType,r),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState&&this.poll())},n.prototype.doClose=function(){function t(){e.write([{type:"close"}])}var e=this;"open"===this.readyState?t():this.once("open",t)},n.prototype.write=function(t){var e=this;this.writable=!1;var r=function(){e.writable=!0,e.emit("drain")};s.encodePayload(t,this.supportsBinary,function(t){e.doWrite(t,r)})},n.prototype.uri=function(){var t=this.query||{},e=this.secure?"https":"http",r="";!1!==this.timestampRequests&&(t[this.timestampParam]=c()),this.supportsBinary||t.sid||(t.b64=1),t=i.encode(t),this.port&&("https"===e&&443!==Number(this.port)||"http"===e&&80!==Number(this.port))&&(r=":"+this.port),t.length&&(t="?"+t);var n=this.hostname.indexOf(":")!==-1;return e+"://"+(n?"["+this.hostname+"]":this.hostname)+r+this.path+t}},function(t,e,r){function n(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.withCredentials=t.withCredentials,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.isReactNative=t.isReactNative,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}var o=r(18),i=r(5);t.exports=n,i(n.prototype),n.prototype.onError=function(t,e){var r=new Error(t);return r.type="TransportError",r.description=e,this.emit("error",r),this},n.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},n.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},n.prototype.send=function(t){if("open"!==this.readyState)throw new Error("Transport not open");
this.write(t)},n.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},n.prototype.onData=function(t){var e=o.decodePacket(t,this.socket.binaryType);this.onPacket(e)},n.prototype.onPacket=function(t){this.emit("packet",t)},n.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},function(t,e,r){function n(t,r){var n="b"+e.packets[t.type]+t.data.data;return r(n)}function o(t,r,n){if(!r)return e.encodeBase64Packet(t,n);var o=t.data,i=new Uint8Array(o),s=new Uint8Array(1+o.byteLength);s[0]=v[t.type];for(var a=0;a<i.length;a++)s[a+1]=i[a];return n(s.buffer)}function i(t,r,n){if(!r)return e.encodeBase64Packet(t,n);var o=new FileReader;return o.onload=function(){e.encodePacket({type:t.type,data:o.result},r,!0,n)},o.readAsArrayBuffer(t.data)}function s(t,r,n){if(!r)return e.encodeBase64Packet(t,n);if(g)return i(t,r,n);var o=new Uint8Array(1);o[0]=v[t.type];var s=new w([o.buffer,t.data]);return n(s)}function a(t){try{t=d.decode(t,{strict:!1})}catch(t){return!1}return t}function c(t,e,r){for(var n=new Array(t.length),o=l(t.length,r),i=function(t,r,o){e(r,function(e,r){n[t]=r,o(e,n)})},s=0;s<t.length;s++)i(s,t[s],o)}var p,h=r(19),u=r(20),f=r(21),l=r(22),d=r(23);"undefined"!=typeof ArrayBuffer&&(p=r(24));var y="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),m="undefined"!=typeof navigator&&/PhantomJS/i.test(navigator.userAgent),g=y||m;e.protocol=3;var v=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},b=h(v),k={type:"error",data:"parser error"},w=r(25);e.encodePacket=function(t,e,r,i){"function"==typeof e&&(i=e,e=!1),"function"==typeof r&&(i=r,r=null);var a=void 0===t.data?void 0:t.data.buffer||t.data;if("undefined"!=typeof ArrayBuffer&&a instanceof ArrayBuffer)return o(t,e,i);if("undefined"!=typeof w&&a instanceof w)return s(t,e,i);if(a&&a.base64)return n(t,i);var c=v[t.type];return void 0!==t.data&&(c+=r?d.encode(String(t.data),{strict:!1}):String(t.data)),i(""+c)},e.encodeBase64Packet=function(t,r){var n="b"+e.packets[t.type];if("undefined"!=typeof w&&t.data instanceof w){var o=new FileReader;return o.onload=function(){var t=o.result.split(",")[1];r(n+t)},o.readAsDataURL(t.data)}var i;try{i=String.fromCharCode.apply(null,new Uint8Array(t.data))}catch(e){for(var s=new Uint8Array(t.data),a=new Array(s.length),c=0;c<s.length;c++)a[c]=s[c];i=String.fromCharCode.apply(null,a)}return n+=btoa(i),r(n)},e.decodePacket=function(t,r,n){if(void 0===t)return k;if("string"==typeof t){if("b"===t.charAt(0))return e.decodeBase64Packet(t.substr(1),r);if(n&&(t=a(t),t===!1))return k;var o=t.charAt(0);return Number(o)==o&&b[o]?t.length>1?{type:b[o],data:t.substring(1)}:{type:b[o]}:k}var i=new Uint8Array(t),o=i[0],s=f(t,1);return w&&"blob"===r&&(s=new w([s])),{type:b[o],data:s}},e.decodeBase64Packet=function(t,e){var r=b[t.charAt(0)];if(!p)return{type:r,data:{base64:!0,data:t.substr(1)}};var n=p.decode(t.substr(1));return"blob"===e&&w&&(n=new w([n])),{type:r,data:n}},e.encodePayload=function(t,r,n){function o(t){return t.length+":"+t}function i(t,n){e.encodePacket(t,!!s&&r,!1,function(t){n(null,o(t))})}"function"==typeof r&&(n=r,r=null);var s=u(t);return r&&s?w&&!g?e.encodePayloadAsBlob(t,n):e.encodePayloadAsArrayBuffer(t,n):t.length?void c(t,i,function(t,e){return n(e.join(""))}):n("0:")},e.decodePayload=function(t,r,n){if("string"!=typeof t)return e.decodePayloadAsBinary(t,r,n);"function"==typeof r&&(n=r,r=null);var o;if(""===t)return n(k,0,1);for(var i,s,a="",c=0,p=t.length;c<p;c++){var h=t.charAt(c);if(":"===h){if(""===a||a!=(i=Number(a)))return n(k,0,1);if(s=t.substr(c+1,i),a!=s.length)return n(k,0,1);if(s.length){if(o=e.decodePacket(s,r,!1),k.type===o.type&&k.data===o.data)return n(k,0,1);var u=n(o,c+i,p);if(!1===u)return}c+=i,a=""}else a+=h}return""!==a?n(k,0,1):void 0},e.encodePayloadAsArrayBuffer=function(t,r){function n(t,r){e.encodePacket(t,!0,!0,function(t){return r(null,t)})}return t.length?void c(t,n,function(t,e){var n=e.reduce(function(t,e){var r;return r="string"==typeof e?e.length:e.byteLength,t+r.toString().length+r+2},0),o=new Uint8Array(n),i=0;return e.forEach(function(t){var e="string"==typeof t,r=t;if(e){for(var n=new Uint8Array(t.length),s=0;s<t.length;s++)n[s]=t.charCodeAt(s);r=n.buffer}e?o[i++]=0:o[i++]=1;for(var a=r.byteLength.toString(),s=0;s<a.length;s++)o[i++]=parseInt(a[s]);o[i++]=255;for(var n=new Uint8Array(r),s=0;s<n.length;s++)o[i++]=n[s]}),r(o.buffer)}):r(new ArrayBuffer(0))},e.encodePayloadAsBlob=function(t,r){function n(t,r){e.encodePacket(t,!0,!0,function(t){var e=new Uint8Array(1);if(e[0]=1,"string"==typeof t){for(var n=new Uint8Array(t.length),o=0;o<t.length;o++)n[o]=t.charCodeAt(o);t=n.buffer,e[0]=0}for(var i=t instanceof ArrayBuffer?t.byteLength:t.size,s=i.toString(),a=new Uint8Array(s.length+1),o=0;o<s.length;o++)a[o]=parseInt(s[o]);if(a[s.length]=255,w){var c=new w([e.buffer,a.buffer,t]);r(null,c)}})}c(t,n,function(t,e){return r(new w(e))})},e.decodePayloadAsBinary=function(t,r,n){"function"==typeof r&&(n=r,r=null);for(var o=t,i=[];o.byteLength>0;){for(var s=new Uint8Array(o),a=0===s[0],c="",p=1;255!==s[p];p++){if(c.length>310)return n(k,0,1);c+=s[p]}o=f(o,2+c.length),c=parseInt(c);var h=f(o,0,c);if(a)try{h=String.fromCharCode.apply(null,new Uint8Array(h))}catch(t){var u=new Uint8Array(h);h="";for(var p=0;p<u.length;p++)h+=String.fromCharCode(u[p])}i.push(h),o=f(o,c)}var l=i.length;i.forEach(function(t,o){n(e.decodePacket(t,r,!0),o,l)})}},function(t,e){t.exports=Object.keys||function(t){var e=[],r=Object.prototype.hasOwnProperty;for(var n in t)r.call(t,n)&&e.push(n);return e}},function(t,e,r){function n(t){if(!t||"object"!=typeof t)return!1;if(o(t)){for(var e=0,r=t.length;e<r;e++)if(n(t[e]))return!0;return!1}if("function"==typeof Buffer&&Buffer.isBuffer&&Buffer.isBuffer(t)||"function"==typeof ArrayBuffer&&t instanceof ArrayBuffer||s&&t instanceof Blob||a&&t instanceof File)return!0;if(t.toJSON&&"function"==typeof t.toJSON&&1===arguments.length)return n(t.toJSON(),!0);for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&n(t[i]))return!0;return!1}var o=r(7),i=Object.prototype.toString,s="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===i.call(Blob),a="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===i.call(File);t.exports=n},function(t,e){t.exports=function(t,e,r){var n=t.byteLength;if(e=e||0,r=r||n,t.slice)return t.slice(e,r);if(e<0&&(e+=n),r<0&&(r+=n),r>n&&(r=n),e>=n||e>=r||0===n)return new ArrayBuffer(0);for(var o=new Uint8Array(t),i=new Uint8Array(r-e),s=e,a=0;s<r;s++,a++)i[a]=o[s];return i.buffer}},function(t,e){function r(t,e,r){function o(t,n){if(o.count<=0)throw new Error("after called too many times");--o.count,t?(i=!0,e(t),e=r):0!==o.count||i||e(null,n)}var i=!1;return r=r||n,o.count=t,0===t?e():o}function n(){}t.exports=r},function(t,e){function r(t){for(var e,r,n=[],o=0,i=t.length;o<i;)e=t.charCodeAt(o++),e>=55296&&e<=56319&&o<i?(r=t.charCodeAt(o++),56320==(64512&r)?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),o--)):n.push(e);return n}function n(t){for(var e,r=t.length,n=-1,o="";++n<r;)e=t[n],e>65535&&(e-=65536,o+=d(e>>>10&1023|55296),e=56320|1023&e),o+=d(e);return o}function o(t,e){if(t>=55296&&t<=57343){if(e)throw Error("Lone surrogate U+"+t.toString(16).toUpperCase()+" is not a scalar value");return!1}return!0}function i(t,e){return d(t>>e&63|128)}function s(t,e){if(0==(4294967168&t))return d(t);var r="";return 0==(4294965248&t)?r=d(t>>6&31|192):0==(4294901760&t)?(o(t,e)||(t=65533),r=d(t>>12&15|224),r+=i(t,6)):0==(4292870144&t)&&(r=d(t>>18&7|240),r+=i(t,12),r+=i(t,6)),r+=d(63&t|128)}function a(t,e){e=e||{};for(var n,o=!1!==e.strict,i=r(t),a=i.length,c=-1,p="";++c<a;)n=i[c],p+=s(n,o);return p}function c(){if(l>=f)throw Error("Invalid byte index");var t=255&u[l];if(l++,128==(192&t))return 63&t;throw Error("Invalid continuation byte")}function p(t){var e,r,n,i,s;if(l>f)throw Error("Invalid byte index");if(l==f)return!1;if(e=255&u[l],l++,0==(128&e))return e;if(192==(224&e)){if(r=c(),s=(31&e)<<6|r,s>=128)return s;throw Error("Invalid continuation byte")}if(224==(240&e)){if(r=c(),n=c(),s=(15&e)<<12|r<<6|n,s>=2048)return o(s,t)?s:65533;throw Error("Invalid continuation byte")}if(240==(248&e)&&(r=c(),n=c(),i=c(),s=(7&e)<<18|r<<12|n<<6|i,s>=65536&&s<=1114111))return s;throw Error("Invalid UTF-8 detected")}function h(t,e){e=e||{};var o=!1!==e.strict;u=r(t),f=u.length,l=0;for(var i,s=[];(i=p(o))!==!1;)s.push(i);return n(s)}/*! https://mths.be/utf8js v2.1.2 by @mathias */
var u,f,l,d=String.fromCharCode;t.exports={version:"2.1.2",encode:a,decode:h}},function(t,e){!function(){"use strict";for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=new Uint8Array(256),n=0;n<t.length;n++)r[t.charCodeAt(n)]=n;e.encode=function(e){var r,n=new Uint8Array(e),o=n.length,i="";for(r=0;r<o;r+=3)i+=t[n[r]>>2],i+=t[(3&n[r])<<4|n[r+1]>>4],i+=t[(15&n[r+1])<<2|n[r+2]>>6],i+=t[63&n[r+2]];return o%3===2?i=i.substring(0,i.length-1)+"=":o%3===1&&(i=i.substring(0,i.length-2)+"=="),i},e.decode=function(t){var e,n,o,i,s,a=.75*t.length,c=t.length,p=0;"="===t[t.length-1]&&(a--,"="===t[t.length-2]&&a--);var h=new ArrayBuffer(a),u=new Uint8Array(h);for(e=0;e<c;e+=4)n=r[t.charCodeAt(e)],o=r[t.charCodeAt(e+1)],i=r[t.charCodeAt(e+2)],s=r[t.charCodeAt(e+3)],u[p++]=n<<2|o>>4,u[p++]=(15&o)<<4|i>>2,u[p++]=(3&i)<<6|63&s;return h}}()},function(t,e){function r(t){return t.map(function(t){if(t.buffer instanceof ArrayBuffer){var e=t.buffer;if(t.byteLength!==e.byteLength){var r=new Uint8Array(t.byteLength);r.set(new Uint8Array(e,t.byteOffset,t.byteLength)),e=r.buffer}return e}return t})}function n(t,e){e=e||{};var n=new i;return r(t).forEach(function(t){n.append(t)}),e.type?n.getBlob(e.type):n.getBlob()}function o(t,e){return new Blob(r(t),e||{})}var i="undefined"!=typeof i?i:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder&&MozBlobBuilder,s=function(){try{var t=new Blob(["hi"]);return 2===t.size}catch(t){return!1}}(),a=s&&function(){try{var t=new Blob([new Uint8Array([1,2])]);return 2===t.size}catch(t){return!1}}(),c=i&&i.prototype.append&&i.prototype.getBlob;"undefined"!=typeof Blob&&(n.prototype=Blob.prototype,o.prototype=Blob.prototype),t.exports=function(){return s?a?Blob:o:c?n:void 0}()},function(t,e){e.encode=function(t){var e="";for(var r in t)t.hasOwnProperty(r)&&(e.length&&(e+="&"),e+=encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e},e.decode=function(t){for(var e={},r=t.split("&"),n=0,o=r.length;n<o;n++){var i=r[n].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},function(t,e){t.exports=function(t,e){var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t,e){"use strict";function r(t){var e="";do e=s[t%a]+e,t=Math.floor(t/a);while(t>0);return e}function n(t){var e=0;for(h=0;h<t.length;h++)e=e*a+c[t.charAt(h)];return e}function o(){var t=r(+new Date);return t!==i?(p=0,i=t):t+"."+r(p++)}for(var i,s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),a=64,c={},p=0,h=0;h<a;h++)c[s[h]]=h;o.encode=r,o.decode=n,t.exports=o},function(t,e,r){(function(e){function n(){}function o(){return"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof e?e:{}}function i(t){if(s.call(this,t),this.query=this.query||{},!c){var e=o();c=e.___eio=e.___eio||[]}this.index=c.length;var r=this;c.push(function(t){r.onData(t)}),this.query.j=this.index,"function"==typeof addEventListener&&addEventListener("beforeunload",function(){r.script&&(r.script.onerror=n)},!1)}var s=r(16),a=r(27);t.exports=i;var c,p=/\n/g,h=/\\n/g;a(i,s),i.prototype.supportsBinary=!1,i.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),s.prototype.doClose.call(this)},i.prototype.doPoll=function(){var t=this,e=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)};var r=document.getElementsByTagName("script")[0];r?r.parentNode.insertBefore(e,r):(document.head||document.body).appendChild(e),this.script=e;var n="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);n&&setTimeout(function(){var t=document.createElement("iframe");document.body.appendChild(t),document.body.removeChild(t)},100)},i.prototype.doWrite=function(t,e){function r(){n(),e()}function n(){if(o.iframe)try{o.form.removeChild(o.iframe)}catch(t){o.onError("jsonp polling iframe removal error",t)}try{var t='<iframe src="javascript:0" name="'+o.iframeId+'">';i=document.createElement(t)}catch(t){i=document.createElement("iframe"),i.name=o.iframeId,i.src="javascript:0"}i.id=o.iframeId,o.form.appendChild(i),o.iframe=i}var o=this;if(!this.form){var i,s=document.createElement("form"),a=document.createElement("textarea"),c=this.iframeId="eio_iframe_"+this.index;s.className="socketio",s.style.position="absolute",s.style.top="-1000px",s.style.left="-1000px",s.target=c,s.method="POST",s.setAttribute("accept-charset","utf-8"),a.name="d",s.appendChild(a),document.body.appendChild(s),this.form=s,this.area=a}this.form.action=this.uri(),n(),t=t.replace(h,"\\\n"),this.area.value=t.replace(p,"\\n");try{this.form.submit()}catch(t){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"===o.iframe.readyState&&r()}:this.iframe.onload=r}}).call(e,function(){return this}())},function(t,e,r){function n(t){var e=t&&t.forceBase64;e&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,this.usingBrowserWebSocket=o&&!t.forceNode,this.protocols=t.protocols,this.usingBrowserWebSocket||(u=i),s.call(this,t)}var o,i,s=r(17),a=r(18),c=r(26),p=r(27),h=r(28);r(3)("engine.io-client:websocket");if("undefined"!=typeof WebSocket?o=WebSocket:"undefined"!=typeof self&&(o=self.WebSocket||self.MozWebSocket),"undefined"==typeof window)try{i=r(31)}catch(t){}var u=o||i;t.exports=n,p(n,s),n.prototype.name="websocket",n.prototype.supportsBinary=!0,n.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=this.protocols,r={agent:this.agent,perMessageDeflate:this.perMessageDeflate};r.pfx=this.pfx,r.key=this.key,r.passphrase=this.passphrase,r.cert=this.cert,r.ca=this.ca,r.ciphers=this.ciphers,r.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(r.headers=this.extraHeaders),this.localAddress&&(r.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket&&!this.isReactNative?e?new u(t,e):new u(t):new u(t,e,r)}catch(t){return this.emit("error",t)}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},n.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError("websocket error",e)}},n.prototype.write=function(t){function e(){r.emit("flush"),setTimeout(function(){r.writable=!0,r.emit("drain")},0)}var r=this;this.writable=!1;for(var n=t.length,o=0,i=n;o<i;o++)!function(t){a.encodePacket(t,r.supportsBinary,function(o){if(!r.usingBrowserWebSocket){var i={};if(t.options&&(i.compress=t.options.compress),r.perMessageDeflate){var s="string"==typeof o?Buffer.byteLength(o):o.length;s<r.perMessageDeflate.threshold&&(i.compress=!1)}}try{r.usingBrowserWebSocket?r.ws.send(o):r.ws.send(o,i)}catch(t){}--n||e()})}(t[o])},n.prototype.onClose=function(){s.prototype.onClose.call(this)},n.prototype.doClose=function(){"undefined"!=typeof this.ws&&this.ws.close()},n.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",r="";this.port&&("wss"===e&&443!==Number(this.port)||"ws"===e&&80!==Number(this.port))&&(r=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=h()),this.supportsBinary||(t.b64=1),t=c.encode(t),t.length&&(t="?"+t);var n=this.hostname.indexOf(":")!==-1;return e+"://"+(n?"["+this.hostname+"]":this.hostname)+r+this.path+t},n.prototype.check=function(){return!(!u||"__initialize"in u&&this.name===n.prototype.name)}},function(t,e){},function(t,e){var r=[].indexOf;t.exports=function(t,e){if(r)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1}},function(t,e,r){"use strict";function n(t,e,r){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,this.flags={},r&&r.query&&(this.query=r.query),this.io.autoConnect&&this.open()}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(4),s=r(5),a=r(34),c=r(35),p=r(36),h=(r(3)("socket.io-client:socket"),r(26)),u=r(20);t.exports=e=n;var f={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},l=s.prototype.emit;s(n.prototype),n.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[c(t,"open",p(this,"onopen")),c(t,"packet",p(this,"onpacket")),c(t,"close",p(this,"onclose"))]}},n.prototype.open=n.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting"),this)},n.prototype.send=function(){var t=a(arguments);return t.unshift("message"),this.emit.apply(this,t),this},n.prototype.emit=function(t){if(f.hasOwnProperty(t))return l.apply(this,arguments),this;var e=a(arguments),r={type:(void 0!==this.flags.binary?this.flags.binary:u(e))?i.BINARY_EVENT:i.EVENT,data:e};return r.options={},r.options.compress=!this.flags||!1!==this.flags.compress,"function"==typeof e[e.length-1]&&(this.acks[this.ids]=e.pop(),r.id=this.ids++),this.connected?this.packet(r):this.sendBuffer.push(r),this.flags={},this},n.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},n.prototype.onopen=function(){if("/"!==this.nsp)if(this.query){var t="object"===o(this.query)?h.encode(this.query):this.query;this.packet({type:i.CONNECT,query:t})}else this.packet({type:i.CONNECT})},n.prototype.onclose=function(t){this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",t)},n.prototype.onpacket=function(t){var e=t.nsp===this.nsp,r=t.type===i.ERROR&&"/"===t.nsp;if(e||r)switch(t.type){case i.CONNECT:this.onconnect();break;case i.EVENT:this.onevent(t);break;case i.BINARY_EVENT:this.onevent(t);break;case i.ACK:this.onack(t);break;case i.BINARY_ACK:this.onack(t);break;case i.DISCONNECT:this.ondisconnect();break;case i.ERROR:this.emit("error",t.data)}},n.prototype.onevent=function(t){var e=t.data||[];null!=t.id&&e.push(this.ack(t.id)),this.connected?l.apply(this,e):this.receiveBuffer.push(e)},n.prototype.ack=function(t){var e=this,r=!1;return function(){if(!r){r=!0;var n=a(arguments);e.packet({type:u(n)?i.BINARY_ACK:i.ACK,id:t,data:n})}}},n.prototype.onack=function(t){var e=this.acks[t.id];"function"==typeof e&&(e.apply(this,t.data),delete this.acks[t.id])},n.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},n.prototype.emitBuffered=function(){var t;for(t=0;t<this.receiveBuffer.length;t++)l.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t<this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},n.prototype.ondisconnect=function(){this.destroy(),this.onclose("io server disconnect")},n.prototype.destroy=function(){if(this.subs){for(var t=0;t<this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},n.prototype.close=n.prototype.disconnect=function(){return this.connected&&this.packet({type:i.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},n.prototype.compress=function(t){return this.flags.compress=t,this},n.prototype.binary=function(t){return this.flags.binary=t,this}},function(t,e){function r(t,e){var r=[];e=e||0;for(var n=e||0;n<t.length;n++)r[n-e]=t[n];return r}t.exports=r},function(t,e){"use strict";function r(t,e,r){return t.on(e,r),{destroy:function(){t.removeListener(e,r)}}}t.exports=r},function(t,e){var r=[].slice;t.exports=function(t,e){if("string"==typeof e&&(e=t[e]),"function"!=typeof e)throw new Error("bind() requires a function");var n=r.call(arguments,2);return function(){return e.apply(t,n.concat(r.call(arguments)))}}},function(t,e){function r(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}t.exports=r,r.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),r=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-r:t+r}return 0|Math.min(t,this.max)},r.prototype.reset=function(){this.attempts=0},r.prototype.setMin=function(t){this.ms=t},r.prototype.setMax=function(t){this.max=t},r.prototype.setJitter=function(t){this.jitter=t}}])});
//# sourceMappingURL=socket.io.slim.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ad/ad.component.html":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ad/ad.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"ad-panel\">\n<img src=\"assets/images/add.jpg\"/>\n<div class=\"text-center blue-fonts cursor-pointer\">Create your ad.</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/add-item/add-item.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-item/add-item.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-item-content\">\n\t<div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 pull-left\">\n\t\t<div *ngIf=\"isItemImg;then itemImg else mockImg\"></div>\n    \t<ng-template #itemImg>\n\t    \t<div class=\"preview-profile-pic\">\n\t    \t\t<!--<div *ngIf=\"isImageCropper;then imageCropper\"></div>\n\t    \t\t<ng-template #imageCropper>-->\n\t\t\t\t    <app-image-cropper [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"true\" [resizeToWidth]=\"150\" format=\"jpeg\" \n\t\t\t\t    (imageCropped)=\"imageCropped($event)\"></app-image-cropper>\n\t\t\t   <!-- </ng-template>-->\n\t    \t</div>\n\t    \t<div class=\"form-group row justify-content-center align-items-center\">\n\t\t\t\t<span class=\"blue-fonts link-btn cursor-pointer\" (click)=\"useOriginal($event)\">Use Original</span>\n\t\t\t</div>\n\t    \t<img class=\"cropped-item-img\" *ngIf=\"croppedImage\" [src]=\"croppedImage\" (load)=\"computeCroppedImage()\"/>\n\n\t\t</ng-template>\n\t\t<ng-template #mockImg>\n\t\t\t<div class=\"mock-img\">\n\t\t\t\t<i class=\"fa fa-picture-o fa-5x\"></i>\n\t\t\t</div>\n\t\t</ng-template>\n\t</div>\n\t<div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 pull-left\">\n\t\t<form [formGroup]=\"addItemForm\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"What are you selling?\" formControlName=\"itemName\" id=\"itemName\">\n\t\t\t\t<app-control-messages [control]=\"addItemForm.controls.itemName\"></app-control-messages>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<div class=\"colw100 blue-fonts\">Select Category.</div>\n\t\t\t\t<input type=\"radio\" formControlName=\"category\" [(ngModel)]=\"category.options\" value=\"Women\" checked \n\t\t\t\t(click)=\"category.options='Women'\">\n\t\t\t\t<span class=\"blue-fonts\">Women</span>\n\t\t\t\t<input type=\"radio\" formControlName=\"category\" [(ngModel)]=\"category.options\" value=\"Men\"\n\t\t\t\t(click)=\"category.options='Men'\">\n\t\t\t\t<span class=\"blue-fonts\">Men</span>\n\t\t\t\t<input type=\"radio\" formControlName=\"category\" [(ngModel)]=\"category.options\" value=\"Kids\"\n\t\t\t\t(click)=\"category.options='Kids'\">\n\t\t\t\t<span class=\"blue-fonts\">Kids</span>\n\t\t\t\t<!--<app-control-messages [control]=\"addItemForm.controls.for\"></app-control-messages>-->\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Price in rupees.\" formControlName=\"price\" (keypress)=\"keyPressOnContact($event)\">\n\t\t\t\t<app-control-messages [control]=\"addItemForm.controls.price\"></app-control-messages>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Location\" formControlName=\"location\">\n\t\t\t\t<app-control-messages [control]=\"addItemForm.controls.location\"></app-control-messages>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Contact No\" formControlName=\"contactNo\" (keypress)=\"keyPressOnContact($event)\" minlength=10 maxlength=10>\n\t\t\t\t<app-control-messages [control]=\"addItemForm.controls.contactNo\"></app-control-messages>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<div class=\"file-input-container\">\n\t\t\t\t\t<input type=\"file\" class=\"file-input\" name=\"uploadfile\" #fileInput (change)=\"fileChangeEvent($event)\" formControlName=\"itemPic\"/>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"upload-icon blue-fonts\"><span>Upload Image.&nbsp;</span><i class=\"fa fa-upload blue-fonts hand-cursor\" aria-hidden=\"true\" \n\t\t\t\t(click)=\"fileInput.value = ''; fileInput.click()\"></i></div>\n\t\t\t\t<app-control-messages [control]=\"addItemForm.controls.itemPic\"></app-control-messages>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"email\" class=\"form-control\" aria-describedby=\"emailHelp\" placeholder=\"Email\" formControlName=\"email\" id=\"email\">\n\t\t\t\t<app-control-messages [control]=\"addItemForm.controls.email\"></app-control-messages>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<textarea #desc class=\"form-control no-resize no-bg no-brder-radius blue-fonts blue-border\" rows=\"5\" cols=\"30\" \t\tplaceholder=\"Add Description...\" id=\"postDesc\" formControlName=\"itemDesc\" [(ngModel)]=\"itemDesc\">\n\t\t\t\t</textarea>\n\t\t\t\t<app-control-messages [control]=\"addItemForm.controls.itemDesc\"></app-control-messages>\n\t\t\t</div>\n\t\t\t<div class=\"form-group row justify-content-center align-items-center no-margin\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"addItem($event)\">\n\t\t\t\t\t<span>Add</span>\n\t\t\t\t\t<i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div [ngClass]=\"{'error-message': isError, 'status-message': isStatus}\">\n\t\t\t\t<div class=\"server-msg text-center\">{{serverMessage}}</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/address-info/address-info.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/address-info/address-info.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"payment-info\">\n\t<div class=\"address-info colw100 inline-block\">\n\t\t<div class=\"billing-info col-xs-12 col-sm-6 col-md-6 col-lg-6 pull-left\">\n\t\t\t<h6 class=\"blue-fonts\">Billing Address</h6>\n\t\t\t<form [formGroup]=\"billingForm\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<select [(ngModel)]=\"billingTitleOption\" class=\"form-control\" placeholder=\"Please Select\" formControlName=\"bilingTitle\">\n\t\t\t        \t<option *ngFor=\"let o of titleOptions\">\n\t\t\t          \t\t{{o.name}}\n\t\t\t        \t</option>\n\t\t\t      \t</select>\n\t\t\t      \t<app-control-messages [control]=\"billingForm.controls.bilingTitle\"></app-control-messages>\n\t\t\t    </div>\n\t\t\t    <div class=\"form-group\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"First Name\" formControlName=\"firstName\" id=\"firstName\">\n\t\t\t\t\t<app-control-messages [control]=\"billingForm.controls.firstName\"></app-control-messages>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" formControlName=\"lastName\" id=\"lastName\">\n\t\t\t\t\t<app-control-messages [control]=\"billingForm.controls.lastName\"></app-control-messages>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"House No\" formControlName=\"houseNo\" id=\"houseNo\">\n\t\t\t\t\t<app-control-messages [control]=\"billingForm.controls.houseNo\"></app-control-messages>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Street Name\" formControlName=\"streetName\" id=\"streetName\">\n\t\t\t\t\t<app-control-messages [control]=\"billingForm.controls.streetName\"></app-control-messages>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Zip Code\" formControlName=\"zipCode\" id=\"zipCode\">\n\t\t\t\t\t<app-control-messages [control]=\"billingForm.controls.zipCode\"></app-control-messages>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<select [(ngModel)]=\"selectedCountry.id\" (change)=\"onSelect($event.target.value); onChange($event, 'country')\" class=\"form-control\" formControlName=\"countryList\" id=\"countryList\" placeholder=\"Select Country\">\n\t\t\t\t\t  <option value=\"0\">Select Country</option>\n\t\t\t\t\t  <option *ngFor=\"let country of countries\" value= {{country.id}}>{{country.name}}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<app-control-messages [control]=\"billingForm.controls.countryList\"></app-control-messages>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"stateList\" id=\"stateList\" placeholder=\"Select State\" \n\t\t\t\t\t(change)=\"onChange($event, 'state')\">\n\t\t\t\t\t  <option *ngIf='selectedCountry.id == 0' value=\"0\">Select State</option>\n\t\t\t\t\t  <option *ngFor=\"let state of states \" value= {{state.id}}>{{state.name}}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<app-control-messages [control]=\"billingForm.controls.stateList\"></app-control-messages>\n\t\t\t\t</div>\n\t\t    </form>\t\n\t\t</div>\n\t\t<div class=\"shipping-info col-xs-12 col-sm-6 col-md-6 col-lg-6 pull-left\">\n\t\t\t<h6 class=\"blue-fonts\">Shipping Address</h6>\n\t\t\t<form [formGroup]=\"shippingForm\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<select [(ngModel)]=\"shippingTitleOption\" class=\"form-control\" placeholder=\"Please Select\" formControlName=\"shippingTitle\" id=\"shippingTitleOpt\">\n\t\t\t        \t<option *ngFor=\"let o of stitleOptions\">\n\t\t\t          \t\t{{o.name}}\n\t\t\t        \t</option>\n\t\t\t      \t</select>\n\t\t\t      \t<app-control-messages [control]=\"shippingForm.controls.shippingTitle\"></app-control-messages>\n\t\t\t    </div>\n\t\t\t    <div class=\"form-group\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"First Name\" formControlName=\"sfirstName\" id=\"sfirstName\" \n\t\t\t\t\t[(ngModel)]=\"bindFirstName\">\n\t\t\t\t\t<app-control-messages [control]=\"shippingForm.controls.sfirstName\"></app-control-messages>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" formControlName=\"slastName\" id=\"slastName\"\n\t\t\t\t\t[(ngModel)]=\"bindLastName\">\n\t\t\t\t\t<app-control-messages [control]=\"shippingForm.controls.slastName\"></app-control-messages>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"House No\" formControlName=\"shouseNo\" id=\"shouseNo\"\n\t\t\t\t\t[(ngModel)]=\"bindHouseNo\">\n\t\t\t\t\t<app-control-messages [control]=\"shippingForm.controls.shouseNo\"></app-control-messages>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Street Name\" formControlName=\"sstreetName\" id=\"sstreetName\" \n\t\t\t\t\t[(ngModel)]=\"bindStreetName\">\n\t\t\t\t\t<app-control-messages [control]=\"shippingForm.controls.sstreetName\"></app-control-messages>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Zip Code\" formControlName=\"szipCode\" id=\"szipCode\" [(ngModel)]=\"bindZipCode\">\n\t\t\t\t\t<app-control-messages [control]=\"shippingForm.controls.szipCode\"></app-control-messages>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<select [(ngModel)]=\"sselectedCountry.id\" (change)=\"onSelect($event.target.value);onChange($event, 'scountry')\" \n\t\t\t\t\tclass=\"form-control\" formControlName=\"scountryList\" id=\"scountryList\" placeholder=\"Select Country\">\n\t\t\t\t\t  <option value=\"0\">Select Country</option>\n\t\t\t\t\t  <option *ngFor=\"let scountry of scountries\" value= {{scountry.id}}>{{scountry.name}}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<app-control-messages [control]=\"shippingForm.controls.scountryList\"></app-control-messages>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"sstateList\" id=\"sstateList\" placeholder=\"Select State\" (change)=\"onChange($event, 'sstate')\">\n\t\t\t\t\t  <option *ngIf='sselectedCountry.id == 0' value=\"0\">Select State</option>\n\t\t\t\t\t  <option *ngFor=\"let sstate of sstates\" value= {{sstate.id}}>{{sstate.name}}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<app-control-messages [control]=\"shippingForm.controls.sstateList\"></app-control-messages>\n\t\t\t\t</div>\n\t\t    </form>\t\n\t\t</div>\n\t\t<div class=\"colw100 justify-content-center align-items-center no-margin\">\n\t\t\t<div class=\"billing-shipping-check text-center\">\n\t\t\t\t<input (change)=\"checkBoxChange($event)\" value=\"angular\" type=\"checkbox\" [disabled]=\"!billingForm.valid\"/>\n\t\t\t\t<span>Billing info same as shipping info.</span>\n\t\t\t</div>\n\t\t\t<div class=\"text-center\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-large\" (click)=\"saveAddressInfo($event)\" [disabled]=\"!billingForm.valid || !shippingForm.valid\">\n\t\t\t\t\t<span>Continue</span>\n\t\t\t\t\t<i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-public></app-public>-->\n<router-outlet></router-outlet>\n<div id=\"chatControl\" class=\"opaque-bg pull-right\">\n  <div *ngIf=\"isLoggedIn;then chatPanel\"></div>\n  <ng-template #chatPanel>\n    <app-chat></app-chat>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/audio-album-icon/audio-album-icon.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/audio-album-icon/audio-album-icon.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"audio-icon-container\">\n\t<div class=\"colw100 audio-edit-icon\"><i class=\"fa fa-pencil-square white-fonts pull-right\" aria-hidden=\"true\" (click)=\"editAudioAlbum($event)\"></i></div>\n\t<div class=\"colw100 blue-fonts bold-fonts cursor-pointer\" (click)=\"showAudioList($event)\"><span>{{item.title}}</span></div>\n\t<div class=\"colw100 blue-fonts\"><span>{{item.audiosList.length}}</span><span> music</span></div>\n\t<div class=\"colw100 blue-fonts\"><span>{{item.created | date: 'dd/MM/yyyy'}}</span></div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/audio-icon/audio-icon.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/audio-icon/audio-icon.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"audio-icon cursor-pointer\" [ngStyle]=\"{'background': 'url(' + posterURL+ ')'}\">\n<i class=\"fa fa-play-circle-o fa-3x\" aria-hidden=\"true\"></i>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/avchat/avchat.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/avchat/avchat.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"demoContainer\">\n\t<div id=\"connectControls\">\n\t\t<input type=\"checkbox\" checked=\"checked\" id=\"shareAudio\" />Share audio\n\t\t<input type=\"checkbox\" checked=\"checked\" id=\"shareVideo\" />Share video<br />\n\t\t<input type=\"checkbox\" checked=\"checked\" id=\"expectAudio\" />Expect audio\n\t\t<input type=\"checkbox\" checked=\"checked\" id=\"expectVideo\" />Expect video<br />\n\n\t\t<!--<input type=\"checkbox\" id=\"useFreshIce\" onclick=\"easyrtc.setUseFreshIceEachPeerConnection(this.value);\"/>Fresh Ice<br />\n\t\t<button id=\"connectButton\" onclick=\"connect()\">Connect</button>\n\t\t<button id=\"disconnectButton\" onclick=\"disconnect()\">Disconnect</button>\n\t\t<button id=\"hangupButton\" disabled=\"disabled\" onclick=\"hangup()\">Hangup</button>\n\t\t<div id=\"iam\">Not yet connected...</div>\n\t\t<br />\n\t\t<strong>Connected users:</strong>\n\t\t<div id=\"otherClients\"></div>-->\n\t</div>\n \n\t<div id=\"videos\">\n\t\t<div id=\"buddyImg\" [ngStyle]=\"{ 'background-image': 'url(' + buddyImg + ')'}\">\n\t\t</div>\n\t\t<video autoplay=\"autoplay\" id=\"selfVideo\"  class=\"easyrtcMirror\" muted=\"muted\" volume=\"0\" onclick = \"changeVideoSize(false)\"></video>\n\t\t<video autoplay=\"autoplay\" id=\"callerVideo\"  onclick = \"changeVideoSize(true)\"></video>\n\t\t<div id=\"callControls\">\n\t\t\t<i id=\"hangupButton\" disabled=\"disabled\" class=\"fa fa-phone-square fa-3x red-fonts\" aria-hidden=\"true\" onclick=\"hangup()\"></i>\n\t\t\t<i id=\"callButton\" disabled=\"disabled\" class=\"fa fa-phone-square fa-3x green-fonts\" aria-hidden=\"true\" onclick=\"callbuddy()\"></i>\n\t\t</div>\n\t\t<div id=\"acceptCallBox\"> <!-- Should be initially hidden using CSS -->\n\t\t\t<div id=\"acceptCallLabel\"></div>\n\t\t\t<div id=\"acceptCallBtn\">\n\t\t\t\t<div><i id=\"callAcceptButton\" class=\"fa fa-phone-square fa-3x green-fonts pull-left\" aria-hidden=\"true\"></i></div>\n\t\t\t\t<div><i id=\"callRejectButton\" class=\"fa fa-phone-square fa-3x red-fonts pull-left\" aria-hidden=\"true\"></i></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id=\"callStatusMessage\"></div>\n\t</div>\n\t<div id=\"audioSinkButtons\"></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/capture-pic/capture-pic.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/capture-pic/capture-pic.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auto-margin crop-contents auto-margin\" ng-show=\"isProfilePicCamShow\">\n\t<video id=\"profilePicVideo\" autoplay></video>\n\t<canvas id=\"profilePicCanvas\"></canvas>\n\t<div>\t\t\t\n\t\t<button type=\"button\" class=\"btn btn-primary text-center small-btn ok-btn\" (click)=\"capture()\">\n\t\t\t<span class=\"pull-left\">Ok</span>\n\t\t\t<i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n\t\t</button>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cart-tile/cart-tile.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart-tile/cart-tile.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cart-tile colw100\">\n\t<div class=\"item-pic pull-left\" [ngStyle]=\"{'background': 'url(' + obj.item.productImage+ ')'}\"></div>\n\t<div class=\"item-desc pull-left\">\n\t\t<div>{{obj.item.itemName}}</div>\n\t\t<div class=\"blue-fonts\">Rs&nbsp;{{itemPrice}}</div>\n\t\t<div class=\"blue-fonts\">For&nbsp;{{obj.item.category}}</div>\n\t\t<div class=\"blue-fonts\">Available in {{obj.item.location}}</div>\n\t\t<div class=\"blue-fonts\">\n\t\t\t<span><i class=\"fa fa-minus blue-fonts\" (click)=\"removeItemCount($event)\"></i></span>\n\t\t\t{{itemCount}}\n\t\t\t<span><i class=\"fa fa-plus blue-fonts\" (click)=\"addItemCount($event)\"></i></span>\n\t\t</div>\n\t</div>\n\t<div class=\"cart-items pull-right\">\n\t\t<div class=\"tex-right\">You are buying&nbsp;{{itemCount}}&nbsp;{{obj.item.itemName}}</div>\n\t\t<div class=\"blue-fonts text-right\">Total Items:&nbsp;{{itemCount}}</div>\n\t\t<div class=\"blue-fonts text-right\">Total Price:&nbsp;{{totalPrice}}</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat-item/chat-item.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat-item/chat-item.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-margin pull-left inline-block hand-cursor item-row hand-cursor\" >\n\t<div class=\"profile-pic-small pull-left\" [ngStyle]=\"{ 'background-image': 'url(' + profilePic + ')'}\"></div>\n\t<div class=\"row no-margin blue-fonts full-name pull-left\">{{item.fullname}}</div> \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat-window/chat-window.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat-window/chat-window.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"chat-panel\" id=\"{{info._id || info.id}}\">-->\n<div class=\"chat-window\">\n\t<div class=\"chat-window-header white-fonts\">\n\t\t<!--<div class=\"pull-left white-font use-handcursor small-padding\">{{info.fullname | limitTo : chatNameLimit || info.name | limitTo : chatNameLimit}}</div>-->\n\t\t<div class=\"profile-pic-extra-small pull-left\" [ngStyle]=\"{ 'background-image': 'url(' + chatObj.profilepic.imageBuffer + ')'}\"></div>\n\t\t<div class=\"pull-left white-font use-handcursor small-padding full-name\">{{chatObj.fullname}}</div>\n\t\t<div class=\"pull-left white-font use-handcursor small-padding\"></div>\n\t\t<div class=\"pull-right\"><i class=\"fa fa-times cursor-pointer\" (click)=\"closeChatWindow(chatObj.username)\"></i></div>\n\t\t<div class=\"pull-right\"><i class=\"fa fa-location-arrow cursor-pointer\"></i></div>\n\t\t<div class=\"pull-right\"><i class=\"fa fa-cog cursor-pointer\"></i></div>\n\t\t<div class=\"pull-right\"><i class=\"fa fa-headphones cursor-pointer\"></i></div>\n\t\t<!--<div class=\"pull-right\"><i class=\"fa fa-video-camera\" data=\"{{info}}\" ng-click=\"connectEasyRTCVideo($event);\"></i></div>-->\n\t\t<div class=\"pull-right\"><i class=\"fa fa-video-camera cursor-pointer\" (click)=\"startVideoCall()\"></i></div>\n\t\t<div class=\"pull-right\"><i class=\"fa fa-desktop cursor-pointer\"></i></div>\n\t</div>\n\t<div class=\"chat-window-body chat-body-height mCustomScrollbar\" #chatWindowBody>\n\t</div>\n\t<div class=\"chat-input gray-bg\">\n\t\t<textarea (keydown)=\"onEnterPressed($event)\" [(ngModel)]=\"msgInput\"></textarea>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/chat.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/chat.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-window-container\">\n\t<app-modal [modalTitle]=\"'Video Chat'\" [blocking]='false' [modalId]='modalId' #avChatModal>\n    \t<app-avchat [loginData]=\"loginData\"></app-avchat>\n    </app-modal>\n\t<app-chat-window #appChatWindow class=\"pull-left opaque-bg\" *ngFor=\"let chatObj of chatWindowList\" [chatObj] = \"chatObj\" (chatWindowClose)=\"chatWindowClose($event)\" (sendMsg)=\"sendMsg($event)\" (chatWindowReady) = \"chatWindowReady($event)\" [attr.id]=\"'chatWindow_' + chatObj.username\" (startVideoChat) = \"startVideoChat($event)\"></app-chat-window>\n</div>\n<div class=\"chat-panel-container\">\n\t<div class=\"chat-panel-header\">\n\t\t<div class=\"white-fonts pull-left\">Messaging</div>\n\t\t<div class=\"chat-panel-settings-btn pull-right\">\n\t\t<span class=\"white-fonts\"><i class=\"fa fa-cog cursor-pointer\" aria-hidden=\"true\"></i></span>\n\t\t<span class=\"white-fonts\"><i class=\"fa fa-external-link cursor-pointer\" aria-hidden=\"true\"></i></span>\n\t    </div>\n\t</div>\n\t<app-chat-item class=\"pull-left colw100\" *ngFor=\"let item of chatBuddyList | chatSearch : searchText\" [item]=\"item\" (click)=\"searchChat.value=''; searchText = ''; openChatWindow(item);\"></app-chat-item>\n\t<div class=\"chat-search-box pull-left\">\n\t\t<div class=\"pull-left\"><i class=\"fa fa-search cursor-pointer\" aria-hidden=\"true\"></i></div>\n\t\t<div class=\"pull-left\">\n\t\t\t<input class=\"search-input blue-fonts\" type=\"text\" placeholder=\"Search\"  autocomplete=\"off\" spellcheck=\"false\" aria-autocomplete=\"list\" aria-expanded=\"false\" [(ngModel)]=\"searchText\" #searchChat/>\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/checkin/checkin.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/checkin/checkin.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container no-padding\">\n  \t<div class=\"pull-left col-lg-6 col-md-6 col-sm-6 col-xs-12 no-padding map-content\">\n\t  \t<agm-map id=\"mapItem\" [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\n\t    \t<agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n\t  \t</agm-map>\n  \t</div>\n  \t<div class=\"pull-left col-lg-6 col-md-6 col-sm-6 col-xs-12 no-padding loc-content\">\n\t  \t<div class=\"form-group\">\n\t    \t<input placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #search [formControl]=\"searchControl\" [(ngModel)]=\"postCheckIn\">\n\t  \t</div>\n\t  \t<div class=\"form-group\">\n\t\t\t<textarea #desc class=\"form-control no-resize no-bg no-brder-radius blue-fonts blue-border\" rows=\"5\" cols=\"30\" placeholder=\"Add Description...\" id=\"postDesc\" [(ngModel)]=\"postDesc\">\n\t\t\t</textarea>\n\t\t</div>\n\t  \t<div class=\"colw100 inline-block\">\t\t\t\n\t\t\t<button id=\"okBtn\" type=\"button\" class=\"btn btn-primary text-center small-btn ok-btn\" (click)=\"checkIn($event)\" [disabled]=\"isProgress\">\n\t\t\t\t<span class=\"pull-left\">Post</span>\n\t\t\t\t<i class=\"fa fa-share-square-o\" aria-hidden=\"true\"></i>\n\t\t\t</button>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/checkout/checkout.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-private-nav></app-private-nav>\n<div class=\"container top-margin bottom-margin\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n\t\t\t<div class=\"opaque-bg no-padding\">\n\t\t\t\t<app-profile-area></app-profile-area>\n\t\t\t\t<div class=\"left-nav\">\n\t\t\t\t\t<div class=\"nav-item\" (click)=\"switchVideo($event)\" [ngClass]=\"(isHighLightStories ? 'highlight-nav' : '')\">\n\t\t\t\t\t\t<i class=\"fa fa-book blue-fonts\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span class=\"blue-fonts\">Stories</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"nav-item\" [ngClass]=\"(isHighLightMusic ? 'highlight-nav' : '')\" (click)=\"switchMusic($event)\">\n\t\t\t\t\t\t<i class=\"fa fa-pencil blue-fonts\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span class=\"blue-fonts\">Blog</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"nav-item\">\n\t\t\t\t\t\t<i class=\"fa fa-plane blue-fonts\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span class=\"blue-fonts\">Travel</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div #checkOutContent class=\"col-xs-12 col-sm-9 col-md-9 col-lg-9 opaque-bg market-content\">\n\t\t\t<div class=\"checkout-controlbar colw100\">\n\t\t\t\t<div class=\"place-order pull-right\" (click)=\"placeOrder($event)\">Place your order</div>\n\t\t\t\t<div class=\"grand-total pull-right\">Grand Total:&nbsp;Rs&nbsp;{{grandTotal}}</div>\n\t\t\t</div>\n\t\t\t<div class=\"checkout-content\" [ngStyle]=\"{ 'max-height': ' ' + screenHeight + 'px'}\" (scroll)=\"onScroll($event)\" #scrollMe>\n\t\t\t\t<app-cart-tile *ngFor=\"let obj of checkOutItemArr\" [obj]=\"obj\" [userId]=\"userId\" \n\t\t\t\t(addToTotal)=\"addToTotal($event)\"  \n\t\t\t\t(subtractFromTotal)=\"subtractFromTotal($event)\"></app-cart-tile>\n\t\t\t\t<!--<div *ngIf=\"isLoading then loading\"></div>\n\t\t\t\t<ng-template #loading>\n\t\t\t\t\t<div class=\"spinner-bg\">\n\t\t\t\t\t\t<div class=\"spinner\">\n\t\t\t\t\t\t\t<i class=\"fa fa-2x fa-spin fa-spinner blue-fonts\"></i>\n\t\t\t\t\t\t\t<span class=\"blue-fonts\">&nbsp;Loading...</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t\t<div *ngIf=\"(!isLoading && (marketItemArr.length > limit)) then endResult\"></div>\n\t\t\t\t<ng-template #endResult>\n\t\t\t\t\t<div class=\"end-result blue-fonts text-center\">--- End Of Result ---</div>\n\t\t\t\t</ng-template>\n\t\t\t\t-->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<app-modal [modalTitle]=\"modalTitle\" [blocking]='false' [modalId]='modalId' #addAddressModal>\n\t<ng-container *ngIf=\"isAddressAdded\">\n\t\t<div class=\"add-payment-content\">\n\t\t\t<div class=\"colw100 inline-block\">\n\t\t\t\t<app-payment-info [userId]=\"userId\"></app-payment-info>\n\t\t\t</div>\n\t\t</div>\n\t</ng-container>\n\t<ng-container *ngIf=\"!isAddressAdded\">\n\t\t<div class=\"add-address-content\">\n\t\t\t<div class=\"colw100 inline-block\">\n\t\t\t\t<app-address-info [userId]=\"userId\" (addressSaved)=\"addressSaved($event)\"></app-address-info>\n\t\t\t</div>\n\t\t</div>\n\t</ng-container>\n</app-modal>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/comment-box/comment-box.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/comment-box/comment-box.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div name=\"story\" #commentBox class=\"comment-box colw100 inline-block no-outline auto-overflow pull-left\" contenteditable=\"true\" spellcheck=\"true\" role=\"textbox\" aria-multiline=\"true\" data-placeholder-default=\"Add Comment\" aria-autocomplete=\"list\" aria-expanded=\"false\" [style.color]=\"color\" [style.font-family]=\"fontFamily\" [style.font-size]=\"fontSize\" [style.font-weight]=\"fontWeight\" [style.text-decoration]=\"txtDeco\" [style.font-style]=\"fontStyle\"  [innerHTML]=\"storyContent\" \n\t(keyup)=\"onStoryContentChange($event)\" (keydown)=\"onStoryContentChanged($event.keyCode)\"></div>\n<div class=\"control-bar inline-block\">\n\t<div class=\"pull-left color-picker-icon\">\n\t\t<input [colorPicker]=\"color\" (colorPickerChange)=\"color=$event; colorPickerChange($event);\" [style.background]=\"color\" class=\"cursor-pointer\"/>\n\t</div>\n\t<div class=\"pull-left font-family-btn\" (click)=\"toggleFontFamily($event); clickedInside($event);\">\n\t\t<div>\n\t\t\t<i class=\"fa fa-font fa-2x blue-fonts cursor-pointer\"></i>\n\t\t</div>\n\t\t<div *ngIf=\"isShowFontFamily; then fontFamilies\"></div>\n\t\t<ng-template #fontFamilies>\n\t\t\t<div class=\"list-items font-items pull-left\">\n\t\t\t\t<div class=\"arrow-up white-bg\"></div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontFamily($event, 'Arial')\">Arial</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontFamily($event, 'Times New Roman')\">Times New Roman</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontFamily($event, 'Courier New')\">Courier New</div>\n\t\t\t</div>\n\t\t</ng-template>\n\t</div>\n\t<div class=\"pull-left font-size-btn\" (click)=\"clickedInside($event)\">\n\t\t<div class=\"blue-fonts cursor-pointer text-center\" (click)=\"toggleFontSize($event)\"><span>{{fontSize}}</span></div>\n\t\t<div *ngIf=\"isShowFontSize; then fontSizes\"></div>\n\t\t<ng-template #fontSizes>\n\t\t\t<div class=\"list-items font-items pull-left\">\n\t\t\t\t<div class=\"arrow-up white-bg\"></div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 9)\">9</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 10)\">10</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 11)\">11</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 12)\">12</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 13)\">13</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 14)\">14</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 15)\">15</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 16)\">16</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 17)\">17</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 18)\">18</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 19)\">19</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 20)\">20</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 21)\">21</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 22)\">22</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 23)\">23</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 24)\">24</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 25)\">25</div>\n\t\t\t</div>\n\t\t</ng-template>\n\t</div>\n\t<div class=\"pull-left font-bold-btn blue-fonts cursor-pointer text-center\" [class.high-light]=\"isBoldBtnHighLight\" (click)=\"applyBold($event)\">\n\t\t<span>B</span>\n\t</div>\n\t<div class=\"pull-left font-ul-btn blue-fonts cursor-pointer text-center\" [class.high-light]=\"isULBtnHighLight\" (click)=\"applyUnderline($event)\">\n\t\t<span>U</span>\n\t</div>\n\t<div class=\"pull-left font-italic-btn blue-fonts cursor-pointer text-center\" [class.high-light]=\"isIBtnHighLight\"  (click)=\"applyItalic($event)\">\n\t\t<span>I</span>\n\t</div>\n\t<div class=\"pull-left smiley-btn blue-fonts cursor-pointer text-center\" [class.high-light]=\"isEmotionsHighLight\"  (click)=\"showEmotions($event);clickedInside($event);\">\n\t\t<div>\n\t\t\t<i class=\"fa fa-smile-o\"></i>\n\t\t</div>\n\t\t<div *ngIf=\"isEmotionsHighLight; then emotions\"></div>\n\t\t<ng-template #emotions>\n\t\t\t<div class=\"list-items font-items pull-left emo-list\">\n\t\t\t\t<div class=\"arrow-up white-bg\"></div>\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':)')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion0-smile.gif\"/></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':(')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion1-sadsmile.gif\"/></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':D')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion2-bigsmile.gif\"/></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, '8=)')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion3-cool.gif\"/></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':o')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion4-surprised.gif\"/></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ';)')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion5-wink.gif\"/></span>\n\t\t\t\t</div>\n\n\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ';(')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion6-crying.gif\"/></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, '(:|')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion7-sweating.gif\"/></span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':|')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion8-speechless.gif\"/></span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':*')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion9-kiss.gif\"/></span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, 'emotion10-tongueout')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion10-tongueout.gif\"/></span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':$')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion11-blush.gif\"/></span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':^)')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion12-wondering.gif\"/></span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, '|-)')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion13-sleepy.gif\"/></span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, '|(')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion14-dull.gif\"/></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-template>\n\t</div>\n\t<div class=\"pull-left up-img-btn blue-fonts cursor-pointer text-center\" (click)= \"imageInput.value = ''; imageInput.click();\">\n\t\t<i class=\"fa fa-picture-o\" aria-hidden=\"true\"></i>\n\t</div>\n\t<div class=\"pull-left up-mus-btn blue-fonts cursor-pointer text-center\" (click)= \"musicInput.value = ''; musicInput.click();\">\n\t\t<i class=\"fa fa-music\" aria-hidden=\"true\"></i>\n\t</div>\n\t<div class=\"pull-left up-vid-btn blue-fonts cursor-pointer text-center\" (click)= \"videoInput.value = ''; videoInput.click();\">\n\t\t<i class=\"fa fa-file-video-o\" aria-hidden=\"true\"></i>\n\t</div>\n\t<div class=\"checkin-btn pull-left up-vid-btn blue-fonts cursor-pointer text-center\" (click)=\"checkIn($event)\">\n\t\t\t<i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n\t</div>\n\t<div class=\"pull-left post-btn blue-fonts cursor-pointer text-center\">\n\t\t<div *ngIf=\"isAddPost; then addPost else updatePost\"></div>\n\t\t<ng-template #addPost>\n\t\t\t<button class=\"btn btn-primary\" class=\"post-btn\" type=\"button\" (click)=\"postStory($event)\" [disabled]=\"(storyBox.innerText.trim().length === 0) && (!isSmileyAdded)\">\n\t\t\t\t<span>Post</span>\n\t\t\t\t<i class=\"fa fa-share-square-o\" aria-hidden=\"true\"></i>\n\t\t\t</button>\n\t\t</ng-template>\n\t\t<ng-template #updatePost>\n\t\t\t<button class=\"btn btn-primary\" class=\"post-btn\" type=\"button\" (click)=\"updateStory($event)\" [disabled]=\"(storyBox.innerText.trim().length === 0) && (!isSmileyAdded)\">\n\t\t\t\t<span>Update</span>\n\t\t\t\t<i class=\"fa fa-share-square-o\" aria-hidden=\"true\"></i>\n\t\t\t</button>\n\t\t</ng-template>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/commentitem/commentitem.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/commentitem/commentitem.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isEditCommentItem; then editCommentItemControls\"></div>\n<ng-template #editCommentItemControls>\n\t<div class=\"arrow-up white-bg comment-arrow\"></div>\n\t<div class=\"list-items comment-edit-items font-items pull-right\">\n\t\t<div *ngIf=\"isMyComment; then editThisCommentItem else reportThisCommentItem\"></div>\n\t\t<ng-template #editThisCommentItem>\n\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"editCommentItem($event)\">Edit</div>\n\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"deleteCommentItem();\"><span>Delete</span></div>\n\t\t</ng-template>\n\t\t<ng-template #reportThisCommentItem>\n\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"moveClick($event)\">Report</div>\n\t\t</ng-template>\n\t\t<div class=\"cursor-pointer list-item\" (click)=\"selectClick($event)\">Hide</div>\n\t\t<!--<div class=\"cursor-pointer list-item\" (click)=\"defaultClick($event)\">Tag</div>-->\n\t</div>\n</ng-template>\n<div class=\"comment-profile-pic no-padding pull-left contain-bg\" [ngStyle]=\"{ 'background-image': 'url(' + commentItem.profilepic + ')'}\">\n</div>\n<div class=\"full-name blue-fonts bold-fonts pull-left med-line-height\">{{commentItem.fullname}}</div>\n<div class=\"pull-left time-ago med-line-height\"><span>&nbsp;commented&nbsp;</span><span timeago [date]=\"commentMoment\"></span></div>\n<div class=\"pull-right edit-feed hand-cursor\" (click)=\"clickedInside($event);\">\n\t<i aria-hidden=\"true\" class=\"fa fa-pencil-square-o gray-fonts\" id=\"editItem\"></i>\n</div>\n<div *ngIf=\"commentItem.commenttype === 'text'; then textComment\"></div>\n<div *ngIf=\"commentItem.commenttype === 'image'; then imageComment\"></div>\n<div *ngIf=\"commentItem.commenttype === 'music'; then musicComment\"></div>\n<div *ngIf=\"commentItem.commenttype === 'checkin'; then checkinComment\"></div>\n<ng-template #textComment>\n\t<div class=\"feed-item colw100 inline-block no-outline auto-overflow pull-left\" [innerHTML]=\"commentItem.commenttext\" [ngStyle]=\"{\n\t\t\t\t'font-weight':' '+ commentItem.fontWeight +'', \n\t\t\t\t'font-size':' '+ commentItem.fontSize +'', 'font-family':' '+ commentItem.fontFamily +'', 'font-style': ' '+ commentItem.fontStyle +' ', 'text-decoration': ' '+ commentItem.textDecoration +' ',\n\t\t\t\t'color':' '+ commentItem.colorInfo +''}\" >\n\t</div>\n</ng-template>\n<ng-template #imageComment>\n\t<div class=\"posted-pic pull-left\" [ngStyle]=\"{'background': 'url(' + commentItem.filePath+ ')'}\"></div>\n\t<div class=\"comment-item colw100 inline-block no-outline auto-overflow pull-left\" [innerHTML]=\"commentItem.title\" [ngStyle]=\"{\n\t\t\t\t'font-weight':'bold', \n\t\t\t\t'font-size':'12px', 'font-family':' '+ commentItem.fontFamily +'', 'font-style': ' '+ commentItem.fontStyle +' ', 'text-decoration': ' '+ commentItem.textDecoration +' ',\n\t\t\t\t'color':' '+ commentItem.colorInfo +''}\" >\n\t</div>\n\t<div class=\"comment-item colw100 inline-block no-outline auto-overflow pull-left\" [innerHTML]=\"commentItem.description\" [ngStyle]=\"{\n\t\t\t\t'font-weight':' '+ commentItem.fontWeight +'', \n\t\t\t\t'font-size':' '+ commentItem.fontSize +'', 'font-family':' '+ commentItem.fontFamily +'', 'font-style': ' '+ commentItem.fontStyle +' ', 'text-decoration': ' '+ commentItem.textDecoration +' ',\n\t\t\t\t'color':' '+ commentItem.colorInfo +''}\" >\n\t</div>\n</ng-template>\n<ng-template #checkinComment>\n\t<div class=\"posted-pic pull-left\" [ngStyle]=\"{'background': 'url(' + commentItem.filePath+ ')'}\"></div>\n\t<div class=\"comment-item colw100 inline-block no-outline auto-overflow pull-left\" [innerHTML]=\"item.title\" [ngStyle]=\"{\n\t\t\t\t'font-weight':'bold', \n\t\t\t\t'font-size':'12px', 'font-family':' '+ commentItem.fontFamily +'', 'font-style': ' '+ commentItem.fontStyle +' ', 'text-decoration': ' '+ commentItem.textDecoration +' ',\n\t\t\t\t'color':' '+ commentItem.colorInfo +''}\" >\n\t</div>\n\t<div class=\"comment-item colw100 inline-block no-outline auto-overflow pull-left\" [innerHTML]=\"commentItem.description\" [ngStyle]=\"{\n\t\t\t\t'font-weight':' '+ commentItem.fontWeight +'', \n\t\t\t\t'font-size':' '+ commentItem.fontSize +'', 'font-family':' '+ commentItem.fontFamily +'', 'font-style': ' '+ commentItem.fontStyle +' ', 'text-decoration': ' '+ commentItem.textDecoration +' ',\n\t\t\t\t'color':' '+ commentItem.colorInfo +''}\" >\n\t</div>\n</ng-template>\n<ng-template #musicComment>\n\t<audio #musicPlayer  preload=\"none\" controls class=\"comment-music-player\">\n        <source src=\"{{commentItem.filePath}}\" type=\"audio/mp3\">\n        <p>Your browser does not support the HTML5 Audio element.</p>\n    </audio>\n\t<div class=\"comment-item colw100 inline-block no-outline auto-overflow pull-left\" [innerHTML]=\"commentItem.title\" [ngStyle]=\"{\n\t\t\t\t'font-weight':'bold', \n\t\t\t\t'font-size':'12px', 'font-family':' '+ commentItem.fontFamily +'', 'font-style': ' '+ commentItem.fontStyle +' ', 'text-decoration': ' '+ item.textDecoration +' ',\n\t\t\t\t'color':' '+ commentItem.colorInfo +''}\" >\n\t</div>\n\t<div class=\"comment-item colw100 inline-block no-outline auto-overflow pull-left\" [innerHTML]=\"commentItem.description\" [ngStyle]=\"{\n\t\t\t\t'font-weight':' '+ commentItem.fontWeight +'', \n\t\t\t\t'font-size':' '+ commentItem.fontSize +'', 'font-family':' '+ commentItem.fontFamily +'', 'font-style': ' '+ commentItem.fontStyle +' ', 'text-decoration': ' '+ commentItem.textDecoration +' ',\n\t\t\t\t'color':' '+ commentItem.colorInfo +''}\" >\n\t</div>\n</ng-template>\n\n<div class=\"colw100 comment-controls\">\n\t<div class=\"pull-left blue-fonts inline-block\"> \n\t\t<div *ngIf=\"alreadyLiked === true; then thumbsDown else thumbsUp\"></div>\n\t\t<ng-template #thumbsUp>\n\t\t\t<div class=\"action cursor-pointer\" (click)=\"likeClick($event)\">\n\t\t\t\t<i class=\"fa fa-thumbs-up\"></i>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<ng-template #thumbsDown>\n\t\t\t<div class=\"action cursor-pointer\" (click)=\"likeClick($event)\">\n\t\t\t\t<i class=\"fa fa-thumbs-down\"></i>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<div *ngIf=\"likeCount > 0; then  likeItemsCount else likeItemCount\">\n  \t\t</div>\n  \t\t<ng-template #likeItemsCount>\n  \t\t\t<div class=\"no-count text-center\">{{likeCount}}</div>\n  \t\t\t<!--<span>Like</span>-->\n\t\t</ng-template>\n  \t\t<ng-template #likeItemCount>\n  \t\t\t<!--<span>Like</span>-->\n\t\t</ng-template>\n\t</div>\t\n\t<div class=\"pull-left blue-fonts\">\n\t\t<div *ngIf=\"alreadyLoved === true; then lovedSymbol else loveSymbol\"></div>\n\t\t<ng-template #lovedSymbol>\n\t\t\t<div class=\"action cursor-pointer\" (click)=\"loveClick($event)\">\n\t\t\t\t<i class=\"fa fa-heart red-fonts\"></i>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<ng-template #loveSymbol>\n\t\t\t<div class=\"action cursor-pointer\" (click)=\"loveClick($event)\">\n\t\t\t\t<i class=\"fa fa-heart blue-fonts\"></i>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<div *ngIf=\"loveCount > 0; then  loveItemsCount else loveItemCount\">\n  \t\t</div>\n  \t\t<ng-template #loveItemsCount>\n  \t\t\t<div class=\"no-count text-center\">{{loveCount}}</div>\n  \t\t\t<!--<span>Love</span>-->\n\t\t</ng-template>\n  \t\t<ng-template #loveItemCount>\n  \t\t\t<!--<span>Love</span>-->\n\t\t</ng-template>\n\t</div>\n\t<!-- This feature is on hold for now -->\n\t<!--<div class=\"pull-left cursor-pointer blue-fonts\" (click)=\"commentClick($event)\"><i class=\"fa fa-comment\"></i><span>Reply</span>-\n\t</div>-->\n</div>\n<div class=\"pull-left colw100\">\n\t<ng-template [ngIf]=\"addComment || editComment\">\n\t\t<i class=\"fa fa-times story-close-icon blue-fonts hand-cursor\" (click)=\"closeStory($event)\"></i>\n\t\t<app-story-box [action]=\"action\" [replyCommentItem]=\"commentItem\" [operation] = 'operation' \n\t\t(refreshCommentItem)=\"refreshCommentItem($event)\"></app-story-box>\n\t</ng-template>\t\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/coverpic/coverpic.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/coverpic/coverpic.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"coverPic\" #coverPic class=\"cover-pic\" (mousedown)=\"canvasMouseDown()\"\n[ngStyle]=\"{'background': 'url(' + coverPicURL+ ')', \n\t\t\t'cursor':' '+ mouseCursor +'', \n\t\t\t'background-repeat': 'no-repeat', 'height':' '+ coverPicHeight +'px', 'width':' '+ coverPicWidth +'px', 'background-size': ' '+ bgSize +' ',\n\t\t\t'background-position-x':' '+ posX +'px', \n\t\t\t'background-position-y':' '+ posY +'px'}\" \n(mouseup)=\"canvasMouseUp()\"></div>\n<div *ngIf=\"isMyProfile === 'true'; then editCoverPicControls\"></div>\n<ng-template #editCoverPicControls>\n    <app-modal [modalTitle]=\"'Cover Pic Preview'\" [blocking]='false' [modalId]='modalId' #previewPicModal>\n    \t<div class=\"preview-cover-pic\"><img *ngIf=\"encodedImage\" [src]=\"encodedImage\"/></div>\n      \t<div>\t\t\t\n    \t\t<button id=\"okBtn\" type=\"button\" class=\"btn btn-primary text-center small-btn ok-btn\" (click)=\"ok()\">\n\t\t\t\t<span class=\"pull-left\">Ok</span>\n\t\t\t\t<i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n\t\t\t</button>\n\t\t</div>\n    </app-modal>\n\t<div class=\"file-input-container\">\n\t\t<form [formGroup]=\"coverPicUploadForm\" action=\"/upload\" method=\"post\" enctype=\"multipart/form-data\">\n\t\t\t<div class=\"form-group\" [formGroup]=\"coverPicGroup\">\n\t  \t\t\t<input type=\"file\" accept=\"image/*\" class=\"file-input\" name=\"uploadfile\" #fileInput (change)=\"fileChangeEvent($event)\"/>\n\t  \t\t</div>\n\t\t</form>\n\t</div>\n\t<div class=\"edit-cover-pic\" (click)=\"clickedInside($event)\">\n\t\t<i class=\"fa fa-pencil-square-o fa-2x blue-fonts cursor-pointer\" aria-hidden=\"true\"  (click)=\"editCoverPicClick($event)\">\n\t\t</i>\n\t\t<div *ngIf=\"isEditCoverPic; then editCoverPicItems\"></div>\n\t\t<ng-template #editCoverPicItems>\n\t\t\t<div class=\"list-items font-items\">\n\t\t\t\t<div class=\"arrow-up white-bg\"></div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"moveClick($event)\">Move</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"changeClick(); fileInput.value = ''; fileInput.click()\"><span>Change</span></div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"selectClick($event)\">Select</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"defaultClick($event)\">Default</div>\n\t\t\t</div>\n\t\t</ng-template>\n\t</div>\n</ng-template>\n\n<div *ngIf=\"isSaveCoverPic; then saveCoverPicControls\"></div>\n<ng-template #saveCoverPicControls>\n\t<div class=\"save-coverpic-controls\">\n\t\t<div class=\"row no-margin\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary text-center save-btn\" (click)=\"save()\">\n\t\t\t\t<span class=\"pull-left\">Save</span>\n\t\t\t\t<i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n\t\t\t</button>\n\t\t\t<button id=\"loginBtn\" type=\"button\" class=\"btn btn-primary text-center\" (click)=\"cancel()\">\n\t\t\t\t<i class=\"fa fa-times pull-left\" aria-hidden=\"true\"></i>\n\t\t\t\t<span class=\"pull-left\">Cancel</span>\n\t\t\t</button>\n\t\t</div>\n\t</div>\n</ng-template>\t\n\n\n\n<div class=\"add-friend-controls\">\n\t<div class=\"row no-margin\">\n\t\t<div *ngIf=\"isAddFriend; then addFriendControls\"></div>\n\t\t<ng-template #addFriendControls>\n\t\t\t<button type=\"button\" class=\"btn btn-primary text-center add-btn\" (click)=\"addFriend()\">\n\t\t\t\t<span class=\"pull-left\">Add</span>\n\t\t\t\t<i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\n\t\t\t</button>\n\t\t</ng-template>\n\t\t<div *ngIf=\"isRequestPending; then pendingControls\"></div>\n\t\t<ng-template #pendingControls>\n\t\t\t<div class=\"pull-left btn-div\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary large-btn pending-btn\">\n\t\t\t\t\t<span class=\"pull-left\">Request Pending</span>\n\t\t\t\t\t<i class=\"fa fa-user-secret\" aria-hidden=\"true\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<div *ngIf=\"isRequestConfirmed; then confirmedControls\"></div>\n\t\t<ng-template #confirmedControls>\n\t\t\t<div class=\"pull-left btn-div\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary med-btn pending-btn\">\n\t\t\t\t\t<span class=\"pull-left\">Freind</span>\n\t\t\t\t\t<i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<div *ngIf=\"isConfirmFriend; then confirmFriendControls\"></div>\n\t\t<ng-template #confirmFriendControls>\n\t\t\t<div class=\"pull-left btn-div\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary large-btn pending-btn\" (click)=\"confirm()\">\n\t\t\t\t\t<span class=\"pull-left\">Confirm Freind</span>\n\t\t\t\t\t<i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<div *ngIf=\"isMyProfile === 'false'; then sendMsgBtn\"></div>\n\t\t<ng-template #sendMsgBtn>\n\t\t\t<button type=\"button\" class=\"btn btn-primary text-center med-btn msg-btn\" (click)=\"sendMEssage()\">\n\t\t\t\t<span class=\"pull-left\">Message</span>\n\t\t\t\t<i class=\"fa fa-commenting\" aria-hidden=\"true\"></i>\n\t\t\t</button>\n\t\t</ng-template>\n\t</div>\n</div>\n\t\n\t\t\t\t<!--<div class=\"row btn-div-container\" ng-show=\"isProfileBtnShow\" id=\"friendsBtnContainer\">\n\t\t\t\t\t\t<div class=\"pull-left btn-div\" id=\"addFriendBtn\" data=\"{{profileIdOnAddBtn}}\" ng-click=\"onAddBtnClick($event)\">\n\t\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-primary\" name=\"submit\" value=\"Add\"><i class=\"fa fa-plus-square-o\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"pull-left btn-div\" id=\"pendingFriendBtn\" style=\"display : none;\" data=\"{{profileIdOnAddBtn}}\">\n\t\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-primary\" name=\"submit\" value=\"Request Pending\"><i class=\"fa fa-plus-square-o\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"pull-left btn-div\" id=\"respondFriendBtn\" style=\"display : none;\" data=\"{{profileIdOnAddBtn}}\" ng-click=\"onConfirmFriendBtnClick($event);\">\n\t\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-primary\" name=\"submit\" value=\"Respond Request\"><i class=\"fa fa-plus-square-o\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"pull-left btn-div\" id=\"confirmedFriendBtn\" style=\"display : none;\" data=\"{{profileID}}\">\n\t\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-primary\" name=\"submit\" value=\"Friend\"><i class=\"fa fa-plus-square-o\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"pull-left btn-div\" id=\"msgBtn\">\n\t\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-primary\" name=\"submit\" value=\"Message\"><i class=\"fa fa-pencil-square-o\"></i></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t-->\n\n<div class=\"profile-pic\" [ngStyle]=\"{ 'background-image': 'url(' + profilePic + ')', 'height': profilePicHeight, 'width': profilePicWidth}\">\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/entertainment/entertainment.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/entertainment/entertainment.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-private-nav></app-private-nav>\n<div class=\"container top-margin bottom-margin\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n\t\t\t<div class=\"opaque-bg no-padding\">\n\t\t\t\t<app-profile-area></app-profile-area>\n\t\t\t\t<div class=\"left-nav\">\n\t\t\t\t\t<div class=\"nav-item\" (click)=\"switchVideo($event)\" [ngClass]=\"(isHighLightVideos ? 'highlight-nav' : '')\">\n\t\t\t\t\t\t<i class=\"fa fa-file-video-o blue-fonts\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span class=\"blue-fonts\">Videos</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"nav-item\" [ngClass]=\"(isHighLightMusic ? 'highlight-nav' : '')\" (click)=\"switchMusic($event)\">\n\t\t\t\t\t\t<i class=\"fa fa-music blue-fonts\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span class=\"blue-fonts\">Music</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"nav-item\" [ngClass]=\"(isHighLightPhotos ? 'highlight-nav' : '')\" (click)=\"switchPhotos($event)\"><i class=\"fa fa-file-image-o blue-fonts\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span class=\"blue-fonts\">Photos</span> \n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"nav-item\">\n\t\t\t\t\t\t<i class=\"fa fa-list-alt blue-fonts\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span class=\"blue-fonts\">Play List</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"nav-item\">\n\t\t\t\t\t\t<i class=\"fa fa-book blue-fonts\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span class=\"blue-fonts\">Album</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding mobile-padding\">\n\t\t\t<div class=\"opaque-bg video-content\">\n\t\t\t\t<ng-template [ngIf]=\"isVideo\">\n\t\t\t\t\t<app-video-player></app-video-player>\n\t\t\t\t</ng-template>\t\n\t\t\t\t<ng-template [ngIf]=\"isMusic\">\n\t\t\t\t\t<app-music-player></app-music-player>\n\t\t\t\t</ng-template>\t\n\t\t\t\t<ng-template [ngIf]=\"isPhotos\">\n\t\t\t\t\t<app-photos></app-photos>\n\t\t\t\t</ng-template>\t\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 info-panel\">\n\t\t\t<div class=\"opaque-bg\">\n\t\t\t\t<app-info-panel></app-info-panel>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/feeditem/feeditem.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/feeditem/feeditem.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isEditFeedItem; then editFeedItemControls\"></div>\n<ng-template #editFeedItemControls>\n\t<div class=\"arrow-up white-bg edit-arrow\"></div>\n\t<div class=\"list-items feed-edit-items font-items pull-right\">\n\t\t<div *ngIf=\"isMyFeed; then editThisFeedItem else reportThisFeedItem\"></div>\n\t\t<ng-template #editThisFeedItem>\n\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"editFeedItem($event)\">Edit</div>\n\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"deleteFeedItem();\"><span>Delete</span></div>\n\t\t</ng-template>\n\t\t<ng-template #reportThisFeedItem>\n\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"moveClick($event)\">Report</div>\n\t\t</ng-template>\n\t\t<div class=\"cursor-pointer list-item\" (click)=\"selectClick($event)\">Hide</div>\n\t\t<div class=\"cursor-pointer list-item\" (click)=\"defaultClick($event)\">Tag</div>\n\t</div>\n</ng-template>\n<div class=\"profile-pic no-padding pull-left contain-bg\" [ngStyle]=\"{ 'background-image': 'url(' + item.profilepic + ')'}\">\n</div>\n<div class=\"full-name blue-fonts bold-fonts pull-left\">{{item.fullname}}</div>\n<div class=\"pull-right edit-feed hand-cursor\"  (click)=\"clickedInside($event);\">\n\t<i aria-hidden=\"true\" class=\"fa fa-pencil-square-o gray-fonts\" id=\"editItem\"></i>\n</div>\n<br/>\n<div class=\"pull-left time-ago\"><span>posted&nbsp;</span><span timeago [date]=\"feedMoment\"></span></div>\n\n<div *ngIf=\"item.type === 'text'; then textFeed\"></div>\n<div *ngIf=\"item.type === 'image'; then imageFeed\"></div>\n<div *ngIf=\"item.type === 'music'; then musicFeed\"></div>\n<div *ngIf=\"item.type === 'checkin'; then checkinFeed\"></div>\n<ng-template #textFeed>\n\t<div class=\"feed-item colw100 inline-block no-outline auto-overflow pull-left\" [innerHTML]=\"item.post\" [ngStyle]=\"{\n\t\t\t\t'font-weight':' '+ item.fontWeight +'', \n\t\t\t\t'font-size':' '+ item.fontSize +'', 'font-family':' '+ item.fontFamily +'', 'font-style': ' '+ item.fontStyle +' ', 'text-decoration': ' '+ item.textDecoration +' ',\n\t\t\t\t'color':' '+ item.colorInfo +''}\" >\n\t</div>\n</ng-template>\n<ng-template #imageFeed>\n\t<div class=\"posted-pic pull-left\" [ngStyle]=\"{'background': 'url(' + item.filePath+ ')'}\"></div>\n\t<div class=\"feed-item colw100 inline-block no-outline auto-overflow pull-left\" [innerHTML]=\"item.title\" [ngStyle]=\"{\n\t\t\t\t'font-weight':'bold', \n\t\t\t\t'font-size':'12px', 'font-family':' '+ item.fontFamily +'', 'font-style': ' '+ item.fontStyle +' ', 'text-decoration': ' '+ item.textDecoration +' ',\n\t\t\t\t'color':' '+ item.colorInfo +''}\" >\n\t</div>\n\t<div class=\"feed-item colw100 inline-block no-outline auto-overflow pull-left\" [innerHTML]=\"item.description\" [ngStyle]=\"{\n\t\t\t\t'font-weight':' '+ item.fontWeight +'', \n\t\t\t\t'font-size':' '+ item.fontSize +'', 'font-family':' '+ item.fontFamily +'', 'font-style': ' '+ item.fontStyle +' ', 'text-decoration': ' '+ item.textDecoration +' ',\n\t\t\t\t'color':' '+ item.colorInfo +''}\" >\n\t</div>\n</ng-template>\n<ng-template #checkinFeed>\n\t<div class=\"posted-pic pull-left\" [ngStyle]=\"{'background': 'url(' + item.filePath+ ')'}\"></div>\n\t<div class=\"feed-item colw100 inline-block no-outline auto-overflow pull-left\" [innerHTML]=\"item.title\" [ngStyle]=\"{\n\t\t\t\t'font-weight':'bold', \n\t\t\t\t'font-size':'12px', 'font-family':' '+ item.fontFamily +'', 'font-style': ' '+ item.fontStyle +' ', 'text-decoration': ' '+ item.textDecoration +' ',\n\t\t\t\t'color':' '+ item.colorInfo +''}\" >\n\t</div>\n\t<div class=\"feed-item colw100 inline-block no-outline auto-overflow pull-left\" [innerHTML]=\"item.description\" [ngStyle]=\"{\n\t\t\t\t'font-weight':' '+ item.fontWeight +'', \n\t\t\t\t'font-size':' '+ item.fontSize +'', 'font-family':' '+ item.fontFamily +'', 'font-style': ' '+ item.fontStyle +' ', 'text-decoration': ' '+ item.textDecoration +' ',\n\t\t\t\t'color':' '+ item.colorInfo +''}\" >\n\t</div>\n</ng-template>\n<ng-template #musicFeed>\n\t<audio #musicPlayer  preload=\"none\" controls class=\"feed-music-player\">\n        <source src=\"{{item.filePath}}\" type=\"audio/mp3\">\n        <p>Your browser does not support the HTML5 Audio element.</p>\n    </audio>\n\t<div class=\"feed-item colw100 inline-block no-outline auto-overflow pull-left\" [innerHTML]=\"item.title\" [ngStyle]=\"{\n\t\t\t\t'font-weight':'bold', \n\t\t\t\t'font-size':'12px', 'font-family':' '+ item.fontFamily +'', 'font-style': ' '+ item.fontStyle +' ', 'text-decoration': ' '+ item.textDecoration +' ',\n\t\t\t\t'color':' '+ item.colorInfo +''}\" >\n\t</div>\n\t<div class=\"feed-item colw100 inline-block no-outline auto-overflow pull-left\" [innerHTML]=\"item.description\" [ngStyle]=\"{\n\t\t\t\t'font-weight':' '+ item.fontWeight +'', \n\t\t\t\t'font-size':' '+ item.fontSize +'', 'font-family':' '+ item.fontFamily +'', 'font-style': ' '+ item.fontStyle +' ', 'text-decoration': ' '+ item.textDecoration +' ',\n\t\t\t\t'color':' '+ item.colorInfo +''}\" >\n\t</div>\n</ng-template>\n\n<div class=\"colw100 feed-controls\">\n\t<div class=\"colw100 pull-left\">\n\t\t<div class=\"pull-left blue-fonts inline-block\"> \n\t\t\t<div *ngIf=\"alreadyLiked === true; then thumbsDown else thumbsUp\"></div>\n\t\t\t<ng-template #thumbsUp>\n\t\t\t\t<div class=\"action cursor-pointer\" (click)=\"likeClick($event)\">\n\t\t\t\t\t<i class=\"fa fa-thumbs-up\"></i>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t\t<ng-template #thumbsDown>\n\t\t\t\t<div class=\"action cursor-pointer\" (click)=\"likeClick($event)\">\n\t\t\t\t\t<i class=\"fa fa-thumbs-down\"></i>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t\t<div *ngIf=\"likeCount > 0; then  likeItemsCount else likeItemCount\">\n\t  \t\t</div>\n\t  \t\t<ng-template #likeItemsCount>\n\t  \t\t\t<div class=\"pull-left no-count text-center\">{{likeCount}}</div>\n\t  \t\t\t<!--<span>Like</span>-->\n\t\t\t</ng-template>\n\t  \t\t<ng-template #likeItemCount>\n\t  \t\t\t<!--<span>Like</span>-->\n\t\t\t</ng-template>\n\t\t</div>\t\n\t\t<div class=\"pull-left blue-fonts\">\n\t\t\t<div *ngIf=\"alreadyLoved === true; then lovedSymbol else loveSymbol\"></div>\n\t\t\t<ng-template #lovedSymbol>\n\t\t\t\t<div class=\"action cursor-pointer\" (click)=\"loveClick($event)\">\n\t\t\t\t\t<i class=\"fa fa-heart red-fonts\"></i>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t\t<ng-template #loveSymbol>\n\t\t\t\t<div class=\"action cursor-pointer\" (click)=\"loveClick($event)\">\n\t\t\t\t\t<i class=\"fa fa-heart blue-fonts\"></i>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t\t<div *ngIf=\"loveCount > 0; then  loveItemsCount else loveItemCount\">\n\t  \t\t</div>\n\t  \t\t<ng-template #loveItemsCount>\n\t  \t\t\t<div class=\"no-count text-center\">{{loveCount}}</div>\n\t  \t\t\t<!--<span>Love</span>-->\n\t\t\t</ng-template>\n\t  \t\t<ng-template #loveItemCount>\n\t  \t\t\t<!--<span>Love</span>-->\n\t\t\t</ng-template>\n\t\t</div>\n\t\t<div class=\"pull-left cursor-pointer blue-fonts action\" (click)=\"commentClick($event)\"><i class=\"fa fa-comment\"></i><!--<span>Comment</span>-->\n\t\t</div>\n\t</div>\n\t<div class=\"colw100 pull-left\">\n\t\t<ng-template [ngIf]=\"(isCommentsAdded && (feedItemCommentArr.length > 0))\">\n\t\t\t<div class=\"comment-box\">\n\t\t\t\t<div class=\"comment-box-items\" #commentBoxItems>\n\t\t\t\t\t<!--<div class=\"inline-block colw100\" *ngFor=\"let commentItem of feedItemCommentArr\">\n\t\t\t\t\t\t{{commentItem.commenttext}}\n\t\t\t\t\t</div>-->\n\t\t\t\t\t<app-commentitem *ngFor=\"let commentItem of feedItemCommentArr\" \n\t\t\t\t\t(refreshUpdatedComment)=\"refreshCommentItem($event)\" [item]=\"item\" [commentItem]=\"commentItem\" [userId]=\"userId\"  (refreshFeed)=\"refreshFeedItem($event)\" (editCurrentCommentItem)= \"editCurrentCommentItem($event)\">\n\t\t\t\t\t</app-commentitem>\n\n\t\t\t\t\t<ng-template [ngIf]=\"isViewMore\">\n\t\t\t\t\t\t<div class=\"colw100 inline-block\">\n\t\t\t\t\t\t\t<div class=\"view-more text-center hand-cursor blue-fonts\" (click)=\"viewMore($event)\">View More</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<div *ngIf=\"isLoading then loading\"></div>\n\t\t\t\t\t<ng-template #loading>\n\t\t\t\t\t\t<div class=\"spinner-bg\">\n\t\t\t\t\t\t\t<div class=\"spinner\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-2x fa-spin fa-spinner blue-fonts\"></i>\n\t\t\t\t\t\t\t\t<span class=\"blue-fonts\">&nbsp;Loading...</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<div *ngIf=\"(!isViewMore && (total > limit)) then endResult\"></div>\n\t\t\t\t\t<ng-template #endResult>\n\t\t\t\t\t\t<div class=\"end-result blue-fonts text-center colw100 inline-block\">--- End Of Result ---</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-template>\n\t</div>\t\n</div>\n<div class=\"pull-left colw100 inline-block\">\n\t<ng-template [ngIf]=\"addComment\">\n\t\t<i class=\"fa fa-times story-close-icon blue-fonts hand-cursor\" (click)=\"closeStory($event)\"></i>\n\t\t<app-story-box [action]=\"action\" [feedCommentItem]=\"item\" (refreshCommentItem)=\"refreshCommentItem($event)\">\n\t\t</app-story-box>\n\t</ng-template>\t\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/friend-request-pending-list/friend-request-pending-list.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/friend-request-pending-list/friend-request-pending-list.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-margin pull-left inline-block hand-cursor item-row\">\n\t<div class=\"profile-pic-medium pull-left\" [ngStyle]=\"{ 'background-image': 'url(' + profilePic + ')'}\"></div>\n\t<div class=\"row no-margin blue-fonts full-name pull-left\">{{fullName}}</div> \n\t<div class=\"row no-margin pull-right btn-group\">\n\t\t<button type=\"button\" class=\"btn btn-primary text-center save-btn\" (click)=\"confirm()\">\n\t\t\t<span class=\"pull-left\">Confirm</span>\n\t\t\t<i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n\t\t</button>\n\t\t<button id=\"loginBtn\" type=\"button\" class=\"btn btn-primary text-center\" (click)=\"ignore()\">\n\t\t\t<i class=\"fa fa-times pull-left\" aria-hidden=\"true\"></i>\n\t\t\t<span class=\"pull-left\">Ignore</span>\n\t\t</button>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-private-nav></app-private-nav>\n\n<div class=\"container top-margin bottom-margin\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n\t\t\t<div class=\"opaque-bg no-padding\">\n\t\t\t\t<app-profile-area></app-profile-area>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding tile-menu-container\">\n\t\t\t<div class=\"opaque-bg\">\n\t\t\t\t<app-tile-menu></app-tile-menu>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 info-panel\">\n\t\t\t<div class=\"opaque-bg\">\n\t\t\t\t<app-info-panel></app-info-panel>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!--<app-video></app-video>-->\n<!--<app-avchat></app-avchat>-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/info-panel/info-panel.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/info-panel/info-panel.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-ad></app-ad>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/item-tile/item-tile.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/item-tile/item-tile.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item-tile\">\n\t<div class=\"item-pic\" [ngStyle]=\"{'background': 'url(' + item.productImage+ ')'}\"></div>\n\t<div class=\"text-center\">{{item.itemName}}</div>\n\t<div class=\"blue-fonts text-center\">At&nbsp;Rs&nbsp;{{item.price}}</div>\n\t<div class=\"colw100\">\n\t\t<div class=\"pull-left\"><i class=\"fa fa-envelope blue-fonts cursor-pointer\" title=\"Email Seller\"></i></div>\n\t\t<div class=\"pull-right\"><i class=\"fa fa-cart-plus blue-fonts cursor-pointer\" title=\"Add to Cart\" (click)=\"addItemToCart($event)\"></i></div>\n\t\t<div *ngIf=\"itemCount > 0 ;then itemCounted\"></div>\n    \t<ng-template #itemCounted>\n    \t\t<div class=\"red-fonts pull-right\">{{itemCount}}&nbsp;added&nbsp;<span><i class=\"fa fa-minus blue-fonts\" (click)=\"removeItemFromCart($event)\"></i></span></div>\n    \t</ng-template>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"blue-fonts\"><h4 class=\"text-center\">Please Login</h4></div>\n<form [formGroup]=\"loginForm\">\n\t<div class=\"form-group\">\n\t\t<input type=\"email\" class=\"form-control\" aria-describedby=\"emailHelp\" placeholder=\"Email\" formControlName=\"email\" id=\"email\">\n\t\t<app-control-messages [control]=\"loginForm.controls.email\"></app-control-messages>\n\t\t<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\" id=\"password\">\n\t\t<app-control-messages [control]=\"loginForm.controls.password\"></app-control-messages>\n\t</div>\n\t<div class=\"form-group row justify-content-center align-items-center no-margin\">\n\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"showSignUp()\">\n\t\t\t<i class=\"fa fa-sign-in rotate-left\" aria-hidden=\"true\">\n\t\t\t</i><span>Sign Up</span>\n\t\t</button>\n\t\t<button id=\"loginBtn\" type=\"button\" class=\"btn btn-primary\" [disabled]=\"!loginForm.valid\" (click)=\"logIn()\">\n\t\t\t<span>Log in</span>\n\t\t\t<i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>\n\t\t</button>\n\t</div>\n\t<div [ngClass]=\"{'error-message': isError, 'status-message': isStatus}\">\n\t\t<div class=\"server-msg text-center\">{{serverMessage}}</div>\n\t</div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/market/market.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/market/market.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-private-nav></app-private-nav>\n<div class=\"container top-margin bottom-margin\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n\t\t\t<div class=\"opaque-bg no-padding\">\n\t\t\t\t<app-profile-area></app-profile-area>\n\t\t\t\t<div class=\"left-nav\">\n\t\t\t\t\t<div class=\"nav-item\" (click)=\"switchVideo($event)\" [ngClass]=\"(isHighLightStories ? 'highlight-nav' : '')\">\n\t\t\t\t\t\t<i class=\"fa fa-book blue-fonts\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span class=\"blue-fonts\">Stories</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"nav-item\" [ngClass]=\"(isHighLightMusic ? 'highlight-nav' : '')\" (click)=\"switchMusic($event)\">\n\t\t\t\t\t\t<i class=\"fa fa-pencil blue-fonts\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span class=\"blue-fonts\">Blog</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"nav-item\">\n\t\t\t\t\t\t<i class=\"fa fa-plane blue-fonts\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span class=\"blue-fonts\">Travel</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div #marketContent class=\"col-xs-12 col-sm-9 col-md-9 col-lg-9 no-padding opaque-bg market-content\">\n\t\t\t<div class=\"market-controlbar colw100\">\n\t\t\t\t<div class=\"total-count pull-left\">{{total}}&nbsp;Results</div>\n\t\t\t\t<div class=\"grid-icon pull-left\"><i class=\"fa fa-th-large fa-2x\"></i></div>\n\t\t\t\t<div class=\"list-icon pull-left\"><i class=\"fa fa-list-ul fa-2x\"></i></div>\n\t\t\t\t<div class=\"sort-params pull-left\" (click)=\"clickedInside($event);\">\n\t\t\t\t\t<span>Sort By:&nbsp;{{sortSelection}}</span>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"isMarketSortItems; then marketSortItemControls\"></div>\n\t\t\t\t\t\t<ng-template #marketSortItemControls>\n\t\t\t\t\t\t\t<div class=\"list-items market-sort-items pull-right\">\n\t\t\t\t\t\t\t\t<div class=\"arrow-up white-bg\"></div>\n\t\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"sortItemClick($event)\">Price</div>\n\t\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"sortItemClick($event)\">Name</div>\n\t\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"sortItemClick($event)\">Popularity</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t<div class=\"sort-toggle pull-left\"><i class=\"fa fa-random fa-2x\"></i></div>\n\t\t\t</div>\n\t\t\t<div class=\"market-searchbar colw100\">\n\t\t\t\t<div class=\"market-search-box pull-left\">\n\t                <div class=\"pull-left\">\n\t                    <input class=\"search-input blue-fonts\" type=\"text\" placeholder=\"Search\"  autocomplete=\"off\" spellcheck=\"false\" aria-autocomplete=\"list\" aria-expanded=\"false\" [(ngModel)]=\"albumText\" #searchAlbum/>\n\t                </div>\n\t                <div class=\"pull-left\"><i class=\"fa fa-search cursor-pointer\" aria-hidden=\"true\"></i></div>\n\t            </div>\n\t            <div class=\"pull-left add-item\" (click)=\"addItemToMarket($event)\">\n\t            \t<i class=\"fa fa-plus\"></i>\n\t            </div>\n\t           \t<div class=\"pull-right\">\n\t           \t\t<i class=\"fa fa-cart-plus blue-fonts cursor-pointer fa-2x\" (click)=\"proceedToCheckOut($event)\" title=\"Proceed to Checkout\"></i>\n\t           \t\t<ng-container *ngIf=\"totalCartItem > 0 \">\n\t\t              <div class=\"item-count cursor-pointer\" (click)='requestCountClick($event)'>{{totalCartItem}}</div>\n\t\t            </ng-container>\n\t           \t</div>\n\t            <div *ngIf=\"totalCartItem > 0 ;then itemCounted\"></div>\n\t\t    \t<ng-template #itemCounted>\n\t\t    \t\t<div class=\"red-fonts pull-right\">{{totalCartItem}}&nbsp;added to cart&nbsp;</div>\n\t\t    \t</ng-template>\n\n\t\t\t</div>\n\t\t\t<div class=\"market-content\" [ngStyle]=\"{ 'max-height': ' ' + screenHeight + 'px'}\" (scroll)=\"onScroll($event)\" #scrollMe>\n\t\t\t\t<app-item-tile #itemTile *ngFor=\"let item of marketItemArr\" [item]=\"item\" [userId]=\"userId\" [item]=\"item\" \n\t\t\t\t(onItemAddedToCart)=\"onItemAddedToCart($event)\" [cartItemArr]=\"cartItemArr\"></app-item-tile>\n\t\t\t\t<div *ngIf=\"isLoading then loading\"></div>\n\t\t\t\t<ng-template #loading>\n\t\t\t\t\t<div class=\"spinner-bg\">\n\t\t\t\t\t\t<div class=\"spinner\">\n\t\t\t\t\t\t\t<i class=\"fa fa-2x fa-spin fa-spinner blue-fonts\"></i>\n\t\t\t\t\t\t\t<span class=\"blue-fonts\">&nbsp;Loading...</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t\t<div *ngIf=\"(!isLoading && (marketItemArr.length > limit)) then endResult\"></div>\n\t\t\t\t<ng-template #endResult>\n\t\t\t\t\t<div class=\"end-result blue-fonts text-center\">--- End Of Result ---</div>\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<app-modal [modalTitle]=\"'Add Product'\" [blocking]='false' [modalId]='modalId'>\n\t<div class=\"add-product-content\">\n\t\t<div class=\"colw100 inline-block\">\n\t\t\t<app-add-item [userId]=\"userId\" (refreshMarket)=\"refreshMarket($event)\"></app-add-item>\n\t\t</div>\n\t</div>\n</app-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modal/modal.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modal/modal.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'closed': !isOpen}\">\n\t<div class=\"modal-overlay\" (click)=\"close(true)\"></div>\n\t<div class=\"modal opaque-bg\">\n\t  <div class=\"title\" *ngIf=\"modalTitle\">\n\t    <span class=\"title-text\">{{ modalTitle }}</span>\n\t    <span class=\"right-align\" (click)=\"close(true)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></span>\n\t  </div>\n\t  <div class=\"body\">\n\t    <ng-content></ng-content>\n\t  </div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/music-list/music-list.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/music-list/music-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!isShow\">\n    <div class=\"show-controls hand-cursor\" title=\"show playlist\" (click)=\"showControls($event)\">\n        <i class=\"fa fa-eye \"></i>\n    </div>\n</ng-container>\n<ng-container *ngIf=\"isShow\">\n    <div class=\"hide-controls hand-cursor\" title=\"hide playlist\" (click)=\"hideControls($event)\">\n        <i class=\"fa fa-eye-slash\"></i>\n    </div>\n    <div class=\"player-controls\" \n    \tstyle=\"position: absolute;\n        right: 10px;\n        top: 10px;\n        width: 150px;\">\n        <div class=\"pull-left control-item\" (click)=\"replayMusiic($event)\">\n            <i class=\"fa fa-repeat\"></i>\n        </div>\n    \t<div class=\"pull-left control-item\" (click)=\"playPreviousItem($event)\">\n    \t\t<i class=\"fa fa-step-backward\"></i>\n    \t</div>\n        <div *ngIf=\"isPlaying ; then pauseBtn\"></div>\n        <ng-template #pauseBtn>\n            <div class=\"pull-left control-item\" (click)=\"pauseMusiic($event)\">\n                <i class=\"fa fa-stop\"></i>\n            </div>\n        </ng-template>\n        <div *ngIf=\"isPause; then playBtn\"></div>\n        <ng-template #playBtn>\n    \t   <div class=\"pull-left control-item\" (click)=\"resumeMusiic($event)\">\n                <i class=\"fa fa-play\"></i>\n            </div>\n        </ng-template>\n    \t<div class=\"pull-left control-item\" (click)=\"playNextItem($event)\"><i class=\"fa fa-step-forward\"></i></div>\n    </div>\n    <div #musicPlayList classs=\"music-play-list\" \n    \tstyle=\"background-color: rgba(43, 144, 217, 0);\n        \tdisplay: inline-block;\n        \tbox-sizing: border-box;\n        \twidth: 150px;\n            max-height: 245px;\n        \ttext-overflow: ellipsis;\n        \toverflow-y: auto;\n        \ttext-align: left;\n        \tborder-bottom: none;\n        \tposition: absolute;\n        \tborder-bottom: 1px solid #fff;\n        \ttop: 40px;\n        \tright: 15px;\">\n    \t<div class=\"music-list\"  *ngFor=\"let item of musicSource; let indx = index\">\n    \t\t<div class=\"row no-margin pull-left inline-block hand-cursor red-highlight item-row music-item\" (click)=\"musicListItemClick($event, item, indx)\" [attr.id]=\"item.actualAudio\" [class.item-highlight]=\"item.actualAudio === actualAudio\"\n    \t\t\tstyle=\"border: 1px solid #fff; border-bottom: none;\">\n    \t\t\t<div class=\"row no-margin white-fonts music-name pull-right\">\n                    <span style=\"width: 12px; margin-left: 2px; margin-right: 4px;\">{{indx+1}}&nbsp;<span>-</span></span>\n    \t\t\t\t<span style=\"white-space: nowrap;\n        \t\t\t\ttext-overflow: ellipsis;\n        \t\t\t\toverflow: hidden;\n        \t\t\t\tdisplay: block;\n        \t\t\t\tpadding: 0px 4px;\n        \t\t\t\twidth: 110px;\n                        margin-left: 3px;\">\n        \t\t\t\t{{item.actualAudio}}\n    \t    \t\t</span>\n                    <span style=\"width: 12px; margin-left: 3px; margin-right: 2px;\"><i aria-hidden=\"true\" class=\"fa fa-music white-fonts\"></i></span>\n\n    \t    \t</div> \n    \t\t</div>\n    \t</div>\n    </div>\n</ng-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/music-player/music-player.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/music-player/music-player.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"audio-container\">\n    <canvas id='canvas'></canvas>\n    <audio #audioPlayer id=\"audio\"  preload=\"none\" controls>\n        <source src=\"{{mp3AudioPath}}\" type=\"audio/mp3\">\n        <p>Your browser does not support the HTML5 Audio element.</p>\n    </audio>\n    <div #musicList></div>\n      <!-- Video Controls -->\n    <!--<div id=\"video-controls\">\n        <div><input type=\"range\" min=\"1\" max=\"100\" step=\"1\" value=\"15\" class=\"colw100 no-outline\" id=\"seek-bar\"></div>\n        <div>\n            <i id=\"play-pause\" class=\"fa fa-play-circle fa-2x blue-fonts\"></i>    \n            <button type=\"button\" id=\"mute\">Mute</button>\n            <input type=\"range\" id=\"volumeBar\" min=\"0\" max=\"1\" step=\"0.1\" value=\"1\">\n            <button type=\"button\" id=\"full-screen\">Full-Screen</button>\n        </div>\n    </div>-->\n</div>\n<div class=\"audio-content\">\n    <div class=\"title semi-transparent-bg\">\n        <div class=\"line-height-sixteen\">\n            <i class=\"fa fa-music blue-fonts fa-2x\" aria-hidden=\"true\"></i>\n            <span class=\"blue-fonts medium-fonts\">Music</span>\n        </div>\n    </div>\n    <div *ngIf=\"isAudioAlbum ; then albumAudioUploader\"></div>\n    <ng-template #albumAudioUploader>\n        <div class=\"inline-block semi-transparent-bg colw100\">\n            <div class=\"pull-left\">\n                <div class=\"file-input-container\">\n                    <form [formGroup]=\"audioUploadForm\" action=\"/upload\" method=\"post\" enctype=\"multipart/form-data\">\n                        <div class=\"form-group\" [formGroup]=\"audioGroup\">\n                            <input type=\"file\" accept=\"audio/*\" class=\"file-input\" name=\"uploadfile\" #fileInput (change)=\"fileChangeEvent($event, true)\"/>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"uplod-new\" (click)= \"cancelAlbum(null); fileInput.value = ''; fileInput.click();\" >\n                    <i class=\"fa fa-upload blue-fonts\" aria-hidden=\"true\"></i>\n                    <span class=\"blue-fonts\">Upload New Music</span>\n                </div>\n                <div class=\"title-div red-fonts\">\n                    <i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i>\n                    <span>The music will be uploaded to your untitled album.</span>\n                </div>\n                <div class=\"new-album\">\n                    <span class=\"blue-fonts\" (click)=\"createAudioAlbum($event)\">\n                        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                        <span>Create New Album</span>\n                    </span>\n                </div>\n                <div *ngIf=\"isCreateAlbum ; then createAlbum\"></div>\n                <ng-template #createAlbum >\n                    <form [formGroup]=\"albumForm\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control no-bg no-brder-radius blue-fonts blue-border\" aria-describedby=\"emailHelp\" placeholder=\"title\" formControlName=\"albumTitle\" id=\"albumTitle\" [(ngModel)]=\"albumTitle\">\n                            <app-control-messages [control]=\"albumForm.controls.albumTitle\"></app-control-messages>\n                        </div>\n                        <div class=\"form-group\">\n                            <textarea class=\"form-control no-resize no-bg no-brder-radius blue-fonts blue-border\" rows=\"5\" cols=\"30\" placeholder=\"Add Description...\" formControlName=\"albumDesc\" id=\"albumDesc\" [(ngModel)]=\"albumDesc\">\n                            </textarea>\n                            <app-control-messages [control]=\"albumForm.controls.albumDesc\"></app-control-messages>\n                        </div>\n                        <div class=\"form-group row justify-content-center align-items-center no-margin\">\n                            <button id=\"loginBtn\" type=\"button\" class=\"btn btn-primary\" (click)=\"cancelAlbum()\" >\n                                <i class=\"fa fa-times no-margin\" aria-hidden=\"true\"></i>\n                                <span>Cancel</span>\n                            </button>\n                            <div *ngIf=\"isAddAlbum ; then addBtn\"></div>\n                            <ng-template #addBtn >\n                                <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!albumForm.valid\" (click)=\"createAlbumInfo($event)\">\n                                    <span>Create</span>\n                                    <i class=\"fa fa-pencil-square\" aria-hidden=\"true\"></i>\n                                </button>\n                            </ng-template>\n                            <div *ngIf=\"isUpdateAlbum ; then updateBtn\"></div>\n                            <ng-template #updateBtn >\n                                <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!albumForm.valid\" (click)=\"updateAlbumInfo($event)\">\n                                    <span>Edit</span>\n                                    <i class=\"fa fa-pencil-square\" aria-hidden=\"true\"></i>\n                                </button>\n                            </ng-template>\n                        </div>\n                        <div [ngClass]=\"{'error-message': isError, 'status-message': isStatus}\">\n                            <div class=\"server-msg text-center\">{{serverMessage}}</div>\n                        </div>\n                    </form>\n                </ng-template>\n                <progress value=\"0\" max=\"100\" id=\"progressBar\" [value]=\"uploadProgress\" [hidden]=\"!isProgress\"></progress>\n            </div>\n        </div>\n    </ng-template>\n    <div class=\"inline-block semi-transparent-bg colw100\">\n        <div *ngIf=\"isAudioAlbum ; then audioAlbum\"></div>\n        <ng-template #audioAlbum >\n            <div class=\"album-search-box pull-left colw100\">\n                <div class=\"pull-left\">\n                    <input class=\"search-input blue-fonts\" type=\"text\" placeholder=\"Search\"  autocomplete=\"off\" spellcheck=\"false\" aria-autocomplete=\"list\" aria-expanded=\"false\" [(ngModel)]=\"albumText\" #searchAlbum/>\n                </div>\n                <div class=\"pull-left\"><i class=\"fa fa-search cursor-pointer\" aria-hidden=\"true\"></i></div>\n            </div>\n            <div class=\"album-icons\">\n                <app-audio-album-icon class=\"pull-left\" *ngFor=\"let item of audioAlbumList | albumSearch : albumText\" [item]=\"item\" (click)=\"searchAlbum.value=''; albumText = '';\" (onEditAudioAlbum)=\"editAudioAlbum($event)\" \n                (onShowAudioList)=\"showAudioList($event)\"></app-audio-album-icon>\n            </div>\n        </ng-template>\n        <div *ngIf=\"isAlbumAudio ; then albumAudio\"></div>\n        <ng-template #albumAudio >\n            <div class=\"audio-search-box pull-left colw100\">\n                <div class=\"pull-left\">\n                    <!--<input class=\"search-input blue-fonts\" type=\"text\" placeholder=\"Search\"  autocomplete=\"off\" spellcheck=\"false\" aria-autocomplete=\"list\" aria-expanded=\"false\" [(ngModel)]=\"videoText\" #searchVideo/>-->\n                    <div class=\"cursor-pointer blue-fonts\" (click)=\"goToMyAlbum($event)\">\n                    <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\n                    <span>{{albumTitle}}</span>\n                    </div>\n                </div>\n                <!--<div class=\"pull-left\"><i class=\"fa fa-search cursor-pointer\" aria-hidden=\"true\"></i></div>-->\n            </div>\n            <div class=\"audio-uploader\">\n                <div class=\"file-input-container\">\n                    <form [formGroup]=\"audioUploadForm\" action=\"/upload\" method=\"post\" enctype=\"multipart/form-data\">\n                        <div class=\"form-group\" [formGroup]=\"audioGroup\">\n                            <input type=\"file\" accept=\"audio/*\" class=\"audio-input\" name=\"uploadfile\" #audioInput (change)=\"fileChangeEvent($event, false)\"/>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"uplod-new\" (click)= \"audioInput.value = ''; audioInput.click();\" >\n                    <i class=\"fa fa-upload blue-fonts\" aria-hidden=\"true\"></i>\n                    <span class=\"blue-fonts\">Add New Audios.</span>\n                </div>\n                <div class=\"title-div red-fonts\">\n                    <i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i>\n                    <span>The audio will be uploaded to this album.</span>\n                </div>\n            </div>\n            <div class=\"album-icons\">\n                <app-audio-icon  class=\"pull-left\" *ngFor=\"let item of audioList | audioSearch : audioText;  let indx = index\" [item]=\"item\" (click)=\"playAudio(item, indx)\"></app-audio-icon>\n            </div>\n        </ng-template>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/notification-list/notification-list.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/notification-list/notification-list.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-margin pull-left colw100 inline-block item-row\">\n\t<div class=\"profile-pic-medium pull-left\" [ngStyle]=\"{ 'background-image': 'url(' + profilePic + ')'}\"></div>\n\t<div class=\"row no-margin blue-fonts full-name pull-left not-msg\">\n\t\t<div class=\"colw100\">{{notificationMsg}}</div>\n\t\t<ng-container *ngIf=\"isVideoProcessed\">\n\t\t\t<div class=\"colw100\">\n\t\t\t\t<div class=\"hand-cursor txt-btn pull-left\" (click)= \"previewClickEvent($event, 'video')\">Preview</div>\n\t\t\t\t<div class=\"hand-cursor txt-btn pull-left\">Detail</div>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngIf=\"!isVideoProcessed\">\n\t\t\t<div class=\"colw100\">\n\t\t\t\t<div class=\"hand-cursor txt-btn pull-left\">Hide</div>\n\t\t\t\t<div class=\"hand-cursor txt-btn pull-left\">Detail</div>\n\t\t\t</div>\n\t\t</ng-container>\n\t</div> \n\t<div class=\"notification-pic pull-right\" [ngStyle]=\"{ 'background-image': 'url(' + notificationPic + ')'}\"></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/payment-info/payment-info.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/payment-info/payment-info.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"credit-card-info colw100\">\n\t<div class=\"credit-info col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center\">\n\t\t<!--<h6 class=\"blue-fonts\">Credit card Details</h6>\n\t\t<form [formGroup]=\"creditForm\" id=\"creditForm\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<select [(ngModel)]=\"creditTitleOption\" class=\"form-control\" placeholder=\"Please select card type\" formControlName=\"cardTitle\">\n\t\t        \t<option *ngFor=\"let i of cardOptions\">\n\t\t          \t\t{{i.name}}\n\t\t        \t</option>\n\t\t      \t</select>\n\t\t      \t<app-control-messages [control]=\"creditForm.controls.cardTitle\"></app-control-messages>\n\t\t    </div>\n\t\t    <div class=\"form-group\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Name on card\" formControlName=\"nameOnCard\">\n\t\t\t\t<app-control-messages [control]=\"creditForm.controls.nameOnCard\"></app-control-messages>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"number\" class=\"form-control\" placeholder=\"Credit card number\" formControlName=\"cardNumber\">\n\t\t\t\t<app-control-messages [control]=\"creditForm.controls.cardNumber\"></app-control-messages>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"date\" class=\"form-control\" placeholder=\"Card end date\" formControlName=\"cardEndDate\">\n\t\t\t\t<app-control-messages [control]=\"creditForm.controls.cardEndDate\"></app-control-messages>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"number\" class=\"form-control\" placeholder=\"CVV\" formControlName=\"cvv\">\n\t\t\t\t<app-control-messages [control]=\"creditForm.controls.cvv\"></app-control-messages>\n\t\t\t</div>\n\t\t\t<div class=\"form-group row justify-content-center align-items-center no-margin\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-large\" (click)=\"saveCreditInfo($event)\" [disabled]=\"!creditForm.valid\">\n\t\t\t\t\t<span>Continue</span>\n\t\t\t\t\t<i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n\t\t\t\t</button>\n\t\t</div>\n\t    </form>\t-->\n\t    <ng-container *ngIf=\"!isTokenReceived\">\n\t\t\t<!--<form action=\"\" method=\"POST\" id=\"payment-form\" (submit)=\"getToken()\">\n\t\t\t\t<span class=\"payment-message\">{{message}}</span>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>\n\t\t\t\t\t  <input [(ngModel)]=\"cardNumber\" placeholder=\"Card Number\" name=\"card-number\" type=\"text\" size=\"20\" data-stripe=\"number\" class=\"form-control\">\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group expiry-detail\">\n\t\t\t\t\t<label>\n\t\t\t\t\t  <input [(ngModel)]=\"expiryMonth\" placeholder=\"MM\" name=\"expiry-month\" type=\"text\" size=\"2\" data-stripe=\"exp_month\" class=\"form-control\">\n\t\t\t\t\t</label>\n\t\t\t\t\t<span> / </span>\n\t\t\t\t\t<input [(ngModel)]=\"expiryYear\" placeholder=\"YY\" name=\"expiry-year\" type=\"text\" size=\"2\" data-stripe=\"exp_year\" class=\"form-control\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>\n\t\t\t\t\t  <input [(ngModel)]=\"cvc\" placeholder=\"cvc\" name=\"cvc\" type=\"text\" size=\"4\" data-stripe=\"cvc\" class=\"form-control\" >\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t  \t<input type=\"submit\" value=\"Pay\" class=\"btn btn-primary btn-large\">\n\t\t\t</form>-->\n\t\t\t<h3 class=\"blue-fonts\">Default Stripe Form</h3>\n\n<button (click)=\"openCheckout()\">Purchase</button>\n\t\t</ng-container>\n\t\t<ng-container *ngIf=\"isTokenReceived\">\n\t\t\t<form action=\"/charge\" method=\"POST\">\n\t\t\t\t<script\n\t\t\t\tsrc=\"https://checkout.stripe.com/checkout.js\" class=\"stripe-button\"\n\t\t\t\tdata-key=\"pk_test_QegjMgcmJb5xsH11E9grYUUp\"\n\t\t\t\tdata-amount=\"1\"\n\t\t\t\tdata-name=\"wefrenz\"\n\t\t\t\tdata-description=\"2 widgets\"\n\t\t\t\tdata-image=\"/assets/images/bg.jpg\"\n\t\t\t\tdata-locale=\"auto\">\n\t\t\t\t</script>\n\t\t\t</form>\n\t\t</ng-container>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/people/people.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/people/people.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-private-nav></app-private-nav>\n<div class=\"container top-margin bottom-margin\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n\t\t\t<div class=\"opaque-bg no-padding\">\n\t\t\t\t<app-profile-area></app-profile-area>\n\t\t\t\t<div class=\"left-nav\">\n\t\t\t\t\t<div class=\"nav-item\" (click)=\"switchVideo($event)\" [ngClass]=\"(isHighLightStories ? 'highlight-nav' : '')\">\n\t\t\t\t\t\t<i class=\"fa fa-book blue-fonts\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span class=\"blue-fonts\">Stories</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"nav-item\" [ngClass]=\"(isHighLightMusic ? 'highlight-nav' : '')\" (click)=\"switchMusic($event)\">\n\t\t\t\t\t\t<i class=\"fa fa-pencil blue-fonts\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span class=\"blue-fonts\">Blog</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"nav-item\">\n\t\t\t\t\t\t<i class=\"fa fa-plane blue-fonts\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span class=\"blue-fonts\">Travel</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--\n\t\t<div #marketContent class=\"col-xs-12 col-sm-9 col-md-9 col-lg-9 no-padding opaque-bg market-content\">\n\t\t\t<div class=\"market-controlbar colw100\">\n\t\t\t\t<div class=\"total-count pull-left\">{{total}}&nbsp;Results</div>\n\t\t\t\t<div class=\"grid-icon pull-left\"><i class=\"fa fa-th-large fa-2x\"></i></div>\n\t\t\t\t<div class=\"list-icon pull-left\"><i class=\"fa fa-list-ul fa-2x\"></i></div>\n\t\t\t\t<div class=\"sort-params pull-left\" (click)=\"clickedInside($event);\">\n\t\t\t\t\t<span>Sort By:&nbsp;{{sortSelection}}</span>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"isMarketSortItems; then marketSortItemControls\"></div>\n\t\t\t\t\t\t<ng-template #marketSortItemControls>\n\t\t\t\t\t\t\t<div class=\"list-items market-sort-items pull-right\">\n\t\t\t\t\t\t\t\t<div class=\"arrow-up white-bg\"></div>\n\t\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"sortItemClick($event)\">Price</div>\n\t\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"sortItemClick($event)\">Name</div>\n\t\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"sortItemClick($event)\">Popularity</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t<div class=\"sort-toggle pull-left\"><i class=\"fa fa-random fa-2x\"></i></div>\n\t\t\t</div>\n\t\t\t<div class=\"market-searchbar colw100\">\n\t\t\t\t<div class=\"market-search-box pull-left\">\n\t                <div class=\"pull-left\">\n\t                    <input class=\"search-input blue-fonts\" type=\"text\" placeholder=\"Search\"  autocomplete=\"off\" spellcheck=\"false\" aria-autocomplete=\"list\" aria-expanded=\"false\" [(ngModel)]=\"albumText\" #searchAlbum/>\n\t                </div>\n\t                <div class=\"pull-left\"><i class=\"fa fa-search cursor-pointer\" aria-hidden=\"true\"></i></div>\n\t            </div>\n\t            <div class=\"pull-left add-item\" (click)=\"addItemToMarket($event)\">\n\t            \t<i class=\"fa fa-plus\"></i>\n\t            </div>\n\t           \t<div class=\"pull-right\">\n\t           \t\t<i class=\"fa fa-cart-plus blue-fonts cursor-pointer fa-2x\" (click)=\"proceedToCheckOut($event)\" title=\"Proceed to Checkout\"></i>\n\t           \t\t<ng-container *ngIf=\"totalCartItem > 0 \">\n\t\t              <div class=\"item-count cursor-pointer\" (click)='requestCountClick($event)'>{{totalCartItem}}</div>\n\t\t            </ng-container>\n\t           \t</div>\n\t            <div *ngIf=\"totalCartItem > 0 ;then itemCounted\"></div>\n\t\t    \t<ng-template #itemCounted>\n\t\t    \t\t<div class=\"red-fonts pull-right\">{{totalCartItem}}&nbsp;added to cart&nbsp;</div>\n\t\t    \t</ng-template>\n\n\t\t\t</div>\n\t\t\t<div class=\"market-content\" [ngStyle]=\"{ 'max-height': ' ' + screenHeight + 'px'}\" (scroll)=\"onScroll($event)\" #scrollMe>\n\t\t\t\t<app-item-tile #itemTile *ngFor=\"let item of marketItemArr\" [item]=\"item\" [userId]=\"userId\" [item]=\"item\" \n\t\t\t\t(onItemAddedToCart)=\"onItemAddedToCart($event)\" [cartItemArr]=\"cartItemArr\"></app-item-tile>\n\t\t\t\t<div *ngIf=\"isLoading then loading\"></div>\n\t\t\t\t<ng-template #loading>\n\t\t\t\t\t<div class=\"spinner-bg\">\n\t\t\t\t\t\t<div class=\"spinner\">\n\t\t\t\t\t\t\t<i class=\"fa fa-2x fa-spin fa-spinner blue-fonts\"></i>\n\t\t\t\t\t\t\t<span class=\"blue-fonts\">&nbsp;Loading...</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t\t<div *ngIf=\"(!isLoading && (marketItemArr.length > limit)) then endResult\"></div>\n\t\t\t\t<ng-template #endResult>\n\t\t\t\t\t<div class=\"end-result blue-fonts text-center\">--- End Of Result ---</div>\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</div>-->\n\t</div>\n</div>\n<!--\n<app-modal [modalTitle]=\"'Add Product'\" [blocking]='false' [modalId]='modalId'>\n\t<div class=\"add-product-content\">\n\t\t<div class=\"colw100 inline-block\">\n\t\t\t<app-add-item [userId]=\"userId\" (refreshMarket)=\"refreshMarket($event)\"></app-add-item>\n\t\t</div>\n\t</div>\n</app-modal>-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/photos-album-icon/photos-album-icon.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/photos-album-icon/photos-album-icon.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"photos-icon-container\">\n\t<div class=\"colw100 photos-edit-icon\"><i class=\"fa fa-pencil-square white-fonts pull-right\" aria-hidden=\"true\" (click)=\"editPhotosAlbum($event)\"></i></div>\n\t<div class=\"colw100 blue-fonts bold-fonts cursor-pointer\" (click)=\"showPhotosList($event)\"><span>{{item.title}}</span></div>\n\t<div class=\"colw100 blue-fonts\"><span>{{item.photosList.length}}</span><span> photo</span></div>\n\t<div class=\"colw100 blue-fonts\"><span>{{item.created | date: 'dd/MM/yyyy'}}</span></div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/photos-carousel/photos-carousel.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/photos-carousel/photos-carousel.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<carousel [sources]=\"imageSource\" [config]=\"config\"></carousel>-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/photos-icon/photos-icon.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/photos-icon/photos-icon.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"photos-icon cursor-pointer\" [ngStyle]=\"{'background': 'url(' + posterURL+ ')'}\">\n<!--i class=\"fa fa-play-circle-o fa-3x\" aria-hidden=\"true\"></i>-->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/photos/photos.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/photos/photos.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"photos-container\">\n    <div style=\"width: 100%; height: 314px\">\n        <div #photosCarousel></div>\n\t</div>\n      <!-- Video Controls -->\n    <!--<div id=\"video-controls\">\n        <div><input type=\"range\" min=\"1\" max=\"100\" step=\"1\" value=\"15\" class=\"colw100 no-outline\" id=\"seek-bar\"></div>\n        <div>\n            <i id=\"play-pause\" class=\"fa fa-play-circle fa-2x blue-fonts\"></i>    \n            <button type=\"button\" id=\"mute\">Mute</button>\n            <input type=\"range\" id=\"volumeBar\" min=\"0\" max=\"1\" step=\"0.1\" value=\"1\">\n            <button type=\"button\" id=\"full-screen\">Full-Screen</button>\n        </div>\n    </div>-->\n</div>\n<div class=\"photos-content\">\n    <div class=\"title semi-transparent-bg\">\n        <div class=\"line-height-sixteen\">\n            <i class=\"fa fa-music blue-fonts fa-2x\" aria-hidden=\"true\"></i>\n            <span class=\"blue-fonts medium-fonts\">Photos</span>\n        </div>\n    </div>\n    <div *ngIf=\"isPhotosAlbum ; then albumPhotosUploader\"></div>\n    <ng-template #albumPhotosUploader>\n        <div class=\"inline-block semi-transparent-bg colw100\">\n            <div class=\"pull-left\">\n                <div class=\"file-input-container\">\n                    <form [formGroup]=\"photosUploadForm\" action=\"/upload\" method=\"post\" enctype=\"multipart/form-data\">\n                        <div class=\"form-group\" [formGroup]=\"photosGroup\">\n                            <input type=\"file\" accept=\"image/*\" class=\"file-input\" name=\"uploadfile\" #fileInput (change)=\"fileChangeEvent($event, true)\"/>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"uplod-new\" (click)= \"cancelAlbum(null); fileInput.value = ''; fileInput.click();\" >\n                    <i class=\"fa fa-upload blue-fonts\" aria-hidden=\"true\"></i>\n                    <span class=\"blue-fonts\">Upload New Photo</span>\n                </div>\n                <div class=\"title-div red-fonts\">\n                    <i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i>\n                    <span>The music will be uploaded to your untitled album.</span>\n                </div>\n                <div class=\"new-album\">\n                    <span class=\"blue-fonts\" (click)=\"createPhotosAlbum($event)\">\n                        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                        <span>Create New Album</span>\n                    </span>\n                </div>\n                <div *ngIf=\"isCreateAlbum ; then createAlbum\"></div>\n                <ng-template #createAlbum >\n                    <form [formGroup]=\"albumForm\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control no-bg no-brder-radius blue-fonts blue-border\" aria-describedby=\"emailHelp\" placeholder=\"title\" formControlName=\"albumTitle\" id=\"albumTitle\" [(ngModel)]=\"albumTitle\">\n                            <app-control-messages [control]=\"albumForm.controls.albumTitle\"></app-control-messages>\n                        </div>\n                        <div class=\"form-group\">\n                            <textarea class=\"form-control no-resize no-bg no-brder-radius blue-fonts blue-border\" rows=\"5\" cols=\"30\" placeholder=\"Add Description...\" formControlName=\"albumDesc\" id=\"albumDesc\" [(ngModel)]=\"albumDesc\">\n                            </textarea>\n                            <app-control-messages [control]=\"albumForm.controls.albumDesc\"></app-control-messages>\n                        </div>\n                        <div class=\"form-group row justify-content-center align-items-center no-margin\">\n                            <button id=\"loginBtn\" type=\"button\" class=\"btn btn-primary\" (click)=\"cancelAlbum()\" >\n                                <i class=\"fa fa-times no-margin\" aria-hidden=\"true\"></i>\n                                <span>Cancel</span>\n                            </button>\n                            <div *ngIf=\"isAddAlbum ; then addBtn\"></div>\n                            <ng-template #addBtn >\n                                <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!albumForm.valid\" (click)=\"createAlbumInfo($event)\">\n                                    <span>Create</span>\n                                    <i class=\"fa fa-pencil-square\" aria-hidden=\"true\"></i>\n                                </button>\n                            </ng-template>\n                            <div *ngIf=\"isUpdateAlbum ; then updateBtn\"></div>\n                            <ng-template #updateBtn >\n                                <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!albumForm.valid\" (click)=\"updateAlbumInfo($event)\">\n                                    <span>Edit</span>\n                                    <i class=\"fa fa-pencil-square\" aria-hidden=\"true\"></i>\n                                </button>\n                            </ng-template>\n                        </div>\n                        <div [ngClass]=\"{'error-message': isError, 'status-message': isStatus}\">\n                            <div class=\"server-msg text-center\">{{serverMessage}}</div>\n                        </div>\n                    </form>\n                </ng-template>\n                <progress value=\"0\" max=\"100\" id=\"progressBar\" [value]=\"uploadProgress\" [hidden]=\"!isProgress\"></progress>\n            </div>\n        </div>\n    </ng-template>\n    <div class=\"inline-block semi-transparent-bg colw100\">\n        <div *ngIf=\"isPhotosAlbum ; then photosAlbum\"></div>\n        <ng-template #photosAlbum >\n            <div class=\"album-search-box pull-left colw100\">\n                <div class=\"pull-left\">\n                    <input class=\"search-input blue-fonts\" type=\"text\" placeholder=\"Search\"  autocomplete=\"off\" spellcheck=\"false\" aria-autocomplete=\"list\" aria-expanded=\"false\" [(ngModel)]=\"albumText\" #searchAlbum/>\n                </div>\n                <div class=\"pull-left\"><i class=\"fa fa-search cursor-pointer\" aria-hidden=\"true\"></i></div>\n            </div>\n            <div class=\"album-icons\">\n                <app-photos-album-icon class=\"pull-left\" *ngFor=\"let item of photosAlbumList | albumSearch : albumText\" [item]=\"item\" (click)=\"searchAlbum.value=''; albumText = '';\" (onEditPhotosAlbum)=\"editPhotosAlbum($event)\" \n                (onShowPhotosList)=\"showPhotosList($event)\"></app-photos-album-icon>\n            </div>\n        </ng-template>\n        <div *ngIf=\"isAlbumPhotos ; then albumPhotos\"></div>\n        <ng-template #albumPhotos >\n            <div class=\"photos-search-box pull-left colw100\">\n                <div class=\"pull-left\">\n                    <!--<input class=\"search-input blue-fonts\" type=\"text\" placeholder=\"Search\"  autocomplete=\"off\" spellcheck=\"false\" aria-autocomplete=\"list\" aria-expanded=\"false\" [(ngModel)]=\"videoText\" #searchVideo/>-->\n                    <div class=\"cursor-pointer blue-fonts\" (click)=\"goToMyAlbum($event)\">{{albumTitle}}</div>\n                </div>\n                <!--<div class=\"pull-left\"><i class=\"fa fa-search cursor-pointer\" aria-hidden=\"true\"></i></div>-->\n            </div>\n            <div class=\"photos-uploader\">\n                <div class=\"file-input-container\">\n                    <form [formGroup]=\"photosUploadForm\" action=\"/upload\" method=\"post\" enctype=\"multipart/form-data\">\n                        <div class=\"form-group\" [formGroup]=\"photosGroup\">\n                            <input type=\"file\" accept=\"image/*\" class=\"photos-input\" name=\"uploadfile\" #photosInput (change)=\"fileChangeEvent($event, false)\"/>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"uplod-new\" (click)= \"photosInput.value = ''; photosInput.click();\" >\n                    <i class=\"fa fa-upload blue-fonts\" aria-hidden=\"true\"></i>\n                    <span class=\"blue-fonts\">Add New Photos.</span>\n                </div>\n                <div class=\"title-div red-fonts\">\n                    <i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i>\n                    <span>The photo will be uploaded to this album.</span>\n                </div>\n            </div>\n            <div class=\"album-icons\">\n                <app-photos-icon (click)=\"showPicModal(item)\" class=\"pull-left\" *ngFor=\"let item of photosList | photosSearch : photosText\" [item]=\"item\"></app-photos-icon>\n            </div>\n        </ng-template>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/preview/preview.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/preview/preview.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"video-container\">\n\t<video #previewVideo id='videoPreview'controls autoplay>\n\t\t<!--<source id='previewMP4'\n    \tsrc=\"{{previewMP4VideoPath}}\" \n    \ttype='video/mp4'>\n\t\t\t<p>Your browser does not support the HTML5 Video element.</p>-->\n\t</video>\n</div>\n<div class=\"prev-btn-group row justify-content-center align-items-center colw100 no-margin\">\n\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"shareVideo($event)\">\n\t\t<i class=\"fa fa-share rotate-left\" aria-hidden=\"true\"></i>\n\t\t<span>Share</span>\n\t</button>\n\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"deletePreviewVideo($event)\">\n\t\t<span>Delete</span>\n\t\t<i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n\t</button>\n</div>\n<div *ngIf=\"isShareVideo ; then postVideo\"></div>\n<ng-template #postVideo>\n\t<div class=\"share-video\" (click)=\"clickedInside($event)\">\n\t   \t<form [formGroup]=\"videoForm\">\n\t        <div class=\"form-group\">\n\t            <input type=\"text\" class=\"form-control no-bg no-brder-radius blue-fonts blue-border\" placeholder=\"video title\" formControlName=\"videoTitle\" \n\t            [(ngModel)]=\"videoTitle\"/>\n\t        </div>\n\t        <div class=\"form-group\">\n\t        \t<textarea class=\"form-control no-resize no-bg no-brder-radius blue-fonts blue-border\" rows=\"5\" cols=\"30\" placeholder=\"Add Description...\" \n\t        \tformControlName=\"videoDesc\" [(ngModel)]=\"videoDesc\"></textarea>\n\t        </div>\n\t        <div class=\"form-group row justify-content-center align-items-center no-margin\">\n\t            <button type=\"button\" class=\"btn btn-primary\">\n\t                <i class=\"fa fa-times no-margin\" aria-hidden=\"true\"></i>\n\t                <span>Cancel</span>\n\t            </button>\n\t            <button type=\"button\" class=\"btn btn-primary\">\n\t                <span>Post</span>\n\t                <i class=\"fa fa-pencil-square\" aria-hidden=\"true\"></i>\n\t            </button>\n\t        </div>\n\t        <div [ngClass]=\"{'error-message': isError, 'status-message': isStatus}\">\n\t            <div class=\"server-msg text-center\">{{serverMessage}}</div>\n\t        </div>\n\t    </form>\n\t</div>\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/private-nav/private-nav.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/private-nav/private-nav.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\" (window:resize)=\"onResize($event)\">\n  <button (click)=\"toggleNav()\" class=\"navbar-toggler navbar-toggler-right fa fa-bars\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n  </button>\n  <div [ngClass]=\"('navbar-collapse ' + (active ? 'collapse' : ''))\" id=\"navbarTogglerDemo02\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-md-0\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#/home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i><span>Home</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"getAllFriendReq($event)\">\n          <i class=\"fa fa-users\" aria-hidden=\"true\">\n            <ng-container *ngIf=\"isFriendRequestPendingDisplay\">\n              <div class=\"request-count cursor-pointer\" (click)='requestCountClick($event)'>{{friendRequestCount}}</div>\n            </ng-container>\n          </i><span>Friends</span></a>\n          <div class='friend-request-pending-list' [ngClass]=\"(isFriendReuestBorder ? 'add-border' : '')\" (click)=\"clickedInside($event)\">\n            <app-friend-request-pending-list (onFriendConfirmed)='onFriendConfirmed($event)'  class=\"in-line\" *ngFor=\"let item of friendRequestPendingList\" [item]=\"item\" >\n            </app-friend-request-pending-list>\n          </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i><span>Messages</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"fetchAllNotifications($event)\">\n          <i class=\"fa fa-bell\" aria-hidden=\"true\">\n              <ng-container *ngIf=\"isNotificationCountDisplay\">\n                <div class=\"request-count cursor-pointer\" (click)='notificationCountClick($event)'>{{notificationCount}}</div>\n              </ng-container>\n          </i>\n          <span>Notifications</span></a>\n          <div class='notification-list' [ngClass]=\"(isNotificationDisplay ? 'add-border' : '')\" (click)=\"clickedInside($event)\">\n            <ng-container *ngIf=\"isNotificationDisplay\">\n              <app-notification-list  class=\"in-line\" *ngFor=\"let item of notificationList\" [item]=\"item\" (onPreviewClick)=\"previewClicked($event)\">\n              </app-notification-list>\n            </ng-container>\n          </div>\n      </li>\n      <li class=\"nav-item search-box\">\n        <div>\n          <input class=\"search-input pull-left blue-fonts\" type=\"text\" id=\"search-query\" placeholder=\"Search Wefrenz\"  autocomplete=\"off\" spellcheck=\"false\" aria-autocomplete=\"list\" aria-expanded=\"false\" [value]=\"searchValue\" (input)=\"querySearch($event.target.value)\"/>\n          <i class=\"fa fa-search pull-right cursor-pointer\" aria-hidden=\"true\"></i>\n        </div>\n        <div class='search-result-contents' [ngClass]=\"(isBorder ? 'add-border' : '')\" (click)=\"clickedInside($event)\">\n          <app-search-result-list-item  class=\"in-line\" *ngFor=\"let item of searchResultList\" [item]=\"item\">\n          </app-search-result-list-item>\n        </div>\n      </li>\n      <li class=\"nav-item setting-btn\">\n        <span class=\"nav-link\"><i class=\"fa fa-cog cursor-pointer\" aria-hidden=\"true\"></i></span>\n      </li>\n      <li class=\"nav-item logout-btn\" >\n        <span class=\"nav-link\">\n          <i class=\"fa fa-sign-out cursor-pointer\" aria-hidden=\"true\" (click)=\"logOut()\"></i>\n        </span>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<app-modal [modalTitle]=\"'Notification Info'\" [blocking]='false' [modalId]='modalId' (onModalClose)=\"onModalClosed($event)\">\n  <div *ngIf=\"isShowPreview then previewShow\"></div>\n  <ng-template #previewShow>\n    <app-preview [previewInfo]=\"notificationInfo\" (onPreviewWindowReady)=\"previewWindowReady($event)\" (onVideoDeleted)=\"videoDeleted($event)\" #appPreview></app-preview>\n  </ng-template>\n</app-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile-area/profile-area.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile-area/profile-area.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row profile-card\">\n    <app-modal [modalTitle]=\"'Profile Pic Preview'\" [blocking]='false' [modalId]='modalId' #previewPicModal \n    (onModalClose)=\"onModalClosed()\">\n    \t<div *ngIf=\"isProfilePicControls;then profilePicControls else profilePicCam\"></div>\n    \t<ng-template #profilePicControls>\n\t    \t<div class=\"preview-profile-pic\">\n\t    \t\t<!--<img id=\"previewProfilePic\" src=\"{{encodedImage}}\"/>-->\n\t\t\t    <app-image-cropper [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"true\" [resizeToWidth]=\"150\" format=\"jpeg\" \n\t\t\t    (imageCropped)=\"imageCropped($event)\"></app-image-cropper>\n\t    \t</div>\n\t    \t<img class=\"cropped-preview-img\" *ngIf=\"croppedImage\" [src]=\"croppedImage\" (load)=\"computeCroppedImage()\"/>\n\t      \t<div>\t\t\t\n\t    \t\t<button id=\"okBtn\" type=\"button\" class=\"btn btn-primary text-center small-btn ok-btn\" (click)=\"ok()\">\n\t\t\t\t\t<span class=\"pull-left\">Ok</span>\n\t\t\t\t\t<i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<ng-template #profilePicCam >\n\t\t\t<app-capture-pic (onCapturePic)=\"onPicCaptured()\" (onCamRender)=\"onCamRendered()\"></app-capture-pic>\n\t\t</ng-template>\n    </app-modal>\n\t<div class=\"file-input-container\">\n\t\t<!--<form [formGroup]=\"profilePicUploadForm\" action=\"/upload\" method=\"post\" enctype=\"multipart/form-data\">\n\t\t\t<div class=\"form-group\" [formGroup]=\"profilePicGroup\">\n\t  \t\t\t<input type=\"file\" class=\"file-input\" name=\"uploadfile\" #fileInput (change)=\"fileChangeEvent($event)\"/>\n\t  \t\t</div>\n\t\t</form>-->\n\t\t<input type=\"file\" class=\"file-input\" name=\"uploadfile\" #fileInput (change)=\"fileChangeEvent($event)\"/>\n\t</div>\n\t<!--<div class=\"profile-pic\" [ngStyle]=\"{ 'background-image': 'url(' + profilePic + ')', 'height': 'auto', 'width': profilePicWidth}\">-->\n\t<div class=\"profile-pic\" [ngStyle]=\"{ 'background-image': 'url(' + profilePic + ')'}\">\n\t<!--<div class=\"profile-pic\">\n\t\t<img [src]=\"profilePic\"/>-->\n\t\t<div class=\"title-bar\">\n\t\t\t<div class=\"pull-left cam-icon\">\n\t\t\t\t<i class=\"fa fa-camera white-fonts hand-cursor\" aria-hidden=\"true\" (click)=\"camInputClick()\"></i>\n\t\t\t</div>\n\t\t\t<div class=\"upload-icon\"><i class=\"fa fa-upload white-fonts hand-cursor\" aria-hidden=\"true\" \n\t\t\t(click)=\"fileInput.value = ''; fileInput.click()\"></i></div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"colw100 user-info\">\n\t\t<div class=\"row no-margin full-name hand-cursor\" (click)=\"navigateToMyProfile($event);\"><h4 class=\"no-margin\">{{fullName}}</h4></div>\n\t\t<div class=\"row no-margin email-id\"><a href=\"mailto:\" class=\"no-text-decoration\">{{userId}}</a></div>\n\t<div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-private-nav (onFriendConfirmedFromNotification)= \"onFriendConfirmedFromNotification($event)\"></app-private-nav>\n<div class=\"container\" >\n\t<div class=\"opaque-bg cover-pic-area top-margin\">\n\t\t<app-coverpic #appCoverPic ></app-coverpic>\n\t</div>\n\t<div class=\"cover-profile-pic\" [ngStyle]=\"{ 'background-image': 'url(' + profilePic + ')'}\">\n\t\t<ng-container *ngIf=\"isMyProfile\">\n\t\t\t<div class='title-bar row no-margin white-fonts full-name'><a href=\"/#/home\" class=\"default-link\">{{fullName}}</a></div>\n\t\t</ng-container>\n\t\t<ng-container *ngIf=\"!isMyProfile\">\n\t\t\t<div class='title-bar row no-margin white-fonts full-name'>{{fullName}}</div>\n\t\t</ng-container>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/public-nav/public-nav.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/public-nav/public-nav.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\" (window:resize)=\"onResize($event)\" >\n  <button (click)=\"toggleNav()\" class=\"navbar-toggler navbar-toggler-right fa fa-bars\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n  </button>\n  <div [ngClass]=\"('navbar-collapse ' + (active ? 'collapse' : ''))\" id=\"navbarTogglerDemo02\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-md-0\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"\"><i class=\"fa fa-wrench\" aria-hidden=\"true\"></i><span>Services</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"\"><i class=\"fa fa-pencil-square\" aria-hidden=\"true\"></i><span>Testimonials</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"\"><i class=\"fa fa-book\" aria-hidden=\"true\"></i><span>Blog</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"\"><i class=\"fa fa-cc-discover\" aria-hidden=\"true\"></i><span>About</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"\"><i class=\"fa fa-address-book-o\" aria-hidden=\"true\"></i><span>Contact</span></a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/public/public.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/public/public.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-public-nav></app-public-nav>\n<div class=\"container h-100 login-signup\">\n  <div class=\"row no-margin h-100 justify-content-center align-items-center\">\n  \t<div #loginSignUp>\n     </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/search-result-list-item/search-result-list-item.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search-result-list-item/search-result-list-item.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-margin pull-left inline-block hand-cursor item-row\" (click)=\"searchListItemClick($event)\">\n\t<div class=\"profile-pic-small pull-left\" [ngStyle]=\"{ 'background-image': 'url(' + profilePic + ')'}\"></div>\n\t<div class=\"row no-margin blue-fonts full-name pull-right\">{{fullName}}</div> \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"blue-fonts\"><h4 class=\"text-center\">Please Sign Up</h4></div>\n<form [formGroup]=\"signupForm\">\n\t<div class=\"form-group\">\n\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Name\" formControlName=\"fullName\" id=\"fullName\">\n\t\t<app-control-messages [control]=\"signupForm.controls.fullName\"></app-control-messages>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<input type=\"email\" class=\"form-control\" aria-describedby=\"emailHelp\" placeholder=\"Email\" formControlName=\"email\" id=\"email\">\n\t\t<app-control-messages [control]=\"signupForm.controls.email\"></app-control-messages>\n\t\t<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\" id=\"password\">\n\t\t<app-control-messages [control]=\"signupForm.controls.password\"></app-control-messages>\n\t</div>\n\t<div class=\"form-group row justify-content-center align-items-center no-margin\">\n\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"showLogin()\">\n\t\t\t<i class=\"fa fa-sign-in rotate-left\" aria-hidden=\"true\"></i>\n\t\t\t<span>Login</span>\n\t\t</button>\n\t\t<button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!signupForm.valid\" (click)=\"signUp()\">\n\t\t\t<span>Sign Up</span>\n\t\t\t<i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>\n\t\t</button>\n\t</div>\n\t<div [ngClass]=\"{'error-message': isError, 'status-message': isStatus}\"><div class=\"server-msg text-center\">{{serverMessage}}</div></div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/stories/stories.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/stories/stories.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-private-nav></app-private-nav>\n<div class=\"container top-margin bottom-margin\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n\t\t\t<div class=\"opaque-bg no-padding\">\n\t\t\t\t<app-profile-area></app-profile-area>\n\t\t\t\t<div class=\"left-nav\">\n\t\t\t\t\t<div class=\"nav-item\" (click)=\"switchVideo($event)\" [ngClass]=\"(isHighLightStories ? 'highlight-nav' : '')\">\n\t\t\t\t\t\t<i class=\"fa fa-book blue-fonts\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span class=\"blue-fonts\">Stories</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"nav-item\" [ngClass]=\"(isHighLightMusic ? 'highlight-nav' : '')\" (click)=\"switchMusic($event)\">\n\t\t\t\t\t\t<i class=\"fa fa-pencil blue-fonts\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span class=\"blue-fonts\">Blog</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"nav-item\">\n\t\t\t\t\t\t<i class=\"fa fa-plane blue-fonts\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span class=\"blue-fonts\">Travel</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div #feedContent class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding opaque-bg feed-content\" \n\t\t[ngStyle]=\"{ 'max-height': ' ' + screenHeight + 'px'}\" (scroll)=\"onScroll($event)\" \n\t\t(feedScrollEnd)=\"onFeedScrollEnd($event)\" #scrollMe>\n\t\t\t<div class=\"story-content\">\n\t\t\t\t<ng-template [ngIf]=\"isStories\">\n\t\t\t\t\t<app-story-box [action]=\"action\" #storyBoxComponent></app-story-box>\n\t\t\t\t</ng-template>\t\n\t\t\t\t<ng-template [ngIf]=\"isBlog\">\n\t\t\t\t\t<app-music-player></app-music-player>\n\t\t\t\t</ng-template>\t\n\t\t\t\t<ng-template [ngIf]=\"isActivity\">\n\t\t\t\t\t<app-photos></app-photos>\n\t\t\t\t</ng-template>\t\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 info-panel\">\n\t\t\t<div class=\"opaque-bg\">\n\t\t\t\t<app-info-panel></app-info-panel>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/story-box/story-box.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/story-box/story-box.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inline-block colw100 story-feed\" [ngClass]=\"{'comment-box': isComment === true}\" id=\"feedTop\">\n\t<div *ngIf=\"!isComment; then profilePicBox\"></div>\n\t<ng-template #profilePicBox>\n\t\t<!--<div class=\"profile-pic no-padding pull-left contain-bg\" [ngStyle]=\"{ 'background-image': 'url(' + profilePic + ')'}\">\n\t\t</div>-->\n\t</ng-template>\n\t<div name=\"story\" #storyBox class=\"story-box colw100 inline-block no-outline auto-overflow pull-left\" contenteditable=\"true\" spellcheck=\"true\" role=\"textbox\" aria-multiline=\"true\" data-placeholder-default=\"What’s happening?\" aria-autocomplete=\"list\" aria-expanded=\"false\" [style.color]=\"color\" [style.font-family]=\"fontFamily\" [style.font-size]=\"fontSize\" [style.font-weight]=\"fontWeight\" [style.text-decoration]=\"txtDeco\" [style.font-style]=\"fontStyle\"  [innerHTML]=\"storyContent\" \n\t(keyup)=\"onStoryContentChange($event)\" (keydown)=\"onStoryContentChanged($event.keyCode)\">\n\t</div>\n\t<div class=\"control-bar inline-block\">\n\t\t<div class=\"pull-left color-picker-icon\">\n\t\t\t<input [colorPicker]=\"color\" (colorPickerChange)=\"color=$event; colorPickerChange($event);\" [style.background]=\"color\" class=\"cursor-pointer\"/>\n\t\t</div>\n\t\t<div class=\"pull-left text-style-btn gray-fonts cursor-pointer sqr-btn\" (click)=\"toggleTextStyling($event); clickedInside($event);\">\n\t\t\t<i class=\"fa fa-edit\"></i>\n\t\t</div>\n\t\t<div *ngIf=\"isShowTextStyling; then textStyling\"></div>\n\t\t<ng-template #textStyling>\n\t\t\t<div class=\"list-items pull-left text-styles\">\n\t\t\t\t<div class=\"arrow-up white-bg\"></div>\n\t\t\t\t<div class=\"pull-left font-bold-btn gray-fonts cursor-pointer text-center\" [class.high-light]=\"isBoldBtnHighLight\" (click)=\"applyBold($event); clickedInside($event);\">\n\t\t\t\t\t<span>B</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"pull-left font-ul-btn gray-fonts cursor-pointer text-center\" [class.high-light]=\"isULBtnHighLight\" (click)=\"applyUnderline($event); clickedInside($event);\">\n\t\t\t\t\t<span>U</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"pull-left font-italic-btn gray-fonts cursor-pointer text-center\" [class.high-light]=\"isIBtnHighLight\"  (click)=\"applyItalic($event);clickedInside($event);\">\n\t\t\t\t\t<span>I</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"pull-left font-family-btn\" (click)=\"toggleFontFamily($event); clickedInside($event);\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<i class=\"fa fa-font gray-fonts cursor-pointer\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"isShowFontFamily; then fontFamilies\"></div>\n\t\t\t\t\t<ng-template #fontFamilies>\n\t\t\t\t\t\t<div class=\"list-items font-items pull-left\">\n\t\t\t\t\t\t\t<div class=\"arrow-up white-bg\"></div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontFamily($event, 'Arial')\">Arial</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontFamily($event, 'Times New Roman')\">Times New Roman</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontFamily($event, 'Courier New')\">Courier New</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"pull-left font-size-btn\" (click)=\"clickedInside($event)\">\n\t\t\t\t\t<div class=\"gray-fonts cursor-pointer text-center\" (click)=\"toggleFontSize($event)\"><span>{{fontSize}}</span></div>\n\t\t\t\t\t<div *ngIf=\"isShowFontSize; then fontSizes\"></div>\n\t\t\t\t\t<ng-template #fontSizes>\n\t\t\t\t\t\t<div class=\"list-items font-sizes pull-left\">\n\t\t\t\t\t\t\t<div class=\"arrow-up white-bg\"></div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 9)\">9</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 10)\">10</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 11)\">11</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 12)\">12</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 13)\">13</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 14)\">14</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 15)\">15</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 16)\">16</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 17)\">17</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 18)\">18</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 19)\">19</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 20)\">20</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 21)\">21</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 22)\">22</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 23)\">23</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 24)\">24</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 25)\">25</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<div class=\"pull-left smiley-btn gray-fonts cursor-pointer text-center sqr-btn\" [class.high-light]=\"isEmotionsHighLight\"  (click)=\"showEmotions($event);clickedInside($event);\">\n\t\t\t<i class=\"fa fa-smile-o\"></i>\n\t\t</div>\n\t\t<div *ngIf=\"isEmotionsHighLight; then emotions\"></div>\n\t\t<ng-template #emotions>\n\t\t\t<div class=\"arrow-up white-bg\" id=\"emotionArrow\"></div>\n\t\t\t<div class=\"list-items font-items pull-left emo-list\">\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':)')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion0-smile.gif\"/></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':(')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion1-sadsmile.gif\"/></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':D')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion2-bigsmile.gif\"/></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, '8=)')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion3-cool.gif\"/></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':o')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion4-surprised.gif\"/></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ';)')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion5-wink.gif\"/></span>\n\t\t\t\t</div>\n\n\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ';(')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion6-crying.gif\"/></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, '(:|')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion7-sweating.gif\"/></span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':|')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion8-speechless.gif\"/></span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':*')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion9-kiss.gif\"/></span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, 'emotion10-tongueout')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion10-tongueout.gif\"/></span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':$')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion11-blush.gif\"/></span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':^)')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion12-wondering.gif\"/></span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, '|-)')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion13-sleepy.gif\"/></span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, '|(')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion14-dull.gif\"/></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<div class=\"pull-left up-img-btn gray-fonts cursor-pointer text-center\" (click)= \"imageInput.value = ''; imageInput.click();\">\n\t\t\t<i class=\"fa fa-picture-o\" aria-hidden=\"true\"></i>\n\t\t</div>\n\t\t<div class=\"pull-left up-mus-btn gray-fonts cursor-pointer text-center\" (click)= \"musicInput.value = ''; musicInput.click();\">\n\t\t\t<i class=\"fa fa-music\" aria-hidden=\"true\"></i>\n\t\t</div>\n\t\t<div class=\"pull-left up-vid-btn gray-fonts cursor-pointer text-center\" (click)= \"videoInput.value = ''; videoInput.click();\">\n\t\t\t<i class=\"fa fa-file-video-o\" aria-hidden=\"true\"></i>\n\t\t</div>\n\t\t<div  *ngIf=\"!isComment; then checkIn\"></div>\n\t\t<ng-template #checkIn>\n\t\t\t<div class=\"checkin-btn pull-left up-vid-btn gray-fonts cursor-pointer text-center\" (click)=\"doCheckIn($event)\">\n\t\t\t\t\t<i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<div *ngIf=\"!isComment; then postBtn  else addBtn\"></div>\n\t\t<ng-template #postBtn>\n\t\t\t<div class=\"pull-left post-button blue-fonts cursor-pointer text-center\">\n\t\t\t\t<div *ngIf=\"isAddPost; then addPost else updatePost\"></div>\n\t\t\t\t<ng-template #addPost>\n\t\t\t\t\t<button class=\"btn btn-primary\" class=\"post-btn\" type=\"button\" (click)=\"postStory($event)\" [disabled]=\"(storyBox.innerText.trim().length === 0) && (!isSmileyAdded)\">\n\t\t\t\t\t\t<span>Post</span>\n\t\t\t\t\t\t<i class=\"fa fa-share-square-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</ng-template>\n\t\t\t\t<ng-template #updatePost>\n\t\t\t\t\t<button class=\"btn btn-primary\" class=\"post-btn\" type=\"button\" (click)=\"updateStory($event)\" [disabled]=\"(storyBox.innerText.trim().length === 0) && (!isSmileyAdded)\">\n\t\t\t\t\t\t<span>Update</span>\n\t\t\t\t\t\t<i class=\"fa fa-share-square-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<ng-template #addBtn>\n\t\t\t<div class=\"pull-left post-button blue-fonts cursor-pointer text-center\">\n\t\t\t\t<div *ngIf=\"isAddComment; then addComment else updateComment\"></div>\n\t\t\t\t<ng-template #addComment>\n\t\t\t\t\t<button class=\"btn btn-primary\" class=\"post-btn\" type=\"button\" (click)=\"postStory($event)\" [disabled]=\"(storyBox.innerText.trim().length === 0) && (!isSmileyAdded)\">\n\t\t\t\t\t\t<span>Add</span>\n\t\t\t\t\t\t<i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</ng-template>\n\t\t\t\t<ng-template #updateComment>\n\t\t\t\t\t<button class=\"btn btn-primary\" class=\"post-btn\" type=\"button\" (click)=\"updateCommentItem($event)\" \n\t\t\t\t\t\t[disabled]=\"(storyBox.innerText.trim().length === 0) && (!isSmileyAdded)\">\n\t\t\t\t\t\t<span>Update</span>\n\t\t\t\t\t\t<i class=\"fa fa-edit\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</ng-template>\n\t</div>\n\t<!--<div class=\"action-bar\">\n\t\t<div class=\"pull-left\">\n\t\t\t<button class=\"btn btn-primary\" id=\"postBtn\" type=\"button\" (click)=\"checkIn($event)\">\n\t\t\t\t<span>Check In</span>\n\t\t\t\t<i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n\t\t\t</button>\n\t\t</div>\n\t\t<div class=\"pull-left\">\n\t\t\t<button class=\"btn btn-primary\" id=\"postBtn\" type=\"button\" (click)=\"updateStory($event)\">\n\t\t\t\t<span>Go Live</span>\n\t\t\t\t<i class=\"fa fa-video-camera\" aria-hidden=\"true\"></i>\n\t\t\t</button>\n\t\t</div>\n\t\t<div class=\"pull-left\">\n\t\t\t<button class=\"btn btn-primary\" id=\"postBtn\" type=\"button\" (click)=\"updateStory($event)\">\n\t\t\t\t<span>Activity</span>\n\t\t\t\t<i class=\"fa fa-share-square-o\" aria-hidden=\"true\"></i>\n\t\t\t</button>\n\t\t</div>\n\t\t<div class=\"pull-left\">\n\t\t\t<button class=\"btn btn-primary\" id=\"postBtn\" type=\"button\" (click)=\"updateStory($event)\">\n\t\t\t\t<span>Event</span>\n\t\t\t\t<i class=\"fa fa-share-square-o\" aria-hidden=\"true\"></i>\n\t\t\t</button>\n\t\t</div>\n\t</div> -->\n    <div class=\"file-input-container\">\n        <form [formGroup]=\"imageUploadForm\" action=\"/upload\" method=\"post\" enctype=\"multipart/form-data\">\n            <div class=\"form-group\" [formGroup]=\"imageGroup\">\n                <input type=\"file\" accept=\"image/*\" class=\"file-input\" name=\"uploadimage\" #imageInput (change)=\"fileChangeEvent($event, 'image')\"/>\n            </div>\n        </form>\n        <form [formGroup]=\"musicUploadForm\" action=\"/upload\" method=\"post\" enctype=\"multipart/form-data\">\n            <div class=\"form-group\" [formGroup]=\"musicGroup\">\n                <input type=\"file\" accept=\"audio/*\" class=\"file-input\" name=\"uploadmusic\" #musicInput (change)=\"fileChangeEvent($event, 'music')\"/>\n            </div>\n        </form>\n        <form [formGroup]=\"videoUploadForm\" action=\"/upload\" method=\"post\" enctype=\"multipart/form-data\">\n            <div class=\"form-group\" [formGroup]=\"videoGroup\">\n                <input type=\"file\" accept=\"video/*\" class=\"file-input\" name=\"uploadvideo\" #videoInput (change)=\"fileChangeEvent($event, 'video')\"/>\n            </div>\n        </form>\n    </div>\n</div>\n\n<div *ngIf=\"!isComment then storyFeedItem\"></div>\n<ng-template #storyFeedItem>\n\t<div class=\"inline-block colw100 story-feed\" #storyFeed>\n\t\t<app-feeditem *ngFor=\"let item of feedItem\" [item]=\"item\" [userId]=\"userId\" (refreshFeed)=\"refreshFeedItem($event)\" \n\t\t(editCurrentFeedItem)= \"editCurrentFeedItem($event)\"></app-feeditem>\n\t\t<div *ngIf=\"isLoading then loading\"></div>\n\t\t<ng-template #loading>\n\t\t\t<div class=\"spinner-bg\">\n\t\t\t\t<div class=\"spinner\">\n\t\t\t\t\t<i class=\"fa fa-2x fa-spin fa-spinner blue-fonts\"></i>\n\t\t\t\t\t<span class=\"blue-fonts\">&nbsp;Loading...</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<div *ngIf=\"(!isLoading && (feedItem.length > limit)) then endResult\"></div>\n\t\t<ng-template #endResult>\n\t\t\t<div class=\"end-result blue-fonts text-center\">--- End Of Result ---</div>\n\t\t</ng-template>\n\t</div>\n</ng-template>\n\n<app-modal [modalTitle]=\"'Post Preview'\" [blocking]='false' [modalId]='modalId'>\n\t<div class=\"post-desc-content\">\n\t\t<div class=\"colw100 inline-block\">\n\t\t\t<div *ngIf=\"fileType === 'image' then previewPic\"></div>\n\t\t\t<div *ngIf=\"fileType === 'music' then previewMusic\"></div>\n\t\t\t<div *ngIf=\"fileType === 'video' then previewVideo\"></div>\n\t\t\t<div *ngIf=\"fileType === 'checkin' then previewCheckIn\"></div>\n\t\t\t<ng-template #previewPic>\n\t\t\t\t<div class=\"preview-posted-pic pull-left\" [ngStyle]=\"{'background': 'url(' + encodedImage+ ')'}\"></div>\n\t\t\t\t<div class=\"pull-right\">\n\t\t            <div>\n\t\t                <input type=\"text\" class=\"form-control no-bg no-brder-radius blue-fonts blue-border\" placeholder=\"title\" id=\"postTitle\" [(ngModel)]=\"postTitle\">\n\t\t            </div>\n\t\t            <div class=\"form-group\">\n\t\t                <textarea class=\"form-control no-resize no-bg no-brder-radius blue-fonts blue-border\" rows=\"5\" cols=\"30\" placeholder=\"Add Description...\" id=\"postDesc\" [(ngModel)]=\"postDesc\">\n\t\t                </textarea>\n\t\t            </div>\n\t\t        </div>\n\t\t        <div *ngIf=\"isPostImage; then addImagePost else updateImagePost\"></div>\n\t\t        <ng-template #addImagePost>\n\t\t\t        <div class=\"colw100 inline-block\">\t\t\t\n\t\t\t\t\t\t<button id=\"okBtn\" type=\"button\" class=\"btn btn-primary text-center small-btn ok-btn\" (click)=\"postImage($event)\" [disabled]=\"isProgress\">\n\t\t\t\t\t\t\t<span class=\"pull-left\">Post</span>\n\t\t\t\t\t\t\t<i class=\"fa fa-share-square-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t\t<ng-template #updateImagePost>\n\t\t\t        <div class=\"colw100 inline-block\">\t\t\t\n\t\t\t\t\t\t<button id=\"okBtn\" type=\"button\" class=\"btn btn-primary text-center small-btn ok-btn\" (click)=\"updateImage($event)\" [disabled]=\"isProgress\">\n\t\t\t\t\t\t\t<span class=\"pull-left\">Update</span>\n\t\t\t\t\t\t\t<i class=\"fa fa-share-square-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</ng-template>\n\t\t\t<ng-template #previewMusic>\n\t\t\t\t<div class=\"preview-posted-music pull-left\">\n\t\t\t\t\t<audio #musicPlayer  preload=\"none\" controls id=\"previewMusicPlayer\">\n\t\t\t\t        <source src=\"{{postedMusicPath}}\" type=\"audio/mp3\">\n\t\t\t\t        <p>Your browser does not support the HTML5 Audio element.</p>\n\t\t\t\t    </audio>\n\t\t\t\t    <progress value=\"0\" max=\"100\" id=\"progressBar\" [value]=\"uploadProgress\" [hidden]=\"!isProgress\"></progress>  \n\t\t\t\t</div>\n\t\t\t\t<div class=\"pull-right\">\n\t\t            <div>\n\t\t                <input type=\"text\" class=\"form-control no-bg no-brder-radius blue-fonts blue-border\" placeholder=\"title\" id=\"postTitle\" [(ngModel)]=\"postTitle\">\n\t\t            </div>\n\t\t            <div class=\"form-group\">\n\t\t                <textarea class=\"form-control no-resize no-bg no-brder-radius blue-fonts blue-border\" rows=\"5\" cols=\"30\" placeholder=\"Add Description...\" id=\"postDesc\" [(ngModel)]=\"postDesc\">\n\t\t                </textarea>\n\t\t            </div>\n\t\t        </div>\n\t\t        <div class=\"colw100 inline-block\">\t\t\t\n\t\t\t\t\t<button id=\"okBtn\" type=\"button\" class=\"btn btn-primary text-center small-btn ok-btn\" (click)=\"postMusic($event)\" [disabled]=\"isProgress\">\n\t\t\t\t\t\t<span class=\"pull-left\">Post</span>\n\t\t\t\t\t\t<i class=\"fa fa-share-square-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t\t<ng-template #previewVideo>\n\t\t\t\t<div class=\"preview-posted-video pull-left\">\n\t\t\t\t    <video #videoPlayer id='previewVideoPlayer' controls poster=\"{{posterPath}}\">\n\t\t\t\t        <source src=\"{{postedVideoPath}}\" type='video/mp4'>\n\t\t\t\t      \t<p>Your browser does not support the HTML5 Video element.</p>\n\t\t\t\t    </video>\n\t\t\t\t    <progress value=\"0\" max=\"100\" id=\"progressBar\" [value]=\"uploadProgress\" [hidden]=\"!isProgress\"></progress>  \n\t\t\t\t</div>\n\t\t\t\t<div class=\"pull-right\">\n\t\t            <div>\n\t\t                <input type=\"text\" class=\"form-control no-bg no-brder-radius blue-fonts blue-border\" placeholder=\"title\" id=\"postTitle\" [(ngModel)]=\"postTitle\">\n\t\t            </div>\n\t\t            <div class=\"form-group\">\n\t\t                <textarea class=\"form-control no-resize no-bg no-brder-radius blue-fonts blue-border\" rows=\"5\" cols=\"30\" placeholder=\"Add Description...\" id=\"postDesc\" [(ngModel)]=\"postDesc\">\n\t\t                </textarea>\n\t\t            </div>\n\t\t        </div>\n\t\t        <div class=\"colw100 inline-block\">\t\t\t\n\t\t\t\t\t<button id=\"okBtn\" type=\"button\" class=\"btn btn-primary text-center small-btn ok-btn\" (click)=\"postVideo($event)\" [disabled]=\"isProgress\">\n\t\t\t\t\t\t<span class=\"pull-left\">Post</span>\n\t\t\t\t\t\t<i class=\"fa fa-share-square-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t\t<ng-template #previewCheckIn>\n\t\t\t\t<app-checkin (checkInItem)=\"onCheckIn($event)\"></app-checkin>\n\t\t\t</ng-template>\n\t\t</div>\n\t</div>\n</app-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tile-menu/tile-menu.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tile-menu/tile-menu.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 no-padding\">\n\t\t\t<div class=\"opaque-bg inner-padding tile-thumb stories-tile\" (click)=\"navigateToStories($event)\">\n\t\t\t\t<i class=\"fa fa-book fa-3x\" aria-hidden=\"true\"></i>\n\t\t\t\t<span class=\"tile-name\">Stories</span>\n\t\t\t\t<div class=\"tile-info\">Check what stories, photos, music, videos people posted.</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 no-padding\"><div class=\"opaque-bg inner-padding tile-thumb entertainment-tile\" (click)=\"navigateToEntertainment($event)\">\n\t\t\t<i class=\"fa fa-television fa-3x\" aria-hidden=\"true\"></i><span class=\"tile-name\">Entertainment</span>\n\t\t\t<div class=\"tile-info\">View & upload photos, music, videos.</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 no-padding\">\n\t\t\t<div class=\"opaque-bg inner-padding tile-thumb people-tile\" (click)=\"navigateToPeople($event)\">\n\t\t\t\t<i class=\"fa fa-users fa-3x\" aria-hidden=\"true\"></i>\n\t\t\t\t<span class=\"tile-name\">People</span>\n\t\t\t\t<div class=\"tile-info\">Find people from your locality or any where across the world.</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 no-padding\">\n\t\t\t<div class=\"opaque-bg inner-padding tile-thumb market-tile\" (click)=\"navigateToMarket($event)\">\n\t\t\t\t<i class=\"fa fa-shopping-bag fa-3x\" aria-hidden=\"true\"></i>\n\t\t\t\t<span class=\"tile-name\">Market</span>\n\t\t\t\t<div class=\"tile-info\">Buy, sale, advertise any item.</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video-album-icon/video-album-icon.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-album-icon/video-album-icon.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"video-icon-container\">\n\t<div class=\"colw100 video-edit-icon\"><i class=\"fa fa-pencil-square white-fonts pull-right\" aria-hidden=\"true\" (click)=\"editVideoAlbum($event)\"></i></div>\n\t<div class=\"colw100 blue-fonts bold-fonts cursor-pointer\" (click)=\"showVideoList($event)\"><span>{{item.title}}</span></div>\n\t<div class=\"colw100 blue-fonts\"><span>{{item.videosList.length}}</span><span> videos</span></div>\n\t<div class=\"colw100 blue-fonts\"><span>{{item.created | date: 'dd/MM/yyyy'}}</span></div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video-icon/video-icon.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-icon/video-icon.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"video-icon cursor-pointer\" [ngStyle]=\"{'background': 'url(' + posterURL+ ')'}\">\n<i class=\"fa fa-play-circle-o fa-3x\" aria-hidden=\"true\"></i>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video-list/video-list.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-list/video-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!isShow\">\n\t<div class=\"show-controls hand-cursor\" title=\"show playlist\" (click)=\"showControls($event)\">\n\t\t<i class=\"fa fa-eye \"></i>\n\t</div>\n</ng-container>\n<ng-container *ngIf=\"isShow\">\n\t<div class=\"hide-controls hand-cursor\" title=\"hide playlist\" (click)=\"hideControls($event)\">\n\t\t<i class=\"fa fa-eye-slash \"></i>\n\t</div>\n\t<div class=\"player-controls\" \n\t\tstyle=\"position: absolute;\n\t    right: 10px;\n\t    top: 10px;\n\t    width: 150px;\">\n\t    <div class=\"pull-left control-item\" (click)=\"replayVideeo($event)\">\n\t        <i class=\"fa fa-repeat\"></i>\n\t    </div>\n\t\t<div class=\"pull-left control-item\" (click)=\"playPreviousItem($event)\">\n\t\t\t<i class=\"fa fa-step-backward\"></i>\n\t\t</div>\n\t    <div *ngIf=\"isPlaying ; then pauseBtn\"></div>\n\t    <ng-template #pauseBtn>\n\t        <div class=\"pull-left control-item\" (click)=\"pauseVideeo($event)\">\n\t            <i class=\"fa fa-stop\"></i>\n\t        </div>\n\t    </ng-template>\n\t    <div *ngIf=\"isPause; then playBtn\"></div>\n\t    <ng-template #playBtn>\n\t\t   <div class=\"pull-left control-item\" (click)=\"resumeVideeo($event)\">\n\t            <i class=\"fa fa-play\"></i>\n\t        </div>\n\t    </ng-template>\n\t\t<div class=\"pull-left control-item\" (click)=\"playNextItem($event)\"><i class=\"fa fa-step-forward\"></i></div>\n\t</div>\n\t<div #videoPlayList classs=\"music-play-list\" \n\t\tstyle=\"background-color: rgba(43, 144, 217, 0);\n\t    \tdisplay: inline-block;\n\t    \tbox-sizing: border-box;\n\t    \twidth: 150px;\n\t    \tmax-height: 245px;\n\t    \ttext-overflow: ellipsis;\n\t    \toverflow-y: auto;\n\t    \ttext-align: left;\n\t    \tborder-bottom: none;\n\t    \tposition: absolute;\n\t    \tborder-bottom: 1px solid #fff;\n\t    \ttop: 40px;\n\t    \tright: 15px;\">\n\t\t<div class=\"video-list\"  *ngFor=\"let item of videoSource; let indx = index\">\n\t\t\t<div class=\"row no-margin pull-left inline-block hand-cursor red-highlight item-row music-item\" (click)=\"videoListItemClick($event, item, indx)\" [attr.id]=\"item.mp4Video\" [class.item-highlight]=\"item.mp4Video === mp4Video\"\n\t\t\t\tstyle=\"border: 1px solid #fff; border-bottom: none;\">\n\t\t\t\t<div class=\"row no-margin white-fonts music-name pull-right\">\n\t                <span style=\"width: 12px; margin-left: 2px; margin-right: 4px;\">{{indx+1}}&nbsp;<span>-</span></span>\n\t\t\t\t\t<span style=\"white-space: nowrap;\n\t    \t\t\t\ttext-overflow: ellipsis;\n\t    \t\t\t\toverflow: hidden;\n\t    \t\t\t\tdisplay: block;\n\t    \t\t\t\tpadding: 0px 4px;\n\t    \t\t\t\twidth: 106px;\n\t                    margin-left: 3px;\">\n\t    \t\t\t\t{{item.mp4Video}}\n\t\t    \t\t</span>\n\t                <span >\n\t                \t<div class=\"vid-icon\" [ngStyle]=\"{'background': 'url(' + item.poster+ ')', \n\t\t\t\t'cursor':' '+ mouseCursor +'', \n\t\t\t\t'background-repeat': 'no-repeat',\n\t\t\t\t'background-size': ' '+ bgSize +' ',\n\t\t\t\t'width':' '+ iw +'px', \n\t\t\t\t'height':' '+ ih +'px',\n\t\t\t\t'margin':' '+ mr +'px '+ ml +'px'}\"></div>\n\t                </span>\n\n\t\t    \t</div> \n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ng-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video-player/video-player.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-player/video-player.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"video-container\">\n    <video #videoPlayer id='video'\n        controls \n        poster=\"{{posterPath}}\">\n   <!-- <video id='video'\n        poster=\"https://media.w3.org/2010/05/sintel/poster.png\">-->\n        <source id='mp4'\n            src=\"{{mp4VideoPath}}\" \n            type='video/mp4'>\n       <!-- <source id='webm'\n            src=\"{{webmVideoPath}}\" \n            type='video/webm'>-->\n       <!-- <source id='ogv'\n            src=\"https://media.w3.org/2010/05/sintel/trailer.ogv\"\n            type='video/ogg'>-->\n      <p>Your browser does not support the HTML5 Video element.</p>\n    </video>\n    <div #videoList></div>\n      <!-- Video Controls -->\n    <!--<div id=\"video-controls\">\n        <div><input type=\"range\" min=\"1\" max=\"100\" step=\"1\" value=\"15\" class=\"colw100 no-outline\" id=\"seek-bar\"></div>\n        <div>\n            <i id=\"play-pause\" class=\"fa fa-play-circle fa-2x blue-fonts\"></i>    \n            <button type=\"button\" id=\"mute\">Mute</button>\n            <input type=\"range\" id=\"volumeBar\" min=\"0\" max=\"1\" step=\"0.1\" value=\"1\">\n            <button type=\"button\" id=\"full-screen\">Full-Screen</button>\n        </div>\n    </div>-->\n</div>\n<div class=\"video-content\">\n    <div class=\"title semi-transparent-bg\">\n        <div class=\"line-height-sixteen\">\n            <i class=\"fa fa-file-video-o blue-fonts fa-2x\" aria-hidden=\"true\"></i>\n            <span class=\"blue-fonts medium-fonts\">Videos</span>\n        </div>\n    </div>\n    <div *ngIf=\"isVideoAlbum ; then albumVideoUploader\"></div>\n    <ng-template #albumVideoUploader>\n        <div class=\"inline-block semi-transparent-bg colw100\">\n            <div class=\"pull-left\">\n                <div class=\"file-input-container\">\n                    <form [formGroup]=\"videoUploadForm\" action=\"/upload\" method=\"post\" enctype=\"multipart/form-data\">\n                        <div class=\"form-group\" [formGroup]=\"videoGroup\">\n                            <input type=\"file\" accept=\"video/mp4,video/x-m4v,video/3gp,video/flv,video/*\" class=\"file-input\" name=\"uploadfile\" #fileInput (change)=\"fileChangeEvent($event, true)\"/>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"uplod-new\" (click)= \"cancelAlbum(null); fileInput.value = ''; fileInput.click();\" >\n                    <i class=\"fa fa-upload blue-fonts\" aria-hidden=\"true\"></i>\n                    <span class=\"blue-fonts\">Upload New Videos</span>\n                </div>\n                <div class=\"title-div red-fonts\">\n                    <i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i>\n                    <span>The video will be uploaded to your untitled album.</span>\n                </div>\n                <div class=\"new-album\">\n                    <span class=\"blue-fonts\" (click)=\"createVideoAlbum($event)\">\n                        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                        <span>Create New Album</span>\n                    </span>\n                </div>\n                <div *ngIf=\"isCreateAlbum ; then createAlbum\"></div>\n                <ng-template #createAlbum >\n                    <form [formGroup]=\"albumForm\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control no-bg no-brder-radius blue-fonts blue-border\" aria-describedby=\"emailHelp\" placeholder=\"title\" formControlName=\"albumTitle\" id=\"albumTitle\" [(ngModel)]=\"albumTitle\">\n                            <app-control-messages [control]=\"albumForm.controls.albumTitle\"></app-control-messages>\n                        </div>\n                        <div class=\"form-group\">\n                            <textarea class=\"form-control no-resize no-bg no-brder-radius blue-fonts blue-border\" rows=\"5\" cols=\"30\" placeholder=\"Add Description...\" formControlName=\"albumDesc\" id=\"albumDesc\" [(ngModel)]=\"albumDesc\">\n                            </textarea>\n                            <app-control-messages [control]=\"albumForm.controls.albumDesc\"></app-control-messages>\n                        </div>\n                        <div class=\"form-group row justify-content-center align-items-center no-margin\">\n                            <button id=\"loginBtn\" type=\"button\" class=\"btn btn-primary\" (click)=\"cancelAlbum()\" >\n                                <i class=\"fa fa-times no-margin\" aria-hidden=\"true\"></i>\n                                <span>Cancel</span>\n                            </button>\n                            <div *ngIf=\"isAddAlbum ; then addBtn\"></div>\n                            <ng-template #addBtn >\n                                <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!albumForm.valid\" (click)=\"createAlbumInfo($event)\">\n                                    <span>Create</span>\n                                    <i class=\"fa fa-pencil-square\" aria-hidden=\"true\"></i>\n                                </button>\n                            </ng-template>\n                            <div *ngIf=\"isUpdateAlbum ; then updateBtn\"></div>\n                            <ng-template #updateBtn >\n                                <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!albumForm.valid\" (click)=\"updateAlbumInfo($event)\">\n                                    <span>Edit</span>\n                                    <i class=\"fa fa-pencil-square\" aria-hidden=\"true\"></i>\n                                </button>\n                            </ng-template>\n                        </div>\n                        <div [ngClass]=\"{'error-message': isError, 'status-message': isStatus}\">\n                            <div class=\"server-msg text-center\">{{serverMessage}}</div>\n                        </div>\n                    </form>\n                </ng-template>\n                <progress value=\"0\" max=\"100\" id=\"progressBar\" [value]=\"uploadProgress\" [hidden]=\"!isProgress\"></progress>\n            </div>\n        </div>\n    </ng-template>\n    <div class=\"inline-block semi-transparent-bg colw100\">\n        <div *ngIf=\"isVideoAlbum ; then videoAlbum\"></div>\n        <ng-template #videoAlbum >\n            <div class=\"album-search-box pull-left colw100\">\n                <div class=\"pull-left\">\n                    <input class=\"search-input blue-fonts\" type=\"text\" placeholder=\"Search\"  autocomplete=\"off\" spellcheck=\"false\" aria-autocomplete=\"list\" aria-expanded=\"false\" [(ngModel)]=\"albumText\" #searchAlbum/>\n                </div>\n                <div class=\"pull-left\"><i class=\"fa fa-search cursor-pointer\" aria-hidden=\"true\"></i></div>\n            </div>\n            <div *ngIf=\"loadCount > 0 ; then videoLoader\"></div>\n            <ng-template #videoLoader>\n                <div class=\"red-fonts inline-block lineheight-25\">\n                    <div class=\"pull-left\">Processing your video, don't refresh.</div>\n                    <div class=\"pull-left\"><i class=\"fa fa-cog fa-spin fa-2x\"></i></div>\n                </div>\n            </ng-template>\n            <div class=\"album-icons\">\n                <app-video-album-icon class=\"pull-left\" *ngFor=\"let item of videoAlbumList | albumSearch : albumText\" [item]=\"item\" (click)=\"searchAlbum.value=''; albumText = '';\" (onEditVideoAlbum)=\"editVideoAlbum($event)\" \n                (onShowVideoList)=\"showVideoList($event)\"></app-video-album-icon>\n            </div>\n        </ng-template>\n        <div *ngIf=\"isAlbumVideo ; then albumVideo\"></div>\n        <ng-template #albumVideo >\n            <div class=\"video-search-box pull-left colw100\">\n                <div class=\"pull-left\">\n                    <!--<input class=\"search-input blue-fonts\" type=\"text\" placeholder=\"Search\"  autocomplete=\"off\" spellcheck=\"false\" aria-autocomplete=\"list\" aria-expanded=\"false\" [(ngModel)]=\"videoText\" #searchVideo/>-->\n                    <div class=\"cursor-pointer blue-fonts\" (click)=\"goToMyAlbum($event)\">\n                        <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\n                        <span>{{albumTitle}}</span>\n                    </div>\n                </div>\n                <!--<div class=\"pull-left\"><i class=\"fa fa-search cursor-pointer\" aria-hidden=\"true\"></i></div>-->\n            </div>\n            <div class=\"video-uploader\">\n                <div class=\"file-input-container\">\n                    <form [formGroup]=\"videoUploadForm\" action=\"/upload\" method=\"post\" enctype=\"multipart/form-data\">\n                        <div class=\"form-group\" [formGroup]=\"videoGroup\">\n                            <input type=\"file\" accept=\"video/*\" class=\"video-input\" name=\"uploadfile\" #videoInput (change)=\"fileChangeEvent($event, false)\"/>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"uplod-new\" (click)= \"videoInput.value = ''; videoInput.click();\" >\n                    <i class=\"fa fa-upload blue-fonts\" aria-hidden=\"true\"></i>\n                    <span class=\"blue-fonts\">Add New Videos.</span>\n                </div>\n                <div class=\"title-div red-fonts\">\n                    <i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i>\n                    <span>The video will be uploaded to this album.</span>\n                </div>\n                <div *ngIf=\"loadCount > 0 ; then videoLoader\"></div>\n                <ng-template #videoLoader>\n                    <div class=\"red-fonts inline-block lineheight-25\">\n                        <div class=\"pull-left\">Processing your video, don't refresh.</div>\n                        <div class=\"pull-left\"><i class=\"fa fa-cog fa-spin fa-2x\"></i></div>\n                    </div>\n                </ng-template>\n            </div>\n            <div class=\"album-icons\">\n                <app-video-icon (click)=\"playVideo(item)\" class=\"pull-left\" *ngFor=\"let item of videosList | videoSearch : videoText\" [item]=\"item\"></app-video-icon>\n            </div>\n        </ng-template>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video/video.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video/video.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-content\">\n  <h2>Simple Audio/Video Demo</h2>\n  <div><strong>I am:</strong> {{myId}}</div>\n  <div class=\"connect-caller-buttons\">\n    <h3>Connected Clients:</h3>\n    <div id=\"otherClients\"><button *ngFor=\"let easyrtcId of (connectedClientsList)\" (click)=\"performCall(easyrtcId)\">{{easyrtcId}}</button></div>\n  </div>\n  <div class=\"video-frames\">\n    <div class=\"video-self\"><video id=\"videoSelf\" (click)=\"connectVideo();\" #selfVideo></video></div>\n    <div class=\"video-caller\"><video id=\"videoCaller\" #callerVideo></video></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ad/ad.component.css":
/*!*************************************!*\
  !*** ./src/app/ad/ad.component.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ad-panel{\n\tpadding: 5px;\n\tdisplay: block.\n}\n\n.ad-panel img{\n\twidth: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWQvYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7Q0FDWjtBQUNEOztBQUVBO0NBQ0MsV0FBVztBQUNaIiwiZmlsZSI6InNyYy9hcHAvYWQvYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZC1wYW5lbHtcblx0cGFkZGluZzogNXB4O1xuXHRkaXNwbGF5OiBibG9jay5cbn1cblxuLmFkLXBhbmVsIGltZ3tcblx0d2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/ad/ad.component.ts":
/*!************************************!*\
  !*** ./src/app/ad/ad.component.ts ***!
  \************************************/
/*! exports provided: AdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdComponent", function() { return AdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdComponent = /** @class */ (function () {
    function AdComponent() {
    }
    AdComponent.prototype.ngOnInit = function () {
    };
    AdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ad',
            template: __webpack_require__(/*! raw-loader!./ad.component.html */ "./node_modules/raw-loader/index.js!./src/app/ad/ad.component.html"),
            styles: [__webpack_require__(/*! ./ad.component.css */ "./src/app/ad/ad.component.css")]
        })
    ], AdComponent);
    return AdComponent;
}());



/***/ }),

/***/ "./src/app/add-item/add-item.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-item/add-item.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input{\n\tborder-radius: 0px;\n    background: none;\n    border: 1px solid #2b90d9;\n}\n\n.mock-img{\n\tbackground: #fff;\n    height: 200px;\n    padding: 75px;\n}\n\n.mock-img i{\n\tfont-size: 50px;\n    vertical-align: middle;\n    margin: auto;\n    width: 55px;\n    display: block;\n}\n\n.cropped-item-img{\n    display: none;\n}\n\n.file-input-container{\n    display: none;\n}\n\n.add-item-content{\n    padding: 20px 0px;\n}\n\n.form-group{\n    margin: 10px 0px;\n}\n\n.fa-upload:hover{\n    color: #fff !important;\n}\n\n.link-btn:hover{\n    color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWl0ZW0vYWRkLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGtCQUFrQjtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7Q0FDQyxnQkFBZ0I7SUFDYixhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtDQUNDLGVBQWU7SUFDWixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9hZGQtaXRlbS9hZGQtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXR7XG5cdGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyYjkwZDk7XG59XG5cbi5tb2NrLWltZ3tcblx0YmFja2dyb3VuZDogI2ZmZjtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHBhZGRpbmc6IDc1cHg7XG59XG5cbi5tb2NrLWltZyBpe1xuXHRmb250LXNpemU6IDUwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDU1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uY3JvcHBlZC1pdGVtLWltZ3tcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmZpbGUtaW5wdXQtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hZGQtaXRlbS1jb250ZW50e1xuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xufVxuLmZvcm0tZ3JvdXB7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbn1cbi5mYS11cGxvYWQ6aG92ZXJ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5saW5rLWJ0bjpob3ZlcntcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/add-item/add-item.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-item/add-item.component.ts ***!
  \************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_services_data_market_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/data/market.service */ "./src/app/services/data/market.service.ts");
/* harmony import */ var _app_services_validators_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/validators/validation.service */ "./src/app/services/validators/validation.service.ts");





var AddItemComponent = /** @class */ (function () {
    function AddItemComponent(formBuilder, marketService) {
        this.formBuilder = formBuilder;
        this.marketService = marketService;
        this.isItemImg = false;
        this.radioMode = true;
        this.isImageCropper = true;
        this.category = { options: 'Women' };
        this.refreshMarket = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addItemForm = this.formBuilder.group({
            'category': [],
            'itemName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'itemPic': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'price': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _app_services_validators_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"].emailValidator]],
            'contactNo': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'location': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'itemDesc': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    AddItemComponent.prototype.ngOnInit = function () {
    };
    AddItemComponent.prototype.addItem = function (event) {
        var _this = this;
        //if (this.addItemForm.dirty && this.addItemForm.valid) {
        var postObj = { 'category': this.category.options,
            'itemName': this.addItemForm.controls.itemName._value,
            'price': this.addItemForm.controls.price._value,
            'email': this.addItemForm.controls.email._value,
            'contactNo': this.addItemForm.controls.contactNo._value,
            'location': this.addItemForm.controls.location._value,
            'itemDesc': this.addItemForm.controls.itemDesc._value,
            'imagebuffer': this.imageToSave,
            'userid': this.userId };
        this.marketService.addItem(postObj).subscribe(function (data) { return _this.afterItemAdded(data); });
        /* }else{
             alert('Filed mark with * are required.');
         }*/
    };
    AddItemComponent.prototype.afterItemAdded = function (result) {
        //alert(result.message);
        if (result.status === 'success') {
            /*this.profilePic = result.info.profilepic.imageBuffer;
            localStorage.setItem('loginData', JSON.stringify(result.info));*/
            this.refreshMarket.emit('refreshMarket');
        }
    };
    AddItemComponent.prototype.keyPressOnContact = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AddItemComponent.prototype.useOriginal = function (event) {
        this.isImageCropper = false;
        this.imageToSave = this.encodedImage;
    };
    AddItemComponent.prototype.imageCropped = function (image) {
        this.croppedImage = image;
        this.imageToSave = this.croppedImage;
    };
    AddItemComponent.prototype.computeCroppedImage = function () {
        var elem = document.querySelector('#croppedImg');
    };
    AddItemComponent.prototype.fileChangeEvent = function (event) {
        this.isItemImg = true;
        this.imageChangedEvent = event;
        this.files = event.target.files[0];
        //this.uploadCanvasPic();
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                self.encodedImage = e.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        /*var files = fileInput.srcElement.files;
        console.log(files);
        this.uploadService.makeFileRequest('https://localhost:3000/api/uploadCoverPic', [], files).subscribe(() => {
          console.log('sent');
        });*/
    };
    AddItemComponent.prototype.ok = function () {
        //this.uploadEncodedProfilePic(this.croppedImage);
    };
    AddItemComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _app_services_data_market_service__WEBPACK_IMPORTED_MODULE_3__["MarketService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('userId')
    ], AddItemComponent.prototype, "userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AddItemComponent.prototype, "refreshMarket", void 0);
    AddItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-item',
            template: __webpack_require__(/*! raw-loader!./add-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/add-item/add-item.component.html"),
            providers: [_app_services_data_market_service__WEBPACK_IMPORTED_MODULE_3__["MarketService"]],
            styles: [__webpack_require__(/*! ./add-item.component.css */ "./src/app/add-item/add-item.component.css")]
        })
    ], AddItemComponent);
    return AddItemComponent;
}());



/***/ }),

/***/ "./src/app/address-info/address-info.component.css":
/*!*********************************************************!*\
  !*** ./src/app/address-info/address-info.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\n/*\t-webkit-appearance: none;*/\n  border-radius: 0px;\n  background: none;\n  width: 200px;\n  border: 1px solid #2b90d9;\n\n}\n\n.form-group input{\n\twidth: 200px;\n\t/*border-radius: 0px;*/\n\tbackground: none;\n\tborder: 1px solid #2b90d9;\n}\n\n.address-info{\n\tpadding: 10px 0px !important;\n}\n\n#creditForm{\n\twidth: 200px;\n\tmargin: auto;\n}\n\n.billing-shipping-check{\n\tpadding: 15px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkcmVzcy1pbmZvL2FkZHJlc3MtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsNkJBQTZCO0VBRTNCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHlCQUF5Qjs7QUFFM0I7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osc0JBQXNCO0NBQ3RCLGdCQUFnQjtDQUNoQix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyw0QkFBNEI7QUFDN0I7O0FBQ0E7Q0FDQyxZQUFZO0NBQ1osWUFBWTtBQUNiOztBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWRkcmVzcy1pbmZvL2FkZHJlc3MtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VsZWN0IHtcbi8qXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7Ki9cbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMmI5MGQ5O1xuXG59XG5cbi5mb3JtLWdyb3VwIGlucHV0e1xuXHR3aWR0aDogMjAwcHg7XG5cdC8qYm9yZGVyLXJhZGl1czogMHB4OyovXG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMyYjkwZDk7XG59XG5cbi5hZGRyZXNzLWluZm97XG5cdHBhZGRpbmc6IDEwcHggMHB4ICFpbXBvcnRhbnQ7XG59XG4jY3JlZGl0Rm9ybXtcblx0d2lkdGg6IDIwMHB4O1xuXHRtYXJnaW46IGF1dG87XG59XG4uYmlsbGluZy1zaGlwcGluZy1jaGVja3tcblx0cGFkZGluZzogMTVweCAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/address-info/address-info.component.ts":
/*!********************************************************!*\
  !*** ./src/app/address-info/address-info.component.ts ***!
  \********************************************************/
/*! exports provided: AddressInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressInfoComponent", function() { return AddressInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_services_data_address_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/data/address.service */ "./src/app/services/data/address.service.ts");
/* harmony import */ var _app_services_utility_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/utility/data.service */ "./src/app/services/utility/data.service.ts");
/* harmony import */ var _app_services_utility_country_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/utility/country.service */ "./src/app/services/utility/country.service.ts");






var AddressInfoComponent = /** @class */ (function () {
    function AddressInfoComponent(formBuilder, dataService, addressService) {
        this.formBuilder = formBuilder;
        this.dataService = dataService;
        this.addressService = addressService;
        this.addressSaved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedCountry = new _app_services_utility_country_service__WEBPACK_IMPORTED_MODULE_5__["Country"](0, 'India');
        this.sselectedCountry = new _app_services_utility_country_service__WEBPACK_IMPORTED_MODULE_5__["Country"](0, 'India');
        this.countryChoosen = '';
        this.stateChoosen = '';
        this.sCountryChoosen = '';
        this.sStateChoosen = '';
        this.bindFirstName = '';
        this.bindLastName = '';
        this.bindHouseNo = '';
        this.bindStreetName = '';
        this.bindZipCode = '';
        this.titleOptions = [
            { name: "Title", value: '' },
            { name: "Mr", value: 'Mr' },
            { name: "Mrs", value: 'Mrs' },
            { name: "Miss", value: 'Miss' }
        ];
        this.stitleOptions = [
            { name: "Title", value: '' },
            { name: "Mr", value: 'Mr' },
            { name: "Mrs", value: 'Mrs' },
            { name: "Miss", value: 'Miss' }
        ];
        this.countries = this.dataService.getCountries();
        this.billingForm = this.formBuilder.group({
            'bilingTitle': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'firstName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'lastName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'houseNo': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'streetName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'zipCode': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'countryList': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'stateList': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.scountries = this.dataService.getCountries();
        this.shippingForm = this.formBuilder.group({
            'shippingTitle': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'sfirstName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'slastName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'shouseNo': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'sstreetName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'szipCode': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'scountryList': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'sstateList': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    AddressInfoComponent.prototype.onSelect = function (countryid) {
        this.states = this.dataService.getStates().filter(function (item) { return item.countryid == countryid; });
        this.sstates = this.dataService.getStates().filter(function (item) { return item.countryid == countryid; });
    };
    AddressInfoComponent.prototype.onChange = function (event, item) {
        var self = this;
        var selectElementText = event.target['options'][event.target['options'].selectedIndex].text;
        switch (item) {
            case 'country':
                self.countryChoosen = selectElementText;
                break;
            case 'state':
                self.stateChoosen = selectElementText;
                break;
            case 'scountry':
                self.sCountryChoosen = selectElementText;
                break;
            case 'sstate':
                self.sStateChoosen = selectElementText;
                break;
            default:
        }
    };
    AddressInfoComponent.prototype.saveAddressInfo = function (event) {
        var _this = this;
        var billingInfo;
        var shippingInfo;
        if (this.billingForm.dirty && this.billingForm.valid) {
            billingInfo = { 'bilingTitle': this.billingForm.value.bilingTitle,
                'firstName': this.billingForm.value.firstName,
                'lastName': this.billingForm.value.lastName,
                'houseNo': this.billingForm.value.houseNo,
                'streetName': this.billingForm.value.streetName,
                'zipCode': this.billingForm.value.zipCode,
                'countryList': this.countryChoosen,
                'stateList': this.stateChoosen };
        }
        if (this.shippingForm.dirty && this.shippingForm.valid) {
            shippingInfo = { 'shippingTitle': this.shippingForm.value.shippingTitle,
                'sfirstName': this.shippingForm.value.sfirstName,
                'slastName': this.shippingForm.value.slastName,
                'shouseNo': this.shippingForm.value.shouseNo,
                'sstreetName': this.shippingForm.value.sstreetName,
                'szipCode': this.shippingForm.value.szipCode,
                'scountryList': this.sCountryChoosen,
                'sstateList': this.sStateChoosen };
        }
        var postObj = { 'username': this.userId,
            'billingInfo': billingInfo,
            'shippingInfo': shippingInfo };
        this.addressService.addAddressInfo(postObj).subscribe(function (data) { return _this.afterAddressInfoAdded(data); });
    };
    AddressInfoComponent.prototype.afterAddressInfoAdded = function (result) {
        if (result.status === 'failure') {
        }
        else {
            this.addressSaved.emit('addressSaved');
        }
    };
    AddressInfoComponent.prototype.checkBoxChange = function (event) {
        var isChecked = event.currentTarget.checked;
        if (isChecked) {
            this.shippingTitleOption = this.billingForm.value.bilingTitle;
            this.bindFirstName = this.billingForm.value.firstName;
            this.bindLastName = this.billingForm.value.lastName;
            this.bindHouseNo = this.billingForm.value.houseNo;
            this.bindStreetName = this.billingForm.value.streetName;
            this.bindZipCode = this.billingForm.value.zipCode;
        }
        else {
            this.bindFirstName = '';
            this.bindLastName = '';
            this.bindHouseNo = '';
            this.bindStreetName = '';
            this.bindZipCode = '';
            //this.shippingTitleOption = '';
            var selectBox = document.getElementById("shippingTitleOpt");
            selectBox.selectedIndex = 0;
        }
    };
    AddressInfoComponent.prototype.ngOnInit = function () {
    };
    AddressInfoComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _app_services_utility_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: _app_services_data_address_service__WEBPACK_IMPORTED_MODULE_3__["AddressService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('userId')
    ], AddressInfoComponent.prototype, "userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AddressInfoComponent.prototype, "addressSaved", void 0);
    AddressInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-address-info',
            template: __webpack_require__(/*! raw-loader!./address-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/address-info/address-info.component.html"),
            providers: [_app_services_utility_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _app_services_data_address_service__WEBPACK_IMPORTED_MODULE_3__["AddressService"]],
            styles: [__webpack_require__(/*! ./address-info.component.css */ "./src/app/address-info/address-info.component.css")]
        })
    ], AddressInfoComponent);
    return AddressInfoComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _public_public_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public/public.component */ "./src/app/public/public.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _entertainment_entertainment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entertainment/entertainment.component */ "./src/app/entertainment/entertainment.component.ts");
/* harmony import */ var _stories_stories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stories/stories.component */ "./src/app/stories/stories.component.ts");
/* harmony import */ var _market_market_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./market/market.component */ "./src/app/market/market.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./people/people.component */ "./src/app/people/people.component.ts");











var routes = [
    {
        path: 'public',
        component: _public_public_component__WEBPACK_IMPORTED_MODULE_3__["PublicComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'profile/:id',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
    },
    {
        path: 'entertainment/:id',
        component: _entertainment_entertainment_component__WEBPACK_IMPORTED_MODULE_6__["EntertainmentComponent"]
    },
    {
        path: 'stories/:id',
        component: _stories_stories_component__WEBPACK_IMPORTED_MODULE_7__["StoriesComponent"]
    },
    {
        path: 'market/:id',
        component: _market_market_component__WEBPACK_IMPORTED_MODULE_8__["MarketComponent"]
    },
    {
        path: 'checkout/:id',
        component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__["CheckoutComponent"]
    },
    {
        path: 'people/:id',
        component: _people_people_component__WEBPACK_IMPORTED_MODULE_10__["PeopleComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/services/app/app.service */ "./src/app/services/app/app.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(router, route) {
        this.router = router;
        this.route = route;
        this.isLoggedIn = false;
        var lat = _app_services_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"].getGeoCode();
        var loc = window.location.href;
        var subStr1 = 'http://www.wefrenz.com/';
        var subStr2 = 'http://wefrenz.com/';
        var newLoc = '';
        /*if(loc.indexOf(subStr1) > -1) {
          newLoc = loc.replace(subStr1, "https://wefrenz.com/");
          window.location.href = newLoc;
          return;
        }
        
        if(loc.indexOf(subStr2) > -1) {
          newLoc = loc.replace(subStr2, "https://wefrenz.com/");
          window.location.href = newLoc;
          return;
        }*/
        //router.navigate(['public']);
        if (localStorage.getItem('currentUser')) {
            if (localStorage.getItem('currentRoute')) {
                var routePath = localStorage.getItem('currentRoute');
                this.router.navigate([routePath]);
            }
            else {
                this.router.navigate(['public']);
            }
        }
        else {
            this.router.navigate(['public']);
        }
        var self = this;
        route.params.subscribe(function (val) {
            window.addEventListener('onAppLoggedOut', function (e) {
                // e.target matches elem
                self.isLoggedIn = false;
            }, false);
            window.addEventListener('onAppLoggedIn', function (e) {
                // e.target matches elem
                self.isLoggedIn = true;
            }, false);
        });
        // not logged in so redirect to login page with the return url and return false
        //this.router.navigate(['/public'], { queryParams: { returnUrl: state.url }});
        //return false;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-timeago */ "./node_modules/ngx-timeago/fesm5/ngx-timeago.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _public_public_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./public/public.component */ "./src/app/public/public.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _control_messages_control_messages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./control-messages/control-messages.component */ "./src/app/control-messages/control-messages.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _public_nav_public_nav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./public-nav/public-nav.component */ "./src/app/public-nav/public-nav.component.ts");
/* harmony import */ var _private_nav_private_nav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./private-nav/private-nav.component */ "./src/app/private-nav/private-nav.component.ts");
/* harmony import */ var _profile_area_profile_area_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile-area/profile-area.component */ "./src/app/profile-area/profile-area.component.ts");
/* harmony import */ var _tile_menu_tile_menu_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tile-menu/tile-menu.component */ "./src/app/tile-menu/tile-menu.component.ts");
/* harmony import */ var _info_panel_info_panel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./info-panel/info-panel.component */ "./src/app/info-panel/info-panel.component.ts");
/* harmony import */ var _search_result_list_item_search_result_list_item_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./search-result-list-item/search-result-list-item.component */ "./src/app/search-result-list-item/search-result-list-item.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _coverpic_coverpic_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./coverpic/coverpic.component */ "./src/app/coverpic/coverpic.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./image-cropper/image-cropper.component */ "./src/app/image-cropper/image-cropper.component.ts");
/* harmony import */ var _capture_pic_capture_pic_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./capture-pic/capture-pic.component */ "./src/app/capture-pic/capture-pic.component.ts");
/* harmony import */ var _stories_stories_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./stories/stories.component */ "./src/app/stories/stories.component.ts");
/* harmony import */ var _market_market_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./market/market.component */ "./src/app/market/market.component.ts");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./people/people.component */ "./src/app/people/people.component.ts");
/* harmony import */ var _friend_request_pending_list_friend_request_pending_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./friend-request-pending-list/friend-request-pending-list.component */ "./src/app/friend-request-pending-list/friend-request-pending-list.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _chat_item_chat_item_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./chat-item/chat-item.component */ "./src/app/chat-item/chat-item.component.ts");
/* harmony import */ var _chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./chat-window/chat-window.component */ "./src/app/chat-window/chat-window.component.ts");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./video/video.component */ "./src/app/video/video.component.ts");
/* harmony import */ var _avchat_avchat_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./avchat/avchat.component */ "./src/app/avchat/avchat.component.ts");
/* harmony import */ var _entertainment_entertainment_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./entertainment/entertainment.component */ "./src/app/entertainment/entertainment.component.ts");
/* harmony import */ var _video_player_video_player_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./video-player/video-player.component */ "./src/app/video-player/video-player.component.ts");
/* harmony import */ var _ad_ad_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ad/ad.component */ "./src/app/ad/ad.component.ts");
/* harmony import */ var _video_album_icon_video_album_icon_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./video-album-icon/video-album-icon.component */ "./src/app/video-album-icon/video-album-icon.component.ts");
/* harmony import */ var _video_icon_video_icon_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./video-icon/video-icon.component */ "./src/app/video-icon/video-icon.component.ts");
/* harmony import */ var _music_player_music_player_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./music-player/music-player.component */ "./src/app/music-player/music-player.component.ts");
/* harmony import */ var _audio_icon_audio_icon_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./audio-icon/audio-icon.component */ "./src/app/audio-icon/audio-icon.component.ts");
/* harmony import */ var _audio_album_icon_audio_album_icon_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./audio-album-icon/audio-album-icon.component */ "./src/app/audio-album-icon/audio-album-icon.component.ts");
/* harmony import */ var _photos_photos_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./photos/photos.component */ "./src/app/photos/photos.component.ts");
/* harmony import */ var _photos_icon_photos_icon_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./photos-icon/photos-icon.component */ "./src/app/photos-icon/photos-icon.component.ts");
/* harmony import */ var _photos_album_icon_photos_album_icon_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./photos-album-icon/photos-album-icon.component */ "./src/app/photos-album-icon/photos-album-icon.component.ts");
/* harmony import */ var _photos_carousel_photos_carousel_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./photos-carousel/photos-carousel.component */ "./src/app/photos-carousel/photos-carousel.component.ts");
/* harmony import */ var _music_list_music_list_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./music-list/music-list.component */ "./src/app/music-list/music-list.component.ts");
/* harmony import */ var _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./video-list/video-list.component */ "./src/app/video-list/video-list.component.ts");
/* harmony import */ var _story_box_story_box_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./story-box/story-box.component */ "./src/app/story-box/story-box.component.ts");
/* harmony import */ var _feeditem_feeditem_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./feeditem/feeditem.component */ "./src/app/feeditem/feeditem.component.ts");
/* harmony import */ var _checkin_checkin_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./checkin/checkin.component */ "./src/app/checkin/checkin.component.ts");
/* harmony import */ var _comment_box_comment_box_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./comment-box/comment-box.component */ "./src/app/comment-box/comment-box.component.ts");
/* harmony import */ var _commentitem_commentitem_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./commentitem/commentitem.component */ "./src/app/commentitem/commentitem.component.ts");
/* harmony import */ var _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./add-item/add-item.component */ "./src/app/add-item/add-item.component.ts");
/* harmony import */ var _item_tile_item_tile_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./item-tile/item-tile.component */ "./src/app/item-tile/item-tile.component.ts");
/* harmony import */ var _cart_tile_cart_tile_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./cart-tile/cart-tile.component */ "./src/app/cart-tile/cart-tile.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _address_info_address_info_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./address-info/address-info.component */ "./src/app/address-info/address-info.component.ts");
/* harmony import */ var _payment_info_payment_info_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./payment-info/payment-info.component */ "./src/app/payment-info/payment-info.component.ts");
/* harmony import */ var _notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./notification-list/notification-list.component */ "./src/app/notification-list/notification-list.component.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview.component.ts");
/* harmony import */ var _pipes_chat_search_pipe__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./pipes/chat-search.pipe */ "./src/app/pipes/chat-search.pipe.ts");
/* harmony import */ var _pipes_photos_search_pipe__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./pipes/photos-search.pipe */ "./src/app/pipes/photos-search.pipe.ts");
/* harmony import */ var _pipes_album_search_pipe__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./pipes/album-search.pipe */ "./src/app/pipes/album-search.pipe.ts");
/* harmony import */ var _pipes_audio_search_pipe__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./pipes/audio-search.pipe */ "./src/app/pipes/audio-search.pipe.ts");
/* harmony import */ var _pipes_video_search_pipe__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./pipes/video-search.pipe */ "./src/app/pipes/video-search.pipe.ts");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");
/* harmony import */ var _app_services_shareobject_routeinfo_service__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../app/services/shareobject/routeinfo.service */ "./src/app/services/shareobject/routeinfo.service.ts");
/* harmony import */ var _app_modal_modal_service__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ../app/modal/modal.service */ "./src/app/modal/modal.service.ts");
/* harmony import */ var _globals_global__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./globals/global */ "./src/app/globals/global.ts");


















//import { ChatPanelComponent } from './chat-panel/chat-panel.component';





//import { CarouselModule } from 'angular4-carousel';













;



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _public_public_component__WEBPACK_IMPORTED_MODULE_9__["PublicComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                _control_messages_control_messages_component__WEBPACK_IMPORTED_MODULE_12__["ControlMessagesComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _public_nav_public_nav_component__WEBPACK_IMPORTED_MODULE_14__["PublicNavComponent"],
                _private_nav_private_nav_component__WEBPACK_IMPORTED_MODULE_15__["PrivateNavComponent"],
                _profile_area_profile_area_component__WEBPACK_IMPORTED_MODULE_16__["ProfileAreaComponent"],
                _tile_menu_tile_menu_component__WEBPACK_IMPORTED_MODULE_17__["TileMenuComponent"],
                //ChatPanelComponent,
                _info_panel_info_panel_component__WEBPACK_IMPORTED_MODULE_18__["InfoPanelComponent"],
                _search_result_list_item_search_result_list_item_component__WEBPACK_IMPORTED_MODULE_19__["SearchResultListItemComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"],
                _coverpic_coverpic_component__WEBPACK_IMPORTED_MODULE_21__["CoverpicComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_22__["ModalComponent"],
                _image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_23__["ImageCropperComponent"],
                _capture_pic_capture_pic_component__WEBPACK_IMPORTED_MODULE_24__["CapturePicComponent"],
                _friend_request_pending_list_friend_request_pending_list_component__WEBPACK_IMPORTED_MODULE_28__["FriendRequestPendingListComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_29__["ChatComponent"],
                _chat_item_chat_item_component__WEBPACK_IMPORTED_MODULE_30__["ChatItemComponent"],
                _pipes_chat_search_pipe__WEBPACK_IMPORTED_MODULE_61__["ChatSearchPipe"],
                _chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_31__["ChatWindowComponent"],
                _video_video_component__WEBPACK_IMPORTED_MODULE_32__["VideoComponent"],
                _avchat_avchat_component__WEBPACK_IMPORTED_MODULE_33__["AvchatComponent"],
                _entertainment_entertainment_component__WEBPACK_IMPORTED_MODULE_34__["EntertainmentComponent"],
                _video_player_video_player_component__WEBPACK_IMPORTED_MODULE_35__["VideoPlayerComponent"],
                _ad_ad_component__WEBPACK_IMPORTED_MODULE_36__["AdComponent"],
                _video_album_icon_video_album_icon_component__WEBPACK_IMPORTED_MODULE_37__["VideoAlbumIconComponent"],
                _pipes_album_search_pipe__WEBPACK_IMPORTED_MODULE_63__["AlbumSearchPipe"],
                _video_icon_video_icon_component__WEBPACK_IMPORTED_MODULE_38__["VideoIconComponent"],
                _pipes_video_search_pipe__WEBPACK_IMPORTED_MODULE_65__["VideoSearchPipe"],
                _music_player_music_player_component__WEBPACK_IMPORTED_MODULE_39__["MusicPlayerComponent"],
                _audio_icon_audio_icon_component__WEBPACK_IMPORTED_MODULE_40__["AudioIconComponent"],
                _audio_album_icon_audio_album_icon_component__WEBPACK_IMPORTED_MODULE_41__["AudioAlbumIconComponent"],
                _pipes_audio_search_pipe__WEBPACK_IMPORTED_MODULE_64__["AudioSearchPipe"],
                _photos_photos_component__WEBPACK_IMPORTED_MODULE_42__["PhotosComponent"],
                _photos_icon_photos_icon_component__WEBPACK_IMPORTED_MODULE_43__["PhotosIconComponent"],
                _photos_album_icon_photos_album_icon_component__WEBPACK_IMPORTED_MODULE_44__["PhotosAlbumIconComponent"],
                _pipes_photos_search_pipe__WEBPACK_IMPORTED_MODULE_62__["PhotosSearchPipe"],
                _photos_carousel_photos_carousel_component__WEBPACK_IMPORTED_MODULE_45__["PhotosCarouselComponent"],
                _music_list_music_list_component__WEBPACK_IMPORTED_MODULE_46__["MusicListComponent"],
                _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_47__["VideoListComponent"],
                _stories_stories_component__WEBPACK_IMPORTED_MODULE_25__["StoriesComponent"],
                _story_box_story_box_component__WEBPACK_IMPORTED_MODULE_48__["StoryBoxComponent"],
                _feeditem_feeditem_component__WEBPACK_IMPORTED_MODULE_49__["FeeditemComponent"],
                _checkin_checkin_component__WEBPACK_IMPORTED_MODULE_50__["CheckinComponent"],
                _comment_box_comment_box_component__WEBPACK_IMPORTED_MODULE_51__["CommentBoxComponent"],
                _commentitem_commentitem_component__WEBPACK_IMPORTED_MODULE_52__["CommentitemComponent"],
                _market_market_component__WEBPACK_IMPORTED_MODULE_26__["MarketComponent"],
                _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_53__["AddItemComponent"],
                _item_tile_item_tile_component__WEBPACK_IMPORTED_MODULE_54__["ItemTileComponent"],
                _cart_tile_cart_tile_component__WEBPACK_IMPORTED_MODULE_55__["CartTileComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_56__["CheckoutComponent"],
                _address_info_address_info_component__WEBPACK_IMPORTED_MODULE_57__["AddressInfoComponent"],
                _payment_info_payment_info_component__WEBPACK_IMPORTED_MODULE_58__["PaymentInfoComponent"],
                _people_people_component__WEBPACK_IMPORTED_MODULE_27__["PeopleComponent"],
                _notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_59__["NotificationListComponent"],
                _preview_preview_component__WEBPACK_IMPORTED_MODULE_60__["PreviewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({
                    apiKey: "AIzaSyAyu8WfrIIx0RTy0DQ3pP78FuCdtDl7l9Y",
                    libraries: ["places"]
                }),
                ngx_timeago__WEBPACK_IMPORTED_MODULE_7__["TimeagoModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_67__["ImageCropperModule"],
                //CarouselModule,
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_66__["ColorPickerModule"]
                // AngularFontAwesomeModule
            ],
            providers: [_app_services_shareobject_routeinfo_service__WEBPACK_IMPORTED_MODULE_68__["RouteinfoService"], _app_modal_modal_service__WEBPACK_IMPORTED_MODULE_69__["ModalService"], _globals_global__WEBPACK_IMPORTED_MODULE_70__["Globals"]],
            entryComponents: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"], _photos_carousel_photos_carousel_component__WEBPACK_IMPORTED_MODULE_45__["PhotosCarouselComponent"], _music_list_music_list_component__WEBPACK_IMPORTED_MODULE_46__["MusicListComponent"], _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_47__["VideoListComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/audio-album-icon/audio-album-icon.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/audio-album-icon/audio-album-icon.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".audio-edit-icon{\n\tdisplay: inline-block;\n    background: #2b90d9;\n    /* margin-top: -2px; */\n    height: 16px\n}   \n.audio-edit-icon .fa-pencil-square{\n\tmargin-right: 2px;\n\tfont-size: 15px;\n}   \n.audio-edit-icon .fa-pencil-square:hover{\n\tcolor: #e9ebee;\n\tcursor: pointer;\n}   \n.audio-icon-container .blue-fonts{\n\tpadding-left: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXVkaW8tYWxidW0taWNvbi9hdWRpby1hbGJ1bS1pY29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxxQkFBcUI7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QjtBQUNKO0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2F1ZGlvLWFsYnVtLWljb24vYXVkaW8tYWxidW0taWNvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1ZGlvLWVkaXQtaWNvbntcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICMyYjkwZDk7XG4gICAgLyogbWFyZ2luLXRvcDogLTJweDsgKi9cbiAgICBoZWlnaHQ6IDE2cHhcbn0gICBcbi5hdWRpby1lZGl0LWljb24gLmZhLXBlbmNpbC1zcXVhcmV7XG5cdG1hcmdpbi1yaWdodDogMnB4O1xuXHRmb250LXNpemU6IDE1cHg7XG59XG4uYXVkaW8tZWRpdC1pY29uIC5mYS1wZW5jaWwtc3F1YXJlOmhvdmVye1xuXHRjb2xvcjogI2U5ZWJlZTtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuLmF1ZGlvLWljb24tY29udGFpbmVyIC5ibHVlLWZvbnRze1xuXHRwYWRkaW5nLWxlZnQ6IDNweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/audio-album-icon/audio-album-icon.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/audio-album-icon/audio-album-icon.component.ts ***!
  \****************************************************************/
/*! exports provided: AudioAlbumIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioAlbumIconComponent", function() { return AudioAlbumIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AudioAlbumIconComponent = /** @class */ (function () {
    function AudioAlbumIconComponent() {
        this.onEditAudioAlbum = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onShowAudioList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AudioAlbumIconComponent.prototype.ngOnInit = function () {
    };
    AudioAlbumIconComponent.prototype.editAudioAlbum = function (event) {
        this.onEditAudioAlbum.emit({ data: this.item });
    };
    AudioAlbumIconComponent.prototype.showAudioList = function (event) {
        this.onShowAudioList.emit({ data: this.item });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AudioAlbumIconComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AudioAlbumIconComponent.prototype, "onEditAudioAlbum", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AudioAlbumIconComponent.prototype, "onShowAudioList", void 0);
    AudioAlbumIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-audio-album-icon',
            template: __webpack_require__(/*! raw-loader!./audio-album-icon.component.html */ "./node_modules/raw-loader/index.js!./src/app/audio-album-icon/audio-album-icon.component.html"),
            styles: [__webpack_require__(/*! ./audio-album-icon.component.css */ "./src/app/audio-album-icon/audio-album-icon.component.css")]
        })
    ], AudioAlbumIconComponent);
    return AudioAlbumIconComponent;
}());



/***/ }),

/***/ "./src/app/audio-icon/audio-icon.component.css":
/*!*****************************************************!*\
  !*** ./src/app/audio-icon/audio-icon.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".audio-icon{\n\twidth: 100px;\n    height: 100px;\n    border: 1px solid #2b90d9;\n    margin: 10px 5px 0px 0px;\n    background-size: cover !important;\n    background-color: #000 !important;\n}\n.audio-icon i{\n\tcolor: #fff;\n    text-align: center;\n    margin: 33px 35px;\n}\n.audio-icon:hover{\n\tborder: 1px solid #fff;\n}\n.audio-icon:hover i{\n\tcolor: #2b90d9;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXVkaW8taWNvbi9hdWRpby1pY29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0lBQ1QsYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsaUNBQWlDO0lBQ2pDLGlDQUFpQztBQUNyQztBQUNBO0NBQ0MsV0FBVztJQUNSLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtDQUNDLHNCQUFzQjtBQUN2QjtBQUNBO0NBQ0MsY0FBYztBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXVkaW8taWNvbi9hdWRpby1pY29uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXVkaW8taWNvbntcblx0d2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJiOTBkOTtcbiAgICBtYXJnaW46IDEwcHggNXB4IDBweCAwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cbi5hdWRpby1pY29uIGl7XG5cdGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDMzcHggMzVweDtcbn1cbi5hdWRpby1pY29uOmhvdmVye1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xufVxuLmF1ZGlvLWljb246aG92ZXIgaXtcblx0Y29sb3I6ICMyYjkwZDk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/audio-icon/audio-icon.component.ts":
/*!****************************************************!*\
  !*** ./src/app/audio-icon/audio-icon.component.ts ***!
  \****************************************************/
/*! exports provided: AudioIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioIconComponent", function() { return AudioIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AudioIconComponent = /** @class */ (function () {
    function AudioIconComponent() {
    }
    AudioIconComponent.prototype.ngOnInit = function () {
        this.posterURL = this.item.poster;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AudioIconComponent.prototype, "item", void 0);
    AudioIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-audio-icon',
            template: __webpack_require__(/*! raw-loader!./audio-icon.component.html */ "./node_modules/raw-loader/index.js!./src/app/audio-icon/audio-icon.component.html"),
            styles: [__webpack_require__(/*! ./audio-icon.component.css */ "./src/app/audio-icon/audio-icon.component.css")]
        })
    ], AudioIconComponent);
    return AudioIconComponent;
}());



/***/ }),

/***/ "./src/app/avchat/avchat.component.css":
/*!*********************************************!*\
  !*** ./src/app/avchat/avchat.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#connectControls, #audioSinkButtons, #acceptCallBox{\n\tdisplay: none;\n}\n#callControls{\n    width: 50px;\n    margin: 50px auto;\n    position: absolute;\n    left: 295px;\n    top: 200px;\n    z-index: 1003;\n}\n.easyrtcMirror{\n\twidth: 628px;\n    position: absolute;\n    top: 40px;\n}\n#callerVideo{\n\tdisplay: none;\n}\n#hangupButton{\n    display: none;\n}\n#callButton{\n    display: none;\n}\n#acceptCallBox{\n    position: absolute;\n    z-index: 10000;\n    width: 100%;\n    top: 100px;\n}\n#acceptCallLabel, #callStatusMessage{\n    /*width: 280px;\n    margin: 50px auto; \n    background: rgba(0, 0, 0, 0.6);\n    padding: 9px;\n    border-radius: 5px;\n    border: 1px solid #ff0000;  */\n}\n.host-img{\n    width: 100px;\n    margin: auto;\n}\n#acceptCallBtn{\n    width: 100px;\n    margin: 10px auto;  \n}\n#callAcceptButton{\n    margin-right: 30px;\n    width: 25px;\n    float: left;\n}\n#buddyImg{\n    height: 200px;\n    width: 200px;\n    /* position: absolute; */\n    /* z-index: 200000; */\n    background-size: cover;\n    border-radius: 50%;\n    border: 3px solid #fff;\n    margin: 50px auto;\n}\n#callStatusMessage{\n    position: absolute;\n    z-index: 1005;\n    margin: -140px auto;\n    display: inline-block;\n    width: 100%;\n    top: 240px;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXZjaGF0L2F2Y2hhdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGFBQWE7QUFDakI7QUFDQTtDQUNDLFlBQVk7SUFDVCxrQkFBa0I7SUFDbEIsU0FBUztBQUNiO0FBQ0E7Q0FDQyxhQUFhO0FBQ2Q7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0lBQ0k7Ozs7O2lDQUs2QjtBQUNqQztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2F2Y2hhdC9hdmNoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb25uZWN0Q29udHJvbHMsICNhdWRpb1NpbmtCdXR0b25zLCAjYWNjZXB0Q2FsbEJveHtcblx0ZGlzcGxheTogbm9uZTtcbn1cbiNjYWxsQ29udHJvbHN7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDI5NXB4O1xuICAgIHRvcDogMjAwcHg7XG4gICAgei1pbmRleDogMTAwMztcbn1cbi5lYXN5cnRjTWlycm9ye1xuXHR3aWR0aDogNjI4cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDBweDtcbn1cbiNjYWxsZXJWaWRlb3tcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuI2hhbmd1cEJ1dHRvbntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuI2NhbGxCdXR0b257XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbiNhY2NlcHRDYWxsQm94e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDAwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDEwMHB4O1xufVxuI2FjY2VwdENhbGxMYWJlbCwgI2NhbGxTdGF0dXNNZXNzYWdle1xuICAgIC8qd2lkdGg6IDI4MHB4O1xuICAgIG1hcmdpbjogNTBweCBhdXRvOyBcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgcGFkZGluZzogOXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmYwMDAwOyAgKi9cbn1cblxuLmhvc3QtaW1ne1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG4jYWNjZXB0Q2FsbEJ0bntcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87ICBcbn1cbiNjYWxsQWNjZXB0QnV0dG9ue1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBmbG9hdDogbGVmdDtcbn1cbiNidWRkeUltZ3tcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gICAgLyogei1pbmRleDogMjAwMDAwOyAqL1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG4jY2FsbFN0YXR1c01lc3NhZ2V7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDEwMDU7XG4gICAgbWFyZ2luOiAtMTQwcHggYXV0bztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiAyNDBweDtcbn1cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/avchat/avchat.component.ts":
/*!********************************************!*\
  !*** ./src/app/avchat/avchat.component.ts ***!
  \********************************************/
/*! exports provided: AvchatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvchatComponent", function() { return AvchatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/// <reference path="../../../libs/easyrtc.d.ts" />

var AvchatComponent = /** @class */ (function () {
    function AvchatComponent() {
        this.selfEasyrtcid = "";
        this.haveSelfVideo = false;
        this.onceOnly = true;
        this.callerPending = null;
        this.buddyImg = '';
        this.buddyImgWidth = '200px';
    }
    AvchatComponent.prototype.ngOnInit = function () {
        this.buddyImg = this.loginData.profilepic.imageBuffer;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('selfVideo', { static: true })
    ], AvchatComponent.prototype, "selfVideo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('callerVideo', { static: true })
    ], AvchatComponent.prototype, "callerVideo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('shareAudio', { static: true })
    ], AvchatComponent.prototype, "shareAudio", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('shareVideo', { static: true })
    ], AvchatComponent.prototype, "shareVideo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('expectVideo', { static: true })
    ], AvchatComponent.prototype, "expectVideo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('expectAudio', { static: true })
    ], AvchatComponent.prototype, "expectAudio", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('connectButton', { static: true })
    ], AvchatComponent.prototype, "connectButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('disconnectButton', { static: true })
    ], AvchatComponent.prototype, "disconnectButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hangupButton', { static: true })
    ], AvchatComponent.prototype, "hangupButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('iam', { static: true })
    ], AvchatComponent.prototype, "iam", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('otherClients', { static: true })
    ], AvchatComponent.prototype, "otherClients", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AvchatComponent.prototype, "loginData", void 0);
    AvchatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-avchat',
            template: __webpack_require__(/*! raw-loader!./avchat.component.html */ "./node_modules/raw-loader/index.js!./src/app/avchat/avchat.component.html"),
            styles: [__webpack_require__(/*! ./avchat.component.css */ "./src/app/avchat/avchat.component.css")]
        })
    ], AvchatComponent);
    return AvchatComponent;
}());



/***/ }),

/***/ "./src/app/capture-pic/capture-pic.component.css":
/*!*******************************************************!*\
  !*** ./src/app/capture-pic/capture-pic.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#profilePicVideo{\n\twidth: 100%;\n}\n#profilePicCanvas{\n\tdisplay: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FwdHVyZS1waWMvY2FwdHVyZS1waWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFdBQVc7QUFDWjtBQUNBO0NBQ0MsYUFBYTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY2FwdHVyZS1waWMvY2FwdHVyZS1waWMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9maWxlUGljVmlkZW97XG5cdHdpZHRoOiAxMDAlO1xufVxuI3Byb2ZpbGVQaWNDYW52YXN7XG5cdGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/capture-pic/capture-pic.component.ts":
/*!******************************************************!*\
  !*** ./src/app/capture-pic/capture-pic.component.ts ***!
  \******************************************************/
/*! exports provided: CapturePicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapturePicComponent", function() { return CapturePicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CapturePicComponent = /** @class */ (function () {
    function CapturePicComponent() {
        this.onCapturePic = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onCamRender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CapturePicComponent.prototype.ngOnInit = function () {
    };
    CapturePicComponent.prototype.ngAfterViewInit = function () {
        this.onCamRender.emit('rendered');
    };
    CapturePicComponent.prototype.ngAfterContentInit = function () {
    };
    CapturePicComponent.prototype.ngAfterContentChecked = function () {
    };
    CapturePicComponent.prototype.capture = function () {
        this.onCapturePic.emit('captured');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CapturePicComponent.prototype, "onCapturePic", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CapturePicComponent.prototype, "onCamRender", void 0);
    CapturePicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-capture-pic',
            template: __webpack_require__(/*! raw-loader!./capture-pic.component.html */ "./node_modules/raw-loader/index.js!./src/app/capture-pic/capture-pic.component.html"),
            styles: [__webpack_require__(/*! ./capture-pic.component.css */ "./src/app/capture-pic/capture-pic.component.css")]
        })
    ], CapturePicComponent);
    return CapturePicComponent;
}());



/***/ }),

/***/ "./src/app/cart-tile/cart-tile.component.css":
/*!***************************************************!*\
  !*** ./src/app/cart-tile/cart-tile.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-pic{\n\twidth: 120px;\n    min-height: 150px;\n    background-size: cover !important;\n    background-position: center !important;\n    background-repeat: no-repeat !important;\n    cursor: zoom-in;\n}\n.cart-tile{\n\tpadding: 7px;\n    margin: 7px;\n    background: #fff;\n    box-shadow: 0 1px 3px rgba(34, 34, 34, 0.25);\n    position: relative;\n    display: inline-table;\n}\n.fa-minus, .fa-plus {\n\tborder: 1px solid #2b90d9;\n    padding: 1px 2px;\n    font-size: 9px;\n    border-radius: 50%;\n    cursor: pointer;\n}\n.fa-minus:hover, .fa-plus:hover{\n    color: #ff0000 !important;\n}\n.item-desc{\n\tpadding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC10aWxlL2NhcnQtdGlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtJQUNULGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsc0NBQXNDO0lBQ3RDLHVDQUF1QztJQUN2QyxlQUFlO0FBQ25CO0FBQ0E7Q0FDQyxZQUFZO0lBQ1QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQiw0Q0FBNEM7SUFDNUMsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QjtBQUVBO0NBQ0MseUJBQXlCO0lBQ3RCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0NBQ0Msa0JBQWtCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY2FydC10aWxlL2NhcnQtdGlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tcGlje1xuXHR3aWR0aDogMTIwcHg7XG4gICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgICBjdXJzb3I6IHpvb20taW47XG59XG4uY2FydC10aWxle1xuXHRwYWRkaW5nOiA3cHg7XG4gICAgbWFyZ2luOiA3cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgzNCwgMzQsIDM0LCAwLjI1KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xufVxuXG4uZmEtbWludXMsIC5mYS1wbHVzIHtcblx0Ym9yZGVyOiAxcHggc29saWQgIzJiOTBkOTtcbiAgICBwYWRkaW5nOiAxcHggMnB4O1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZmEtbWludXM6aG92ZXIsIC5mYS1wbHVzOmhvdmVye1xuICAgIGNvbG9yOiAjZmYwMDAwICFpbXBvcnRhbnQ7XG59XG4uaXRlbS1kZXNje1xuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/cart-tile/cart-tile.component.ts":
/*!**************************************************!*\
  !*** ./src/app/cart-tile/cart-tile.component.ts ***!
  \**************************************************/
/*! exports provided: CartTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartTileComponent", function() { return CartTileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CartTileComponent = /** @class */ (function () {
    function CartTileComponent() {
        this.subtractFromTotal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addToTotal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemCount = 0;
        this.totalPrice = 0;
        this.itemPrice = 0;
    }
    CartTileComponent.prototype.ngOnInit = function () {
        this.itemPrice = this.obj.item.price;
        this.itemCount = this.obj.count;
        this.totalPrice = this.itemPrice * this.itemCount;
    };
    CartTileComponent.prototype.addItemCount = function (event) {
        this.itemCount++;
        this.totalPrice = this.itemPrice * this.itemCount;
        this.addToTotal.emit({ data: this.itemPrice });
    };
    CartTileComponent.prototype.removeItemCount = function (event) {
        if (this.itemCount > 0) {
            this.itemCount--;
            this.totalPrice = this.itemPrice * this.itemCount;
            this.subtractFromTotal.emit({ data: this.itemPrice });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('userId')
    ], CartTileComponent.prototype, "userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('obj')
    ], CartTileComponent.prototype, "obj", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CartTileComponent.prototype, "subtractFromTotal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CartTileComponent.prototype, "addToTotal", void 0);
    CartTileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart-tile',
            template: __webpack_require__(/*! raw-loader!./cart-tile.component.html */ "./node_modules/raw-loader/index.js!./src/app/cart-tile/cart-tile.component.html"),
            styles: [__webpack_require__(/*! ./cart-tile.component.css */ "./src/app/cart-tile/cart-tile.component.css")]
        })
    ], CartTileComponent);
    return CartTileComponent;
}());



/***/ }),

/***/ "./src/app/chat-item/chat-item.component.css":
/*!***************************************************!*\
  !*** ./src/app/chat-item/chat-item.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-name{\n\tline-height: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1pdGVtL2NoYXQtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsaUJBQWlCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY2hhdC1pdGVtL2NoYXQtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtbmFtZXtcblx0bGluZS1oZWlnaHQ6IDMwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/chat-item/chat-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/chat-item/chat-item.component.ts ***!
  \**************************************************/
/*! exports provided: ChatItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatItemComponent", function() { return ChatItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");



var ChatItemComponent = /** @class */ (function () {
    function ChatItemComponent() {
    }
    ChatItemComponent.prototype.ngOnInit = function () {
        this.profilePic = this.item.profilepic.imageBuffer;
        this.fullName = this.item.fullname;
        this.friendId = this.item.username;
        //this.userId = localStorage.getItem('currentUser');
        this.profilePicWidth = _app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"].getPicDimension(this.item.profilepic.profilePicDimension).dimension.width + 'px';
        this.profilePicHeight = _app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"].getPicDimension(this.item.profilepic.profilePicDimension).dimension.height + 'px';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ChatItemComponent.prototype, "item", void 0);
    ChatItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-item',
            template: __webpack_require__(/*! raw-loader!./chat-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat-item/chat-item.component.html"),
            styles: [__webpack_require__(/*! ./chat-item.component.css */ "./src/app/chat-item/chat-item.component.css")]
        })
    ], ChatItemComponent);
    return ChatItemComponent;
}());



/***/ }),

/***/ "./src/app/chat-window/chat-window.component.css":
/*!*******************************************************!*\
  !*** ./src/app/chat-window/chat-window.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-window-header{\n    height: 23px;\n    background: #2b90d9;\n    width: 251px;\n    margin-left: -1px;\n    margin-right: -1px;\n    margin-top: -1px;\n    padding: 0px 3px;\n    line-height: 23px;\n}\n\n.chat-window-header .full-name{\n\twidth: 100px !important;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\t\n}\n\n.chat-window-header i{\n\tmargin: 3px;\n}\n\n.chat-window-header i:hover{\n\tcolor: #e9ebee;\n}\n\n.chat-window-body{\n    height: 181px;\n    overflow-y: auto;\n    max-width: 249px;\n    padding: 5px 0px;\n}\n\n.chat-window textarea{\n    width: 249px;\n    border: navajowhite;\n    background: none;\n    outline: none;\n    border-top: 1px solid #e6e6e6;\n    resize: none;\n    height: 46px;\n}\n\n.msg-row{\n    line-height: 30px;\n    display: inline-block;\n}\n\n.msg-img{\n    width: 30px;\n}\n\n.msg-field{\n    width: 180px;\n}\n\n#videos{\n    display: none;\n}\n\n.smiley-icon img{\n    border: 1px solid #fff;\n    border-radius: 50%;\n    height: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC13aW5kb3cvY2hhdC13aW5kb3cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7Q0FDQyx1QkFBdUI7SUFDcEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7O0FBR0E7Q0FDQyxjQUFjO0FBQ2Y7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY2hhdC13aW5kb3cvY2hhdC13aW5kb3cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0LXdpbmRvdy1oZWFkZXJ7XG4gICAgaGVpZ2h0OiAyM3B4O1xuICAgIGJhY2tncm91bmQ6ICMyYjkwZDk7XG4gICAgd2lkdGg6IDI1MXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgIG1hcmdpbi1yaWdodDogLTFweDtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIHBhZGRpbmc6IDBweCAzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XG59XG5cbi5jaGF0LXdpbmRvdy1oZWFkZXIgLmZ1bGwtbmFtZXtcblx0d2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1x0XG59XG4uY2hhdC13aW5kb3ctaGVhZGVyIGl7XG5cdG1hcmdpbjogM3B4O1xufVxuXG5cbi5jaGF0LXdpbmRvdy1oZWFkZXIgaTpob3Zlcntcblx0Y29sb3I6ICNlOWViZWU7XG59XG4uY2hhdC13aW5kb3ctYm9keXtcbiAgICBoZWlnaHQ6IDE4MXB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgbWF4LXdpZHRoOiAyNDlweDtcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xufVxuLmNoYXQtd2luZG93IHRleHRhcmVhe1xuICAgIHdpZHRoOiAyNDlweDtcbiAgICBib3JkZXI6IG5hdmFqb3doaXRlO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgaGVpZ2h0OiA0NnB4O1xufVxuLm1zZy1yb3d7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLm1zZy1pbWd7XG4gICAgd2lkdGg6IDMwcHg7XG59XG4ubXNnLWZpZWxke1xuICAgIHdpZHRoOiAxODBweDtcbn1cbiN2aWRlb3N7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5zbWlsZXktaWNvbiBpbWd7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiAxNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/chat-window/chat-window.component.ts":
/*!******************************************************!*\
  !*** ./src/app/chat-window/chat-window.component.ts ***!
  \******************************************************/
/*! exports provided: ChatWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatWindowComponent", function() { return ChatWindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");



var ChatWindowComponent = /** @class */ (function () {
    function ChatWindowComponent() {
        this.chatWindowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chatWindowReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.startVideoChat = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sendMsg = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.msgInput = '';
        this.chatWindowId = '';
        var self = this;
        this.loginData = JSON.parse(localStorage.getItem('loginData'));
        window.addEventListener('onMessageDisplay', function (e) {
            try {
                self.displayServerMsg(e.detail.msgObj);
            }
            catch (err) {
                console.log(err);
            }
        }, false);
    }
    ChatWindowComponent.prototype.ngOnInit = function () {
    };
    ChatWindowComponent.prototype.ngAfterViewInit = function () {
        this.chatWindowReady.emit({ data: this.chatObj, chatwindow: this });
    };
    ChatWindowComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    ChatWindowComponent.prototype.scrollToBottom = function () {
        try {
            this.chatWindowBody.nativeElement.scrollTop = this.chatWindowBody.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    ChatWindowComponent.prototype.closeChatWindow = function (chatId) {
        this.chatWindowClose.emit({ data: chatId });
    };
    ChatWindowComponent.prototype.startVideoCall = function () {
        this.startVideoChat.emit({ data: this.chatObj, chatwindow: this });
    };
    ChatWindowComponent.prototype.onEnterPressed = function (event) {
        if (event.keyCode === 13 && !event.shiftKey) {
            event.preventDefault();
            var msgObj = { 'chatid': this.chatObj.username, 'msg': this.msgInput, 'info': this.loginData };
            this.displayClientMsg(msgObj);
            this.sendMsg.emit(msgObj);
            this.msgInput = '';
            return false;
        }
    };
    /*
      private displayClientMsg(msgObj){
        let html = "<div class='row no-margin msg-row'><div class='msg pull-right col-md-2 no-padding'><img class='profile-pic-icon pull-right' src='"+JSON.parse(obj.senderInfo).profilepic.imageBuffer+"'></div><div style='word-break: break-all; padding-top: 2px;' class='pull-right col-md-10 no-padding text-right msg-field'>"+CreateSmileys.setSmileys(obj.msg)+"</div></div>";
        //var html = "<div class='row no-margin msg-row'><div class='msg pull-left col-md-2'><img class='profile-pic-icon' src=''></div><div style='word-break: break-all; padding-top: 2px;' class='pull-left col-md-10'>"+CreateSmileys.setSmileys(obj.msg)+"</div></div>";
    
        let validID = "";
    
        if(obj.receiverInfo._id !== undefined){
          validID = msgObj.receiverInfo._id;
        }
        //$("chat-window").find("#"+validID).find('.chat-panel-body').empty();
        $("chat-window").find("#"+validID).find('.chat-panel-body').append(html);
        try{
          scrollToBottom($("chat-window").find("#"+validID).find('.chat-panel-body'), $("chat-window").find("#"+validID).find('.chat-panel-body').scrollHeight);
        //$(".chat-body-height").mCustomScrollbar();
        }catch(err){
          console.log(err);
        }
    
      }*/
    ChatWindowComponent.prototype.displayClientMsg = function (msgObj) {
        //let html = "<div class='row no-margin msg-row'><div class='msg pull-right col-md-2 no-padding'><img class='profile-pic-icon pull-right' src='"+JSON.parse(obj.senderInfo).profilepic.imageBuffer+"'></div><div style='word-break: break-all; padding-top: 2px;' class='pull-right col-md-10 no-padding text-right msg-field'>"+CreateSmileys.setSmileys(obj.msg)+"</div></div>";
        var msgItem = "<div class='client-msg msg-row' style='display: inline-block; width: 100%; max-width: 245px;'><div class='msg-img pull-right no-padding'><img class='profile-pic-small pull-right' src='" + msgObj.info.profilepic.imageBuffer + "'></div><div style='word-break: break-all; padding: 4px 8px; line-height: 20px; max-width: 200px; background: #2b90d9; color: #fff; border-radius: 10px; border-bottom-right-radius: 0px;' class='pull-right text-right msg-field'>" + _app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"].setSmileys(msgObj.msg) + "</div></div>";
        //var html = "<div class='row no-margin msg-row'><div class='msg pull-left col-md-2'><img class='profile-pic-icon' src=''></div><div style='word-break: break-all; padding-top: 2px;' class='pull-left col-md-10'>"+CreateSmileys.setSmileys(obj.msg)+"</div></div>";
        this.chatWindowBody.nativeElement.insertAdjacentHTML('beforeend', msgItem);
        /* try{
           scrollToBottom($("chat-window").find("#"+validID).find('.chat-panel-body'), $("chat-window").find("#"+validID).find('.chat-panel-body').scrollHeight);
         //$(".chat-body-height").mCustomScrollbar();
         }catch(err){
           console.log(err);
         }*/
    };
    ChatWindowComponent.prototype.displayServerMsg = function (msgObj) {
        if (msgObj.item.username === this.chatObj.username) {
            //let html = "<div class='row no-margin msg-row'><div class='msg pull-right col-md-2 no-padding'><img class='profile-pic-icon pull-right' src='"+JSON.parse(obj.senderInfo).profilepic.imageBuffer+"'></div><div style='word-break: break-all; padding-top: 2px;' class='pull-right col-md-10 no-padding text-right msg-field'>"+CreateSmileys.setSmileys(obj.msg)+"</div></div>";
            var msgItem = "<div class='client-msg msg-row' style='display: inline-block; width: 100%; max-width: 245px;'><div class='msg-img pull-left no-padding'><img class='profile-pic-small pull-left' src='" + msgObj.item.profilepic.imageBuffer + "'></div><div style='word-break: break-all; padding: 4px 8px; line-height: 20px; max-width: 200px; background: #e9ebee; color: #000; border-radius: 10px; border-bottom-left-radius: 0px;' class='pull-left text-right msg-field'>" + _app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"].setSmileys(msgObj.msg) + "</div></div>";
            //var html = "<div class='row no-margin msg-row'><div class='msg pull-left col-md-2'><img class='profile-pic-icon' src=''></div><div style='word-break: break-all; padding-top: 2px;' class='pull-left col-md-10'>"+CreateSmileys.setSmileys(obj.msg)+"</div></div>";
            this.chatWindowBody.nativeElement.insertAdjacentHTML('beforeend', msgItem);
            /* try{
               scrollToBottom($("chat-window").find("#"+validID).find('.chat-panel-body'), $("chat-window").find("#"+validID).find('.chat-panel-body').scrollHeight);
             //$(".chat-body-height").mCustomScrollbar();
             }catch(err){
               console.log(err);
             }*/
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ChatWindowComponent.prototype, "chatObj", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ChatWindowComponent.prototype, "chatWindowClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ChatWindowComponent.prototype, "chatWindowReady", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ChatWindowComponent.prototype, "startVideoChat", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ChatWindowComponent.prototype, "sendMsg", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chatWindowBody', { static: true })
    ], ChatWindowComponent.prototype, "chatWindowBody", void 0);
    ChatWindowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-window',
            template: __webpack_require__(/*! raw-loader!./chat-window.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat-window/chat-window.component.html"),
            styles: [__webpack_require__(/*! ./chat-window.component.css */ "./src/app/chat-window/chat-window.component.css")]
        })
    ], ChatWindowComponent);
    return ChatWindowComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-panel-header{\n\theight: 23px;\n    background: #2b90d9;\n    width: 250px;\n    margin-left: -1px;\n    margin-top: -1px;\n    padding: 0px 3px;\n    line-height: 23px;\n}\n.chat-panel-header i:hover{\n    color: #e9ebee;\n}\napp-chat-item:hover{\n\tbackground: #e9ebee;\n\tcursor: pointer;\n\twidth: 100%;\n}\n.chat-search-box input[type=\"text\"]{\n\tline-height: 25px;\n    height: 25px;\n    display: block;\n    width: 225px;\n    border: none;\n    outline: none;\n    margin-left: 2px;\n    background: none;\n}\n.chat-search-box i{\n    color: #2b90d9 !important;\n    font-size: 15px;\n    line-height: 25px;\n    padding: 0px 2px;\n}\n.chat-search-box{\n\tdisplay: inline-block;\n    border-top: 1px solid #e6e6e6;\n    width: 249px;\n}\n.chat-panel-settings-btn i{\n    padding: 2px;\n}\n.chat-window-container{\n    position: fixed;\n    right: 260px;\n    bottom: 0px;\n    height: 250px;\n}\napp-chat-window {\n    border-radius: 0px;\n    border-bottom: none;\n    height: 250px;\n    margin-right: 10px;\n}\n.chat-panel-container{\n    position: fixed;\n    bottom: 0px;\n    right: 0px;\n    /* display: inline-block; */\n    width: 250px;\n    border-left: 1px solid #e6e6e6;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0lBQ1QsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtDQUNDLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2YsV0FBVztBQUNaO0FBQ0E7Q0FDQyxpQkFBaUI7SUFDZCxZQUFZO0lBQ1osY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0NBQ0MscUJBQXFCO0lBQ2xCLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdC1wYW5lbC1oZWFkZXJ7XG5cdGhlaWdodDogMjNweDtcbiAgICBiYWNrZ3JvdW5kOiAjMmI5MGQ5O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIHBhZGRpbmc6IDBweCAzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XG59XG4uY2hhdC1wYW5lbC1oZWFkZXIgaTpob3ZlcntcbiAgICBjb2xvcjogI2U5ZWJlZTtcbn1cbmFwcC1jaGF0LWl0ZW06aG92ZXJ7XG5cdGJhY2tncm91bmQ6ICNlOWViZWU7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0d2lkdGg6IDEwMCU7XG59XG4uY2hhdC1zZWFyY2gtYm94IGlucHV0W3R5cGU9XCJ0ZXh0XCJde1xuXHRsaW5lLWhlaWdodDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDIyNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmNoYXQtc2VhcmNoLWJveCBpe1xuICAgIGNvbG9yOiAjMmI5MGQ5ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIHBhZGRpbmc6IDBweCAycHg7XG59XG4uY2hhdC1zZWFyY2gtYm94e1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNmU2ZTY7XG4gICAgd2lkdGg6IDI0OXB4O1xufVxuLmNoYXQtcGFuZWwtc2V0dGluZ3MtYnRuIGl7XG4gICAgcGFkZGluZzogMnB4O1xufVxuLmNoYXQtd2luZG93LWNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDI2MHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG59XG5hcHAtY2hhdC13aW5kb3cge1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNoYXQtcGFuZWwtY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cbiAgICB3aWR0aDogMjUwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTZlNmU2O1xufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _libs_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../libs/socket.io */ "./libs/socket.io.js");
/* harmony import */ var _libs_socket_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_libs_socket_io__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services_data_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/data/chat.service */ "./src/app/services/data/chat.service.ts");
/* harmony import */ var _modal_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/modal.service */ "./src/app/modal/modal.service.ts");







var ChatComponent = /** @class */ (function () {
    function ChatComponent(router, chatService, cdr, modalService, ngZone) {
        this.router = router;
        this.chatService = chatService;
        this.cdr = cdr;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.userId = '';
        this.windowReady = true;
        this.selfEasyrtcid = "";
        this.modalId = 'avModal';
        this.myId = '';
        this.connectedClientsList = [];
        this.loginData = JSON.parse(localStorage.getItem('loginData'));
        this.userId = this.loginData.username;
        this.profilePic = this.loginData.profilepic.imageBuffer;
        this.chatWindowList = [];
        //this.openChatSocket();
        this.connect();
    }
    ChatComponent.prototype.ngOnInit = function () {
        window.app = window.app || {};
        window.app.namespace = window.app.namespace || {};
        window.app.namespace.callFromExternalInterface = this.callFromExternalInterface.bind(this);
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        window.app.namespace.callFromExternalInterface = null;
    };
    ChatComponent.prototype.callFromExternalInterface = function (easyrtcId) {
        var _this = this;
        return this.ngZone.run(function () { return _this.syncUserInfoWithEasyRTCId(easyrtcId); });
    };
    ChatComponent.prototype.ngAfterViewInit = function () {
        this.pullChatBuddyList();
        this.subscribeToChatBuddyList();
    };
    ChatComponent.prototype.connect = function () {
        this.triggerWindowEvent('onConnect', { 'event': 'onConnect', 'msgObj': {} });
        var self = this;
        window.addEventListener('onEasyRTCIDCreated', function (e) {
            try {
                var easyRTCId = e.detail.eventObj;
                self.openChatSocket(easyRTCId);
            }
            catch (err) {
                console.log(err);
            }
        }, false);
        //easyrtc.setVideoDims(1280,720);
        //easyrtc.enableDebug(false);
        //rtc.easyrtc.setRoomOccupantListener(convertListToButtons);
        //rtc.easyrtc.easyApp("easyrtc.videoChatHd", "selfVideo", ["callerVideo"], loginSuccess, loginFailure);
    };
    ChatComponent.prototype.subscribeToChatBuddyList = function () {
        var _this = this;
        this.intervalId = setInterval(function () { _this.pullChatBuddyList(); }, 1000 * 10);
    };
    ChatComponent.prototype.pullChatBuddyList = function () {
        var _this = this;
        var postObj = { 'userid': this.userId };
        this.chatService.getChatBuddyList(postObj).subscribe(function (data) { return _this.afterChatBuddyList(data); });
    };
    ChatComponent.prototype.afterChatBuddyList = function (data) {
        this.chatBuddyList = data;
        var self = this;
        window.addEventListener('onCallBuddy', function (e) {
            try {
                self.syncChatBuddiesWithVideoCall(e.detail.callbuddy);
            }
            catch (err) {
                console.log(err);
            }
        }, false);
    };
    ChatComponent.prototype.openChatWindow = function (item) {
        var match = false;
        for (var i in this.chatWindowList) {
            if (this.chatWindowList[i].username === item.username) {
                match = true;
            }
        }
        if (!match) {
            this.chatWindowList.push(item);
        }
    };
    ChatComponent.prototype.startVideoChat = function (event) {
        var self = this;
        self.modalService.open(self.modalId);
        self.syncChatBuddiesWithVideoCall(event.data.username);
        window.addEventListener('closeAVModal', function (e) {
            try {
                self.modalService.close(self.modalId);
            }
            catch (err) {
                console.log(err);
            }
        }, false);
    };
    ChatComponent.prototype.syncChatBuddiesWithVideoCall = function (matchBuddy) {
        var chatBuddyList = this.chatBuddyList;
        for (var obj in chatBuddyList) {
            if (chatBuddyList[obj].username === matchBuddy) {
                var callBuddy = chatBuddyList[obj].username;
                var easyrtcId = chatBuddyList[obj].easyrtcid;
                if (easyrtcId !== '') {
                    this.triggerWindowEvent('startVideoChat', { 'event': 'startVideoChat', 'easyrtcid': easyrtcId, 'callbuddy': callBuddy });
                }
            }
        }
    };
    ChatComponent.prototype.syncEasyrtcIdWithVideoCall = function (easyrtcId) {
        var chatBuddyList = this.chatBuddyList;
        for (var obj in chatBuddyList) {
            if (chatBuddyList[obj].easyrtcid === easyrtcId) {
                var callBuddy = chatBuddyList[obj].username;
                window["callBuddy"] = callBuddy;
            }
        }
    };
    ChatComponent.prototype.syncUserInfoWithEasyRTCId = function (easyrtcId) {
        var chatBuddyList = this.chatBuddyList;
        for (var i in chatBuddyList) {
            if (chatBuddyList[i].easyrtcid === easyrtcId) {
                var obj = { 'fullname': chatBuddyList[i].fullname, 'profilepic': chatBuddyList[i].profilepic };
                return obj;
            }
        }
    };
    ChatComponent.prototype.chatWindowClose = function (event) {
        var chatId = event.data;
        for (var i in this.chatWindowList) {
            if (this.chatWindowList[i].username === chatId) {
                this.chatWindowList.splice(i, 1);
            }
        }
    };
    ChatComponent.prototype.chatWindowReady = function (event) {
        var chatWindow = event.chatwindow;
        if (!this.windowReady) {
            var data = event.data;
            var chatId = data.username;
            if (chatId === this.cachedChatData.item.username) {
                this.windowReady = true;
                try {
                    chatWindow.displayServerMsg(this.cachedChatData);
                    delete this.cachedChatData;
                }
                catch (err) {
                    console.log(err);
                }
            }
        }
    };
    ChatComponent.prototype.openChatSocket = function (easyrtcId) {
        var self = this;
        var chatObj = { 'userid': this.userId, 'easyrtcid': easyrtcId };
        //require(['socket-io'], function(io) {
        //this.socket = io('https://192.168.1.3:3000/');
        if (window.location.href.indexOf("127.0.0.1") > -1) {
            this.socket = _libs_socket_io__WEBPACK_IMPORTED_MODULE_3__('http://127.0.0.1:3000');
        }
        else {
            this.socket = _libs_socket_io__WEBPACK_IMPORTED_MODULE_3__('https://wefrenz.com/');
        }
        //this.socket = io("'"+ AppSettingsService.API_ENDPOINT("local") +"'");
        //this.socket = io('http://localhost:3000');
        //this.socket = io('https://13.127.194.58:3000/');
        //this.socket = io('https://192.168.225.177:3000/');
        this.socket.emit('ON_SOCKET_INIT', chatObj);
        /*socket.on("UPDATE_CHAT_LIST", function(data){
            //alert('update chat list');
            updateChatList();
        });*/
        //Getting the new msg from server
        this.socket.on('ON_NEW_MSG', function (data) {
            self.openChatWindowOnNewMessage(data);
            //console.log('new msg'+ data.chatid+'///'+ data.msg);
        });
        window.addEventListener('onAppLoggedOut', function (e) {
            self.closeSocket();
            self.triggerWindowEvent('onDisConnect', { 'event': 'onConnect', 'msgObj': {} });
        }, false);
        window.addEventListener('onCallAcceptChecker', function (e) {
            self.syncEasyrtcIdWithVideoCall(e.detail.easyrtcid);
            self.checkCallAcceptor();
        }, false);
    };
    ChatComponent.prototype.checkCallAcceptor = function () {
        var self = this;
        self.modalService.open(self.modalId);
    };
    ChatComponent.prototype.closeSocket = function () {
        this.socket.disconnect();
    };
    //Sending message to the other user connected through socket
    ChatComponent.prototype.sendMsg = function (event) {
        console.log(event.chatid + '///' + event.msg);
        var chatObj = { 'chatid': event.chatid, 'msg': event.msg, 'item': this.loginData };
        this.socket.emit('ON_SEND_MSG', chatObj);
    };
    ChatComponent.prototype.openChatWindowOnNewMessage = function (data) {
        this.cachedChatData = {};
        var match = false;
        for (var i in this.chatWindowList) {
            if (this.chatWindowList[i].username === data.item.username) {
                match = true;
            }
        }
        if (!match) {
            this.windowReady = false;
            this.cachedChatData = data;
            this.chatWindowList.push(data.item);
        }
        else {
            this.windowReady = true;
            delete this.cachedChatData;
            //this.appChatWindow.displayServerMsg(data);
            this.triggerWindowEvent('onMessageDisplay', { 'event': 'onMessageDisplay', 'msgObj': data });
        }
    };
    ChatComponent.prototype.triggerWindowEvent = function (eventType, evtObj) {
        var evt = new CustomEvent(eventType, { 'detail': evtObj });
        window.dispatchEvent(evt);
    };
    ChatComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _app_services_data_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _modal_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appChatWindow', { static: true })
    ], ChatComponent.prototype, "appChatWindow", void 0);
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat/chat.component.html"),
            providers: [_app_services_data_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"]],
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ]
        })
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/checkin/checkin.component.css":
/*!***********************************************!*\
  !*** ./src/app/checkin/checkin.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    agm-map {\n      height: 300px;\n    }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tpbi9jaGVja2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IklBQUk7TUFDRSxhQUFhO0lBQ2YiLCJmaWxlIjoic3JjL2FwcC9jaGVja2luL2NoZWNraW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICBhZ20tbWFwIHtcbiAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgfVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/checkin/checkin.component.ts":
/*!**********************************************!*\
  !*** ./src/app/checkin/checkin.component.ts ***!
  \**********************************************/
/*! exports provided: CheckinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinComponent", function() { return CheckinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");

/// <reference types="@types/googlemaps" />



var CheckinComponent = /** @class */ (function () {
    function CheckinComponent(mapsAPILoader, ngZone) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.checkInItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        //this.setCurrentPosition();
    }
    CheckinComponent.prototype.ngOnInit = function () {
        var _this = this;
        //set google maps defaults
        this.zoom = 12;
        // this.latitude = 39.8282;
        // this.longitude = -98.5795;
        //set current position
        this.setCurrentPosition();
        //create search FormControl
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: []
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
    };
    CheckinComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.latitude = position.coords.latitude;
            _this.longitude = position.coords.longitude;
        });
    };
    CheckinComponent.prototype.checkIn = function () {
        this.mapData = 'https://maps.googleapis.com/maps/api/staticmap?center=' + this.latitude + ',' + this.longitude + '&markers=color:red%7Clabel:C%7C' + this.latitude + ',' + this.longitude + '&zoom=' + this.zoom + '&size=600x400&key=AIzaSyD92tk4K4diBMwwDA0l8qxsBnSWgJQIl2A';
        var data = { 'postCheckIn': this.postCheckIn, 'postDesc': this.postDesc, 'mapData': this.mapData };
        this.checkInItem.emit({ data: data });
        this.postCheckIn = '';
        this.postDesc = '';
        this.latitude = null;
        this.longitude = null;
        this.setCurrentPosition();
    };
    CheckinComponent.prototype.resetCheckin = function () {
        //alert('reset');
    };
    CheckinComponent.ctorParameters = function () { return [
        { type: _agm_core__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CheckinComponent.prototype, "checkInItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("search", { static: true })
    ], CheckinComponent.prototype, "searchElementRef", void 0);
    CheckinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkin',
            template: __webpack_require__(/*! raw-loader!./checkin.component.html */ "./node_modules/raw-loader/index.js!./src/app/checkin/checkin.component.html"),
            styles: [__webpack_require__(/*! ./checkin.component.css */ "./src/app/checkin/checkin.component.css")]
        })
    ], CheckinComponent);
    return CheckinComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-address-content, .add-payment-content{\n\toverflow-y: auto;\n    overflow-x: hidden;\n    display: inline-block;\n    width: 100%;\n    box-sizing: border-box;\n    display: inline-block;\n    position: relative;\n    padding: 0px 15px 0px 0px;\n}\n.checkout-controlbar{\n\tborder: 1px solid #2b90d9;\n    display: inline-block;\n\n}\n.market-content{\n\tpadding: 6px;\n}\n.place-order{\n\tcursor: pointer;\n    padding: 1px 5px;\n    background: #2b90d9;\n    color: #fff;\n    border: 1px solid #d9e1e8;\n    line-height: 19px;\n    margin: 1px;\n}\n.place-order:hover{\n\tcolor: #d9e1e8;\n    border: 1px solid #d9e1e8;\n    opacity: 0.7;\n}\n.grand-total{\n\tline-height: 19px;\n    margin: 3px;\n    color: #ff0000;\n}\n.grand-total{\n    color: #ff0000;\n    margin: 3px;\n    line-height: 19px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGdCQUFnQjtJQUNiLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUNBO0NBQ0MseUJBQXlCO0lBQ3RCLHFCQUFxQjs7QUFFekI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBO0NBQ0MsZUFBZTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsV0FBVztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFDQTtDQUNDLGlCQUFpQjtJQUNkLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWFkZHJlc3MtY29udGVudCwgLmFkZC1wYXltZW50LWNvbnRlbnR7XG5cdG92ZXJmbG93LXk6IGF1dG87XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMHB4IDE1cHggMHB4IDBweDtcbn1cbi5jaGVja291dC1jb250cm9sYmFye1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMmI5MGQ5O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxufVxuLm1hcmtldC1jb250ZW50e1xuXHRwYWRkaW5nOiA2cHg7XG59XG4ucGxhY2Utb3JkZXJ7XG5cdGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAxcHggNXB4O1xuICAgIGJhY2tncm91bmQ6ICMyYjkwZDk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZTFlODtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICBtYXJnaW46IDFweDtcbn1cbi5wbGFjZS1vcmRlcjpob3Zlcntcblx0Y29sb3I6ICNkOWUxZTg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZTFlODtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG4uZ3JhbmQtdG90YWx7XG5cdGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIG1hcmdpbjogM3B4O1xuICAgIGNvbG9yOiAjZmYwMDAwO1xufVxuLmdyYW5kLXRvdGFse1xuICAgIGNvbG9yOiAjZmYwMDAwO1xuICAgIG1hcmdpbjogM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services_data_market_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/data/market.service */ "./src/app/services/data/market.service.ts");
/* harmony import */ var _modal_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/modal.service */ "./src/app/modal/modal.service.ts");
/* harmony import */ var _app_services_data_address_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/data/address.service */ "./src/app/services/data/address.service.ts");






var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(route, router, marketService, modalService, addressService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.marketService = marketService;
        this.modalService = modalService;
        this.addressService = addressService;
        this.isMyProfile = false;
        this.userId = '';
        this.friendId = '';
        this.checkOutItemArr = [];
        this.grandTotal = 0;
        this.modalId = "addAddressModal";
        this.isAddressAdded = false;
        this.modalTitle = '';
        this.onAppLoggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onAppLoggedOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.ngOnInit();
            }
            // Instance of should be: 
            // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized
        });
        this.screenHeight = window.screen.height - 175;
        route.params.subscribe(function (val) {
            var currentUser = localStorage.getItem('currentUser');
            var id = _this.route.snapshot.paramMap.get('id');
            if (!currentUser) {
                _this.triggerLoggedInCheck('onAppLoggedOut', { event: 'onAppLoggedOut', message: 'logged out' });
                _this.onAppLoggedOut.emit('logged Out');
                _this.router.navigate(['public']);
                return;
            }
            else {
                _this.triggerLoggedInCheck('onAppLoggedIn', { event: 'onAppLoggedIn', message: 'logged in' });
                _this.onAppLoggedIn.emit('logged In');
                localStorage.setItem('currentRoute', 'checkout/' + id);
            }
            if (currentUser === id) {
                _this.isMyProfile = true;
                localStorage.setItem("isMyProfile", 'true');
                _this.userId = currentUser;
            }
            else {
                _this.isMyProfile = false;
                localStorage.setItem("isMyProfile", 'false');
                var postObj = { 'userid': currentUser, 'friendid': id };
                _this.friendId = id;
                //this.friendsService.getFriendInfo(postObj).subscribe(data => this.afterFriendInfo(data));
            }
            //this.routeSwitch.emit(this.isMyProfile);
            //this.getProfileInfo(id);
        });
        this.getAddressInfo();
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.fetchCheckOut();
    };
    CheckoutComponent.prototype.placeOrder = function (event) {
        if (this.isAddressAdded) {
            this.modalTitle = 'Make Payment';
        }
        else {
            this.modalTitle = 'Add Address';
        }
        this.openAppModal();
    };
    CheckoutComponent.prototype.openAppModal = function (modalType) {
        if (modalType === void 0) { modalType = null; }
        var self = this;
        self.modalService.open(self.modalId);
    };
    CheckoutComponent.prototype.fetchCheckOut = function () {
        var _this = this;
        var postObj = { 'username': this.userId };
        this.marketService.fetchCheckOut(postObj).subscribe(function (data) { return _this.afterFetchCheckOut(data); });
    };
    CheckoutComponent.prototype.afterFetchCheckOut = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            this.checkOutItemArr = result.info.checkOutItem;
            this.calculateGrandTotal();
        }
    };
    CheckoutComponent.prototype.triggerLoggedInCheck = function (eventType, evtObj) {
        var evt = new CustomEvent(eventType, evtObj);
        window.dispatchEvent(evt);
    };
    CheckoutComponent.prototype.calculateGrandTotal = function () {
        for (var i in this.checkOutItemArr) {
            this.grandTotal += (this.checkOutItemArr[i].count * this.checkOutItemArr[i].item.price);
        }
    };
    CheckoutComponent.prototype.addToTotal = function (event) {
        var amount = event.data;
        this.grandTotal += amount;
    };
    CheckoutComponent.prototype.subtractFromTotal = function (event) {
        var amount = event.data;
        this.grandTotal -= amount;
    };
    CheckoutComponent.prototype.addressSaved = function (event) {
        //this.modalService.close(this.modalId);
        this.isAddressAdded = true;
    };
    CheckoutComponent.prototype.getAddressInfo = function () {
        var _this = this;
        var postObj = { 'username': this.userId };
        this.addressService.getAddressInfo(postObj).subscribe(function (data) { return _this.afterGotAddressInfo(data); });
        ;
    };
    CheckoutComponent.prototype.afterGotAddressInfo = function (result) {
        if (result.status === 'failure') {
            this.isAddressAdded = false;
        }
        else {
            this.isAddressAdded = true;
        }
    };
    CheckoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _app_services_data_market_service__WEBPACK_IMPORTED_MODULE_3__["MarketService"] },
        { type: _modal_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"] },
        { type: _app_services_data_address_service__WEBPACK_IMPORTED_MODULE_5__["AddressService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CheckoutComponent.prototype, "onAppLoggedIn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CheckoutComponent.prototype, "onAppLoggedOut", void 0);
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.component.html"),
            providers: [_app_services_data_market_service__WEBPACK_IMPORTED_MODULE_3__["MarketService"], _app_services_data_address_service__WEBPACK_IMPORTED_MODULE_5__["AddressService"]],
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
        })
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/comment-box/comment-box.component.css":
/*!*******************************************************!*\
  !*** ./src/app/comment-box/comment-box.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comment-box{\n\theight: 60px;\n\tpadding: 3px;\n\tborder: 1px solid #e6e6e6;\t\n\twidth: 280px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudC1ib3gvY29tbWVudC1ib3guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7Q0FDWixZQUFZO0NBQ1oseUJBQXlCO0NBQ3pCLFlBQVk7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnQtYm94L2NvbW1lbnQtYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tbWVudC1ib3h7XG5cdGhlaWdodDogNjBweDtcblx0cGFkZGluZzogM3B4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1x0XG5cdHdpZHRoOiAyODBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/comment-box/comment-box.component.ts":
/*!******************************************************!*\
  !*** ./src/app/comment-box/comment-box.component.ts ***!
  \******************************************************/
/*! exports provided: CommentBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentBoxComponent", function() { return CommentBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommentBoxComponent = /** @class */ (function () {
    function CommentBoxComponent() {
    }
    CommentBoxComponent.prototype.ngOnInit = function () {
    };
    CommentBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comment-box',
            template: __webpack_require__(/*! raw-loader!./comment-box.component.html */ "./node_modules/raw-loader/index.js!./src/app/comment-box/comment-box.component.html"),
            styles: [__webpack_require__(/*! ./comment-box.component.css */ "./src/app/comment-box/comment-box.component.css")]
        })
    ], CommentBoxComponent);
    return CommentBoxComponent;
}());



/***/ }),

/***/ "./src/app/commentitem/commentitem.component.css":
/*!*******************************************************!*\
  !*** ./src/app/commentitem/commentitem.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comment-controls .fa-thumbs-up, .comment-controls .fa-heart, .comment-controls .fa-comment{\n    margin: 0px 3px 0px 0px;\n}\n .comment-controls .fa-heart, .comment-controls .fa-comment{\n \tmargin: 0px 3px;\n }\n .comment-edit-items{\n \tposition: absolute;\n    left: 233px;\n    margin-top: 38px;\n    z-index: 1000;\n }\n .comment-profile-pic{\n \theight: 26px;\n \twidth: 26px;\n \tborder-radius: 50%;\n  border: 1px solid #2b90d9;\n }\n .full-name{\n\tpadding-left: 3px;\n}\n .feed-item{\n    word-wrap: break-word;\n }\n .edit-feed{\n \theight: 30px;\n    width: 30px;\n    line-height: 29px;\n    border: 1px solid #e6e6e6 !important;\n    border-radius: 3px;\n }\n .edit-feed i{\n \tmargin: 0px 9px;\n }\n .edit-feed:hover{\n  \tborder: 1px solid red !important;\n  }\n .edit-feed:hover i{\n  \tcolor: red !important;\n  }\n .comment-arrow{\n  \tposition: absolute;\n    left: 296px;\n    margin-top: 29px;\n  }\n .comment-controls{\n  \tdisplay: inline-block;\n    padding: 0px 5px 0px 0px;\n  }\n .story-close-icon{\n    left: 278px;\n    margin-top: 8px;\n    position: absolute;\n  }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudGl0ZW0vY29tbWVudGl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjtDQUNDO0VBQ0MsZUFBZTtDQUNoQjtDQUNBO0VBQ0Msa0JBQWtCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtDQUNoQjtDQUNBO0VBQ0MsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0NBQzFCO0NBQ0Q7Q0FDQyxpQkFBaUI7QUFDbEI7Q0FDQztJQUNHLHFCQUFxQjtDQUN4QjtDQUNBO0VBQ0MsWUFBWTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtDQUNyQjtDQUNBO0VBQ0MsZUFBZTtDQUNoQjtDQUVDO0dBQ0MsZ0NBQWdDO0VBQ2pDO0NBQ0E7R0FDQyxxQkFBcUI7RUFDdEI7Q0FFQTtHQUNDLGtCQUFrQjtJQUNqQixXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCO0NBQ0E7R0FDQyxxQkFBcUI7SUFDcEIsd0JBQXdCO0VBQzFCO0NBRUE7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRpdGVtL2NvbW1lbnRpdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tbWVudC1jb250cm9scyAuZmEtdGh1bWJzLXVwLCAuY29tbWVudC1jb250cm9scyAuZmEtaGVhcnQsIC5jb21tZW50LWNvbnRyb2xzIC5mYS1jb21tZW50e1xuICAgIG1hcmdpbjogMHB4IDNweCAwcHggMHB4O1xufVxuIC5jb21tZW50LWNvbnRyb2xzIC5mYS1oZWFydCwgLmNvbW1lbnQtY29udHJvbHMgLmZhLWNvbW1lbnR7XG4gXHRtYXJnaW46IDBweCAzcHg7XG4gfVxuIC5jb21tZW50LWVkaXQtaXRlbXN7XG4gXHRwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMjMzcHg7XG4gICAgbWFyZ2luLXRvcDogMzhweDtcbiAgICB6LWluZGV4OiAxMDAwO1xuIH1cbiAuY29tbWVudC1wcm9maWxlLXBpY3tcbiBcdGhlaWdodDogMjZweDtcbiBcdHdpZHRoOiAyNnB4O1xuIFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMmI5MGQ5O1xuIH1cbi5mdWxsLW5hbWV7XG5cdHBhZGRpbmctbGVmdDogM3B4O1xufVxuIC5mZWVkLWl0ZW17XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuIH1cbiAuZWRpdC1mZWVke1xuIFx0aGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTYgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gfVxuIC5lZGl0LWZlZWQgaXtcbiBcdG1hcmdpbjogMHB4IDlweDtcbiB9XG5cbiAgLmVkaXQtZmVlZDpob3ZlcntcbiAgXHRib3JkZXI6IDFweCBzb2xpZCByZWQgIWltcG9ydGFudDtcbiAgfVxuICAuZWRpdC1mZWVkOmhvdmVyIGl7XG4gIFx0Y29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNvbW1lbnQtYXJyb3d7XG4gIFx0cG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDI5NnB4O1xuICAgIG1hcmdpbi10b3A6IDI5cHg7XG4gIH1cbiAgLmNvbW1lbnQtY29udHJvbHN7XG4gIFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDBweCA1cHggMHB4IDBweDtcbiAgfVxuXG4gIC5zdG9yeS1jbG9zZS1pY29ue1xuICAgIGxlZnQ6IDI3OHB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuIl19 */"

/***/ }),

/***/ "./src/app/commentitem/commentitem.component.ts":
/*!******************************************************!*\
  !*** ./src/app/commentitem/commentitem.component.ts ***!
  \******************************************************/
/*! exports provided: CommentitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentitemComponent", function() { return CommentitemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_data_comment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/services/data/comment.service */ "./src/app/services/data/comment.service.ts");


//import * as moment from 'moment';

var CommentitemComponent = /** @class */ (function () {
    function CommentitemComponent(commentService) {
        this.commentService = commentService;
        this.refreshFeed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.refreshUpdatedComment = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editCurrentCommentItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isEditCommentItem = false;
        this.isMyComment = false;
        this.likeCount = 0;
        this.loveCount = 0;
        this.alreadyLiked = false;
        this.alreadyLoved = false;
        this.addComment = false;
        this.operation = 'add';
        this.editComment = false;
        this.action = 'comment';
        this.isCommentsAdded = false;
        //private userId: string = '';
        //private feedMoment: moment.Moment;
        this.feedItemCommentArr = [];
        this.containerHeight = 0;
        this.scrollHeight = 0;
    }
    CommentitemComponent.prototype.ngOnInit = function () {
        if (this.commentItem.commentfrom === this.userId) {
            this.isMyComment = true;
        }
        this.commentActionCheck();
        //let timeagoInstance = timeago();
        //this.commentMoment = timeagoInstance.format(this.commentItem.created);
        this.commentMoment = this.commentItem.created;
        //this.feedMoment = moment(this.commentItem.created);
        this.likeCount = this.commentItem.likeArr.length;
        this.loveCount = this.commentItem.loveArr.length;
        //this.fetchCommentsForCurrentCommentItem();
    };
    CommentitemComponent.prototype.clickedOutside = function ($event) {
        this.isEditCommentItem = false;
    };
    CommentitemComponent.prototype.commentActionCheck = function () {
        var i = this.commentItem.likeArr.indexOf(this.userId);
        if (i === -1) {
            this.alreadyLiked = false;
        }
        else {
            this.alreadyLiked = true;
        }
        var j = this.commentItem.loveArr.indexOf(this.userId);
        if (j === -1) {
            this.alreadyLoved = false;
        }
        else {
            this.alreadyLoved = true;
        }
    };
    CommentitemComponent.prototype.clickedInside = function ($event) {
        if (this.isEditCommentItem) {
            this.isEditCommentItem = false;
        }
        else {
            this.isEditCommentItem = true;
        }
        $event.preventDefault();
        $event.stopPropagation(); // <- that will stop propagation on lower layers
    };
    CommentitemComponent.prototype.editCommentItem = function (event) {
        this.editCurrentCommentItem.emit({ commentItem: this.commentItem });
        this.editComment = true;
        this.operation = 'edit';
    };
    CommentitemComponent.prototype.deleteCommentItem = function () {
        var _this = this;
        var postObj = { 'id': this.commentItem._id };
        this.commentService.deleteCommentItem(postObj).subscribe(function (data) { return _this.afterCommentItemDeleted(data); });
    };
    CommentitemComponent.prototype.afterCommentItemDeleted = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            //this.refreshFeed.emit('refresh');
            this.refreshUpdatedComment.emit({ item: this.item._id });
        }
    };
    CommentitemComponent.prototype.likeClick = function ($event) {
        var _this = this;
        var id = this.userId;
        var likeArr = this.commentItem.likeArr;
        var i = likeArr.indexOf(id);
        if (i === -1) {
            likeArr.push(id);
            this.alreadyLiked = true;
        }
        else {
            likeArr.splice(i, 1);
            this.alreadyLiked = false;
        }
        this.likeCount = likeArr.length;
        var postObj = { 'id': this.commentItem._id, 'likearr': likeArr };
        this.commentService.updateLikeCommentChannel(postObj).subscribe(function (data) { return _this.afterUpdateLikeCommentChannel(data); });
    };
    CommentitemComponent.prototype.loveClick = function ($event) {
        var _this = this;
        var id = this.userId;
        var loveArr = this.commentItem.loveArr;
        var i = loveArr.indexOf(id);
        if (i === -1) {
            loveArr.push(id);
            this.alreadyLoved = true;
        }
        else {
            loveArr.splice(i, 1);
            this.alreadyLoved = false;
        }
        this.loveCount = loveArr.length;
        var postObj = { 'id': this.commentItem._id, 'lovearr': loveArr };
        this.commentService.updateLoveCommentChannel(postObj).subscribe(function (data) { return _this.afterUpdateLoveCommentChannel(data); });
    };
    CommentitemComponent.prototype.commentClick = function ($event) {
        if (this.addComment || this.editComment) {
            this.addComment = false;
            this.editComment = false;
        }
        else {
            this.addComment = true;
            this.editComment = true;
            this.operation = 'add';
        }
    };
    CommentitemComponent.prototype.afterUpdateLikeCommentChannel = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            alert(result.message);
        }
    };
    CommentitemComponent.prototype.afterUpdateLoveCommentChannel = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            alert(result.message);
        }
    };
    CommentitemComponent.prototype.fetchCommentsForCurrentCommentItem = function () {
        var postObj = { 'feeditemid': this.commentItem._id };
        //  this.commentService.fetchCommentsForCurrentCommentItem(postObj).subscribe(data => this.afterFetchedCommentsForCurrentFeedItem(data));
    };
    CommentitemComponent.prototype.refreshCommentItem = function (event) {
        this.refreshUpdatedComment.emit({ item: event.data });
    };
    CommentitemComponent.prototype.afterFetchedCommentsForCurrentFeedItem = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            if (result.length > 0) {
                this.isCommentsAdded = true;
                this.feedItemCommentArr = result;
            }
        }
    };
    CommentitemComponent.prototype.closeStory = function (event) {
        this.addComment = false;
        this.editComment = false;
    };
    CommentitemComponent.ctorParameters = function () { return [
        { type: _app_services_data_comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('item')
    ], CommentitemComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('commentItem')
    ], CommentitemComponent.prototype, "commentItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('userId')
    ], CommentitemComponent.prototype, "userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CommentitemComponent.prototype, "refreshFeed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CommentitemComponent.prototype, "refreshUpdatedComment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CommentitemComponent.prototype, "editCurrentCommentItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event'])
    ], CommentitemComponent.prototype, "clickedOutside", null);
    CommentitemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-commentitem',
            template: __webpack_require__(/*! raw-loader!./commentitem.component.html */ "./node_modules/raw-loader/index.js!./src/app/commentitem/commentitem.component.html"),
            providers: [_app_services_data_comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"]],
            styles: [__webpack_require__(/*! ./commentitem.component.css */ "./src/app/commentitem/commentitem.component.css")]
        })
    ], CommentitemComponent);
    return CommentitemComponent;
}());



/***/ }),

/***/ "./src/app/control-messages/control-messages.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/control-messages/control-messages.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-message{color: red;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJvbC1tZXNzYWdlcy9jb250cm9sLW1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxVQUFVLENBQUMiLCJmaWxlIjoic3JjL2FwcC9jb250cm9sLW1lc3NhZ2VzL2NvbnRyb2wtbWVzc2FnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1tZXNzYWdle2NvbG9yOiByZWQ7fSJdfQ== */"

/***/ }),

/***/ "./src/app/control-messages/control-messages.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/control-messages/control-messages.component.ts ***!
  \****************************************************************/
/*! exports provided: ControlMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlMessagesComponent", function() { return ControlMessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_validators_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/services/validators/validation.service */ "./src/app/services/validators/validation.service.ts");



var ControlMessagesComponent = /** @class */ (function () {
    function ControlMessagesComponent() {
    }
    ControlMessagesComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ControlMessagesComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return _app_services_validators_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"].getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ControlMessagesComponent.prototype, "control", void 0);
    ControlMessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-control-messages',
            template: '<div class="error-message" *ngIf="errorMessage !== null">{{errorMessage}}</div>',
            styles: [__webpack_require__(/*! ./control-messages.component.css */ "./src/app/control-messages/control-messages.component.css")]
        })
    ], ControlMessagesComponent);
    return ControlMessagesComponent;
}());



/***/ }),

/***/ "./src/app/coverpic/coverpic.component.css":
/*!*************************************************!*\
  !*** ./src/app/coverpic/coverpic.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cover-pic{\n\tbackground-size: cover !important;\n}\n.edit-cover-pic{\n\tposition: absolute;\n    margin: -275px 0px 0px 20px;\n}\n.edit-cover-pic i{\n\tbackground: #fff;\n    padding: 1px 1px 0px 2px;\n    border-radius: 3px;\n    border: 1px solid #2b90d9;\n}\n.edit-cover-pic i:hover{\n\tborder: 1px solid #007bff;\n\tbackground: rgba(255, 255, 255, 0.5);\n}\n.edit-cover-pic-items{\n\twidth: 100px;\n}\n.add-friend-controls, .save-coverpic-controls{\n\tfloat: right;\n    margin: -45px 15px;\t\n}\n.save-btn{\n\tmargin-right: 6px;\n    float: left;\n    line-height: 16px;\n    padding-left: 15px !important;\n}\n.file-input-container{\n\tdisplay: none;\n\theight: 0px;\n\twidth: 0px;\n}\n.preview-cover-pic img{\n\twidth: 100%;\n}\n.pending-btn{\n\tpadding-left: 15px !important;\n}\n.msg-btn{\n\tpadding-left: 15px !important;\n}\n.add-btn{\n\tpadding-left: 17px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY292ZXJwaWMvY292ZXJwaWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGlDQUFpQztBQUNsQztBQUNBO0NBQ0Msa0JBQWtCO0lBQ2YsMkJBQTJCO0FBQy9CO0FBQ0E7Q0FDQyxnQkFBZ0I7SUFDYix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLG9DQUFvQztBQUNyQztBQUVBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxZQUFZO0lBQ1Qsa0JBQWtCO0FBQ3RCO0FBQ0E7Q0FDQyxpQkFBaUI7SUFDZCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLDZCQUE2QjtBQUNqQztBQUNBO0NBQ0MsYUFBYTtDQUNiLFdBQVc7Q0FDWCxVQUFVO0FBQ1g7QUFFQTtDQUNDLFdBQVc7QUFDWjtBQUNBO0NBQ0MsNkJBQTZCO0FBQzlCO0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7QUFDQTtDQUNDLDZCQUE2QjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvdmVycGljL2NvdmVycGljLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY292ZXItcGlje1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG59XG4uZWRpdC1jb3Zlci1waWN7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IC0yNzVweCAwcHggMHB4IDIwcHg7XG59XG4uZWRpdC1jb3Zlci1waWMgaXtcblx0YmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAxcHggMXB4IDBweCAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyYjkwZDk7XG59XG5cbi5lZGl0LWNvdmVyLXBpYyBpOmhvdmVye1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMDA3YmZmO1xuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbi5lZGl0LWNvdmVyLXBpYy1pdGVtc3tcblx0d2lkdGg6IDEwMHB4O1xufVxuLmFkZC1mcmllbmQtY29udHJvbHMsIC5zYXZlLWNvdmVycGljLWNvbnRyb2xze1xuXHRmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luOiAtNDVweCAxNXB4O1x0XG59XG4uc2F2ZS1idG57XG5cdG1hcmdpbi1yaWdodDogNnB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xufVxuLmZpbGUtaW5wdXQtY29udGFpbmVye1xuXHRkaXNwbGF5OiBub25lO1xuXHRoZWlnaHQ6IDBweDtcblx0d2lkdGg6IDBweDtcbn1cblxuLnByZXZpZXctY292ZXItcGljIGltZ3tcblx0d2lkdGg6IDEwMCU7XG59XG4ucGVuZGluZy1idG57XG5cdHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xufVxuLm1zZy1idG57XG5cdHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xufVxuLmFkZC1idG57XG5cdHBhZGRpbmctbGVmdDogMTdweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/coverpic/coverpic.component.ts":
/*!************************************************!*\
  !*** ./src/app/coverpic/coverpic.component.ts ***!
  \************************************************/
/*! exports provided: CoverpicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverpicComponent", function() { return CoverpicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modal_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/modal.service */ "./src/app/modal/modal.service.ts");
/* harmony import */ var _services_data_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data/upload.service */ "./src/app/services/data/upload.service.ts");
/* harmony import */ var _app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/services/settings/app-settings.service */ "./src/app/services/settings/app-settings.service.ts");
/* harmony import */ var _app_services_data_configuration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/services/data/configuration.service */ "./src/app/services/data/configuration.service.ts");
/* harmony import */ var _app_services_data_friends_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app/services/data/friends.service */ "./src/app/services/data/friends.service.ts");
/* harmony import */ var _app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app/services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");










var CoverpicComponent = /** @class */ (function () {
    function CoverpicComponent(formBuilder, elementRef, route, modalService, uploadService, configurationService, friendsService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.elementRef = elementRef;
        this.route = route;
        this.modalService = modalService;
        this.uploadService = uploadService;
        this.configurationService = configurationService;
        this.friendsService = friendsService;
        this.onFriendConfirmed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.modalId = 'coverPicModal';
        this.bgSize = 'cover';
        this.posX = 0;
        this.posY = 0;
        this.coverPicHeight = 300;
        this.coverPicWidth = 756;
        this.isMyProfile = 'false';
        this.isEditCoverPic = false;
        this.isSaveCoverPic = false;
        this.isUploadCoverPic = false;
        this.isAddFriend = false;
        this.isRequestPending = false;
        this.isRequestConfirmed = false;
        this.isConfirmFriend = false;
        this.mouseCursor = 'default';
        this.coverPicURL = '';
        this.userId = '';
        this.friendId = '';
        //private scene: Scene;
        this.mouseDown = false;
        var self = this;
        this.route.params.subscribe(function (val) {
            _this.isMyProfile = localStorage.getItem('isMyProfile');
            if (_this.isMyProfile === 'true') {
                //this.mouseCursor = 'move';
            }
            else {
                //this.mouseCursor = 'default';
                //let postObj = {'userid': (this.posX+'x'+this.posY, )};
                //this.configurationService.saveCoverPicPos(postObj).subscribe(data => this.afterCoverPicPosSaved(data));
            }
        });
        this.coverPicUploadForm = this.formBuilder.group({
            'file': ['']
        });
        this.coverPicGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        //this.coverPicURL = AppSettingsService.API_ENDPOINT("local")+'/'+JSON.parse(localStorage.getItem('loginData')).wallpicpath;
        this.self = this;
        var loginData = JSON.parse(localStorage.getItem('loginData'));
        this.userId = loginData.username;
    }
    CoverpicComponent.prototype.onMouseup = function (event) {
        this.mouseDown = false;
    };
    CoverpicComponent.prototype.onMousemove = function (event) {
        if (this.mouseDown) {
            if (this.mouseCursor === 'move') {
                this.differenceX = this.startX - event.pageX;
                this.differenceY = this.startY - event.pageY;
                this.posX = 0;
                var diff = this.initialY - this.differenceY;
                if (diff < 0) {
                    this.posY = diff;
                }
                else {
                    this.posY = 0;
                }
                console.log(this.posY);
                var scalableDiff = this.coverPicHeight - this.scalableHeight;
                if (this.posY <= scalableDiff) {
                    this.posY = scalableDiff;
                }
                var styles = getComputedStyle(this.coverPic.nativeElement);
            }
        }
    };
    CoverpicComponent.prototype.onMousedown = function (event) {
        this.mouseDown = true;
        this.startX = event.pageX;
        this.startY = event.pageY;
        this.initialX = this.posX;
        this.initialY = this.posY;
    };
    CoverpicComponent.prototype.ngOnInit = function () {
    };
    CoverpicComponent.prototype.ngAfterViewInit = function () {
        //this.drawImage(0, 0);
    };
    CoverpicComponent.prototype.updateCoverPicSettings = function (coverPicSettings) {
        var self = this;
        var actualImage = new Image();
        var styles = getComputedStyle(this.coverPic.nativeElement);
        actualImage.src = this.coverPicURL.replace(/"/g, "").replace(/url\(|\)$/ig, "");
        actualImage.onload = function () {
            console.log(actualImage.width + ',' + actualImage.height);
            self.scalableHeight = (self.coverPicWidth / actualImage.width) * actualImage.height;
        };
        this.posX = _app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"].getPicPosition(coverPicSettings.wallpicpos).position.x;
        this.posY = _app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"].getPicPosition(coverPicSettings.wallpicpos).position.y;
    };
    CoverpicComponent.prototype.canvasMouseDown = function () {
        //this.mousePressed = true;
    };
    CoverpicComponent.prototype.canvasMouseUp = function () {
        //this.mousePressed = false;
        //this.dragging = false;
    };
    CoverpicComponent.prototype.triggerFalseFileClick = function () {
        this.coverPicFileInput.nativeElement.click();
        //el.click();
    };
    CoverpicComponent.prototype.editCoverPicClick = function (event) {
        if (!this.isEditCoverPic) {
            this.isEditCoverPic = true;
        }
        else {
            this.isEditCoverPic = false;
        }
    };
    CoverpicComponent.prototype.clickedOutside = function ($event) {
        this.isEditCoverPic = false;
        //this.searchValue = '';
    };
    CoverpicComponent.prototype.clickedInside = function ($event) {
        $event.preventDefault();
        $event.stopPropagation(); // <- that will stop propagation on lower layers
    };
    CoverpicComponent.prototype.moveClick = function (event) {
        this.mouseCursor = 'move';
        this.isEditCoverPic = false;
        this.isSaveCoverPic = true;
    };
    CoverpicComponent.prototype.changeClick = function () {
        this.mouseCursor = 'default';
        this.isEditCoverPic = false;
        //let element: HTMLElement = document.getElementsByClassName('file-input')[0] as HTMLElement;
        //element.click();
        //fileInput.click();
    };
    CoverpicComponent.prototype.selectClick = function (event) {
        this.mouseCursor = 'default';
        this.isEditCoverPic = false;
        this.isSaveCoverPic = true;
    };
    CoverpicComponent.prototype.defaultClick = function (event) {
        this.mouseCursor = 'default';
        this.isEditCoverPic = false;
        this.isSaveCoverPic = true;
    };
    CoverpicComponent.prototype.cancel = function (event) {
        this.mouseCursor = 'default';
        this.isSaveCoverPic = false;
    };
    CoverpicComponent.prototype.save = function () {
        if (this.isUploadCoverPic) {
            this.uploadCoverPic();
            this.mouseCursor = 'default';
        }
        if (this.mouseCursor == 'move') {
            this.saveCoverPicPos();
            this.mouseCursor = 'default';
        }
        this.isUploadCoverPic = false;
        this.isSaveCoverPic = false;
    };
    CoverpicComponent.prototype.openAppModal = function () {
        var self = this;
        self.modalService.open(self.modalId);
    };
    CoverpicComponent.prototype.ok = function () {
        this.coverPicURL = this.encodedImage;
        this.bgSize = 'cover';
        this.mouseCursor = 'move';
        this.isEditCoverPic = false;
        this.isSaveCoverPic = true;
        this.isUploadCoverPic = true;
        //this.coverPicModal.close();
        this.modalService.close(this.modalId);
    };
    CoverpicComponent.prototype.fileChangeEvent = function (event) {
        this.files = event.target.files[0];
        //this.uploadCanvasPic();
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                //$('#preview').attr('src', e.target.result);
                self.encodedImage = e.target.result;
                self.openAppModal();
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        //var files = fileInput.srcElement.files;
        //console.log(files);
        //this.uploadService.makeFileRequest('https://localhost:3000/api/uploadCoverPic', [], files).subscribe(() => {
        //  console.log('sent');
        //});
    };
    CoverpicComponent.prototype.saveCoverPicPos = function () {
        var _this = this;
        var postObj = { 'coverpicpos': (this.posX + 'x' + this.posY), 'userid': this.userId };
        this.configurationService.saveCoverPicPos(postObj).subscribe(function (data) { return _this.afterCoverPicPosSaved(data); });
    };
    CoverpicComponent.prototype.afterCoverPicPosSaved = function (result) {
        alert(result.message);
    };
    //Confirming the friend
    CoverpicComponent.prototype.confirm = function (event) {
        var _this = this;
        var postObj = { 'userid': this.userId, 'friendid': this.friendId };
        this.friendsService.confirmFriendReq(postObj).subscribe(function (data) { return _this.afterConfirmFriendReq(data); });
    };
    CoverpicComponent.prototype.afterConfirmFriendReq = function (data) {
        if (data.status === 'confirmed') {
            this.isRequestConfirmed = true;
            this.isConfirmFriend = false;
            this.onFriendConfirmed.emit({ data: data });
            //Updating controls after friend is confirmed
            this.updateFriendsControlsSettings(data);
        }
    };
    CoverpicComponent.prototype.updateFriendsControlsSettings = function (data) {
        switch (data.status) {
            case '!friend':
                this.isAddFriend = true;
                this.isRequestPending = false;
                this.isRequestConfirmed = false;
                this.isConfirmFriend = false;
                break;
            case 'displayed':
                if (data.agent === 'responder') {
                    this.isConfirmFriend = true;
                    this.isRequestPending = false;
                }
                else if (data.agent === 'requester') {
                    this.isConfirmFriend = false;
                    this.isRequestPending = true;
                }
                this.isAddFriend = false;
                this.isRequestConfirmed = false;
                break;
            case 'pending':
                if (data.agent === 'responder') {
                    this.isConfirmFriend = true;
                    this.isRequestPending = false;
                }
                else if (data.agent === 'requester') {
                    this.isConfirmFriend = false;
                    this.isRequestPending = true;
                }
                this.isAddFriend = false;
                this.isRequestConfirmed = false;
                break;
            case 'confirmed':
                this.updateConfirmedControls();
                break;
            default:
        }
    };
    CoverpicComponent.prototype.updateConfirmedControls = function () {
        this.isRequestConfirmed = true;
        this.isAddFriend = false;
        this.isRequestPending = false;
        this.isConfirmFriend = false;
    };
    CoverpicComponent.prototype.addFriend = function () {
        var _this = this;
        var postObj = { 'userid': this.userId, 'friendid': this.friendId };
        this.friendsService.setFriendInfo(postObj).subscribe(function (data) { return _this.afterSetFriendInfo(data); });
    };
    CoverpicComponent.prototype.afterSetFriendInfo = function (result) {
        if (result.status === "sent") {
            this.isAddFriend = false;
            this.isRequestPending = true;
            this.isRequestConfirmed = false;
        }
    };
    CoverpicComponent.prototype.uploadCoverPic = function () {
        //FILL FormData WITH FILE DETAILS.
        var formData = new FormData();
        var file = this.files;
        formData.append('uploadfile', file);
        var coverPicPos = this.posX + 'x' + this.posY;
        formData.append('coverpicpos', coverPicPos);
        formData.append('userid', this.userId);
        var xhr = new XMLHttpRequest();
        xhr.open('post', _app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_6__["AppSettingsService"].API_ENDPOINT("local") + '/api/uploadCoverPic', true);
        xhr.upload.onprogress = function (e) {
            if (e.lengthComputable) {
                var percentage = (e.loaded / e.total) * 100;
                console.log(percentage);
                //$('div.progress div').css('width', percentage.toFixed(0) + '%');
                //$('div.progress div').html(percentage.toFixed(0) + '%');
            }
        };
        xhr.onerror = function (e) {
            alert('An error occurred while submitting the form. Maybe your file is too big');
        };
        xhr.onload = function () {
            /*let file = xhr.responseText;
            $('div.progress div').css('width','0%');
            $('div.progress').hide();
            showMsg("alert alert-success", "File uploaded successfully!");
            $('#myFile').val('');*/
        };
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                callback(xhr.responseText); // Another callback here
            }
        };
        function callback(responseText) {
            if (JSON.parse(responseText).status === 'sessionExpired') {
                alert('Session Expired, Please Login Again');
            }
            var loginData = JSON.parse(localStorage.getItem('loginData'));
            loginData.wallpicpath = JSON.parse(responseText).wallpicpath;
            localStorage.setItem('loginData', JSON.stringify(loginData));
        }
        xhr.send(formData);
        return false;
    };
    // UPDATE PROGRESS BAR.
    CoverpicComponent.prototype.updateProgress = function (e) {
        if (e.lengthComputable) {
            document.getElementById('pro').setAttribute('value', e.loaded);
            document.getElementById('pro').setAttribute('max', e.total);
        }
    };
    // CONFIRMATION.
    CoverpicComponent.prototype.transferComplete = function (e) {
        alert("Files uploaded successfully.");
    };
    CoverpicComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _modal_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"] },
        { type: _services_data_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"] },
        { type: _app_services_data_configuration_service__WEBPACK_IMPORTED_MODULE_7__["ConfigurationService"] },
        { type: _app_services_data_friends_service__WEBPACK_IMPORTED_MODULE_8__["FriendsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('coverPic', { static: true })
    ], CoverpicComponent.prototype, "coverPic", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('coverPicFileInput', { static: true })
    ], CoverpicComponent.prototype, "coverPicFileInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('coverPicModal', { static: true })
    ], CoverpicComponent.prototype, "coverPicModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput', { static: true })
    ], CoverpicComponent.prototype, "fileInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CoverpicComponent.prototype, "sharedList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CoverpicComponent.prototype, "onFriendConfirmed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:mouseup', ['$event'])
    ], CoverpicComponent.prototype, "onMouseup", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousemove', ['$event'])
    ], CoverpicComponent.prototype, "onMousemove", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousedown', ['$event'])
    ], CoverpicComponent.prototype, "onMousedown", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event'])
    ], CoverpicComponent.prototype, "clickedOutside", null);
    CoverpicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coverpic',
            template: __webpack_require__(/*! raw-loader!./coverpic.component.html */ "./node_modules/raw-loader/index.js!./src/app/coverpic/coverpic.component.html"),
            providers: [_services_data_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"], _app_services_data_configuration_service__WEBPACK_IMPORTED_MODULE_7__["ConfigurationService"], _app_services_data_friends_service__WEBPACK_IMPORTED_MODULE_8__["FriendsService"]],
            styles: [__webpack_require__(/*! ./coverpic.component.css */ "./src/app/coverpic/coverpic.component.css")]
        })
    ], CoverpicComponent);
    return CoverpicComponent;
}());



/***/ }),

/***/ "./src/app/entertainment/entertainment.component.css":
/*!***********************************************************!*\
  !*** ./src/app/entertainment/entertainment.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".video-content{\n\tpadding: 5px;\n}\n@media only screen and (max-width: 575px) {\n\t.mobile-padding{padding:15px !important;}\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50ZXJ0YWlubWVudC9lbnRlcnRhaW5tZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0FBQ2I7QUFDQTtDQUNDLGdCQUFnQix1QkFBdUIsQ0FBQztBQUN6QyIsImZpbGUiOiJzcmMvYXBwL2VudGVydGFpbm1lbnQvZW50ZXJ0YWlubWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvLWNvbnRlbnR7XG5cdHBhZGRpbmc6IDVweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcblx0Lm1vYmlsZS1wYWRkaW5ne3BhZGRpbmc6MTVweCAhaW1wb3J0YW50O31cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/entertainment/entertainment.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/entertainment/entertainment.component.ts ***!
  \**********************************************************/
/*! exports provided: EntertainmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntertainmentComponent", function() { return EntertainmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var EntertainmentComponent = /** @class */ (function () {
    function EntertainmentComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.onAppLoggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onAppLoggedOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isMyProfile = false;
        this.userId = '';
        this.friendId = '';
        this.isVideo = true;
        this.isMusic = false;
        this.isPhotos = false;
        this.isHighLightVideos = true;
        this.isHighLightMusic = false;
        this.isHighLightPhotos = false;
        route.params.subscribe(function (val) {
            var currentUser = localStorage.getItem('currentUser');
            var id = _this.route.snapshot.paramMap.get('id');
            if (!currentUser) {
                _this.triggerLoggedInCheck('onAppLoggedOut', { event: 'onAppLoggedOut', message: 'logged out' });
                _this.onAppLoggedOut.emit('logged Out');
                _this.router.navigate(['public']);
                return;
            }
            else {
                _this.triggerLoggedInCheck('onAppLoggedIn', { event: 'onAppLoggedIn', message: 'logged in' });
                _this.onAppLoggedIn.emit('logged In');
                localStorage.setItem('currentRoute', 'entertainment/' + id);
            }
            if (currentUser === id) {
                _this.isMyProfile = true;
                localStorage.setItem("isMyProfile", 'true');
            }
            else {
                _this.isMyProfile = false;
                localStorage.setItem("isMyProfile", 'false');
                var postObj = { 'userid': currentUser, 'friendid': id };
                _this.userId = currentUser;
                _this.friendId = id;
                //this.friendsService.getFriendInfo(postObj).subscribe(data => this.afterFriendInfo(data));
            }
            //this.routeSwitch.emit(this.isMyProfile);
            //this.getProfileInfo(id);
        });
    }
    EntertainmentComponent.prototype.ngOnInit = function () {
    };
    EntertainmentComponent.prototype.triggerLoggedInCheck = function (eventType, evtObj) {
        var evt = new CustomEvent(eventType, evtObj);
        window.dispatchEvent(evt);
    };
    EntertainmentComponent.prototype.switchVideo = function (event) {
        this.isVideo = true;
        this.isPhotos = false;
        this.isMusic = false;
        this.isHighLightVideos = true;
        this.isHighLightMusic = false;
        this.isHighLightPhotos = false;
    };
    EntertainmentComponent.prototype.switchMusic = function (event) {
        this.isVideo = false;
        this.isPhotos = false;
        this.isMusic = true;
        this.isHighLightVideos = false;
        this.isHighLightPhotos = false;
        this.isHighLightMusic = true;
    };
    EntertainmentComponent.prototype.switchPhotos = function (event) {
        this.isVideo = false;
        this.isMusic = false;
        this.isPhotos = true;
        this.isHighLightVideos = false;
        this.isHighLightPhotos = true;
        this.isHighLightMusic = false;
    };
    EntertainmentComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], EntertainmentComponent.prototype, "onAppLoggedIn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], EntertainmentComponent.prototype, "onAppLoggedOut", void 0);
    EntertainmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entertainment',
            template: __webpack_require__(/*! raw-loader!./entertainment.component.html */ "./node_modules/raw-loader/index.js!./src/app/entertainment/entertainment.component.html"),
            styles: [__webpack_require__(/*! ./entertainment.component.css */ "./src/app/entertainment/entertainment.component.css")]
        })
    ], EntertainmentComponent);
    return EntertainmentComponent;
}());



/***/ }),

/***/ "./src/app/feeditem/feeditem.component.css":
/*!*************************************************!*\
  !*** ./src/app/feeditem/feeditem.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-pic{\n    width: 50px;\n    height: 50px;\n    margin: 3px;\n    border-radius: 50%;  \n    border: 2px solid #2b90d9;\t\n}\n.feed-controls .fa-thumbs-up, .feed-controls .fa-heart, .feed-controls .fa-comment{\n    margin: 0px 3px 0px 0px;\n}\n.feed-controls .fa-heart, .feed-controls .fa-comment{\n \tmargin: 0px 3px;\n }\n.feed-edit-items .arrow-up{\n \tmargin-left: 75px !important;\n }\n.feed-edit-items{\n    position: absolute !important;\n    right: 18px !important;\n    margin-top: 38px;\n    z-index: 1000;\n }\n.edit-feed:hover{\n \tcolor: red;\n }\n.posted-pic, .feed-music-player{\n    display: inline-block;\n    background-size: cover !important;\n    min-height: 300px;\n    width: 100%;\n    margin: 5px 0px;\n    background: #000;\n    border: 1px solid #e6e6e6;\n }\n.feed-music-player{\n\n }\n.comment-box{\n    width: 100%;\n}\n.comment-box-items{\n    border: 1px solid #e6e6e6;\n    width: 320px;\n    border-radius: 3px;\n    padding: 5px;\n    /*max-height: 220px;*/\n    overflow-y: auto;\n    overflow-x: hidden;\n    display: block;\n    padding: 5px 5px 0px 5px;\n    margin-top: 5px;\n}\n.view-more{\n    width: 60px;\n    padding: 3px 0px;\n    margin: auto;\n}\napp-commentitem{\n    display: inline-block;\n    width: 100%;\n }\n.feed-item{\n    word-wrap: break-word;\n }\n.edit-feed{\n    height: 30px;\n    width: 30px;\n    line-height: 29px;\n    border: 1px solid #e6e6e6 !important;\n    border-radius: 3px;\n }\n.edit-feed i{\n    margin: 0px 9px;    \n }\n.edit-feed:hover{\n    border: 1px solid red !important;\n  }\n.edit-feed:hover i{\n    color: red !important;\n  }\n.edit-arrow{\n    position: absolute;\n    right: 16px;\n    margin-top:29px;\n  }\n.story-close-icon{\n    left: 273px;\n    margin-top: 8px;\n    position: absolute;\n  }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZGl0ZW0vZmVlZGl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNDO0VBQ0MsZUFBZTtDQUNoQjtBQUNBO0VBQ0MsNEJBQTRCO0NBQzdCO0FBQ0E7SUFDRyw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixhQUFhO0NBQ2hCO0FBQ0E7RUFDQyxVQUFVO0NBQ1g7QUFDQTtJQUNHLHFCQUFxQjtJQUNyQixpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtDQUM1QjtBQUNBOztDQUVBO0FBQ0Q7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNDO0lBQ0cscUJBQXFCO0lBQ3JCLFdBQVc7Q0FDZDtBQUNBO0lBQ0cscUJBQXFCO0NBQ3hCO0FBQ0E7SUFDRyxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0NBQ3JCO0FBRUE7SUFDRyxlQUFlO0NBQ2xCO0FBQ0M7SUFDRSxnQ0FBZ0M7RUFDbEM7QUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2ZlZWRpdGVtL2ZlZWRpdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1waWN7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbjogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgIFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyYjkwZDk7XHRcbn1cbi5mZWVkLWNvbnRyb2xzIC5mYS10aHVtYnMtdXAsIC5mZWVkLWNvbnRyb2xzIC5mYS1oZWFydCwgLmZlZWQtY29udHJvbHMgLmZhLWNvbW1lbnR7XG4gICAgbWFyZ2luOiAwcHggM3B4IDBweCAwcHg7XG59XG4gLmZlZWQtY29udHJvbHMgLmZhLWhlYXJ0LCAuZmVlZC1jb250cm9scyAuZmEtY29tbWVudHtcbiBcdG1hcmdpbjogMHB4IDNweDtcbiB9XG4gLmZlZWQtZWRpdC1pdGVtcyAuYXJyb3ctdXB7XG4gXHRtYXJnaW4tbGVmdDogNzVweCAhaW1wb3J0YW50O1xuIH1cbiAuZmVlZC1lZGl0LWl0ZW1ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIHJpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMzhweDtcbiAgICB6LWluZGV4OiAxMDAwO1xuIH1cbiAuZWRpdC1mZWVkOmhvdmVye1xuIFx0Y29sb3I6IHJlZDtcbiB9XG4gLnBvc3RlZC1waWMsIC5mZWVkLW11c2ljLXBsYXllcntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XG4gfVxuIC5mZWVkLW11c2ljLXBsYXllcntcblxuIH1cbi5jb21tZW50LWJveHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5jb21tZW50LWJveC1pdGVtc3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIC8qbWF4LWhlaWdodDogMjIwcHg7Ki9cbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiA1cHggNXB4IDBweCA1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuLnZpZXctbW9yZXtcbiAgICB3aWR0aDogNjBweDtcbiAgICBwYWRkaW5nOiAzcHggMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cbiBhcHAtY29tbWVudGl0ZW17XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuIH1cbiAuZmVlZC1pdGVte1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiB9XG4gLmVkaXQtZmVlZHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNiAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiB9XG5cbiAuZWRpdC1mZWVkIGl7XG4gICAgbWFyZ2luOiAwcHggOXB4OyAgICBcbiB9XG4gIC5lZGl0LWZlZWQ6aG92ZXJ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmVkaXQtZmVlZDpob3ZlciBpe1xuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgfVxuICAuZWRpdC1hcnJvd3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDoyOXB4O1xuICB9XG4gIC5zdG9yeS1jbG9zZS1pY29ue1xuICAgIGxlZnQ6IDI3M3B4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuIl19 */"

/***/ }),

/***/ "./src/app/feeditem/feeditem.component.ts":
/*!************************************************!*\
  !*** ./src/app/feeditem/feeditem.component.ts ***!
  \************************************************/
/*! exports provided: FeeditemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeditemComponent", function() { return FeeditemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_data_feed_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/services/data/feed.service */ "./src/app/services/data/feed.service.ts");
/* harmony import */ var _app_services_data_comment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/data/comment.service */ "./src/app/services/data/comment.service.ts");


//import * as moment from 'moment';


var FeeditemComponent = /** @class */ (function () {
    function FeeditemComponent(feedService, commentService) {
        this.feedService = feedService;
        this.commentService = commentService;
        this.refreshFeed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editCurrentFeedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isEditFeedItem = false;
        this.isMyFeed = false;
        this.likeCount = 0;
        this.loveCount = 0;
        this.alreadyLiked = false;
        this.alreadyLoved = false;
        this.addComment = false;
        this.action = 'comment';
        this.isCommentsAdded = false;
        //private feedMoment: moment.Moment;
        this.feedItemCommentArr = [];
        this.skip = 0;
        this.limit = 3;
        this.total = 0;
        this.isLoading = false;
        this.isViewMore = false;
        this.containerHeight = 0;
        this.scrollHeight = 0;
    }
    FeeditemComponent.prototype.ngOnInit = function () {
        if (this.item.userid === this.userId) {
            this.isMyFeed = true;
        }
        this.feedActionCheck();
        //let timeagoInstance = timeago();
        //this.feedMoment = timeagoInstance.format(this.item.created);
        this.feedMoment = this.item.created;
        this.likeCount = this.item.likeArr.length;
        this.loveCount = this.item.loveArr.length;
        this.fetchCommentsForCurrentFeedItem(this.item._id);
    };
    FeeditemComponent.prototype.clickedOutside = function ($event) {
        this.isEditFeedItem = false;
    };
    FeeditemComponent.prototype.ngAfterViewInit = function () {
    };
    FeeditemComponent.prototype.resetCommentParam = function () {
        this.skip = 0;
        this.limit = 3;
        this.total = 0;
        this.feedItemCommentArr = [];
    };
    FeeditemComponent.prototype.feedActionCheck = function () {
        var i = this.item.likeArr.indexOf(this.userId);
        if (i === -1) {
            this.alreadyLiked = false;
        }
        else {
            this.alreadyLiked = true;
        }
        var j = this.item.loveArr.indexOf(this.userId);
        if (j === -1) {
            this.alreadyLoved = false;
        }
        else {
            this.alreadyLoved = true;
        }
    };
    FeeditemComponent.prototype.editFeedItem = function (event) {
        this.editCurrentFeedItem.emit({ item: this.item });
    };
    FeeditemComponent.prototype.editCurrentCommentItem = function (event) {
        /*let self = this;
        self.postId = event.commentItem._id;
        self.commentType = event.commentItem.commenttype;
        self.commentText = event.commentItem.commenttext;
  
        if(self.commentType === 'text'){
          self.isAddPost = false;
          self.color = event.item.colorInfo;
          self.fontFamily = event.item.fontFamily;
          self.fontSize = event.item.fontSize;
          self.fontStyle = event.item.fontStyle;
          self.txtDeco = event.item.textDecoration;
          self.fontWeight = event.item.fontWeight;
          self.storyContent = event.item.post;
          }
        else if(self.fileType === 'image'){
          self.isPostImage = false;
            self.encodedImage = event.item.filePath;
            self.openAppModal();
          }else{
            self.postedMusicPath = event.item.filePath;
            self.musicPlayer.nativeElement.load();
            self.openAppModal();
          }*/
    };
    FeeditemComponent.prototype.clickedInside = function ($event) {
        if (this.isEditFeedItem) {
            this.isEditFeedItem = false;
        }
        else {
            this.isEditFeedItem = true;
        }
        $event.preventDefault();
        $event.stopPropagation(); // <- that will stop propagation on lower layers
    };
    FeeditemComponent.prototype.deleteFeedItem = function () {
        var _this = this;
        var postObj = { 'id': this.item._id };
        this.feedService.deleteFeedItem(postObj).subscribe(function (data) { return _this.afterFeedItemDeleted(data); });
    };
    FeeditemComponent.prototype.afterFeedItemDeleted = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            this.refreshFeed.emit('refresh');
        }
    };
    FeeditemComponent.prototype.refreshFeedItem = function ($event) {
        this.refreshFeed.emit('refresh');
    };
    FeeditemComponent.prototype.likeClick = function ($event) {
        var _this = this;
        var id = this.userId;
        var likeArr = this.item.likeArr;
        var i = likeArr.indexOf(id);
        if (i === -1) {
            likeArr.push(id);
            this.alreadyLiked = true;
        }
        else {
            likeArr.splice(i, 1);
            this.alreadyLiked = false;
        }
        this.likeCount = likeArr.length;
        var postObj = { 'id': this.item._id, 'likearr': likeArr };
        this.feedService.updateLikeFeedChannel(postObj).subscribe(function (data) { return _this.afterUpdateLikeFeedChannel(data); });
    };
    FeeditemComponent.prototype.loveClick = function ($event) {
        var _this = this;
        var id = this.userId;
        var loveArr = this.item.loveArr;
        var i = loveArr.indexOf(id);
        if (i === -1) {
            loveArr.push(id);
            this.alreadyLoved = true;
        }
        else {
            loveArr.splice(i, 1);
            this.alreadyLoved = false;
        }
        this.loveCount = loveArr.length;
        var postObj = { 'id': this.item._id, 'lovearr': loveArr };
        this.feedService.updateLoveFeedChannel(postObj).subscribe(function (data) { return _this.afterUpdateLoveFeedChannel(data); });
    };
    FeeditemComponent.prototype.commentClick = function ($event) {
        if (this.addComment) {
            this.addComment = false;
        }
        else {
            this.addComment = true;
        }
    };
    FeeditemComponent.prototype.afterUpdateLikeFeedChannel = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            alert(result.message);
        }
    };
    FeeditemComponent.prototype.afterUpdateLoveFeedChannel = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            alert(result.message);
        }
    };
    FeeditemComponent.prototype.fetchCommentsForCurrentFeedItem = function (commentId) {
        var _this = this;
        this.isLoading = true;
        var postObj = { 'feeditemid': commentId, 'skip': this.skip, 'limit': this.limit };
        this.commentService.fetchCommentsForCurrentFeedItem(postObj).subscribe(function (data) { return _this.afterFetchedCommentsForCurrentFeedItem(data); });
    };
    FeeditemComponent.prototype.afterFetchedCommentsForCurrentFeedItem = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            var data = result.infos;
            this.total = result.total;
            if (this.total > 0) {
                this.isCommentsAdded = true;
            }
            else {
                this.isCommentsAdded = false;
            }
            for (var i in data) {
                this.feedItemCommentArr.push(data[i]);
            }
            if (this.feedItemCommentArr.length < this.total) {
                this.isViewMore = true;
                /* this.containerHeight = this.commentBoxItems.nativeElement.offsetHeight;
                 this.scrollHeight = this.commentBoxItems.nativeElement.scrollHeight;
                 console.log(this.containerHeight+">>><<<<"+this.scrollHeight);*/
            }
            else {
                this.isViewMore = false;
            }
        }
        this.isLoading = false;
    };
    FeeditemComponent.prototype.refreshCommentItem = function (event) {
        this.resetCommentParam();
        if (event.data !== undefined) {
            this.fetchCommentsForCurrentFeedItem(event.data);
        }
        else {
            this.fetchCommentsForCurrentFeedItem(event.item);
        }
        this.addComment = false;
    };
    FeeditemComponent.prototype.viewMore = function (event) {
        this.skip = this.skip + this.limit;
        if (this.skip < this.total) {
            this.fetchCommentsForCurrentFeedItem(this.item._id);
            this.isViewMore = true;
        }
        else {
            this.isViewMore = false;
        }
    };
    FeeditemComponent.prototype.closeStory = function (event) {
        this.addComment = false;
    };
    FeeditemComponent.ctorParameters = function () { return [
        { type: _app_services_data_feed_service__WEBPACK_IMPORTED_MODULE_2__["FeedService"] },
        { type: _app_services_data_comment_service__WEBPACK_IMPORTED_MODULE_3__["CommentService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('item')
    ], FeeditemComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('userId')
    ], FeeditemComponent.prototype, "userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], FeeditemComponent.prototype, "refreshFeed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], FeeditemComponent.prototype, "editCurrentFeedItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('commentBoxItems', { static: true })
    ], FeeditemComponent.prototype, "commentBoxItems", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event'])
    ], FeeditemComponent.prototype, "clickedOutside", null);
    FeeditemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feeditem',
            template: __webpack_require__(/*! raw-loader!./feeditem.component.html */ "./node_modules/raw-loader/index.js!./src/app/feeditem/feeditem.component.html"),
            providers: [_app_services_data_comment_service__WEBPACK_IMPORTED_MODULE_3__["CommentService"]],
            styles: [__webpack_require__(/*! ./feeditem.component.css */ "./src/app/feeditem/feeditem.component.css")]
        })
    ], FeeditemComponent);
    return FeeditemComponent;
}());



/***/ }),

/***/ "./src/app/friend-request-pending-list/friend-request-pending-list.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/friend-request-pending-list/friend-request-pending-list.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-row{\n\twidth: 300px;\n\tpadding-right: 5px;\n\tborder-bottom: 1px solid #e6e6e6;\n}\n\n.item-row:hover{\n\tbackground: #f5f8fa;\n}\n\n.btn-group{\n\tmargin-top: 5px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJpZW5kLXJlcXVlc3QtcGVuZGluZy1saXN0L2ZyaWVuZC1yZXF1ZXN0LXBlbmRpbmctbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixnQ0FBZ0M7QUFDakM7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBQ0E7Q0FDQywwQkFBMEI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9mcmllbmQtcmVxdWVzdC1wZW5kaW5nLWxpc3QvZnJpZW5kLXJlcXVlc3QtcGVuZGluZy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1yb3d7XG5cdHdpZHRoOiAzMDBweDtcblx0cGFkZGluZy1yaWdodDogNXB4O1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U2ZTZlNjtcbn1cblxuLml0ZW0tcm93OmhvdmVye1xuXHRiYWNrZ3JvdW5kOiAjZjVmOGZhO1xufVxuLmJ0bi1ncm91cHtcblx0bWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/friend-request-pending-list/friend-request-pending-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/friend-request-pending-list/friend-request-pending-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: FriendRequestPendingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendRequestPendingListComponent", function() { return FriendRequestPendingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _app_services_data_friends_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/data/friends.service */ "./src/app/services/data/friends.service.ts");




var FriendRequestPendingListComponent = /** @class */ (function () {
    function FriendRequestPendingListComponent(friendsService) {
        this.friendsService = friendsService;
        this.onFriendConfirmed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FriendRequestPendingListComponent.prototype.ngOnInit = function () {
        this.profilePic = this.item.profilepic.imageBuffer;
        this.fullName = this.item.fullname;
        this.friendId = this.item.username;
        this.userId = localStorage.getItem('currentUser');
        this.profilePicWidth = _app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"].getPicDimension(this.item.profilepic.profilePicDimension).dimension.width + 'px';
        this.profilePicHeight = _app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"].getPicDimension(this.item.profilepic.profilePicDimension).dimension.height + 'px';
    };
    FriendRequestPendingListComponent.prototype.confirm = function (event) {
        var _this = this;
        var postObj = { 'userid': this.userId, 'friendid': this.friendId };
        this.friendsService.confirmFriendReq(postObj).subscribe(function (data) { return _this.afterConfirmFriendReq(data); });
    };
    FriendRequestPendingListComponent.prototype.afterConfirmFriendReq = function (data) {
        if (data.status === 'confirmed') {
            this.onFriendConfirmed.emit({ data: data });
        }
    };
    FriendRequestPendingListComponent.ctorParameters = function () { return [
        { type: _app_services_data_friends_service__WEBPACK_IMPORTED_MODULE_3__["FriendsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FriendRequestPendingListComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], FriendRequestPendingListComponent.prototype, "onFriendConfirmed", void 0);
    FriendRequestPendingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-friend-request-pending-list',
            template: __webpack_require__(/*! raw-loader!./friend-request-pending-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/friend-request-pending-list/friend-request-pending-list.component.html"),
            styles: [__webpack_require__(/*! ./friend-request-pending-list.component.css */ "./src/app/friend-request-pending-list/friend-request-pending-list.component.css")]
        })
    ], FriendRequestPendingListComponent);
    return FriendRequestPendingListComponent;
}());



/***/ }),

/***/ "./src/app/globals/global.ts":
/*!***********************************!*\
  !*** ./src/app/globals/global.ts ***!
  \***********************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Globals = /** @class */ (function () {
    function Globals() {
        this.modals = [];
    }
    Globals = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Globals);
    return Globals;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 575px) {\n\t.tile-menu-container{\n\t\tpadding: 15px !important;\n\t}\n\t.info-panel{\n\t\tmargin-bottom: 15px;\n\t}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQztFQUNDLHdCQUF3QjtDQUN6QjtDQUNBO0VBQ0MsbUJBQW1CO0NBQ3BCO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcblx0LnRpbGUtbWVudS1jb250YWluZXJ7XG5cdFx0cGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xuXHR9XG5cdC5pbmZvLXBhbmVse1xuXHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XG5cdH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services_shareobject_routeinfo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/shareobject/routeinfo.service */ "./src/app/services/shareobject/routeinfo.service.ts");




var HomeComponent = /** @class */ (function () {
    /*get loginData(): any {
        return this.routeinfoService.routeData;
    }
    set loginData(value: any) {
        this.routeinfoService.routeData = value;
    }*/
    function HomeComponent(router, route, routeinfoService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.routeinfoService = routeinfoService;
        //@Output() onAppLoggedIn: EventEmitter<any> = new EventEmitter();
        //@Output() onAppLoggedOut: EventEmitter<any> = new EventEmitter();
        this.info = undefined;
        this.routeInfo = undefined;
        route.params.subscribe(function (val) {
            if (!localStorage.getItem('currentUser')) {
                //this.onAppLoggedOut.emit('logged Out');
                _this.triggerLoggedInCheck('onAppLoggedOut', { event: 'onAppLoggedOut', message: 'logged out' });
                _this.router.navigate(['public']);
            }
            else {
                //this.onAppLoggedIn.emit('logged In');
                _this.triggerLoggedInCheck('onAppLoggedIn', { event: 'onAppLoggedIn', message: 'logged in' });
                localStorage.setItem('currentRoute', 'home');
            }
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        /*if(localStorage.getItem('loginData')) {
            this.loginData = localStorage.getItem('loginData');
        }else{
            localStorage.setItem('loginData', this.loginData);
        }*/
    };
    HomeComponent.prototype.triggerLoggedInCheck = function (eventType, evtObj) {
        var evt = new CustomEvent(eventType, evtObj);
        window.dispatchEvent(evt);
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _app_services_shareobject_routeinfo_service__WEBPACK_IMPORTED_MODULE_3__["RouteinfoService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/image-cropper/image-cropper.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/image-cropper/image-cropper.component.ts ***!
  \**********************************************************/
/*! exports provided: ImageCropperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperComponent", function() { return ImageCropperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImageCropperComponent = /** @class */ (function () {
    function ImageCropperComponent(elementRef) {
        this.elementRef = elementRef;
        this.moveStart = {
            active: false,
            type: null,
            position: null,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            clientX: 0,
            clientY: 0
        };
        this.maxSize = {
            width: 0,
            height: 0
        };
        this.originalSize = {
            width: 0,
            height: 0
        };
        this.cropper = {
            x1: -100,
            y1: -100,
            x2: 1000,
            y2: 1000
        };
        this.imageVisible = false;
        this.format = 'png';
        this.maintainAspectRatio = true;
        this.resizeToWidth = 128;
        this.imageCropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.imageLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loadImageFailed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ImageCropperComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ImageCropperComponent.prototype, "imageChangedEvent", {
        set: function (event) {
            if (event && event.target && event.target.files) {
                this.loadImage(event);
            }
        },
        enumerable: true,
        configurable: true
    });
    ImageCropperComponent.prototype.loadImage = function (event) {
        var _this = this;
        this.imageVisible = false;
        this.originalImage = new Image();
        this.originalImage.onload = function () {
            _this.originalSize.width = _this.originalImage.width;
            _this.originalSize.height = _this.originalImage.height;
        };
        var fileReader = new FileReader();
        var blank = 'data:image/png;base64,iVBORw0KGg' + 'oAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAU' + 'AAarVyFEAAAAASUVORK5CYII=';
        fileReader.onload = function (ev) {
            if (event.target.files[0].type === 'image/jpeg' ||
                event.target.files[0].type === 'image/jpg' ||
                event.target.files[0].type === 'image/png' ||
                event.target.files[0].type === 'image/gif') {
                _this.imgDataUrl = ev.target.result;
                _this.originalImage.src = ev.target.result;
                _this.imageLoaded.emit();
                setTimeout(function () {
                    var displayedImage = _this.elementRef.nativeElement.querySelector('.source-image');
                    var maxSize = displayedImage.offsetHeight > displayedImage.offsetWidth ? displayedImage.offsetWidth : displayedImage.offsetHeight;
                    _this.cropper.x1 = Math.floor(displayedImage.offsetWidth / 2 - maxSize / 2);
                    _this.cropper.y1 = Math.floor(displayedImage.offsetHeight / 2 - maxSize / 2);
                    _this.cropper.x2 = _this.cropper.x1 + maxSize;
                    _this.cropper.y2 = _this.cropper.y1 + maxSize;
                    _this.crop();
                    _this.imageVisible = true;
                }, 0);
            }
            else {
                _this.imgDataUrl = blank;
                _this.originalImage.src = blank;
                _this.loadImageFailed.emit();
            }
        };
        fileReader.readAsDataURL(event.target.files[0]);
    };
    ImageCropperComponent.prototype.startMove = function (event, moveType, position) {
        if (position === void 0) { position = null; }
        this.moveStart.active = true;
        this.moveStart.type = moveType;
        this.moveStart.position = position;
        this.moveStart.clientX = event.clientX;
        this.moveStart.clientY = event.clientY;
        this.moveStart.x1 = this.cropper.x1;
        this.moveStart.y1 = this.cropper.y1;
        this.moveStart.x2 = this.cropper.x2;
        this.moveStart.y2 = this.cropper.y2;
    };
    ImageCropperComponent.prototype.moveImg = function (event) {
        event.stopPropagation();
        event.preventDefault();
        if (this.moveStart.active) {
            var el = this.elementRef.nativeElement.querySelector('.source-image');
            this.maxSize.width = el.offsetWidth;
            this.maxSize.height = el.offsetHeight;
            if (this.moveStart.type === 'move') {
                this.move(event);
                this.checkCoordinates(true);
            }
            else if (this.moveStart.type === 'resize') {
                this.resize(event);
                this.checkCoordinates(false);
            }
        }
    };
    ImageCropperComponent.prototype.checkCoordinates = function (maintainSize) {
        if (maintainSize === void 0) { maintainSize = false; }
        if (this.cropper.x1 < 0) {
            this.cropper.x2 -= maintainSize ? this.cropper.x1 : 0;
            this.cropper.x1 = 0;
        }
        if (this.cropper.y1 < 0) {
            this.cropper.y2 -= maintainSize ? this.cropper.y1 : 0;
            this.cropper.y1 = 0;
        }
        if (this.cropper.x2 > this.maxSize.width) {
            this.cropper.x1 -= maintainSize ? (this.cropper.x2 - this.maxSize.width) : 0;
            this.cropper.x2 = this.maxSize.width;
        }
        if (this.cropper.y2 > this.maxSize.height) {
            this.cropper.y1 -= maintainSize ? (this.cropper.y2 - this.maxSize.height) : 0;
            this.cropper.y2 = this.maxSize.height;
        }
    };
    ImageCropperComponent.prototype.moveStop = function () {
        this.moveStart.active = false;
        this.crop();
    };
    ImageCropperComponent.prototype.move = function (event) {
        var diffX = (event.clientX - this.moveStart.clientX);
        var diffY = (event.clientY - this.moveStart.clientY);
        this.cropper.x1 = this.moveStart.x1 + diffX;
        this.cropper.y1 = this.moveStart.y1 + diffY;
        this.cropper.x2 = this.moveStart.x2 + diffX;
        this.cropper.y2 = this.moveStart.y2 + diffY;
    };
    ImageCropperComponent.prototype.resize = function (event) {
        var diffX = (event.clientX - this.moveStart.clientX);
        var diffY = (event.clientY - this.moveStart.clientY);
        switch (this.moveStart.position) {
            case 'left':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - 20);
                break;
            case 'topleft':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - 20);
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - 20);
                break;
            case 'top':
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - 20);
                break;
            case 'topright':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + 20);
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - 20);
                break;
            case 'right':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + 20);
                break;
            case 'bottomright':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + 20);
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + 20);
                break;
            case 'bottom':
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + 20);
                break;
            case 'bottomleft':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - 20);
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + 20);
                break;
        }
        if (this.maintainAspectRatio) {
            this.checkAspectRatio();
        }
    };
    ImageCropperComponent.prototype.checkAspectRatio = function () {
        var overflowX = 0;
        var overflowY = 0;
        switch (this.moveStart.position) {
            case 'top':
                this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1);
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= overflowY > overflowX ? overflowY : overflowX;
                    this.cropper.y1 += overflowY > overflowX ? overflowY : overflowX;
                }
            case 'bottom':
                this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1);
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= overflowY > overflowX ? overflowY : overflowX;
                    this.cropper.y2 -= overflowY > overflowX ? overflowY : overflowX;
                }
                break;
            case 'topleft':
                this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1);
                overflowX = Math.max(0 - this.cropper.x1, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x1 += overflowY > overflowX ? overflowY : overflowX;
                    this.cropper.y1 += overflowY > overflowX ? overflowY : overflowX;
                }
                break;
            case 'topright':
                this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1);
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= overflowY > overflowX ? overflowY : overflowX;
                    this.cropper.y1 += overflowY > overflowX ? overflowY : overflowX;
                }
                break;
            case 'right':
            case 'bottomright':
                this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1);
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= overflowY > overflowX ? overflowY : overflowX;
                    this.cropper.y2 -= overflowY > overflowX ? overflowY : overflowX;
                }
                break;
            case 'left':
            case 'bottomleft':
                this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1);
                overflowX = Math.max(0 - this.cropper.x1, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x1 += overflowY > overflowX ? overflowY : overflowX;
                    this.cropper.y2 -= overflowY > overflowX ? overflowY : overflowX;
                }
                break;
        }
    };
    ImageCropperComponent.prototype.crop = function () {
        var displayedImage = this.elementRef.nativeElement.querySelector('.source-image');
        if (displayedImage) {
            var ratio = this.originalSize.width / displayedImage.offsetWidth;
            var left = Math.round(this.cropper.x1 * ratio);
            var top_1 = Math.round(this.cropper.y1 * ratio);
            var width = Math.round((this.cropper.x2 - this.cropper.x1) * ratio);
            var height = Math.round((this.cropper.y2 - this.cropper.y1) * ratio);
            var resizeRatio = this.resizeToWidth / width;
            var cropCanvas = document.createElement('canvas');
            cropCanvas.width = width * resizeRatio;
            cropCanvas.height = height * resizeRatio;
            var ctx = cropCanvas.getContext('2d');
            if (ctx) {
                ctx.drawImage(this.originalImage, left, top_1, width, height, 0, 0, width * resizeRatio, height * resizeRatio);
                this.croppedImage = cropCanvas.toDataURL('image/' + this.format);
                if (this.croppedImage.length > 10) {
                    this.imageCropped.emit(this.croppedImage);
                }
            }
        }
    };
    ImageCropperComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ImageCropperComponent.prototype, "imageChangedEvent", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ImageCropperComponent.prototype, "format", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ImageCropperComponent.prototype, "maintainAspectRatio", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ImageCropperComponent.prototype, "resizeToWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ImageCropperComponent.prototype, "imageCropped", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ImageCropperComponent.prototype, "imageLoaded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ImageCropperComponent.prototype, "loadImageFailed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mousemove', ['$event']),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:touchmove', ['$event'])
    ], ImageCropperComponent.prototype, "moveImg", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mouseup', ['$event']),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:touchend', ['$event'])
    ], ImageCropperComponent.prototype, "moveStop", null);
    ImageCropperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-cropper',
            template: "\n    <div>\n    <img\n        *ngIf=\"imgDataUrl\"\n        [src]=\"imgDataUrl\"\n        [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n        class=\"source-image\"\n        style=\"width: 100%\"\n    />\n    <div class=\"cropper\"\n        [style.top.px]=\"cropper.y1\"\n        [style.left.px]=\"cropper.x1\"\n        [style.width.px]=\"cropper.x2 - cropper.x1\"\n        [style.height.px]=\"cropper.y2 - cropper.y1\"\n        [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\">\n        <div\n            (mousedown)=\"startMove($event, 'move')\"\n            class=\"move\"\n        >&nbsp;</div>\n        <span\n            class=\"resize topleft\"\n            (mousedown)=\"startMove($event, 'resize', 'topleft')\"\n        ></span>\n        <span\n            class=\"resize top\"\n        ></span>\n        <span\n            class=\"resize topright\"\n            (mousedown)=\"startMove($event, 'resize', 'topright')\"\n        ></span>\n        <span\n            class=\"resize right\"\n        ></span>\n        <span\n            class=\"resize bottomright\"\n            (mousedown)=\"startMove($event, 'resize', 'bottomright')\"\n        ></span>\n        <span\n            class=\"resize bottom\"\n        ></span>\n        <span\n            class=\"resize bottomleft\"\n            (mousedown)=\"startMove($event, 'resize', 'bottomleft')\"\n        ></span>\n        <span\n            class=\"resize left\"\n        ></span>\n        <span\n            class=\"resize-bar top\"\n            (mousedown)=\"startMove($event, 'resize', 'top')\"\n        ></span>\n        <span\n            class=\"resize-bar right\"\n            (mousedown)=\"startMove($event, 'resize', 'right')\"\n        ></span>\n        <span\n            class=\"resize-bar bottom\"\n            (mousedown)=\"startMove($event, 'resize', 'bottom')\"\n        ></span>\n        <span\n            class=\"resize-bar left\"\n            (mousedown)=\"startMove($event, 'resize', 'left')\"\n        ></span>\n    </div>\n</div>\n",
            styles: ["\n    :host {\n  display: block;\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  padding: 5px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n:host > div {\n  position: relative;\n}\n:host .cropper {\n  position: absolute;\n  display: flex;\n  color: #53535C !important;\n  background: transparent !important;\n  outline-color: rgba(255, 255, 255, 0.3);\n  outline-width: 1000px;\n  outline-style: solid;\n}\n:host .cropper img {\n  width: inherit;\n  height: inherit;\n  cursor: move;\n}\n:host .cropper:after {\n  position: absolute;\n  content: '';\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  pointer-events: none;\n  border: dashed 1px;\n  opacity: .75;\n  color: inherit;\n  z-index: 1;\n}\n:host .cropper .move {\n  width: 100%;\n  cursor: move;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n}\n:host .cropper .resize {\n  position: absolute;\n  background: #53535C;\n}\n:host .cropper .resize.topleft {\n  top: -5px;\n  left: -5px;\n  cursor: nw-resize;\n}\n:host .cropper .resize.top {\n  top: -5px;\n  left: calc(50% - 5px);\n  cursor: n-resize;\n}\n:host .cropper .resize.topright {\n  top: -5px;\n  right: 5px;\n  cursor: ne-resize;\n}\n:host .cropper .resize.right {\n  top: calc(50% - 5px);\n  right: 5px;\n  cursor: e-resize;\n}\n:host .cropper .resize.bottomright {\n  bottom: 5px;\n  right: 5px;\n  cursor: se-resize;\n}\n:host .cropper .resize.bottom {\n  bottom: 5px;\n  left: calc(50% - 5px);\n  cursor: s-resize;\n}\n:host .cropper .resize.bottomleft {\n  bottom: 5px;\n  left: -5px;\n  cursor: sw-resize;\n}\n:host .cropper .resize.left {\n  top: calc(50% - 5px);\n  left: -5px;\n  cursor: w-resize;\n}\n:host .cropper .resize:after {\n  position: absolute;\n  background: inherit;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  content: '';\n  width: 8px;\n  height: 8px;\n  margin: auto;\n  opacity: .85;\n  z-index: 1;\n}\n:host .cropper .resize-bar {\n  position: absolute;\n  z-index: 1;\n}\n:host .cropper .resize-bar.top {\n  top: -5px;\n  left: 5px;\n  width: calc(100% - 10px);\n  height: 10px;\n  cursor: n-resize;\n}\n:host .cropper .resize-bar.right {\n  top: 5px;\n  right: -5px;\n  height: calc(100% - 10px);\n  width: 10px;\n  cursor: e-resize;\n}\n:host .cropper .resize-bar.bottom {\n  bottom: -5px;\n  left: 5px;\n  width: calc(100% - 10px);\n  height: 10px;\n  cursor: s-resize;\n}\n:host .cropper .resize-bar.left {\n  top: 5px;\n  left: -5px;\n  height: calc(100% - 10px);\n  width: 10px;\n  cursor: w-resize;\n}\n"]
        })
    ], ImageCropperComponent);
    return ImageCropperComponent;
}());



/***/ }),

/***/ "./src/app/info-panel/info-panel.component.css":
/*!*****************************************************!*\
  !*** ./src/app/info-panel/info-panel.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm8tcGFuZWwvaW5mby1wYW5lbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/info-panel/info-panel.component.ts":
/*!****************************************************!*\
  !*** ./src/app/info-panel/info-panel.component.ts ***!
  \****************************************************/
/*! exports provided: InfoPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPanelComponent", function() { return InfoPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InfoPanelComponent = /** @class */ (function () {
    function InfoPanelComponent() {
    }
    InfoPanelComponent.prototype.ngOnInit = function () {
    };
    InfoPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info-panel',
            template: __webpack_require__(/*! raw-loader!./info-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/info-panel/info-panel.component.html"),
            styles: [__webpack_require__(/*! ./info-panel.component.css */ "./src/app/info-panel/info-panel.component.css")]
        })
    ], InfoPanelComponent);
    return InfoPanelComponent;
}());



/***/ }),

/***/ "./src/app/item-tile/item-tile.component.css":
/*!***************************************************!*\
  !*** ./src/app/item-tile/item-tile.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-tile{\n\tpadding: 7px;\n\tmargin: 7px;\n\tbackground: #fff;\n\tbox-shadow: 0 1px 3px rgba(34, 34, 34, 0.25);\n\tposition: relative;\n\tdisplay: inline-table;\n}\n.item-pic{\n\twidth: 175px;\n    min-height: 200px;\n    background-size: cover !important;\n    background-position: center !important;\n    background-repeat: no-repeat !important;\n    cursor: zoom-in;\n}\n.item-tile:hover{\n\tbox-shadow: 0 3px 8px rgba(34, 34, 34, 0.4);\n\ttransition: box-shadow 0.3s; \n}\n.fa-envelope{\n\tfont-size: 18px;\n}\n.fa-cart-plus{\n\tfont-size: 20px;\n}\n.fa-minus{\n\tborder: 1px solid #2b90d9;\n    padding: 1px 2px;\n    font-size: 9px;\n    border-radius: 50%;\n    cursor: pointer;\n}\n.fa-minus:hover{\n\tcolor: #ff0000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS10aWxlL2l0ZW0tdGlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsNENBQTRDO0NBQzVDLGtCQUFrQjtDQUNsQixxQkFBcUI7QUFDdEI7QUFDQTtDQUNDLFlBQVk7SUFDVCxpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLHNDQUFzQztJQUN0Qyx1Q0FBdUM7SUFDdkMsZUFBZTtBQUNuQjtBQUNBO0NBQ0MsMkNBQTJDO0NBQzNDLDJCQUEyQjtBQUM1QjtBQUNBO0NBQ0MsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsZUFBZTtBQUNoQjtBQUNBO0NBQ0MseUJBQXlCO0lBQ3RCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0tdGlsZS9pdGVtLXRpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLXRpbGV7XG5cdHBhZGRpbmc6IDdweDtcblx0bWFyZ2luOiA3cHg7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDM0LCAzNCwgMzQsIDAuMjUpO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6IGlubGluZS10YWJsZTtcbn1cbi5pdGVtLXBpY3tcblx0d2lkdGg6IDE3NXB4O1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gICAgY3Vyc29yOiB6b29tLWluO1xufVxuLml0ZW0tdGlsZTpob3Zlcntcblx0Ym94LXNoYWRvdzogMCAzcHggOHB4IHJnYmEoMzQsIDM0LCAzNCwgMC40KTtcblx0dHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzOyBcbn1cbi5mYS1lbnZlbG9wZXtcblx0Zm9udC1zaXplOiAxOHB4O1xufVxuLmZhLWNhcnQtcGx1c3tcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuLmZhLW1pbnVze1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMmI5MGQ5O1xuICAgIHBhZGRpbmc6IDFweCAycHg7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZhLW1pbnVzOmhvdmVye1xuXHRjb2xvcjogI2ZmMDAwMCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/item-tile/item-tile.component.ts":
/*!**************************************************!*\
  !*** ./src/app/item-tile/item-tile.component.ts ***!
  \**************************************************/
/*! exports provided: ItemTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemTileComponent", function() { return ItemTileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ItemTileComponent = /** @class */ (function () {
    function ItemTileComponent() {
        this.onItemAddedToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemCount = 0;
    }
    ItemTileComponent.prototype.ngOnInit = function () {
        this.syncCheckOutItem();
    };
    ItemTileComponent.prototype.syncCheckOutItem = function () {
        if (this.cartItemArr.length > 0) {
            for (var i in this.cartItemArr) {
                if (this.item._id === this.cartItemArr[i].item._id) {
                    this.itemCount = this.cartItemArr[i].count;
                }
            }
        }
    };
    ItemTileComponent.prototype.addItemToCart = function (event) {
        this.itemCount++;
        var itemObj = { 'count': this.itemCount,
            'item': this.item };
        this.onItemAddedToCart.emit({ data: itemObj });
    };
    ItemTileComponent.prototype.removeItemFromCart = function (event) {
        this.itemCount--;
        var itemObj = { 'count': this.itemCount,
            'item': this.item };
        this.onItemAddedToCart.emit({ data: itemObj });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('userId')
    ], ItemTileComponent.prototype, "userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('item')
    ], ItemTileComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cartItemArr')
    ], ItemTileComponent.prototype, "cartItemArr", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ItemTileComponent.prototype, "onItemAddedToCart", void 0);
    ItemTileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-tile',
            template: __webpack_require__(/*! raw-loader!./item-tile.component.html */ "./node_modules/raw-loader/index.js!./src/app/item-tile/item-tile.component.html"),
            styles: [__webpack_require__(/*! ./item-tile.component.css */ "./src/app/item-tile/item-tile.component.css")]
        })
    ], ItemTileComponent);
    return ItemTileComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_services_shareobject_routeinfo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/shareobject/routeinfo.service */ "./src/app/services/shareobject/routeinfo.service.ts");
/* harmony import */ var _app_services_validators_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/validators/validation.service */ "./src/app/services/validators/validation.service.ts");
/* harmony import */ var _app_services_data_registration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/data/registration.service */ "./src/app/services/data/registration.service.ts");






var LoginComponent = /** @class */ (function () {
    /* get loginData(): any {
       return this.routeinfoService.routeData;
     }
     set loginData(value: any) {
       this.routeinfoService.routeData = value;
     }*/
    function LoginComponent(formBuilder, registrationService, routeinfoService) {
        this.formBuilder = formBuilder;
        this.registrationService = registrationService;
        this.routeinfoService = routeinfoService;
        this.renderSignUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.goHome = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.serverMessage = '';
        this.isError = false;
        this.isStatus = false;
        this.loginForm = this.formBuilder.group({
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _app_services_validators_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"].emailValidator]],
            'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
    };
    LoginComponent.prototype.ngAfterContentInit = function () {
    };
    LoginComponent.prototype.ngAfterContentChecked = function () {
    };
    LoginComponent.prototype.logIn = function () {
        var _this = this;
        if (this.loginForm.dirty && this.loginForm.valid) {
            // alert('Name: ${this.loginForm.value.email} Email: ${this.loginForm.value.password}');
            var postObj = { 'email': this.loginForm.value.email,
                'password': this.loginForm.value.password };
            this.registrationService.logIn(postObj).subscribe(function (data) { return _this.afterLogIn(data); });
        }
    };
    LoginComponent.prototype.afterLogIn = function (result) {
        if (result.status === 'failure') {
            this.isError = true;
            this.isStatus = false;
            this.serverMessage = result.message;
        }
        else {
            this.isError = false;
            this.isStatus = true;
            this.serverMessage = result.message + '. Redirecting to Home.';
            localStorage.setItem('currentUser', result.info.username);
            //setTimeout(()=>{ this.goHome.emit(result.status);}, 4000)
            localStorage.setItem('loginData', JSON.stringify(result.info));
            this.goHome.emit(result);
        }
    };
    LoginComponent.prototype.showSignUp = function () {
        this.renderSignUp.emit('complete');
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _app_services_data_registration_service__WEBPACK_IMPORTED_MODULE_5__["RegistrationService"] },
        { type: _app_services_shareobject_routeinfo_service__WEBPACK_IMPORTED_MODULE_3__["RouteinfoService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], LoginComponent.prototype, "renderSignUp", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            providers: [_app_services_data_registration_service__WEBPACK_IMPORTED_MODULE_5__["RegistrationService"]],
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/market/market.component.css":
/*!*********************************************!*\
  !*** ./src/app/market/market.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".market-content{\n    padding: 5px !important;\n    overflow-y: auto;\n}\n.search-input{\n    line-height: 25px;\n    height: 25px;\n    display: block;\n    width: 154px;\n    border: none;\n    outline: none;\n    border: 1px solid #2b90d9;\n    border-radius: 2px;\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n    background: none;    \n}\n.fa-search{\n    float: right;\n    color: #2b90d9 !important;\n    font-size: 15px;\n    line-height: 23px;\n    background: #f5f8fa;\n    padding: 0px 3px;\n    border: 1px solid #2b90d9;\n    border-left: none;\n    border-radius: 2px;\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px;\n}\n.market-controlbar{\n    border: 1px solid #2b90d9;\n    box-sizing: border-box;\n    display: inline-block;\n}\n.market-controlbar > div{\n    padding: 0px 6px;\n    font-size: 12px;\n    border-right: 1px solid #2b90d9;\n    line-height: 17px;\n    color: #2b90d9;\n}\n.total-count, .sort-params{\n    padding: 4px 6px !important;\n}\n.market-sort-items{\n    position: absolute;\n    width: 117px !important;\n    margin-left: 135px;\n    margin-top: 36px !important;\n    padding: 0px !important;\n    z-index: 1000;\n}\n.market-sort-items .arrow-up{\n    left: 40px;\n    margin-top: -11px;\n}\n.sort-params{\n    min-width: 117px;\n}\n.sort-params:hover, .grid-icon:hover, .list-icon:hover, .sort-toggle:hover, .add-item:hover{\n    background: #2b90d9;\n    color: #fff !important;\n    cursor: pointer;\n}\n.add-item{\n    color: #2b90d9;\n    padding: 0px 6px;\n    border: 1px solid #2b90d9;\n    color: #2b90d9;\n    height: 25px;\n    margin-left: 5px;\n    border-radius: 2px;\n    font-size: 14px\n}\n.market-searchbar{\n    display: inline-block;\n}\napp-item-tile{\n    width: 200px;\n    min-height: 220px;\n    display: inline-block;\n}\n.item-count{\n    position: absolute;\n    z-index: 10000;\n    /* height: 15px; */\n    background: red;\n    margin-top: -43px;\n    margin-left: -15px;\n    border: 1px solid white;\n    color: white;\n    padding: 0px 3px 0px 3px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFya2V0L21hcmtldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQjtBQUNKO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL21hcmtldC9tYXJrZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJrZXQtY29udGVudHtcbiAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLnNlYXJjaC1pbnB1dHtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDE1NHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyYjkwZDk7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lOyAgICBcbn1cblxuLmZhLXNlYXJjaHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6ICMyYjkwZDkgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjhmYTtcbiAgICBwYWRkaW5nOiAwcHggM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyYjkwZDk7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG59XG4ubWFya2V0LWNvbnRyb2xiYXJ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJiOTBkOTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm1hcmtldC1jb250cm9sYmFyID4gZGl2e1xuICAgIHBhZGRpbmc6IDBweCA2cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyYjkwZDk7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgY29sb3I6ICMyYjkwZDk7XG59XG5cbi50b3RhbC1jb3VudCwgLnNvcnQtcGFyYW1ze1xuICAgIHBhZGRpbmc6IDRweCA2cHggIWltcG9ydGFudDtcbn1cbi5tYXJrZXQtc29ydC1pdGVtc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDExN3B4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEzNXB4O1xuICAgIG1hcmdpbi10b3A6IDM2cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuLm1hcmtldC1zb3J0LWl0ZW1zIC5hcnJvdy11cHtcbiAgICBsZWZ0OiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IC0xMXB4O1xufVxuLnNvcnQtcGFyYW1ze1xuICAgIG1pbi13aWR0aDogMTE3cHg7XG59XG4uc29ydC1wYXJhbXM6aG92ZXIsIC5ncmlkLWljb246aG92ZXIsIC5saXN0LWljb246aG92ZXIsIC5zb3J0LXRvZ2dsZTpob3ZlciwgLmFkZC1pdGVtOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICMyYjkwZDk7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWRkLWl0ZW17XG4gICAgY29sb3I6ICMyYjkwZDk7XG4gICAgcGFkZGluZzogMHB4IDZweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmI5MGQ5O1xuICAgIGNvbG9yOiAjMmI5MGQ5O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBmb250LXNpemU6IDE0cHhcbn1cbi5tYXJrZXQtc2VhcmNoYmFye1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuYXBwLWl0ZW0tdGlsZXtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWluLWhlaWdodDogMjIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLml0ZW0tY291bnR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDEwMDAwO1xuICAgIC8qIGhlaWdodDogMTVweDsgKi9cbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgbWFyZ2luLXRvcDogLTQzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwcHggM3B4IDBweCAzcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/market/market.component.ts":
/*!********************************************!*\
  !*** ./src/app/market/market.component.ts ***!
  \********************************************/
/*! exports provided: MarketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketComponent", function() { return MarketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modal_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal.service */ "./src/app/modal/modal.service.ts");
/* harmony import */ var _app_services_data_market_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/data/market.service */ "./src/app/services/data/market.service.ts");





var MarketComponent = /** @class */ (function () {
    function MarketComponent(route, router, modalService, marketService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.marketService = marketService;
        //@ViewChild('addProductModal') addProductModal;
        this.onAppLoggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onAppLoggedOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.marketScrollEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isMyProfile = false;
        this.userId = '';
        this.friendId = '';
        this.overFlowY = 'visible';
        this.isMarketSortItems = false;
        this.sortSelection = "Relevance";
        this.modalId = 'marketModal';
        this.skip = 0;
        this.limit = 12;
        this.total = 0;
        this.isLoading = false;
        this.marketItemArr = [];
        this.relevance = '';
        this.isViewMore = false;
        this.isItemsAdded = false;
        this.cartItemArr = [];
        this.totalCartItem = 0;
        this.screenHeight = window.screen.height - 300;
        route.params.subscribe(function (val) {
            var currentUser = localStorage.getItem('currentUser');
            var id = _this.route.snapshot.paramMap.get('id');
            if (!currentUser) {
                _this.triggerLoggedInCheck('onAppLoggedOut', { event: 'onAppLoggedOut', message: 'logged out' });
                _this.onAppLoggedOut.emit('logged Out');
                _this.router.navigate(['public']);
                return;
            }
            else {
                _this.triggerLoggedInCheck('onAppLoggedIn', { event: 'onAppLoggedIn', message: 'logged in' });
                _this.onAppLoggedIn.emit('logged In');
                localStorage.setItem('currentRoute', 'market/' + id);
            }
            if (currentUser === id) {
                _this.isMyProfile = true;
                localStorage.setItem("isMyProfile", 'true');
                _this.userId = currentUser;
            }
            else {
                _this.isMyProfile = false;
                localStorage.setItem("isMyProfile", 'false');
                var postObj = { 'userid': currentUser, 'friendid': id };
                _this.friendId = id;
                //this.friendsService.getFriendInfo(postObj).subscribe(data => this.afterFriendInfo(data));
            }
            //this.routeSwitch.emit(this.isMyProfile);
            //this.getProfileInfo(id);
        });
    }
    MarketComponent.prototype.ngOnInit = function () {
        /*if(localStorage.getItem('loginData')) {
            this.loginData = localStorage.getItem('loginData');
        }else{
            localStorage.setItem('loginData', this.loginData);
        }*/
        this.fetchCheckOut();
    };
    MarketComponent.prototype.ngAfterViewInit = function () {
        // child is set
    };
    MarketComponent.prototype.triggerLoggedInCheck = function (eventType, evtObj) {
        var evt = new CustomEvent(eventType, evtObj);
        window.dispatchEvent(evt);
    };
    MarketComponent.prototype.onScroll = function (event) {
        var element = this.myScrollContainer.nativeElement;
        var atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
        if (atBottom) {
            //this.feedScrollEnd.emit('scroll end');
            // this.storyBoxComponent.onFeedScrollEnd();
            this.skip = this.skip + this.limit;
            if (this.skip < this.total) {
                this.fetchMarketItems();
            }
        }
    };
    MarketComponent.prototype.clickedOutside = function ($event) {
        this.isMarketSortItems = false;
    };
    MarketComponent.prototype.clickedInside = function (event) {
        event.preventDefault();
        event.stopPropagation(); // <- that will stop propagation on lower layers
        if (this.isMarketSortItems) {
            this.isMarketSortItems = false;
        }
        else {
            this.isMarketSortItems = true;
        }
    };
    MarketComponent.prototype.sortItemClick = function (event) {
        this.sortSelection = event.target.innerText;
        this.isMarketSortItems = false;
    };
    MarketComponent.prototype.addItemToMarket = function (event) {
        this.openAppModal();
    };
    MarketComponent.prototype.openAppModal = function (modalType) {
        if (modalType === void 0) { modalType = null; }
        var self = this;
        self.modalService.open(self.modalId);
    };
    MarketComponent.prototype.resetParams = function () {
        this.skip = 0;
        this.limit = 12;
        this.total = 0;
        this.marketItemArr = [];
    };
    MarketComponent.prototype.refreshMarket = function (event) {
        var self = this;
        self.resetParams();
        self.fetchMarketItems();
        self.modalService.close(self.modalId);
    };
    MarketComponent.prototype.fetchMarketItems = function () {
        var _this = this;
        this.isLoading = true;
        var postObj = { 'relevance': this.relevance, 'skip': this.skip, 'limit': this.limit };
        this.marketService.fetchMarketItems(postObj).subscribe(function (data) { return _this.afterMarketItemsFetched(data); });
    };
    MarketComponent.prototype.afterMarketItemsFetched = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            var data = result.infos;
            this.total = result.total;
            if (this.total > 0) {
                this.isItemsAdded = true;
            }
            else {
                this.isItemsAdded = false;
            }
            for (var i in data) {
                this.marketItemArr.push(data[i]);
            }
            if (this.marketItemArr.length < this.total) {
                this.isViewMore = true;
            }
            else {
                this.isViewMore = false;
            }
        }
        this.isLoading = false;
    };
    MarketComponent.prototype.onItemAddedToCart = function (event) {
        var itemObj = event.data;
        var index = -1;
        var len = this.cartItemArr.length;
        if (len === 0) {
            this.cartItemArr.push(itemObj);
        }
        else {
            for (var i = 0; i < len; i++) {
                if (itemObj.item._id === this.cartItemArr[i].item._id) {
                    index = i;
                }
            }
            if (index !== -1) {
                if (itemObj.count === 0) {
                    this.cartItemArr.splice(index, 1);
                }
                else {
                    this.cartItemArr[index] = itemObj;
                }
            }
            else {
                this.cartItemArr.push(itemObj);
            }
        }
        this.calculateTotalCartItem();
    };
    MarketComponent.prototype.calculateTotalCartItem = function () {
        var countItem = 0;
        for (var obj in this.cartItemArr) {
            countItem += this.cartItemArr[obj].count;
        }
        this.totalCartItem = countItem;
    };
    MarketComponent.prototype.fetchCheckOut = function () {
        var _this = this;
        var postObj = { 'username': this.userId };
        this.marketService.fetchCheckOut(postObj).subscribe(function (data) { return _this.afterFetchCheckOut(data); });
    };
    MarketComponent.prototype.afterFetchCheckOut = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            this.cartItemArr = result.info.checkOutItem;
            this.fetchMarketItems();
            //this.itemTile.syncCheckOutItem(this.cartItemArr);
            this.calculateTotalCartItem();
        }
    };
    MarketComponent.prototype.proceedToCheckOut = function (event) {
        var _this = this;
        var postObj = { 'username': this.userId, 'checkOutItem': this.cartItemArr };
        this.marketService.doCheckOut(postObj).subscribe(function (data) { return _this.afterCheckOut(data); });
    };
    MarketComponent.prototype.afterCheckOut = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            this.router.navigate(['checkout', this.userId]);
        }
    };
    MarketComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _modal_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"] },
        { type: _app_services_data_market_service__WEBPACK_IMPORTED_MODULE_4__["MarketService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollMe', { static: true })
    ], MarketComponent.prototype, "myScrollContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('itemTile', { static: true })
    ], MarketComponent.prototype, "itemTile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], MarketComponent.prototype, "onAppLoggedIn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], MarketComponent.prototype, "onAppLoggedOut", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], MarketComponent.prototype, "marketScrollEnd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('scroll', ['$event'])
    ], MarketComponent.prototype, "onScroll", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event'])
    ], MarketComponent.prototype, "clickedOutside", null);
    MarketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-market',
            template: __webpack_require__(/*! raw-loader!./market.component.html */ "./node_modules/raw-loader/index.js!./src/app/market/market.component.html"),
            providers: [_app_services_data_market_service__WEBPACK_IMPORTED_MODULE_4__["MarketService"]],
            styles: [__webpack_require__(/*! ./market.component.css */ "./src/app/market/market.component.css")]
        })
    ], MarketComponent);
    return MarketComponent;
}());



/***/ }),

/***/ "./src/app/modal/modal.component.css":
/*!*******************************************!*\
  !*** ./src/app/modal/modal.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-overlay { background-color: rgba(0, 0, 0, 0.4); bottom: 0; left: 0; position: fixed; right: 0; top: 0; z-index: 1000; } .closed .modal { top: -100%; display: none;} .closed .modal-overlay { display: none; } .modal {  padding: 5px; display: block; box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.22), 0 17px 20px 0 rgba(0, 0, 0, 0.12); left: calc(50% - 300px); max-height: calc(100% - 10em); overflow-y: auto; position: fixed; top: 5em; width: 640px; z-index: 1100; transition: all .5s ease; } .modal .title { background-color: #2b90d9; text-align: center; color: white; line-height: 30px; } .modal .title .right-align { position: absolute; right: 9px; } .modal .title .right-align, .modal .title .right-align i { line-height: 30px; } .modal .title .right-align:hover { cursor: pointer; -webkit-transform: scale(1.1); transform: scale(1.1); } .modal .body { padding: 0em; } @media only screen and (max-width: 768px) {\n\t.modal[_ngcontent-c11] {width:90%;left: 5%;}\n\t}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsb0NBQW9DLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsRUFBRSxpQkFBaUIsVUFBVSxFQUFFLGFBQWEsQ0FBQyxFQUFFLHlCQUF5QixhQUFhLEVBQUUsRUFBRSxVQUFVLFlBQVksRUFBRSxjQUFjLEVBQUUsZ0ZBQWdGLEVBQUUsdUJBQXVCLEVBQUUsNkJBQTZCLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLHdCQUF3QixFQUFFLEVBQUUsZ0JBQWdCLHlCQUF5QixFQUFFLGtCQUFrQixFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxFQUFFLDZCQUE2QixrQkFBa0IsRUFBRSxVQUFVLEVBQUUsRUFBRSwyREFBMkQsaUJBQWlCLEVBQUUsRUFBRSxtQ0FBbUMsZUFBZSxFQUFFLDZCQUFxQixFQUFyQixxQkFBcUIsRUFBRSxFQUFFLGVBQWUsWUFBWSxFQUFFLEVBQ3owQjtDQUNDLHdCQUF3QixTQUFTLENBQUMsUUFBUSxDQUFDO0NBQzNDIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1vdmVybGF5IHsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpOyBib3R0b206IDA7IGxlZnQ6IDA7IHBvc2l0aW9uOiBmaXhlZDsgcmlnaHQ6IDA7IHRvcDogMDsgei1pbmRleDogMTAwMDsgfSAuY2xvc2VkIC5tb2RhbCB7IHRvcDogLTEwMCU7IGRpc3BsYXk6IG5vbmU7fSAuY2xvc2VkIC5tb2RhbC1vdmVybGF5IHsgZGlzcGxheTogbm9uZTsgfSAubW9kYWwgeyAgcGFkZGluZzogNXB4OyBkaXNwbGF5OiBibG9jazsgYm94LXNoYWRvdzogMCAxMnB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjIpLCAwIDE3cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7IGxlZnQ6IGNhbGMoNTAlIC0gMzAwcHgpOyBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMGVtKTsgb3ZlcmZsb3cteTogYXV0bzsgcG9zaXRpb246IGZpeGVkOyB0b3A6IDVlbTsgd2lkdGg6IDY0MHB4OyB6LWluZGV4OiAxMTAwOyB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7IH0gLm1vZGFsIC50aXRsZSB7IGJhY2tncm91bmQtY29sb3I6ICMyYjkwZDk7IHRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6IHdoaXRlOyBsaW5lLWhlaWdodDogMzBweDsgfSAubW9kYWwgLnRpdGxlIC5yaWdodC1hbGlnbiB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDlweDsgfSAubW9kYWwgLnRpdGxlIC5yaWdodC1hbGlnbiwgLm1vZGFsIC50aXRsZSAucmlnaHQtYWxpZ24gaSB7IGxpbmUtaGVpZ2h0OiAzMHB4OyB9IC5tb2RhbCAudGl0bGUgLnJpZ2h0LWFsaWduOmhvdmVyIHsgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH0gLm1vZGFsIC5ib2R5IHsgcGFkZGluZzogMGVtOyB9IFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQubW9kYWxbX25nY29udGVudC1jMTFdIHt3aWR0aDo5MCU7bGVmdDogNSU7fVxuXHR9Il19 */"

/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.service */ "./src/app/modal/modal.service.ts");



var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService) {
        this.modalService = modalService;
        this.onModalClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onModalInitialize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.blocking = false;
        this.isOpen = false;
    }
    ModalComponent.prototype.onMouseEnter = function (event) {
        //this.keyup(event);
    };
    ModalComponent.prototype.ngOnInit = function () {
        this.modalService.registerModal(this);
        this.onModalInitialize.emit('initialize');
    };
    ModalComponent.prototype.ngAfterViewInit = function () {
    };
    ModalComponent.prototype.close = function (checkBlocking) {
        if (checkBlocking === void 0) { checkBlocking = false; }
        this.onModalClose.emit('close');
        this.modalService.close(this.modalId, checkBlocking);
    };
    ModalComponent.prototype.keyup = function (event) {
        if (event.keyCode === 27) {
            this.modalService.close(this.modalId, true);
        }
    };
    ModalComponent.ctorParameters = function () { return [
        { type: _modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ModalComponent.prototype, "onModalClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ModalComponent.prototype, "onModalInitialize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ModalComponent.prototype, "modalId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ModalComponent.prototype, "modalTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ModalComponent.prototype, "blocking", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keyup')
    ], ModalComponent.prototype, "onMouseEnter", null);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/modal/modal.component.css")]
        })
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/modal/modal.service.ts":
/*!****************************************!*\
  !*** ./src/app/modal/modal.service.ts ***!
  \****************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globals_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals/global */ "./src/app/globals/global.ts");



var ModalService = /** @class */ (function () {
    function ModalService(globals) {
        this.globals = globals;
        this.modals = [];
    }
    ModalService.prototype.registerModal = function (newModal) {
        var modal = this.findModal(newModal.modalId);
        // Delete existing to replace the modal
        if (modal) {
            // this.modals.splice(this.modals.indexOf(modal));
            this.globals.modals.splice(this.globals.modals.indexOf(modal), 1);
            // alert('modal deleted'+newModal.modalId);
        }
        this.globals.modals.push(newModal);
    };
    ModalService.prototype.open = function (modalId) {
        var modal = this.findModal(modalId);
        if (modal) {
            modal.isOpen = true;
        }
    };
    ModalService.prototype.close = function (modalId, checkBlocking) {
        if (checkBlocking === void 0) { checkBlocking = false; }
        var modal = this.findModal(modalId);
        if (modal) {
            if (checkBlocking && modal.blocking) {
                return;
            }
            modal.isOpen = false;
        }
        switch (modalId) {
            case 'avModal':
                this.triggerWindowEvent('onAVModalClose', { 'event': 'onAVModalClose', 'msgObj': {} });
                break;
            default:
                console.log('all good');
        }
    };
    ModalService.prototype.findModal = function (modalId) {
        var e_1, _a;
        var modals = this.globals.modals;
        if (modals !== null) {
            try {
                for (var modals_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](modals), modals_1_1 = modals_1.next(); !modals_1_1.done; modals_1_1 = modals_1.next()) {
                    var modal = modals_1_1.value;
                    if (modal.modalId === modalId) {
                        return modal;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (modals_1_1 && !modals_1_1.done && (_a = modals_1.return)) _a.call(modals_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return null;
        }
    };
    ModalService.prototype.triggerWindowEvent = function (eventType, evtObj) {
        var evt = new CustomEvent(eventType, { 'detail': evtObj });
        window.dispatchEvent(evt);
    };
    ModalService.ctorParameters = function () { return [
        { type: _globals_global__WEBPACK_IMPORTED_MODULE_2__["Globals"] }
    ]; };
    ModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/music-list/music-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/music-list/music-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL211c2ljLWxpc3QvbXVzaWMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/music-list/music-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/music-list/music-list.component.ts ***!
  \****************************************************/
/*! exports provided: MusicListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicListComponent", function() { return MusicListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MusicListComponent = /** @class */ (function () {
    function MusicListComponent(el) {
        this.playMusic = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pauseMusic = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.resumeMusic = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.replayMusic = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isPlaying = true;
        this.isPause = false;
        this.itemCount = 0;
        this.musicListClick = false;
        this.isShow = true;
        this.el = el;
    }
    MusicListComponent.prototype.ngOnInit = function () {
    };
    MusicListComponent.prototype.ngAfterViewInit = function () {
        var cutOffHeight = 100;
        var playListHeight = this.musicPlayList.nativeElement.offsetHeight;
        var hostElem = this.el.nativeElement;
        var playListContentHeight = hostElem.parentNode.offsetHeight;
        if (playListHeight >= (playListContentHeight - cutOffHeight)) {
            playListHeight = playListContentHeight - cutOffHeight;
            this.musicPlayList.nativeElement.style.height = playListHeight + 'px';
        }
        //this.actualAudio = this.musicSource[0].actualAudio;
        this.addEventListeners();
    };
    MusicListComponent.prototype.removeEventListeners = function () {
        //let self = this;
        if (document.removeEventListener) { // For all major browsers, except IE 8 and earlier
            //document.removeEventListener('playNext', this.playNextItem);
            //document.removeEventListener('onPauseAudio', this.onPauseAudio);
            //document.removeEventListener('onPlayAudio', this.onPlayAudio);
        }
    };
    MusicListComponent.prototype.addEventListeners = function () {
        //document.addEventListener('playNext', this.playNextItem);
        //document.addEventListener('onPauseAudio', this.onPauseAudio);
        //document.addEventListener('onPlayAudio', this.onPlayAudio);
    };
    MusicListComponent.prototype.onPlayAudio = function (event) {
        //if(this.musicListClick === false){
        //}
        this.isPlaying = true;
        this.isPause = false;
        this.musicListClick = false;
    };
    MusicListComponent.prototype.onPauseAudio = function (event) {
        this.musicListClick = false;
        this.isPlaying = false;
        this.isPause = true;
    };
    MusicListComponent.prototype.musicListItemClick = function (event, item, indx) {
        this.musicListClick = true;
        this.playMusic.emit(item);
        this.isPlaying = true;
        this.isPause = false;
        this.actualAudio = item.actualAudio;
        this.itemCount = Number(indx);
    };
    MusicListComponent.prototype.pauseMusiic = function (event) {
        this.musicListClick = false;
        this.pauseMusic.emit('pause');
        this.isPause = true;
        this.isPlaying = false;
    };
    MusicListComponent.prototype.resumeMusiic = function (event) {
        this.musicListClick = false;
        this.resumeMusic.emit('resume');
        this.isPause = false;
        this.isPlaying = true;
    };
    MusicListComponent.prototype.replayMusiic = function (event) {
        this.replayMusic.emit('replay');
    };
    MusicListComponent.prototype.playNextItem = function (event) {
        this.musicListClick = false;
        if (this.itemCount < (this.musicSource.length - 1)) {
            this.itemCount++;
        }
        else {
            this.itemCount = 0;
        }
        var item = this.musicSource[this.itemCount];
        this.musicListItemClick(null, item, this.itemCount);
        this.actualAudio = item.actualAudio;
        this.smoothItemScroll();
    };
    MusicListComponent.prototype.playPreviousItem = function (event) {
        this.musicListClick = false;
        if (this.itemCount >= 1) {
            this.itemCount--;
        }
        else {
            this.itemCount = this.musicSource.length - 1;
        }
        var item = this.musicSource[this.itemCount];
        this.musicListItemClick(null, item, this.itemCount);
        this.actualAudio = item.actualAudio;
        this.smoothItemScroll();
    };
    MusicListComponent.prototype.smoothItemScroll = function () {
        var body = document.getElementsByTagName('body')[0];
        body.style.position = "fixed";
        var element = document.getElementById(this.actualAudio);
        element.scrollIntoView({ behavior: "smooth" });
        body.style.position = "relative";
    };
    MusicListComponent.prototype.hideControls = function (event) {
        this.isShow = false;
    };
    MusicListComponent.prototype.showControls = function (event) {
        this.isShow = true;
    };
    MusicListComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('musicPlayList', { static: true })
    ], MusicListComponent.prototype, "musicPlayList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('musicSource')
    ], MusicListComponent.prototype, "musicSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('actualAudio')
    ], MusicListComponent.prototype, "actualAudio", void 0);
    MusicListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-music-list',
            template: __webpack_require__(/*! raw-loader!./music-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/music-list/music-list.component.html"),
            host: {
                '(document:playNext)': 'playNextItem($event)',
                '(document:onPlayAudio)': 'onPlayAudio($event)',
                '(document:onPauseAudio)': 'onPauseAudio($event)'
            },
            styles: [__webpack_require__(/*! ./music-list.component.css */ "./src/app/music-list/music-list.component.css")]
        })
    ], MusicListComponent);
    return MusicListComponent;
}());



/***/ }),

/***/ "./src/app/music-player/music-player.component.css":
/*!*********************************************************!*\
  !*** ./src/app/music-player/music-player.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#audio{\n\twidth: 100%;\n}\n.audio-content{\n\tpadding: 15px 0px;\n}\n.uplod-new:hover, .new-album:hover{\n\tcursor: pointer;\n}\n.uplod-new:hover span, .uplod-new:hover i, .new-album:hover span, .new-album:hover i {\n\tcolor: #fff !important;\n}\n.file-input-container{\n\tdisplay: none;\n}\n#progressBar{\n\twidth: 250px;\n}\n.under-line{\n\ttext-decoration: underline;\n}\n.search-input{\n    line-height: 25px;\n    height: 25px;\n    display: block;\n    width: 154px;\n    border: none;\n    outline: none;\n    border: 1px solid #2b90d9;\n    border-radius: 2px;\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n    background: none;\n}\n.fa-search{\n    float: right;\n    color: #2b90d9 !important;\n    font-size: 15px;\n    line-height: 23px;\n    background: #f5f8fa;\n    padding: 0px 3px;\n    border: 1px solid #2b90d9;\n    border-left: none;\n    border-radius: 2px;\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px;\n}\ntextarea.form-control{\n\theight: 100px !important;\n}\napp-audio-album-icon{\n\twidth: 100px;\n    height: 100px;\n    border: 1px solid #2b90d9;\n    margin: 10px 5px 0px 0px;\n}\n.music-play-list{\n    max-height: 314px;\n    width: 50px;\n    background: #ff0000;\n    display: inline-block;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    height: 275px;\n    background-color: #2b90d9;\n}\n.audio-container, #canvas{\n    max-height: 314px;\n    width: 100%;\n    background: #000;\n}\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: #2b90d9;\n}\n::-moz-placeholder { /* Firefox 19+ */\n  color: #2b90d9;\n}\n:-ms-input-placeholder { /* IE 10+ */\n  color: #2b90d9;\n}\n:-moz-placeholder { /* Firefox 18- */\n  color: #2b90d9;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVzaWMtcGxheWVyL211c2ljLXBsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxpQkFBaUI7QUFDbEI7QUFFQTtDQUNDLGVBQWU7QUFDaEI7QUFDQTtDQUNDLHNCQUFzQjtBQUN2QjtBQUNBO0NBQ0MsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTtDQUNDLDBCQUEwQjtBQUMzQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQztBQUNBO0NBQ0Msd0JBQXdCO0FBQ3pCO0FBQ0E7Q0FDQyxZQUFZO0lBQ1QsYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBLDhCQUE4Qix3QkFBd0I7RUFDcEQsY0FBYztBQUNoQjtBQUNBLHFCQUFxQixnQkFBZ0I7RUFDbkMsY0FBYztBQUNoQjtBQUNBLHlCQUF5QixXQUFXO0VBQ2xDLGNBQWM7QUFDaEI7QUFDQSxvQkFBb0IsZ0JBQWdCO0VBQ2xDLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9tdXNpYy1wbGF5ZXIvbXVzaWMtcGxheWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYXVkaW97XG5cdHdpZHRoOiAxMDAlO1xufVxuLmF1ZGlvLWNvbnRlbnR7XG5cdHBhZGRpbmc6IDE1cHggMHB4O1xufVxuXG4udXBsb2QtbmV3OmhvdmVyLCAubmV3LWFsYnVtOmhvdmVye1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG4udXBsb2QtbmV3OmhvdmVyIHNwYW4sIC51cGxvZC1uZXc6aG92ZXIgaSwgLm5ldy1hbGJ1bTpob3ZlciBzcGFuLCAubmV3LWFsYnVtOmhvdmVyIGkge1xuXHRjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLmZpbGUtaW5wdXQtY29udGFpbmVye1xuXHRkaXNwbGF5OiBub25lO1xufVxuI3Byb2dyZXNzQmFye1xuXHR3aWR0aDogMjUwcHg7XG59XG4udW5kZXItbGluZXtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uc2VhcmNoLWlucHV0e1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTU0cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJiOTBkOTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uZmEtc2VhcmNoe1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogIzJiOTBkOSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjVmOGZhO1xuICAgIHBhZGRpbmc6IDBweCAzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJiOTBkOTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbn1cbnRleHRhcmVhLmZvcm0tY29udHJvbHtcblx0aGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xufVxuYXBwLWF1ZGlvLWFsYnVtLWljb257XG5cdHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyYjkwZDk7XG4gICAgbWFyZ2luOiAxMHB4IDVweCAwcHggMHB4O1xufVxuLm11c2ljLXBsYXktbGlzdHtcbiAgICBtYXgtaGVpZ2h0OiAzMTRweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGhlaWdodDogMjc1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiOTBkOTtcbn1cbi5hdWRpby1jb250YWluZXIsICNjYW52YXN7XG4gICAgbWF4LWhlaWdodDogMzE0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogIzAwMDtcbn1cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIENocm9tZS9PcGVyYS9TYWZhcmkgKi9cbiAgY29sb3I6ICMyYjkwZDk7XG59XG46Oi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE5KyAqL1xuICBjb2xvcjogIzJiOTBkOTtcbn1cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJRSAxMCsgKi9cbiAgY29sb3I6ICMyYjkwZDk7XG59XG46LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXG4gIGNvbG9yOiAjMmI5MGQ5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/music-player/music-player.component.ts":
/*!********************************************************!*\
  !*** ./src/app/music-player/music-player.component.ts ***!
  \********************************************************/
/*! exports provided: MusicPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicPlayerComponent", function() { return MusicPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_services_validators_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/validators/validation.service */ "./src/app/services/validators/validation.service.ts");
/* harmony import */ var _app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/settings/app-settings.service */ "./src/app/services/settings/app-settings.service.ts");
/* harmony import */ var _app_services_data_audio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/data/audio.service */ "./src/app/services/data/audio.service.ts");
/* harmony import */ var _music_list_music_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../music-list/music-list.component */ "./src/app/music-list/music-list.component.ts");







var MusicPlayerComponent = /** @class */ (function () {
    function MusicPlayerComponent(formBuilder, audioService, componentFactoryResolver) {
        this.formBuilder = formBuilder;
        this.audioService = audioService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.userId = '';
        this.uploadProgress = 0;
        this.isProgress = false;
        this.albumTitle = '';
        this.albumDesc = '';
        this.isCreateAlbum = false;
        this.isAddAlbum = false;
        this.isUpdateAlbum = false;
        this.isAudioAlbum = true;
        this.isAlbumAudio = false;
        this.mp3AudioPath = '';
        this.posterPath = 'https://media.w3.org/2010/05/sintel/poster.png';
        this.musicSource = [];
        var loginData = JSON.parse(localStorage.getItem('loginData'));
        this.userId = loginData.username;
        this.audioUploadForm = this.formBuilder.group({
            'file': ['']
        });
        this.audioGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.albumForm = this.formBuilder.group({
            'albumTitle': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _app_services_validators_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].blankDataValidator]],
            'albumDesc': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _app_services_validators_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].blankDataValidator]]
        });
        this.fetchAudioAlbumInfo();
    }
    MusicPlayerComponent.prototype.ngOnInit = function () {
        this.triggerWindowEvent('setSpectrum', { 'event': 'setSpectrum', 'msgObj': {} });
    };
    MusicPlayerComponent.prototype.fileChangeEvent = function (event, directUpload) {
        var self = this;
        var userId = this.userId;
        var file;
        if (event.target.files && event.target.files[0]) {
            file = event.target.files[0];
            uploadAudio();
        }
        function uploadAudio() {
            var formData = new FormData();
            formData.append('uploadfile', file);
            formData.append('userid', userId);
            if (!directUpload) {
                formData.append('album', self.audioInfo.title);
            }
            else {
                formData.append('album', 'untitled');
            }
            var xhr = new XMLHttpRequest();
            xhr.open('post', _app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + '/api/uploadAudio', true);
            xhr.upload.onprogress = function (e) {
                if (e.lengthComputable) {
                    var percentage = (e.loaded / e.total) * 100;
                    console.log(percentage);
                    if ((percentage > 0) && (percentage < 100)) {
                        self.isProgress = true;
                    }
                    else {
                        self.isProgress = false;
                    }
                    self.uploadProgress = percentage;
                    //$('div.progress div').css('width', percentage.toFixed(0) + '%');
                    //$('div.progress div').html(percentage.toFixed(0) + '%');
                }
            };
            xhr.onerror = function (e) {
                alert('An error occurred while submitting the form. Maybe your file is too big');
            };
            xhr.onload = function () {
                /*let file = xhr.responseText;
                $('div.progress div').css('width','0%');
                $('div.progress').hide();
                showMsg("alert alert-success", "File uploaded successfully!");
                $('#myFile').val('');*/
                if (self.isAudioAlbum) {
                    self.fetchAudioAlbumInfo();
                }
                else {
                    self.fetchAlbumAudioInfo();
                }
            };
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    callback(xhr.responseText); // Another callback here
                }
            };
            function callback(responseText) {
                if (JSON.parse(responseText).status === 'sessionExpired') {
                    alert('Session Expired, Please Login Again');
                }
            }
            xhr.send(formData);
            return false;
        }
        //var files = fileInput.srcElement.files;
        //console.log(files);
        //this.uploadService.makeFileRequest('https://localhost:3000/api/uploadCoverPic', [], files).subscribe(() => {
        //  console.log('sent');
        //});
    };
    MusicPlayerComponent.prototype.createAlbumInfo = function (event) {
        var _this = this;
        if (this.albumForm.dirty && this.albumForm.valid) {
            // alert('Name: ${this.loginForm.value.email} Email: ${this.loginForm.value.password}');
            var postObj = { 'username': this.userId,
                'title': this.albumForm.value.albumTitle,
                'desc': this.albumForm.value.albumDesc };
            this.audioService.createAudioAlbum(postObj).subscribe(function (data) { return _this.afterAlbumCreated(data); });
        }
    };
    MusicPlayerComponent.prototype.afterAlbumCreated = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            this.cancelAlbum(null);
            //alert(result.message);
            this.fetchAudioAlbumInfo();
        }
    };
    MusicPlayerComponent.prototype.updateAlbumInfo = function (event) {
        var _this = this;
        if (this.albumForm.dirty && this.albumForm.valid) {
            // alert('Name: ${this.loginForm.value.email} Email: ${this.loginForm.value.password}');
            var postObj = { 'id': this.albumInfo._id,
                'username': this.userId,
                'title': this.albumForm.value.albumTitle,
                'desc': this.albumForm.value.albumDesc };
            this.audioService.updateAudioAlbum(postObj).subscribe(function (data) { return _this.afterAlbumUpdated(data); });
        }
    };
    MusicPlayerComponent.prototype.afterAlbumUpdated = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            this.cancelAlbum(null);
            //alert(result.message);
            this.fetchAudioAlbumInfo();
        }
    };
    MusicPlayerComponent.prototype.createAudioAlbum = function (event) {
        this.isCreateAlbum = true;
        this.isAddAlbum = true;
        this.isUpdateAlbum = false;
    };
    MusicPlayerComponent.prototype.cancelAlbum = function (event) {
        this.isCreateAlbum = false;
        this.isAddAlbum = false;
        this.isUpdateAlbum = false;
        this.albumForm.reset();
    };
    MusicPlayerComponent.prototype.fetchAudioAlbumInfo = function () {
        var _this = this;
        var postObj = { 'username': this.userId };
        this.audioService.fetchAudioAlbumInfo(postObj).subscribe(function (data) { return _this.afterAudioAbumInfo(data); });
    };
    MusicPlayerComponent.prototype.fetchAlbumAudioInfo = function () {
        var _this = this;
        var postObj = { 'username': this.userId, 'album': this.albumTitle };
        this.audioService.fetchAlbumAudioInfo(postObj).subscribe(function (data) { return _this.afterAbumAudioInfo(data); });
    };
    MusicPlayerComponent.prototype.afterAudioAbumInfo = function (result) {
        if (result.length > 0) {
            this.audioAlbumList = result;
            this.musicSource = [];
            //for(var i in this.audioAlbumList[0].audiosList){
            this.musicSource = this.audioAlbumList[0].audiosList;
            //}
            this.createMusicList(this.musicSource);
            this.playAudio(this.audioAlbumList[0].audiosList[0], -1);
        }
    };
    MusicPlayerComponent.prototype.afterAbumAudioInfo = function (result) {
        if (result.length) {
            this.audioList = result[0].audiosList;
        }
    };
    //Need to activate/deactivate edit btn later based on changes in title field
    MusicPlayerComponent.prototype.editAudioAlbum = function (event) {
        this.albumInfo = event.data;
        this.isCreateAlbum = true;
        this.isAddAlbum = false;
        this.isUpdateAlbum = true;
        this.albumTitle = this.albumInfo.title;
        this.albumDesc = this.albumInfo.description;
    };
    //Diplaying the list of audios under a particular audio album
    MusicPlayerComponent.prototype.showAudioList = function (event) {
        this.audioInfo = event.data;
        this.isAudioAlbum = false;
        this.isAlbumAudio = true;
        this.audioList = this.audioInfo.audiosList;
        this.albumTitle = this.audioInfo.title;
        this.musicSource = [];
        //for(var i in this.audioList){
        this.musicSource = this.audioList;
        //}
        this.createMusicList(this.musicSource);
        //this.fetchAlbumAudioInfo();
        this.playAudio(this.audioList[0], -1);
    };
    MusicPlayerComponent.prototype.goToMyAlbum = function (event) {
        this.isAudioAlbum = true;
        this.isAlbumAudio = false;
        this.fetchAudioAlbumInfo();
    };
    MusicPlayerComponent.prototype.pauseAudio = function () {
        var _this = this;
        var playPromise = this.audioPlayer.nativeElement.play();
        if (playPromise !== undefined) {
            playPromise.then(function (_) {
                // Automatic playback started!
                // Show playing UI.
                // We can now safely pause video...
                var isPlaying = _this.audioPlayer.nativeElement.currentTime > 0 && !_this.audioPlayer.nativeElement.paused && !_this.audioPlayer.nativeElement.ended
                    && _this.audioPlayer.nativeElement.readyState > 2;
                if (isPlaying) {
                    //this.audioPlayer.nativeElement.pause();
                    _this.audioPlayer.nativeElement.pause();
                }
            })
                .catch(function (error) {
                // Auto-play was prevented
                // Show paused UI.
            });
        }
    };
    MusicPlayerComponent.prototype.playAudio = function (data, indx) {
        console.log(data);
        this.posterPath = data.poster;
        this.pauseAudio();
        this.mp3AudioPath = data.actualAudio;
        try {
            this.musicListRef.instance.actualAudio = this.mp3AudioPath;
            this.musicListRef.instance.itemCount = indx;
            if (indx === -1) {
                this.musicListRef.instance.itemCount = 0;
            }
            if (indx !== -1) {
                //this.smoothItemScroll(this.mp3AudioPath);
                this.musicListRef.instance.smoothItemScroll();
            }
            this.audioPlayer.nativeElement.load();
            this.audioPlayer.nativeElement.play();
        }
        catch (err) {
            console.log(err);
        }
        //this.audioPlayer.nativeElement.play();
    };
    /*private smoothItemScroll(itemName){
        let element = document.getElementById(itemName);
        element.scrollIntoView({behavior:"smooth"});
    }*/
    MusicPlayerComponent.prototype.createMusicList = function (musicSource) {
        var _this = this;
        if (this.musicListRef) {
            this.musicListRef.instance.playMusic.unsubscribe(function (data) { return _this.playMusic(data); });
            this.musicListRef.instance.pauseMusic.unsubscribe(function (data) { return _this.pauseMusic(data); });
            this.musicListRef.instance.resumeMusic.unsubscribe(function (data) { return _this.resumeMusic(data); });
            //this.audioPlayer.nativeElement.removeEventListener("ended", this.playNextItem());
            this.musicListRef.instance.replayMusic.unsubscribe(function (data) { return _this.replayMusic(data); });
            this.musicListRef.instance.removeEventListeners();
            this.musicListRef.instance.musicSource = [];
            this.musicListRef.instance.actualAudio = '';
            this.musicListRef.destroy();
        }
        this.musicListComponent = this.componentFactoryResolver.resolveComponentFactory(_music_list_music_list_component__WEBPACK_IMPORTED_MODULE_6__["MusicListComponent"]);
        this.musicListRef = this.musicList.createComponent(this.musicListComponent);
        this.musicListRef.instance.musicSource = musicSource;
        this.musicListRef.instance.actualAudio = musicSource[0].actualAudio;
        this.musicListRef.instance.playMusic.subscribe(function (data) { return _this.playMusic(data); });
        this.musicListRef.instance.pauseMusic.subscribe(function (data) { return _this.pauseMusic(data); });
        this.musicListRef.instance.resumeMusic.subscribe(function (data) { return _this.resumeMusic(data); });
        this.musicListRef.instance.replayMusic.subscribe(function (data) { return _this.replayMusic(data); });
        //this.audioPlayer.nativeElement.addEventListener("ended", this.playNextItem());
    };
    MusicPlayerComponent.prototype.playNextItem = function () {
        alert('audio ended');
    };
    MusicPlayerComponent.prototype.replayMusic = function (data) {
        this.audioPlayer.nativeElement.currentTime = 0;
        //this.audioPlayer.nativeElement.play();	
    };
    MusicPlayerComponent.prototype.playMusic = function (data) {
        this.pauseAudio();
        this.mp3AudioPath = data.actualAudio;
        try {
            this.audioPlayer.nativeElement.load();
            this.audioPlayer.nativeElement.play();
        }
        catch (err) {
            console.log(err);
        }
    };
    MusicPlayerComponent.prototype.pauseMusic = function (data) {
        this.pauseAudio();
    };
    MusicPlayerComponent.prototype.resumeMusic = function (data) {
        this.audioPlayer.nativeElement.play();
    };
    MusicPlayerComponent.prototype.triggerWindowEvent = function (eventType, evtObj) {
        var evt = new CustomEvent(eventType, { 'detail': evtObj });
        window.dispatchEvent(evt);
    };
    MusicPlayerComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _app_services_data_audio_service__WEBPACK_IMPORTED_MODULE_5__["AudioService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('audioPlayer', { static: true })
    ], MusicPlayerComponent.prototype, "audioPlayer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('musicList', { static: true })
    ], MusicPlayerComponent.prototype, "musicList", void 0);
    MusicPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-music-player',
            template: __webpack_require__(/*! raw-loader!./music-player.component.html */ "./node_modules/raw-loader/index.js!./src/app/music-player/music-player.component.html"),
            providers: [_app_services_data_audio_service__WEBPACK_IMPORTED_MODULE_5__["AudioService"]],
            styles: [__webpack_require__(/*! ./music-player.component.css */ "./src/app/music-player/music-player.component.css")]
        })
    ], MusicPlayerComponent);
    return MusicPlayerComponent;
}());



/***/ }),

/***/ "./src/app/notification-list/notification-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/notification-list/notification-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notification-pic{\n    height: 35px;\n    width:  35px;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: inherit;\n    margin: 3px; \n    border: 1px solid #e6e6e6;\n}\n.not-msg{\n    max-width: 217px;\n    line-height: 18px;\n    word-break: break-word;\n    text-align: left;\n    float: left;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9uLWxpc3Qvbm90aWZpY2F0aW9uLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbi1saXN0L25vdGlmaWNhdGlvbi1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWZpY2F0aW9uLXBpY3tcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6ICAzNXB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBpbmhlcml0O1xuICAgIG1hcmdpbjogM3B4OyBcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xufVxuLm5vdC1tc2d7XG4gICAgbWF4LXdpZHRoOiAyMTdweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/notification-list/notification-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/notification-list/notification-list.component.ts ***!
  \******************************************************************/
/*! exports provided: NotificationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationListComponent", function() { return NotificationListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotificationListComponent = /** @class */ (function () {
    //private videoInfo: Observable<videoInfo{}>;
    function NotificationListComponent() {
        this.onPreviewClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isVideoProcessed = false;
    }
    NotificationListComponent.prototype.ngOnInit = function () {
        this.profilePic = JSON.parse(this.item.profilepic).imageBuffer;
        if (this.item.type === 'video') {
            if (this.item.conversion === 'failure') {
                this.notificationMsg = "Your video can't be processed.";
                this.notificationPic = '/assets/images/error.png';
                this.isVideoProcessed = false;
            }
            else {
                this.notificationPic = this.item.notificationpic;
                this.notificationMsg = "Your video is ready.";
                this.isVideoProcessed = true;
            }
        }
    };
    NotificationListComponent.prototype.previewClickEvent = function (event, type) {
        //this.openAppModal();
        this.onPreviewClick.emit({ data: this.item });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NotificationListComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NotificationListComponent.prototype, "onPreviewClick", void 0);
    NotificationListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification-list',
            template: __webpack_require__(/*! raw-loader!./notification-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/notification-list/notification-list.component.html"),
            styles: [__webpack_require__(/*! ./notification-list.component.css */ "./src/app/notification-list/notification-list.component.css")]
        })
    ], NotificationListComponent);
    return NotificationListComponent;
}());



/***/ }),

/***/ "./src/app/payment-info/payment-info.component.css":
/*!*********************************************************!*\
  !*** ./src/app/payment-info/payment-info.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\n/*\t-webkit-appearance: none;*/\n  border-radius: 0px;\n  background: none;\n  width: 200px;\n  border: 1px solid #2b90d9;\n\n}\n\n.form-group input{\n\twidth: 200px;\n\t/*border-radius: 0px;*/\n\tbackground: none;\n\tborder: 1px solid #2b90d9;\n}\n\n#creditForm{\n\twidth: 200px;\n\tmargin: auto;\n}\n\n.credit-card-info{\n\tpadding: 10px 0px;\n}\n\n.expiry-detail input{\n\twidth: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC1pbmZvL3BheW1lbnQtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsNkJBQTZCO0VBRTNCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHlCQUF5Qjs7QUFFM0I7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osc0JBQXNCO0NBQ3RCLGdCQUFnQjtDQUNoQix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtBQUNiOztBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUNBO0NBQ0Msc0JBQXNCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcGF5bWVudC1pbmZvL3BheW1lbnQtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VsZWN0IHtcbi8qXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7Ki9cbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMmI5MGQ5O1xuXG59XG5cbi5mb3JtLWdyb3VwIGlucHV0e1xuXHR3aWR0aDogMjAwcHg7XG5cdC8qYm9yZGVyLXJhZGl1czogMHB4OyovXG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMyYjkwZDk7XG59XG5cbiNjcmVkaXRGb3Jte1xuXHR3aWR0aDogMjAwcHg7XG5cdG1hcmdpbjogYXV0bztcbn1cbi5jcmVkaXQtY2FyZC1pbmZve1xuXHRwYWRkaW5nOiAxMHB4IDBweDtcbn1cbi5leHBpcnktZGV0YWlsIGlucHV0e1xuXHR3aWR0aDogNTBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/payment-info/payment-info.component.ts":
/*!********************************************************!*\
  !*** ./src/app/payment-info/payment-info.component.ts ***!
  \********************************************************/
/*! exports provided: PaymentInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentInfoComponent", function() { return PaymentInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var PaymentInfoComponent = /** @class */ (function () {
    function PaymentInfoComponent(formBuilder, _zone) {
        this.formBuilder = formBuilder;
        this._zone = _zone;
        this.isTokenReceived = false;
        this.cardOptions = [
            { name: "Card Title", value: '' },
            { name: "visa", value: 'visa' },
            { name: "visa debit", value: 'visaDebit' },
            { name: "mastercard", value: 'mastercard' },
            { name: "mastercard debit", value: 'mastercardDebit' },
            { name: "american express", value: 'americanExpress' }
        ];
        /*this.creditForm = this.formBuilder.group({
            'cardTitle': ['', Validators.required],
            'nameOnCard': ['', Validators.required],
            'cardNumber': ['', Validators.required],
            'cardEndDate': ['', Validators.required],
            'cvv': ['', Validators.required]
        });*/
    }
    PaymentInfoComponent.prototype.ngOnInit = function () {
    };
    PaymentInfoComponent.prototype.saveCrediitInfo = function () {
        /*let creditInfo;
        if (this.creditForm.dirty && this.creditForm.valid) {
            creditInfo = {'cardTitle': this.creditForm.value.cardTitle,
                              'nameOnCard': this.creditForm.value.nameOnCard,
                              'cardNumber': this.creditForm.value.cardNumber,
                              'cardEndDate': this.creditForm.value.cardEndDate,
                              'cvv': this.creditForm.value.cvv};
        }*/
    };
    PaymentInfoComponent.prototype.getToken = function () {
        var _this = this;
        this.message = 'Loading...';
        var self = this;
        window.Stripe.card.createToken({
            number: this.cardNumber,
            exp_month: this.expiryMonth,
            exp_year: this.expiryYear,
            cvc: this.cvc
        }, function (status, response) {
            // Wrapping inside the Angular zone
            _this._zone.run(function () {
                if (status === 200) {
                    _this.message = "Success! Card token ${response.card.id}.";
                    self.isTokenReceived = true;
                }
                else {
                    _this.message = response.error.message;
                }
            });
        });
    };
    PaymentInfoComponent.prototype.openCheckout = function () {
        var handler = window.StripeCheckout.configure({
            key: 'pk_test_QegjMgcmJb5xsH11E9grYUUp',
            locale: 'auto',
            token: function (token) {
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
            }
        });
        handler.open({
            name: 'Demo Site',
            description: '2 widgets',
            amount: 0.01
        });
    };
    PaymentInfoComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('userId')
    ], PaymentInfoComponent.prototype, "userId", void 0);
    PaymentInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-info',
            template: __webpack_require__(/*! raw-loader!./payment-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/payment-info/payment-info.component.html"),
            styles: [__webpack_require__(/*! ./payment-info.component.css */ "./src/app/payment-info/payment-info.component.css")]
        })
    ], PaymentInfoComponent);
    return PaymentInfoComponent;
}());



/***/ }),

/***/ "./src/app/people/people.component.css":
/*!*********************************************!*\
  !*** ./src/app/people/people.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Blb3BsZS9wZW9wbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/people/people.component.ts":
/*!********************************************!*\
  !*** ./src/app/people/people.component.ts ***!
  \********************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PeopleComponent = /** @class */ (function () {
    function PeopleComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.onAppLoggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onAppLoggedOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isMyProfile = false;
        this.userId = '';
        this.friendId = '';
        route.params.subscribe(function (val) {
            var currentUser = localStorage.getItem('currentUser');
            var id = _this.route.snapshot.paramMap.get('id');
            if (!currentUser) {
                _this.triggerLoggedInCheck('onAppLoggedOut', { event: 'onAppLoggedOut', message: 'logged out' });
                _this.onAppLoggedOut.emit('logged Out');
                _this.router.navigate(['public']);
                return;
            }
            else {
                _this.triggerLoggedInCheck('onAppLoggedIn', { event: 'onAppLoggedIn', message: 'logged in' });
                _this.onAppLoggedIn.emit('logged In');
                localStorage.setItem('currentRoute', 'people/' + id);
            }
            if (currentUser === id) {
                _this.isMyProfile = true;
                localStorage.setItem("isMyProfile", 'true');
                _this.userId = currentUser;
            }
            else {
                _this.isMyProfile = false;
                localStorage.setItem("isMyProfile", 'false');
                var postObj = { 'userid': currentUser, 'friendid': id };
                _this.friendId = id;
                //this.friendsService.getFriendInfo(postObj).subscribe(data => this.afterFriendInfo(data));
            }
            //this.routeSwitch.emit(this.isMyProfile);
            //this.getProfileInfo(id);
        });
    }
    PeopleComponent.prototype.ngOnInit = function () {
    };
    PeopleComponent.prototype.triggerLoggedInCheck = function (eventType, evtObj) {
        var evt = new CustomEvent(eventType, evtObj);
        window.dispatchEvent(evt);
    };
    PeopleComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], PeopleComponent.prototype, "onAppLoggedIn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], PeopleComponent.prototype, "onAppLoggedOut", void 0);
    PeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-people',
            template: __webpack_require__(/*! raw-loader!./people.component.html */ "./node_modules/raw-loader/index.js!./src/app/people/people.component.html"),
            styles: [__webpack_require__(/*! ./people.component.css */ "./src/app/people/people.component.css")]
        })
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/photos-album-icon/photos-album-icon.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/photos-album-icon/photos-album-icon.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".photos-edit-icon{\n\tdisplay: inline-block;\n    background: #2b90d9;\n    /* margin-top: -2px; */\n    height: 16px\n}   \n.photos-edit-icon .fa-pencil-square{\n\tmargin-right: 2px;\n\tfont-size: 15px;\n}   \n.photos-edit-icon .fa-pencil-square:hover{\n\tcolor: #e9ebee;\n\tcursor: pointer;\n}   \n.photos-icon-container .blue-fonts{\n\tpadding-left: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG9zLWFsYnVtLWljb24vcGhvdG9zLWFsYnVtLWljb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHFCQUFxQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCO0FBQ0o7QUFDQTtDQUNDLGlCQUFpQjtDQUNqQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcGhvdG9zLWFsYnVtLWljb24vcGhvdG9zLWFsYnVtLWljb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waG90b3MtZWRpdC1pY29ue1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogIzJiOTBkOTtcbiAgICAvKiBtYXJnaW4tdG9wOiAtMnB4OyAqL1xuICAgIGhlaWdodDogMTZweFxufSAgIFxuLnBob3Rvcy1lZGl0LWljb24gLmZhLXBlbmNpbC1zcXVhcmV7XG5cdG1hcmdpbi1yaWdodDogMnB4O1xuXHRmb250LXNpemU6IDE1cHg7XG59XG4ucGhvdG9zLWVkaXQtaWNvbiAuZmEtcGVuY2lsLXNxdWFyZTpob3Zlcntcblx0Y29sb3I6ICNlOWViZWU7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cbi5waG90b3MtaWNvbi1jb250YWluZXIgLmJsdWUtZm9udHN7XG5cdHBhZGRpbmctbGVmdDogM3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/photos-album-icon/photos-album-icon.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/photos-album-icon/photos-album-icon.component.ts ***!
  \******************************************************************/
/*! exports provided: PhotosAlbumIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosAlbumIconComponent", function() { return PhotosAlbumIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PhotosAlbumIconComponent = /** @class */ (function () {
    function PhotosAlbumIconComponent() {
        this.onEditPhotosAlbum = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onShowPhotosList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PhotosAlbumIconComponent.prototype.ngOnInit = function () {
    };
    PhotosAlbumIconComponent.prototype.editPhotosAlbum = function (event) {
        this.onEditPhotosAlbum.emit({ data: this.item });
    };
    PhotosAlbumIconComponent.prototype.showPhotosList = function (event) {
        this.onShowPhotosList.emit({ data: this.item });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PhotosAlbumIconComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], PhotosAlbumIconComponent.prototype, "onEditPhotosAlbum", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], PhotosAlbumIconComponent.prototype, "onShowPhotosList", void 0);
    PhotosAlbumIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-photos-album-icon',
            template: __webpack_require__(/*! raw-loader!./photos-album-icon.component.html */ "./node_modules/raw-loader/index.js!./src/app/photos-album-icon/photos-album-icon.component.html"),
            styles: [__webpack_require__(/*! ./photos-album-icon.component.css */ "./src/app/photos-album-icon/photos-album-icon.component.css")]
        })
    ], PhotosAlbumIconComponent);
    return PhotosAlbumIconComponent;
}());



/***/ }),

/***/ "./src/app/photos-carousel/photos-carousel.component.css":
/*!***************************************************************!*\
  !*** ./src/app/photos-carousel/photos-carousel.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob3Rvcy1jYXJvdXNlbC9waG90b3MtY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/photos-carousel/photos-carousel.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/photos-carousel/photos-carousel.component.ts ***!
  \**************************************************************/
/*! exports provided: PhotosCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosCarouselComponent", function() { return PhotosCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_shareobject_carouseldata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/services/shareobject/carouseldata.service */ "./src/app/services/shareobject/carouseldata.service.ts");


//import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

var PhotosCarouselComponent = /** @class */ (function () {
    /*private config: ICarouselConfig = {
        verifyBeforeLoad: true,
        log: false,
        animation: true,
        animationType: AnimationConfig.SLIDE,
        autoplay: true,
        autoplayDelay: 2000,
        stopAutoplayMinWidth: 768
    };*/
    function PhotosCarouselComponent(carouseldataService) {
        //this.carouselImages = this.imageSources;
        this.carouseldataService = carouseldataService;
    }
    PhotosCarouselComponent.prototype.ngOnInit = function () {
        //this.imageSource = ["photo/original/photo_1517345597409.png","photo/original/photo_1517346068877.png","photo/original/photo_1517346220159.png","photo/original/photo_1517346343644.png"];
        //this.imageSource = ["photo/original/photo_1517345597409.png","photo/original/photo_1517346068877.png","photo/original/photo_1517346220159.png","photo/original/photo_1517346343644.png"];
    };
    PhotosCarouselComponent.ctorParameters = function () { return [
        { type: _app_services_shareobject_carouseldata_service__WEBPACK_IMPORTED_MODULE_2__["CarouseldataService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('imageSource')
    ], PhotosCarouselComponent.prototype, "imageSource", void 0);
    PhotosCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-photos-carousel',
            template: __webpack_require__(/*! raw-loader!./photos-carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/photos-carousel/photos-carousel.component.html"),
            providers: [_app_services_shareobject_carouseldata_service__WEBPACK_IMPORTED_MODULE_2__["CarouseldataService"]],
            styles: [__webpack_require__(/*! ./photos-carousel.component.css */ "./src/app/photos-carousel/photos-carousel.component.css")]
        })
    ], PhotosCarouselComponent);
    return PhotosCarouselComponent;
}());



/***/ }),

/***/ "./src/app/photos-icon/photos-icon.component.css":
/*!*******************************************************!*\
  !*** ./src/app/photos-icon/photos-icon.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".photos-icon{\n\twidth: 100px;\n    height: 100px;\n    border: 1px solid #2b90d9;\n    margin: 10px 5px 0px 0px;\n    background-size: cover !important;\n    background-color: #000 !important;\n}\n.photos-icon i{\n\tcolor: #fff;\n    text-align: center;\n    margin: 33px 35px;\n}\n.photos-icon:hover{\n\tborder: 1px solid #fff;\n}\n.photos-icon:hover i{\n\tcolor: #2b90d9;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG9zLWljb24vcGhvdG9zLWljb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7SUFDVCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixpQ0FBaUM7SUFDakMsaUNBQWlDO0FBQ3JDO0FBQ0E7Q0FDQyxXQUFXO0lBQ1Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0NBQ0Msc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyxjQUFjO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9waG90b3MtaWNvbi9waG90b3MtaWNvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBob3Rvcy1pY29ue1xuXHR3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmI5MGQ5O1xuICAgIG1hcmdpbjogMTBweCA1cHggMHB4IDBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuLnBob3Rvcy1pY29uIGl7XG5cdGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDMzcHggMzVweDtcbn1cbi5waG90b3MtaWNvbjpob3Zlcntcblx0Ym9yZGVyOiAxcHggc29saWQgI2ZmZjtcbn1cbi5waG90b3MtaWNvbjpob3ZlciBpe1xuXHRjb2xvcjogIzJiOTBkOTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/photos-icon/photos-icon.component.ts":
/*!******************************************************!*\
  !*** ./src/app/photos-icon/photos-icon.component.ts ***!
  \******************************************************/
/*! exports provided: PhotosIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosIconComponent", function() { return PhotosIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PhotosIconComponent = /** @class */ (function () {
    function PhotosIconComponent() {
        this.posterURL = '';
    }
    PhotosIconComponent.prototype.ngOnInit = function () {
        this.posterURL = this.item.actualPhoto;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PhotosIconComponent.prototype, "item", void 0);
    PhotosIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-photos-icon',
            template: __webpack_require__(/*! raw-loader!./photos-icon.component.html */ "./node_modules/raw-loader/index.js!./src/app/photos-icon/photos-icon.component.html"),
            styles: [__webpack_require__(/*! ./photos-icon.component.css */ "./src/app/photos-icon/photos-icon.component.css")]
        })
    ], PhotosIconComponent);
    return PhotosIconComponent;
}());



/***/ }),

/***/ "./src/app/photos/photos.component.css":
/*!*********************************************!*\
  !*** ./src/app/photos/photos.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".photos-content{\n\tpadding: 15px 0px;\n}\n\n.uplod-new:hover, .new-album:hover{\n\tcursor: pointer;\n}\n\n.uplod-new:hover span, .uplod-new:hover i, .new-album:hover span, .new-album:hover i {\n\tcolor: #fff !important;\n}\n\n.file-input-container{\n\tdisplay: none;\n}\n\n#progressBar{\n\twidth: 250px;\n}\n\n.under-line{\n\ttext-decoration: underline;\n}\n\n.search-input{\n    line-height: 25px;\n    height: 25px;\n    display: block;\n    width: 154px;\n    border: none;\n    outline: none;\n    border: 1px solid #2b90d9;\n    border-radius: 2px;\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n    background: none;\n}\n\n.fa-search{\n    float: right;\n    color: #2b90d9 !important;\n    font-size: 15px;\n    line-height: 23px;\n    background: #f5f8fa;\n    padding: 0px 3px;\n    border: 1px solid #2b90d9;\n    border-left: none;\n    border-radius: 2px;\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px;\n}\n\ntextarea.form-control{\n\theight: 100px !important;\n}\n\napp-photos-album-icon{\n\twidth: 100px;\n    height: 100px;\n    border: 1px solid #2b90d9;\n    margin: 10px 5px 0px 0px;\n}\n\n.photos-container{\n    max-height: 314px;\n    width: 100%;\n    background: #000;\n}\n\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: #2b90d9;\n}\n\n::-moz-placeholder { /* Firefox 19+ */\n  color: #2b90d9;\n}\n\n:-ms-input-placeholder { /* IE 10+ */\n  color: #2b90d9;\n}\n\n:-moz-placeholder { /* Firefox 18- */\n  color: #2b90d9;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG9zL3Bob3Rvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFDQTtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFDQTtDQUNDLGFBQWE7QUFDZDs7QUFDQTtDQUNDLFlBQVk7QUFDYjs7QUFDQTtDQUNDLDBCQUEwQjtBQUMzQjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsOEJBQThCO0FBQ2xDOztBQUNBO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUNBO0NBQ0MsWUFBWTtJQUNULGFBQWE7SUFDYix5QkFBeUI7SUFDekIsd0JBQXdCO0FBQzVCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBQ0EsOEJBQThCLHdCQUF3QjtFQUNwRCxjQUFjO0FBQ2hCOztBQUNBLHFCQUFxQixnQkFBZ0I7RUFDbkMsY0FBYztBQUNoQjs7QUFDQSx5QkFBeUIsV0FBVztFQUNsQyxjQUFjO0FBQ2hCOztBQUNBLG9CQUFvQixnQkFBZ0I7RUFDbEMsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3Bob3Rvcy9waG90b3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waG90b3MtY29udGVudHtcblx0cGFkZGluZzogMTVweCAwcHg7XG59XG5cbi51cGxvZC1uZXc6aG92ZXIsIC5uZXctYWxidW06aG92ZXJ7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cbi51cGxvZC1uZXc6aG92ZXIgc3BhbiwgLnVwbG9kLW5ldzpob3ZlciBpLCAubmV3LWFsYnVtOmhvdmVyIHNwYW4sIC5uZXctYWxidW06aG92ZXIgaSB7XG5cdGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uZmlsZS1pbnB1dC1jb250YWluZXJ7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG4jcHJvZ3Jlc3NCYXJ7XG5cdHdpZHRoOiAyNTBweDtcbn1cbi51bmRlci1saW5le1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5zZWFyY2gtaW5wdXR7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxNTRweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmI5MGQ5O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5mYS1zZWFyY2h7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiAjMmI5MGQ5ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgIGJhY2tncm91bmQ6ICNmNWY4ZmE7XG4gICAgcGFkZGluZzogMHB4IDNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmI5MGQ5O1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xufVxudGV4dGFyZWEuZm9ybS1jb250cm9se1xuXHRoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG5hcHAtcGhvdG9zLWFsYnVtLWljb257XG5cdHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyYjkwZDk7XG4gICAgbWFyZ2luOiAxMHB4IDVweCAwcHggMHB4O1xufVxuLnBob3Rvcy1jb250YWluZXJ7XG4gICAgbWF4LWhlaWdodDogMzE0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogIzAwMDtcbn1cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIENocm9tZS9PcGVyYS9TYWZhcmkgKi9cbiAgY29sb3I6ICMyYjkwZDk7XG59XG46Oi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE5KyAqL1xuICBjb2xvcjogIzJiOTBkOTtcbn1cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJRSAxMCsgKi9cbiAgY29sb3I6ICMyYjkwZDk7XG59XG46LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXG4gIGNvbG9yOiAjMmI5MGQ5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/photos/photos.component.ts":
/*!********************************************!*\
  !*** ./src/app/photos/photos.component.ts ***!
  \********************************************/
/*! exports provided: PhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosComponent", function() { return PhotosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_services_validators_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/validators/validation.service */ "./src/app/services/validators/validation.service.ts");
/* harmony import */ var _app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/settings/app-settings.service */ "./src/app/services/settings/app-settings.service.ts");
/* harmony import */ var _app_services_data_photos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/data/photos.service */ "./src/app/services/data/photos.service.ts");
/* harmony import */ var _photos_carousel_photos_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../photos-carousel/photos-carousel.component */ "./src/app/photos-carousel/photos-carousel.component.ts");







var PhotosComponent = /** @class */ (function () {
    function PhotosComponent(formBuilder, photosService, componentFactoryResolver) {
        this.formBuilder = formBuilder;
        this.photosService = photosService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.userId = '';
        this.uploadProgress = 0;
        this.isProgress = false;
        this.albumTitle = '';
        this.albumDesc = '';
        this.isCreateAlbum = false;
        this.isAddAlbum = false;
        this.isUpdateAlbum = false;
        this.isPhotosAlbum = true;
        this.isAlbumPhotos = false;
        this.imageSource = [];
        var loginData = JSON.parse(localStorage.getItem('loginData'));
        this.userId = loginData.username;
        this.photosUploadForm = this.formBuilder.group({
            'file': ['']
        });
        this.photosGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.albumForm = this.formBuilder.group({
            'albumTitle': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _app_services_validators_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].blankDataValidator]],
            'albumDesc': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _app_services_validators_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].blankDataValidator]]
        });
        this.fetchPhotosAlbumInfo();
    }
    PhotosComponent.prototype.ngOnInit = function () {
    };
    PhotosComponent.prototype.ngAfterContentInit = function () {
    };
    PhotosComponent.prototype.createCarouselItems = function (imageSource) {
        if (this.carouselRef) {
            this.carouselRef.destroy();
        }
        this.photosCarouselComponent = this.componentFactoryResolver.resolveComponentFactory(_photos_carousel_photos_carousel_component__WEBPACK_IMPORTED_MODULE_6__["PhotosCarouselComponent"]);
        this.carouselRef = this.photosCarousel.createComponent(this.photosCarouselComponent);
        this.carouselRef.instance.imageSource = imageSource;
    };
    PhotosComponent.prototype.fileChangeEvent = function (event, directUpload) {
        var self = this;
        var userId = this.userId;
        var file;
        if (event.target.files && event.target.files[0]) {
            file = event.target.files[0];
            uploadPhoto();
        }
        function uploadPhoto() {
            var formData = new FormData();
            formData.append('uploadfile', file);
            formData.append('userid', userId);
            if (!directUpload) {
                formData.append('album', self.photosInfo.title);
            }
            else {
                formData.append('album', 'untitled');
            }
            var xhr = new XMLHttpRequest();
            xhr.open('post', _app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + '/api/uploadPhotos', true);
            xhr.upload.onprogress = function (e) {
                if (e.lengthComputable) {
                    var percentage = (e.loaded / e.total) * 100;
                    console.log(percentage);
                    if ((percentage > 0) && (percentage < 100)) {
                        self.isProgress = true;
                    }
                    else {
                        self.isProgress = false;
                    }
                    self.uploadProgress = percentage;
                    //$('div.progress div').css('width', percentage.toFixed(0) + '%');
                    //$('div.progress div').html(percentage.toFixed(0) + '%');
                }
            };
            xhr.onerror = function (e) {
                alert('An error occurred while submitting the form. Maybe your file is too big');
            };
            xhr.onload = function () {
                /*let file = xhr.responseText;
                $('div.progress div').css('width','0%');
                $('div.progress').hide();
                showMsg("alert alert-success", "File uploaded successfully!");
                $('#myFile').val('');*/
                if (self.isPhotosAlbum) {
                    self.fetchPhotosAlbumInfo();
                }
                else {
                    self.fetchAlbumPhotosInfo();
                }
            };
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    callback(xhr.responseText); // Another callback here
                }
            };
            function callback(responseText) {
                if (JSON.parse(responseText).status === 'sessionExpired') {
                    alert('Session Expired, Please Login Again');
                }
            }
            xhr.send(formData);
            return false;
        }
        //var files = fileInput.srcElement.files;
        //console.log(files);
        //this.uploadService.makeFileRequest('https://localhost:3000/api/uploadCoverPic', [], files).subscribe(() => {
        //  console.log('sent');
        //});
    };
    PhotosComponent.prototype.createAlbumInfo = function (event) {
        var _this = this;
        if (this.albumForm.dirty && this.albumForm.valid) {
            // alert('Name: ${this.loginForm.value.email} Email: ${this.loginForm.value.password}');
            var postObj = { 'username': this.userId,
                'title': this.albumForm.value.albumTitle,
                'desc': this.albumForm.value.albumDesc };
            this.photosService.createPhotosAlbum(postObj).subscribe(function (data) { return _this.afterAlbumCreated(data); });
        }
    };
    PhotosComponent.prototype.afterAlbumCreated = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            this.cancelAlbum(null);
            //alert(result.message);
            this.fetchPhotosAlbumInfo();
        }
    };
    PhotosComponent.prototype.updateAlbumInfo = function (event) {
        var _this = this;
        if (this.albumForm.dirty && this.albumForm.valid) {
            // alert('Name: ${this.loginForm.value.email} Email: ${this.loginForm.value.password}');
            var postObj = { 'id': this.albumInfo._id,
                'username': this.userId,
                'title': this.albumForm.value.albumTitle,
                'desc': this.albumForm.value.albumDesc };
            this.photosService.updatePhotosAlbum(postObj).subscribe(function (data) { return _this.afterAlbumUpdated(data); });
        }
    };
    PhotosComponent.prototype.afterAlbumUpdated = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            this.cancelAlbum(null);
            //alert(result.message);
            this.fetchPhotosAlbumInfo();
        }
    };
    PhotosComponent.prototype.createPhotosAlbum = function (event) {
        this.isCreateAlbum = true;
        this.isAddAlbum = true;
        this.isUpdateAlbum = false;
    };
    PhotosComponent.prototype.cancelAlbum = function (event) {
        this.isCreateAlbum = false;
        this.isAddAlbum = false;
        this.isUpdateAlbum = false;
        this.albumForm.reset();
    };
    PhotosComponent.prototype.fetchPhotosAlbumInfo = function () {
        var _this = this;
        var postObj = { 'username': this.userId };
        this.photosService.fetchPhotosAlbumInfo(postObj).subscribe(function (data) { return _this.afterPhotosAbumInfo(data); });
    };
    PhotosComponent.prototype.fetchAlbumPhotosInfo = function () {
        var _this = this;
        var postObj = { 'username': this.userId, 'album': this.albumTitle };
        this.photosService.fetchAlbumPhotosInfo(postObj).subscribe(function (data) { return _this.afterAlbumPhotosInfo(data); });
    };
    PhotosComponent.prototype.afterPhotosAbumInfo = function (result) {
        var self = this;
        if (result.length > 0) {
            this.photosAlbumList = result;
            self.imageSource = [];
            for (var i in this.photosAlbumList[0].photosList) {
                self.imageSource.push(this.photosAlbumList[0].photosList[i].actualPhoto);
            }
            this.createCarouselItems(self.imageSource);
        }
    };
    PhotosComponent.prototype.afterAlbumPhotosInfo = function (result) {
        if (result.length > 0) {
            this.photosList = result[0].photosList;
        }
    };
    //Need to activate/deactivate edit btn later based on changes in title field
    PhotosComponent.prototype.editPhotosAlbum = function (event) {
        this.albumInfo = event.data;
        this.isCreateAlbum = true;
        this.isAddAlbum = false;
        this.isUpdateAlbum = true;
        this.albumTitle = this.albumInfo.title;
        this.albumDesc = this.albumInfo.description;
    };
    //Diplaying the list of photos under a particular audio album
    PhotosComponent.prototype.showPhotosList = function (event) {
        var self = this;
        this.photosInfo = event.data;
        this.isPhotosAlbum = false;
        this.isAlbumPhotos = true;
        this.photosList = this.photosInfo.photosList;
        this.albumTitle = this.photosInfo.title;
        self.imageSource = [];
        for (var i in this.photosList) {
            self.imageSource.push(this.photosList[i].actualPhoto);
        }
        this.createCarouselItems(self.imageSource);
        //console.log('this.imageSources'+this.imageSources);
        //this.fetchAlbumPhotosInfo();
    };
    PhotosComponent.prototype.goToMyAlbum = function (event) {
        this.isPhotosAlbum = true;
        this.isAlbumPhotos = false;
        this.fetchPhotosAlbumInfo();
    };
    PhotosComponent.prototype.triggerWindowEvent = function (eventType, evtObj) {
        var evt = new CustomEvent(eventType, { 'detail': evtObj });
        window.dispatchEvent(evt);
    };
    PhotosComponent.prototype.showPicModal = function (item) {
        console.log(item);
    };
    PhotosComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _app_services_data_photos_service__WEBPACK_IMPORTED_MODULE_5__["PhotosService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('photosCarousel', { static: true })
    ], PhotosComponent.prototype, "photosCarousel", void 0);
    PhotosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-photos',
            template: __webpack_require__(/*! raw-loader!./photos.component.html */ "./node_modules/raw-loader/index.js!./src/app/photos/photos.component.html"),
            providers: [_app_services_data_photos_service__WEBPACK_IMPORTED_MODULE_5__["PhotosService"]],
            styles: [__webpack_require__(/*! ./photos.component.css */ "./src/app/photos/photos.component.css")]
        })
    ], PhotosComponent);
    return PhotosComponent;
}());



/***/ }),

/***/ "./src/app/pipes/album-search.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/album-search.pipe.ts ***!
  \********************************************/
/*! exports provided: AlbumSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumSearchPipe", function() { return AlbumSearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlbumSearchPipe = /** @class */ (function () {
    function AlbumSearchPipe() {
    }
    AlbumSearchPipe.prototype.transform = function (items, albumText) {
        if (!items)
            return [];
        if (!albumText)
            return items;
        albumText = albumText.toLowerCase();
        return items.filter(function (it) {
            var title = it.title;
            return title.toLowerCase().includes(albumText);
        });
    };
    AlbumSearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'albumSearch'
        })
    ], AlbumSearchPipe);
    return AlbumSearchPipe;
}());



/***/ }),

/***/ "./src/app/pipes/audio-search.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/audio-search.pipe.ts ***!
  \********************************************/
/*! exports provided: AudioSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioSearchPipe", function() { return AudioSearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AudioSearchPipe = /** @class */ (function () {
    function AudioSearchPipe() {
    }
    AudioSearchPipe.prototype.transform = function (items, audioText) {
        if (!items)
            return [];
        if (!audioText)
            return items;
        audioText = audioText.toLowerCase();
        return items.filter(function (it) {
            var title = it.title;
            return title.toLowerCase().includes(audioText);
        });
    };
    AudioSearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'audioSearch'
        })
    ], AudioSearchPipe);
    return AudioSearchPipe;
}());



/***/ }),

/***/ "./src/app/pipes/chat-search.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/chat-search.pipe.ts ***!
  \*******************************************/
/*! exports provided: ChatSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatSearchPipe", function() { return ChatSearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChatSearchPipe = /** @class */ (function () {
    function ChatSearchPipe() {
    }
    ChatSearchPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.fullname.toLowerCase().includes(searchText);
        });
    };
    ChatSearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'chatSearch'
        })
    ], ChatSearchPipe);
    return ChatSearchPipe;
}());



/***/ }),

/***/ "./src/app/pipes/photos-search.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/photos-search.pipe.ts ***!
  \*********************************************/
/*! exports provided: PhotosSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosSearchPipe", function() { return PhotosSearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PhotosSearchPipe = /** @class */ (function () {
    function PhotosSearchPipe() {
    }
    PhotosSearchPipe.prototype.transform = function (items, photosText) {
        if (!items)
            return [];
        if (!photosText)
            return items;
        photosText = photosText.toLowerCase();
        return items.filter(function (it) {
            var title = it.title;
            return title.toLowerCase().includes(photosText);
        });
    };
    PhotosSearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'photosSearch'
        })
    ], PhotosSearchPipe);
    return PhotosSearchPipe;
}());



/***/ }),

/***/ "./src/app/pipes/video-search.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/video-search.pipe.ts ***!
  \********************************************/
/*! exports provided: VideoSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoSearchPipe", function() { return VideoSearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoSearchPipe = /** @class */ (function () {
    function VideoSearchPipe() {
    }
    VideoSearchPipe.prototype.transform = function (items, videoText) {
        if (!items)
            return [];
        if (!videoText)
            return items;
        videoText = videoText.toLowerCase();
        return items.filter(function (it) {
            var title = it.title;
            return title.toLowerCase().includes(videoText);
        });
    };
    VideoSearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'videoSearch'
        })
    ], VideoSearchPipe);
    return VideoSearchPipe;
}());



/***/ }),

/***/ "./src/app/preview/preview.component.css":
/*!***********************************************!*\
  !*** ./src/app/preview/preview.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#videoPreview{\n\twidth: 100%;\n}\n.prev-btn-group{\n\tpadding-top: 15px;\n}\n.share-video{\n\twidth: 280px;\n    margin-top: 20px;\n    position: absolute;\n    top: 100px;\n    left: 189px;\n    left: calc(50% - 140px);\n}\n.share-video textarea{\n\theight: 100px !important;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJldmlldy9wcmV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsWUFBWTtJQUNULGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFHWCx1QkFBdUI7QUFDM0I7QUFFQTtDQUNDLHdCQUF3QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3ByZXZpZXcvcHJldmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3ZpZGVvUHJldmlld3tcblx0d2lkdGg6IDEwMCU7XG59XG4ucHJldi1idG4tZ3JvdXB7XG5cdHBhZGRpbmctdG9wOiAxNXB4O1xufVxuLnNoYXJlLXZpZGVve1xuXHR3aWR0aDogMjgwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDBweDtcbiAgICBsZWZ0OiAxODlweDtcbiAgICBsZWZ0OiAtd2Via2l0LWNhbGMoNTAlIC0gMTQwcHgpO1xuICAgIGxlZnQ6IC1tb3otY2FsYyg1MCUgLSAxNDBweCk7XG4gICAgbGVmdDogY2FsYyg1MCUgLSAxNDBweCk7XG59XG5cbi5zaGFyZS12aWRlbyB0ZXh0YXJlYXtcblx0aGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xufVxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/preview/preview.component.ts":
/*!**********************************************!*\
  !*** ./src/app/preview/preview.component.ts ***!
  \**********************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_data_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/services/data/video.service */ "./src/app/services/data/video.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(formBuilder, videoService) {
        this.formBuilder = formBuilder;
        this.videoService = videoService;
        this.onPreviewWindowReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onVideoDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.previewPosterPath = '';
        this.previewMP4VideoPath = '';
        this.isShareVideo = false;
        this.videoTitle = '';
        this.videoDesc = '';
        this.serverMessage = '';
        this.isError = false;
        this.isStatus = false;
        this.videoForm = this.formBuilder.group({
            'videoTitle': [],
            'videoDesc': []
        });
    }
    PreviewComponent.prototype.ngOnInit = function () {
    };
    PreviewComponent.prototype.ngAfterViewInit = function () {
        this.onPreviewWindowReady.emit('previewready');
    };
    PreviewComponent.prototype.deletePreviewVideo = function (event, data) {
        var _this = this;
        var postObj = { 'filepath': this.previewInfo.filepath, 'itemid': this.previewInfo.itemid };
        this.videoService.deletePreviewVideo(postObj).subscribe(function (data) { return _this.afterVideoDeleted(data); });
    };
    PreviewComponent.prototype.afterVideoDeleted = function (result) {
        this.isShareVideo = false;
        this.onVideoDeleted.emit('videodeleted');
    };
    PreviewComponent.prototype.shareVideo = function (event) {
        this.isShareVideo = true;
    };
    PreviewComponent.prototype.previewModalClosed = function () {
        this.isShareVideo = false;
    };
    PreviewComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _app_services_data_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PreviewComponent.prototype, "previewInfo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('videoplayer', { static: true })
    ], PreviewComponent.prototype, "videoplayer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], PreviewComponent.prototype, "onPreviewWindowReady", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], PreviewComponent.prototype, "onVideoDeleted", void 0);
    PreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-preview',
            template: __webpack_require__(/*! raw-loader!./preview.component.html */ "./node_modules/raw-loader/index.js!./src/app/preview/preview.component.html"),
            providers: [_app_services_data_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"]],
            styles: [__webpack_require__(/*! ./preview.component.css */ "./src/app/preview/preview.component.css")]
        })
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "./src/app/private-nav/private-nav.component.css":
/*!*******************************************************!*\
  !*** ./src/app/private-nav/private-nav.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-box:hover, .setting-btn:hover, .logout-btn:hover{\n\tborder: none;\n}\n.setting-btn, .logout-btn{\n\twidth: 15px;\n    margin: 0px 5px;\n\n}\n.search-box{\n    background-color: #f5f8fa;\n    border-radius: 2px;\n    box-sizing: border-box;\n    color: #14171a;\n    display: block;\n    font-size: 12px;\n    height: 25px;\n    line-height: 16px;\n    width: 180px;\n    margin-top: 15px;\n}\n@-moz-document url-prefix() { \n    .search-box{\n        margin-top: 2px !important;\n    }\n}\n.search-input{\n    line-height: 25px;\n    height: 25px;\n    display: block;\n    width: 154px;\n    border: none;\n    outline: none;\n    margin-left: 2px;\n}\n.fa-search{\n\tfloat: right;\n\tcolor: #2b90d9 !important;\n\tfont-size: 15px;\n\tline-height: 25px;\n}\n.fa-search:hover{\n\tcolor: #1da1f2;\n}\n.search-result-contents{\n    position: absolute;\n    width: 180px;\n    top: 34px;\n    z-index: 1000;\n    background: #fff;\n\n}\n.friend-request-pending-list, .notification-list{\n    position: absolute;\n    width: 301px;\n    top: 48px;\n    z-index: 1000;\n    background: #fff;\n    margin-left: 19px;\n    max-height: 250px;\n    overflow-y: auto;\n\n}\n.friend-request-pending-list{\n    margin-left: 29px;\n}\napp-search-result-list-item{\n    width: 179px;\n    line-height: 30px;\n}\napp-friend-request-pending-list, app-notification-list{\n    width: 300px;\n    line-height: 40px;\n    border-bottom: 1px solid #2b90d9;\n}\n.add-border{\n    border: 1px solid #e6e6e6;\n    border-bottom: none;\n    overflow-x: hidden;\n}\n.request-count{\n    position: absolute;\n    height: 15px;\n    min-width: 15px;\n    width: auto;\n    background: red;\n    margin-top: -21px;\n    margin-left: 5px;\n    border: 1px solid white;\n    color: white;\n    padding: 0px 3px 1px 1px;\n    z-index: 10000;\n    border-radius: 50%;\n    text-align: right;\n    font-size: 13px;\n}\n.request-count:hover{\n    background: #E74C3C;\n}\napp-private-nav .modal{\n    height: 300px !important;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmF0ZS1uYXYvcHJpdmF0ZS1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7QUFDYjtBQUNBO0NBQ0MsV0FBVztJQUNSLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsY0FBYztJQUNkLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCO0FBQ0o7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUVBO0NBQ0MsWUFBWTtDQUNaLHlCQUF5QjtDQUN6QixlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztJQUNULGFBQWE7SUFDYixnQkFBZ0I7O0FBRXBCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdDQUFnQztBQUNwQztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhdGUtbmF2L3ByaXZhdGUtbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJveDpob3ZlciwgLnNldHRpbmctYnRuOmhvdmVyLCAubG9nb3V0LWJ0bjpob3Zlcntcblx0Ym9yZGVyOiBub25lO1xufVxuLnNldHRpbmctYnRuLCAubG9nb3V0LWJ0bntcblx0d2lkdGg6IDE1cHg7XG4gICAgbWFyZ2luOiAwcHggNXB4O1xuXG59XG4uc2VhcmNoLWJveHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmOGZhO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGNvbG9yOiAjMTQxNzFhO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkgeyBcbiAgICAuc2VhcmNoLWJveHtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLnNlYXJjaC1pbnB1dHtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDE1NHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG59XG5cbi5mYS1zZWFyY2h7XG5cdGZsb2F0OiByaWdodDtcblx0Y29sb3I6ICMyYjkwZDkgIWltcG9ydGFudDtcblx0Zm9udC1zaXplOiAxNXB4O1xuXHRsaW5lLWhlaWdodDogMjVweDtcbn1cbi5mYS1zZWFyY2g6aG92ZXJ7XG5cdGNvbG9yOiAjMWRhMWYyO1xufVxuLnNlYXJjaC1yZXN1bHQtY29udGVudHN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxODBweDtcbiAgICB0b3A6IDM0cHg7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG59XG5cbi5mcmllbmQtcmVxdWVzdC1wZW5kaW5nLWxpc3QsIC5ub3RpZmljYXRpb24tbGlzdHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDMwMXB4O1xuICAgIHRvcDogNDhweDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbWFyZ2luLWxlZnQ6IDE5cHg7XG4gICAgbWF4LWhlaWdodDogMjUwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcblxufVxuLmZyaWVuZC1yZXF1ZXN0LXBlbmRpbmctbGlzdHtcbiAgICBtYXJnaW4tbGVmdDogMjlweDtcbn1cblxuYXBwLXNlYXJjaC1yZXN1bHQtbGlzdC1pdGVte1xuICAgIHdpZHRoOiAxNzlweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbn1cbmFwcC1mcmllbmQtcmVxdWVzdC1wZW5kaW5nLWxpc3QsIGFwcC1ub3RpZmljYXRpb24tbGlzdHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyYjkwZDk7XG59XG5cbi5hZGQtYm9yZGVye1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4ucmVxdWVzdC1jb3VudHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIG1pbi13aWR0aDogMTVweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgbWFyZ2luLXRvcDogLTIxcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMHB4IDNweCAxcHggMXB4O1xuICAgIHotaW5kZXg6IDEwMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG4ucmVxdWVzdC1jb3VudDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiAjRTc0QzNDO1xufVxuYXBwLXByaXZhdGUtbmF2IC5tb2RhbHtcbiAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XG59XG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/private-nav/private-nav.component.ts":
/*!******************************************************!*\
  !*** ./src/app/private-nav/private-nav.component.ts ***!
  \******************************************************/
/*! exports provided: PrivateNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateNavComponent", function() { return PrivateNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services_data_friends_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/data/friends.service */ "./src/app/services/data/friends.service.ts");
/* harmony import */ var _app_services_data_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/data/notification.service */ "./src/app/services/data/notification.service.ts");
/* harmony import */ var _app_services_data_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/services/data/search.service */ "./src/app/services/data/search.service.ts");
/* harmony import */ var _modal_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal/modal.service */ "./src/app/modal/modal.service.ts");








var PrivateNavComponent = /** @class */ (function () {
    function PrivateNavComponent(router, searchService, friendsService, notificationService, modalService) {
        this.router = router;
        this.searchService = searchService;
        this.friendsService = friendsService;
        this.notificationService = notificationService;
        this.modalService = modalService;
        this.active = false;
        this.isShowPreview = false;
        this.innerWidth = 0;
        this.modalId = 'notificationModal';
        this.searchResultList = undefined;
        this.friendRequestPendingList = undefined;
        this.notificationList = undefined;
        this.reqArr = undefined;
        this.notArr = undefined;
        this.isBorder = false;
        this.isFriendReuestBorder = false;
        this.isNotificationBorder = false;
        this.searchValue = '';
        this.friendRequestCount = 0;
        this.notificationCount = 0;
        this.isNotificationCountDisplay = false;
        this.isFriendRequestPendingDisplay = false;
        this.isNotificationDisplay = false;
        this.userId = '';
        this.isPreviewReady = false;
        this.notificationInfo = {};
        this.previewInfo = {};
        this.onFriendConfirmedFromNotification = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.userId = localStorage.getItem('currentUser');
        var self = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pairwise"])()).subscribe(function (e) {
            clearInterval(self.intervalId);
        });
    }
    PrivateNavComponent.prototype.ngOnInit = function () {
        this.checkInnerWidth();
        //this.instance.removeSearchResult.subscribe((data) => this.removeSearchResult(data));
    };
    PrivateNavComponent.prototype.ngAfterViewInit = function () {
        this.pullNotifications();
        this.subscribeToNotifications();
    };
    PrivateNavComponent.prototype.removeSearchResult = function (event) {
        alert('removeSearchResult plz');
    };
    PrivateNavComponent.prototype.logOut = function () {
        this.triggerLoggedInCheck('onAppLoggedOut', { event: 'onAppLoggedOut', message: 'logged out' });
        localStorage.removeItem('currentUser');
        localStorage.removeItem('loginData');
        this.router.navigate(['public']);
    };
    PrivateNavComponent.prototype.triggerLoggedInCheck = function (eventType, evtObj) {
        var evt = new CustomEvent(eventType, evtObj);
        window.dispatchEvent(evt);
    };
    PrivateNavComponent.prototype.onResize = function (event) {
        this.checkInnerWidth();
    };
    PrivateNavComponent.prototype.checkInnerWidth = function () {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth < 768) {
            this.active = true;
        }
        else {
            this.active = false;
        }
    };
    PrivateNavComponent.prototype.toggleNav = function (event) {
        if (!this.active) {
            this.active = true;
        }
        else {
            this.active = false;
        }
    };
    PrivateNavComponent.prototype.querySearch = function (searchQuery) {
        var _this = this;
        var postObj = { 'searchparam': searchQuery };
        this.searchService.querySearch(postObj).subscribe(function (data) { return _this.afterSearch(data); });
    };
    PrivateNavComponent.prototype.afterSearch = function (data) {
        this.searchResultList = data;
        if (this.searchResultList.length > 0) {
            this.isBorder = true;
        }
        else {
            this.isBorder = false;
        }
    };
    PrivateNavComponent.prototype.clickedOutside = function ($event) {
        this.searchResultList = [];
        this.friendRequestPendingList = [];
        //this.notificationList = [];
        this.isNotificationDisplay = false;
        this.isFriendReuestBorder = false;
    };
    PrivateNavComponent.prototype.clickedInside = function ($event) {
        $event.preventDefault();
        $event.stopPropagation(); // <- that will stop propagation on lower layers
        this.searchResultList = [];
        //this.friendRequestPendingList = [];
    };
    PrivateNavComponent.prototype.requestCountClick = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        this.isFriendRequestPendingDisplay = false;
        this.friendRequestCount = 0;
        var postObj = { 'reqarr': this.reqArr };
        this.friendsService.getRequestDetails(postObj).subscribe(function (data) { return _this.afterGetRequestDetails(data); });
    };
    PrivateNavComponent.prototype.getAllFriendReq = function (event) {
        var _this = this;
        var postObj = { 'userid': this.userId };
        this.friendsService.getAllFriendReq(postObj).subscribe(function (data) { return _this.afterGetAllFriendReq(data); });
    };
    PrivateNavComponent.prototype.afterGetAllFriendReq = function (data) {
        var _this = this;
        this.reqArr = [];
        if (data.length > 0) {
            for (var obj in data) {
                this.reqArr.push(data[obj].requester);
                this.isFriendReuestBorder = true;
            }
            var postObj = { 'reqarr': this.reqArr };
            this.friendsService.getRequestDetails(postObj).subscribe(function (data) { return _this.afterGetRequestDetails(data); });
        }
    };
    PrivateNavComponent.prototype.notificationCountClick = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        this.isNotificationCountDisplay = false;
        this.isNotificationDisplay = true;
        var postObj = { 'notarr': this.notArr };
        this.notificationService.updateNotificationDisplay(postObj).subscribe(function (data) { return _this.afterUpdateNotificationDisplay(data); });
    };
    PrivateNavComponent.prototype.afterUpdateNotificationDisplay = function (data) {
        if (data.length > 0) {
            this.isNotificationBorder = true;
            this.friendRequestPendingList = data;
        }
        else {
            this.isNotificationBorder = false;
        }
    };
    PrivateNavComponent.prototype.afterGetRequestDetails = function (data) {
        if (data.length > 0) {
            this.isFriendReuestBorder = true;
            this.friendRequestPendingList = data;
        }
        else {
            this.isFriendReuestBorder = false;
        }
    };
    PrivateNavComponent.prototype.subscribeToNotifications = function () {
        var _this = this;
        this.intervalId = setInterval(function () { _this.pullNotifications(); }, 1000 * 10);
    };
    //Pulling notifications in every 5 seconds
    PrivateNavComponent.prototype.pullNotifications = function () {
        var _this = this;
        var postObj = { 'userid': this.userId };
        this.friendsService.getFriendReq(postObj).subscribe(function (data) { return _this.afterGetFriendReq(data); });
        this.notificationService.checkNotification(postObj).subscribe(function (data) { return _this.afterCheckNotification(data); });
    };
    PrivateNavComponent.prototype.fetchAllNotifications = function (event) {
        var _this = this;
        var postObj = { 'userid': this.userId };
        this.notificationService.fetchAllNotifications(postObj).subscribe(function (data) { return _this.afterFetchAllNotifications(data); });
    };
    //Keeping the requester userid in array to query from userinfo collection
    PrivateNavComponent.prototype.afterGetFriendReq = function (data) {
        this.friendRequestCount = data.length;
        this.reqArr = [];
        if (this.friendRequestCount > 0) {
            this.isFriendRequestPendingDisplay = true;
            for (var obj in data) {
                this.reqArr.push(data[obj].requester);
            }
        }
        else {
            this.isFriendRequestPendingDisplay = false;
            ;
        }
    };
    PrivateNavComponent.prototype.afterCheckNotification = function (data) {
        this.notificationCount = data.info.length;
        this.notArr = [];
        if (this.notificationCount > 0) {
            this.isNotificationCountDisplay = true;
            this.notificationList = data.info;
            for (var obj in data.info) {
                this.notArr.push(data.info[obj].userid);
            }
        }
        else {
            this.isNotificationCountDisplay = false;
            ;
        }
    };
    PrivateNavComponent.prototype.afterFetchAllNotifications = function (data) {
        //this.notificationCount = data.info.length;
        var notCount = data.info.length;
        this.notArr = [];
        if (notCount > 0) {
            this.notificationList = data.info;
            this.isNotificationDisplay = true;
        }
    };
    //Removing the confirmed friend from the list
    PrivateNavComponent.prototype.onFriendConfirmed = function (event) {
        for (var i in this.friendRequestPendingList) {
            if (event.data.requester === this.friendRequestPendingList[i].username) {
                this.friendRequestPendingList.splice(i, 1);
                //This is will be listened at coverpic component to change the friend's controls
                this.onFriendConfirmedFromNotification.emit({ data: event.data });
                if (this.friendRequestPendingList.length === 0) {
                    this.isFriendReuestBorder = false;
                    this.isFriendRequestPendingDisplay = false;
                }
            }
        }
    };
    PrivateNavComponent.prototype.previewWindowReady = function (event) {
        if (!this.isPreviewReady) {
            this.playVideo(this.notificationInfo);
            this.isPreviewReady = true;
        }
    };
    PrivateNavComponent.prototype.previewClicked = function (event) {
        this.notificationInfo = event.data;
        this.isShowPreview = true;
        this.openAppModal();
        if (this.isPreviewReady) {
            this.playVideo(this.notificationInfo);
        }
    };
    PrivateNavComponent.prototype.openAppModal = function (modalType) {
        if (modalType === void 0) { modalType = null; }
        var self = this;
        self.modalService.open(self.modalId);
    };
    PrivateNavComponent.prototype.onModalClosed = function (event) {
        this.appPreview.previewModalClosed();
        var video = document.getElementById('videoPreview');
        video.pause();
        video.src = '';
    };
    PrivateNavComponent.prototype.playVideo = function (data) {
        var video = document.getElementById('videoPreview');
        //this.previewMP4VideoPath = data.filepath;
        //this.previewPosterPath = data.notificationpic;
        video.src = data.filepath;
        video.poster = data.notificationpic;
    };
    PrivateNavComponent.prototype.videoDeleted = function (event) {
        var self = this;
        self.modalService.close(self.modalId);
    };
    PrivateNavComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _app_services_data_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"] },
        { type: _app_services_data_friends_service__WEBPACK_IMPORTED_MODULE_4__["FriendsService"] },
        { type: _app_services_data_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
        { type: _modal_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
    ], PrivateNavComponent.prototype, "onFriendConfirmedFromNotification", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('appPreview', { static: true })
    ], PrivateNavComponent.prototype, "appPreview", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('document:click', ['$event'])
    ], PrivateNavComponent.prototype, "clickedOutside", null);
    PrivateNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-private-nav',
            template: __webpack_require__(/*! raw-loader!./private-nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/private-nav/private-nav.component.html"),
            providers: [_app_services_data_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"], _app_services_data_friends_service__WEBPACK_IMPORTED_MODULE_4__["FriendsService"], _app_services_data_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]],
            styles: [__webpack_require__(/*! ./private-nav.component.css */ "./src/app/private-nav/private-nav.component.css")]
        })
    ], PrivateNavComponent);
    return PrivateNavComponent;
}());



/***/ }),

/***/ "./src/app/profile-area/profile-area.component.css":
/*!*********************************************************!*\
  !*** ./src/app/profile-area/profile-area.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-pic{\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100%;\n\tborder: 1px solid #e6e6e6;\n\tmin-width: 243px;\n\tmin-height: 243px;\n}\n.profile-pic img{\n\twidth: 100%;\n\theight: auto;\n}\n.user-info .full-name, .user-info .email-id{\n\tword-break: break-all;\n\tpadding-left: 5px;\n\tfont-size: 16px;\n}\n.profile-card{\n\tmargin: 5px;\n}\n.email-id:hover a, .full-name:hover{\n\tcolor:  #1da1f2 !important;\n}\n.profile-card .title-bar{\n    background: rgba(0,0,0, 0.6);\n    height: 15px;\n    width: 100%;\n    height: 30px;\n    font-size: 18px;\n    position: absolute;\n    width: 241px;\n    top: 214px;\n}\n.profile-card i{\n\tpadding: 0px 5px;\n\tmargin-top: 6px;\n}\n.title-bar .cam-icon{\n\tmargin: 0px 5px 0px 2px;\n}\n.title-bar .cam-icon i:hover, .title-bar .upload-icon i:hover{\n\tcolor: #1da1f2;\n}\n.file-input-container{\n\tdisplay: none;\n\theight: 0px;\n\twidth: 0px;\n}\n.preview-profile-pic img{\n\twidth: 100%;\n}\napp-image-cropper {\n  max-width: 640px;\n  margin-bottom: 25px;\n}\n.cropped-preview-img{\n\tdisplay: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1hcmVhL3Byb2ZpbGUtYXJlYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsNEJBQTRCO0NBQzVCLHFCQUFxQjtDQUNyQix5QkFBeUI7Q0FDekIsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsV0FBVztDQUNYLFlBQVk7QUFDYjtBQUNBO0NBQ0MscUJBQXFCO0NBQ3JCLGlCQUFpQjtDQUNqQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFFQTtDQUNDLDBCQUEwQjtBQUMzQjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7QUFDZDtBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLHVCQUF1QjtBQUN4QjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsV0FBVztDQUNYLFVBQVU7QUFDWDtBQUVBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7Q0FDQyxhQUFhO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlLWFyZWEvcHJvZmlsZS1hcmVhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1waWN7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtc2l6ZTogMTAwJTtcblx0Ym9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcblx0bWluLXdpZHRoOiAyNDNweDtcblx0bWluLWhlaWdodDogMjQzcHg7XG59XG4ucHJvZmlsZS1waWMgaW1ne1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiBhdXRvO1xufVxuLnVzZXItaW5mbyAuZnVsbC1uYW1lLCAudXNlci1pbmZvIC5lbWFpbC1pZHtcblx0d29yZC1icmVhazogYnJlYWstYWxsO1xuXHRwYWRkaW5nLWxlZnQ6IDVweDtcblx0Zm9udC1zaXplOiAxNnB4O1xufVxuLnByb2ZpbGUtY2FyZHtcblx0bWFyZ2luOiA1cHg7XG59XG5cbi5lbWFpbC1pZDpob3ZlciBhLCAuZnVsbC1uYW1lOmhvdmVye1xuXHRjb2xvcjogICMxZGExZjIgIWltcG9ydGFudDtcbn1cbi5wcm9maWxlLWNhcmQgLnRpdGxlLWJhcntcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLCAwLjYpO1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjQxcHg7XG4gICAgdG9wOiAyMTRweDtcbn1cblxuLnByb2ZpbGUtY2FyZCBpe1xuXHRwYWRkaW5nOiAwcHggNXB4O1xuXHRtYXJnaW4tdG9wOiA2cHg7XG59XG4udGl0bGUtYmFyIC5jYW0taWNvbntcblx0bWFyZ2luOiAwcHggNXB4IDBweCAycHg7XG59XG4udGl0bGUtYmFyIC5jYW0taWNvbiBpOmhvdmVyLCAudGl0bGUtYmFyIC51cGxvYWQtaWNvbiBpOmhvdmVye1xuXHRjb2xvcjogIzFkYTFmMjtcbn1cbi5maWxlLWlucHV0LWNvbnRhaW5lcntcblx0ZGlzcGxheTogbm9uZTtcblx0aGVpZ2h0OiAwcHg7XG5cdHdpZHRoOiAwcHg7XG59XG5cbi5wcmV2aWV3LXByb2ZpbGUtcGljIGltZ3tcblx0d2lkdGg6IDEwMCU7XG59XG5hcHAtaW1hZ2UtY3JvcHBlciB7XG4gIG1heC13aWR0aDogNjQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uY3JvcHBlZC1wcmV2aWV3LWltZ3tcblx0ZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/profile-area/profile-area.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile-area/profile-area.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAreaComponent", function() { return ProfileAreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _modal_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal.service */ "./src/app/modal/modal.service.ts");
/* harmony import */ var _services_data_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/data/upload.service */ "./src/app/services/data/upload.service.ts");







var ProfileAreaComponent = /** @class */ (function () {
    function ProfileAreaComponent(router, formBuilder, modalService, uploadService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.uploadService = uploadService;
        this.modalId = 'profileAreaModal';
        this.loginData = undefined;
        this.isProfilePicControls = true;
        this.localStream = null;
        this.isCamRendered = false;
        this.profilePicUploadForm = this.formBuilder.group({
            'file': ['']
        });
        this.profilePicGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
    }
    ProfileAreaComponent.prototype.ngOnInit = function () {
        this.loginData = JSON.parse(localStorage.getItem('loginData'));
        this.profilePic = this.loginData.profilepic.imageBuffer;
        this.fullName = this.loginData.fullname;
        this.userId = this.loginData.username;
        this.profilePicWidth = _app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"].getPicDimension(this.loginData.profilepic.profilePicDimension).dimension.width + 'px';
        this.profilePicHeight = _app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"].getPicDimension(this.loginData.profilepic.profilePicDimension).dimension.height + 'px';
    };
    ProfileAreaComponent.prototype.navigateToMyProfile = function (event) {
        this.router.navigate(['profile', this.userId]);
    };
    ProfileAreaComponent.prototype.openAppModal = function () {
        var self = this;
        self.modalService.open(self.modalId);
    };
    /*fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }*/
    ProfileAreaComponent.prototype.imageCropped = function (image) {
        this.croppedImage = image;
    };
    ProfileAreaComponent.prototype.computeCroppedImage = function () {
        var elem = document.querySelector('#croppedPreviewImg');
    };
    ProfileAreaComponent.prototype.fileChangeEvent = function (event) {
        this.isProfilePicControls = true;
        this.imageChangedEvent = event;
        this.files = event.target.files[0];
        //this.uploadCanvasPic();
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                self.encodedImage = e.target.result;
                self.openAppModal();
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        /*var files = fileInput.srcElement.files;
        console.log(files);
        this.uploadService.makeFileRequest('https://localhost:3000/api/uploadCoverPic', [], files).subscribe(() => {
          console.log('sent');
        });*/
    };
    ProfileAreaComponent.prototype.camInputClick = function () {
        this.isProfilePicControls = false;
        this.openAppModal();
        if (this.isCamRendered) {
            this.onCamRendered();
        }
    };
    ProfileAreaComponent.prototype.uploadEncodedProfilePic = function (encodedImage) {
        var _this = this;
        var postObj = { 'previewpicdimension': (150 + 'x' + 150), 'profilepicdimension': (75 + 'x' + 75), 'imagebuffer': encodedImage, 'userid': this.userId };
        this.uploadService.uploadEncodedProfilePic(postObj).subscribe(function (data) { return _this.afterProfilePicUploaded(data); });
    };
    ProfileAreaComponent.prototype.ok = function () {
        this.uploadEncodedProfilePic(this.croppedImage);
    };
    ProfileAreaComponent.prototype.capture = function () {
        var canvas = document.getElementById('profilePicCanvas');
        var dataURI = canvas.toDataURL('image/jpeg', 1.0);
        this.uploadEncodedProfilePic(dataURI);
    };
    ProfileAreaComponent.prototype.onPicCaptured = function () {
        this.capture();
    };
    ProfileAreaComponent.prototype.onCamRendered = function () {
        this.isCamRendered = true;
        if (!this.isProfilePicControls) {
            var _self_1 = this;
            var video_1 = document.getElementById('profilePicVideo');
            var canvas_1 = document.getElementById('profilePicCanvas');
            var ctx_1 = canvas_1.getContext('2d');
            navigator.getUserMedia = navigator.getUserMedia;
            var errorCallback = function (e) {
                console.log('Rejected!', e);
            };
            video_1.addEventListener('play', function () {
                canvas_1.width = video_1.videoWidth;
                canvas_1.height = video_1.videoHeight;
                var self = this; //cache
                (function loop() {
                    if (!self.paused && !self.ended) {
                        ctx_1.drawImage(self, 0, 0, canvas_1.width, canvas_1.height);
                        setTimeout(loop, 1000 / 30); // drawing at 30fps
                    }
                })();
            }, false);
            if (navigator.getUserMedia) {
                navigator.getUserMedia({ audio: false, video: true }, function (stream) {
                    //this._self.localStream = stream;
                    _self_1.localStream = stream;
                    video_1.src = window.URL.createObjectURL(stream);
                }, errorCallback);
            }
            else {
                alert("Your Browser does not support Camera");
                //video.src = 'somevideo.webm'; // fallback.
            }
        }
    };
    ProfileAreaComponent.prototype.afterProfilePicUploaded = function (result) {
        //alert(result.message);
        if (result.status === 'success') {
            this.profilePic = result.info.profilepic.imageBuffer;
            localStorage.setItem('loginData', JSON.stringify(result.info));
            this.previewPicModal.close();
        }
    };
    ProfileAreaComponent.prototype.onModalClosed = function () {
        if (this.localStream != null) {
            //localStream.stop();
            var track = this.localStream.getTracks()[0]; // if only one media track
            track.stop();
        }
    };
    ProfileAreaComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _modal_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"] },
        { type: _services_data_upload_service__WEBPACK_IMPORTED_MODULE_6__["UploadService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('croppedPreviewImg', { static: true })
    ], ProfileAreaComponent.prototype, "croppedPreviewImg", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('previewPicModal', { static: true })
    ], ProfileAreaComponent.prototype, "previewPicModal", void 0);
    ProfileAreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-area',
            template: __webpack_require__(/*! raw-loader!./profile-area.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile-area/profile-area.component.html"),
            providers: [_services_data_upload_service__WEBPACK_IMPORTED_MODULE_6__["UploadService"]],
            styles: [__webpack_require__(/*! ./profile-area.component.css */ "./src/app/profile-area/profile-area.component.css")]
        })
    ], ProfileAreaComponent);
    return ProfileAreaComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cover-pic-area{\n\tpadding: 5px !important;\n\twidth: 768px;\n}\n.cover-profile-pic{\n\tbackground-size: cover;\n    margin: -125px 0px 0px 20px;\n    height: 150px;\n    width: 150px;\n    position: absolute;\n    border: 3px solid rgba(255, 255, 255, 0.8);\n}\n.cover-profile-pic .title-bar{\n\tposition: absolute;\n    bottom: 0px;\n    background: rgba(0,0,0, 0.6);\n    width: 144px;\n    margin-left: 0px !important;\n    padding: 5px;\n}\n.default-link{\n    text-decoration: none;\n    color: #fff;\n}\n.default-link:hover{\n    color: #2b90d9;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx1QkFBdUI7Q0FDdkIsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxzQkFBc0I7SUFDbkIsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDBDQUEwQztBQUM5QztBQUVBO0NBQ0Msa0JBQWtCO0lBQ2YsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb3Zlci1waWMtYXJlYXtcblx0cGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG5cdHdpZHRoOiA3NjhweDtcbn1cbi5jb3Zlci1wcm9maWxlLXBpY3tcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtYXJnaW46IC0xMjVweCAwcHggMHB4IDIwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbn1cblxuLmNvdmVyLXByb2ZpbGUtcGljIC50aXRsZS1iYXJ7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLCAwLjYpO1xuICAgIHdpZHRoOiAxNDRweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogNXB4O1xufVxuLmRlZmF1bHQtbGlua3tcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uZGVmYXVsdC1saW5rOmhvdmVye1xuICAgIGNvbG9yOiAjMmI5MGQ5O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services_data_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/data/profile.service */ "./src/app/services/data/profile.service.ts");
/* harmony import */ var _app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/settings/app-settings.service */ "./src/app/services/settings/app-settings.service.ts");
/* harmony import */ var _app_services_data_friends_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/data/friends.service */ "./src/app/services/data/friends.service.ts");






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(route, router, profileService, friendsService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.profileService = profileService;
        this.friendsService = friendsService;
        this.routeSwitch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onAppLoggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onAppLoggedOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.profilePic = '';
        this.profilePicHeight = '';
        this.profilePicWidth = '';
        this.isMyProfile = false;
        this.userId = '';
        this.friendId = '';
        route.params.subscribe(function (val) {
            var currentUser = localStorage.getItem('currentUser');
            var id = _this.route.snapshot.paramMap.get('id');
            var obj = { 'userid': currentUser, 'friendid': id };
            _this.sharedList = obj;
            if (!currentUser) {
                _this.triggerLoggedInCheck('onAppLoggedOut', { event: 'onAppLoggedOut', message: 'logged out' });
                _this.onAppLoggedOut.emit('logged Out');
                _this.router.navigate(['public']);
                return;
            }
            else {
                _this.triggerLoggedInCheck('onAppLoggedIn', { event: 'onAppLoggedIn', message: 'logged in' });
                _this.onAppLoggedIn.emit('logged In');
                localStorage.setItem('currentRoute', 'profile/' + id);
            }
            if (currentUser === id) {
                _this.isMyProfile = true;
                localStorage.setItem("isMyProfile", 'true');
            }
            else {
                _this.isMyProfile = false;
                localStorage.setItem("isMyProfile", 'false');
                var postObj = { 'userid': currentUser, 'friendid': id };
                _this.userId = currentUser;
                _this.friendId = id;
                _this.friendsService.getFriendInfo(postObj).subscribe(function (data) { return _this.afterFriendInfo(data); });
            }
            //this.routeSwitch.emit(this.isMyProfile);
            _this.getProfileInfo(id);
        });
    }
    ProfileComponent.prototype.onPopState = function (event) {
        localStorage.removeItem('currentRoute');
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.triggerLoggedInCheck = function (eventType, evtObj) {
        var evt = new CustomEvent(eventType, evtObj);
        window.dispatchEvent(evt);
    };
    ProfileComponent.prototype.afterFriendInfo = function (result) {
        this.appCoverPic.updateFriendsControlsSettings(result);
    };
    ProfileComponent.prototype.getProfileInfo = function (profileId) {
        var _this = this;
        var postObj = JSON.stringify({ profileid: profileId });
        this.profileService.profileInfo(postObj).subscribe(function (data) { return _this.afterProfileInfo(data); });
    };
    ProfileComponent.prototype.afterProfileInfo = function (result) {
        if (this.isMyProfile) {
            this.appCoverPic.isAddFriend = false;
            this.appCoverPic.isRequestPending = false;
            this.appCoverPic.isRequestConfirmed = false;
            this.appCoverPic.isMyProfile = 'true';
        }
        else {
            this.appCoverPic.userId = this.userId;
            this.appCoverPic.friendId = this.friendId;
        }
        if (result.status === 'failure') {
            alert('Error fetching profile info');
        }
        else {
            this.profilePic = result.profilepic.imageBuffer;
            this.appCoverPic.coverPicURL = _app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + '/' + result.wallpicpath;
            this.appCoverPic.updateCoverPicSettings(result);
            //this.profilePicWidth = UtilityService.getPicDimension(result.profilepic.profilePicDimension).dimension.width + 'px';
            //this.profilePicHeight = UtilityService.getPicDimension(result.profilepic.profilePicDimension).dimension.height + 'px';
            this.fullName = result.fullname;
        }
    };
    ProfileComponent.prototype.onFriendConfirmedFromNotification = function (event) {
        if (event.data.requester === this.friendId) {
            this.appCoverPic.updateConfirmedControls();
        }
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _app_services_data_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] },
        { type: _app_services_data_friends_service__WEBPACK_IMPORTED_MODULE_5__["FriendsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appCoverPic', { static: true })
    ], ProfileComponent.prototype, "appCoverPic", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ProfileComponent.prototype, "routeSwitch", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ProfileComponent.prototype, "onAppLoggedIn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ProfileComponent.prototype, "onAppLoggedOut", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:popstate', ['$event'])
    ], ProfileComponent.prototype, "onPopState", null);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
            providers: [_app_services_data_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"], _app_services_data_friends_service__WEBPACK_IMPORTED_MODULE_5__["FriendsService"]],
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        })
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/public-nav/public-nav.component.css":
/*!*****************************************************!*\
  !*** ./src/app/public-nav/public-nav.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy1uYXYvcHVibGljLW5hdi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/public-nav/public-nav.component.ts":
/*!****************************************************!*\
  !*** ./src/app/public-nav/public-nav.component.ts ***!
  \****************************************************/
/*! exports provided: PublicNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicNavComponent", function() { return PublicNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PublicNavComponent = /** @class */ (function () {
    function PublicNavComponent() {
        this.active = false;
        this.innerWidth = 0;
    }
    PublicNavComponent.prototype.ngOnInit = function () {
        this.checkInnerWidth();
    };
    PublicNavComponent.prototype.onResize = function (event) {
        this.checkInnerWidth();
    };
    PublicNavComponent.prototype.checkInnerWidth = function () {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth < 768) {
            this.active = true;
        }
        else {
            this.active = false;
        }
    };
    PublicNavComponent.prototype.toggleNav = function (event) {
        if (!this.active) {
            this.active = true;
        }
        else {
            this.active = false;
        }
    };
    PublicNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-public-nav',
            template: __webpack_require__(/*! raw-loader!./public-nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/public-nav/public-nav.component.html"),
            styles: [__webpack_require__(/*! ./public-nav.component.css */ "./src/app/public-nav/public-nav.component.css")]
        })
    ], PublicNavComponent);
    return PublicNavComponent;
}());



/***/ }),

/***/ "./src/app/public/public.component.css":
/*!*********************************************!*\
  !*** ./src/app/public/public.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.search-form{\n\twidth: 300px;\n\tfloat: left;\n}*/\n.login-signup{\n    width: 320px;\n    margin-top: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL3B1YmxpYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRTtBQUNGO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9wdWJsaWMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLnNlYXJjaC1mb3Jte1xuXHR3aWR0aDogMzAwcHg7XG5cdGZsb2F0OiBsZWZ0O1xufSovXG4ubG9naW4tc2lnbnVwe1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/public/public.component.ts":
/*!********************************************!*\
  !*** ./src/app/public/public.component.ts ***!
  \********************************************/
/*! exports provided: PublicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicComponent", function() { return PublicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../signup/signup.component */ "./src/app/signup/signup.component.ts");





var PublicComponent = /** @class */ (function () {
    function PublicComponent(componentFactoryResolver, router) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.router = router;
        if (localStorage.getItem('currentUser')) {
            if (localStorage.getItem('currentRoute')) {
                var routePath = localStorage.getItem('currentRoute');
                this.router.navigate([routePath]);
            }
            /*this.router.events.pairwise().subscribe((e) => {
                console.log("eeeeeee"+e);
            });*/
        }
    }
    PublicComponent.prototype.ngAfterContentInit = function () {
    };
    PublicComponent.prototype.ngAfterContentChecked = function () {
    };
    PublicComponent.prototype.ngOnInit = function () {
        this.createLoginPanel();
    };
    PublicComponent.prototype.ngAfterViewInit = function () {
    };
    PublicComponent.prototype.createLoginPanel = function () {
        var _this = this;
        if (this.signupRef) {
            this.signupRef.instance.renderLogin.unsubscribe(function (data) { return _this.callLogin(data); });
            this.signupRef.instance.accountCreated.unsubscribe(function (data) { return _this.accountCreated(data); });
            this.signupRef.destroy();
        }
        this.loginComponent = this.componentFactoryResolver.resolveComponentFactory(_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]);
        this.loginRef = this.loginSignUp.createComponent(this.loginComponent);
        this.loginRef.instance.renderSignUp.subscribe(function (data) { return _this.callSignUp(data); });
        this.loginRef.instance.goHome.subscribe(function (data) { return _this.goHome(data); });
    };
    PublicComponent.prototype.createSignupPanel = function () {
        var _this = this;
        this.signupComponent = this.componentFactoryResolver.resolveComponentFactory(_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]);
        this.loginRef.instance.renderSignUp.unsubscribe(function (data) { return _this.callSignUp(data); });
        this.loginRef.instance.goHome.unsubscribe(function (data) { return _this.goHome(data); });
        this.loginRef.destroy();
        this.signupRef = this.loginSignUp.createComponent(this.signupComponent);
        this.signupRef.instance.renderLogin.subscribe(function (data) { return _this.callLogin(data); });
        this.signupRef.instance.accountCreated.subscribe(function (data) { return _this.accountCreated(data); });
    };
    PublicComponent.prototype.callSignUp = function (data) {
        this.createSignupPanel();
    };
    PublicComponent.prototype.goHome = function (data) {
        this.router.navigate(['home']);
    };
    PublicComponent.prototype.callLogin = function (data) {
        this.createLoginPanel();
    };
    PublicComponent.prototype.accountCreated = function (data) {
        if (data === 'success') {
            this.createLoginPanel();
        }
    };
    PublicComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginSignUp', { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] })
    ], PublicComponent.prototype, "loginSignUp", void 0);
    PublicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-public',
            template: __webpack_require__(/*! raw-loader!./public.component.html */ "./node_modules/raw-loader/index.js!./src/app/public/public.component.html"),
            styles: [__webpack_require__(/*! ./public.component.css */ "./src/app/public/public.component.css")]
        })
    ], PublicComponent);
    return PublicComponent;
}());



/***/ }),

/***/ "./src/app/search-result-list-item/search-result-list-item.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/search-result-list-item/search-result-list-item.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-row{\n\twidth: 178px;\n\tpadding-right: 5px;\n\tborder-bottom: 1px solid #e6e6e6;\n}\n\n.item-row:hover{\n\tbackground: #f5f8fa;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXJlc3VsdC1saXN0LWl0ZW0vc2VhcmNoLXJlc3VsdC1saXN0LWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsZ0NBQWdDO0FBQ2pDOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoLXJlc3VsdC1saXN0LWl0ZW0vc2VhcmNoLXJlc3VsdC1saXN0LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLXJvd3tcblx0d2lkdGg6IDE3OHB4O1xuXHRwYWRkaW5nLXJpZ2h0OiA1cHg7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTZlNmU2O1xufVxuXG4uaXRlbS1yb3c6aG92ZXJ7XG5cdGJhY2tncm91bmQ6ICNmNWY4ZmE7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/search-result-list-item/search-result-list-item.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/search-result-list-item/search-result-list-item.component.ts ***!
  \******************************************************************************/
/*! exports provided: SearchResultListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultListItemComponent", function() { return SearchResultListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");




var SearchResultListItemComponent = /** @class */ (function () {
    function SearchResultListItemComponent(router) {
        this.router = router;
        this.isSearchResult = false;
    }
    SearchResultListItemComponent.prototype.ngOnInit = function () {
        //this.loginData = JSON.parse(localStorage.getItem('loginData'));
        this.profilePic = this.item.profilepic.imageBuffer;
        this.fullName = this.item.fullname;
        this.email = this.item.username;
        this.profilePicWidth = _app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"].getPicDimension(this.item.profilepic.profilePicDimension).dimension.width + 'px';
        this.profilePicHeight = _app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"].getPicDimension(this.item.profilepic.profilePicDimension).dimension.height + 'px';
    };
    SearchResultListItemComponent.prototype.searchListItemClick = function (event) {
        //if(this.router.url === '/home'){
        this.router.navigate(['profile', this.email]);
        //}else{
        //}
    };
    SearchResultListItemComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SearchResultListItemComponent.prototype, "item", void 0);
    SearchResultListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-result-list-item',
            template: __webpack_require__(/*! raw-loader!./search-result-list-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/search-result-list-item/search-result-list-item.component.html"),
            styles: [__webpack_require__(/*! ./search-result-list-item.component.css */ "./src/app/search-result-list-item/search-result-list-item.component.css")]
        })
    ], SearchResultListItemComponent);
    return SearchResultListItemComponent;
}());



/***/ }),

/***/ "./src/app/services/app/app.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/app/app.service.ts ***!
  \*********************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
var AppService = /** @class */ (function () {
    function AppService() {
    }
    AppService.getGeoCode = function () {
        var latitude;
        var longitude;
        navigator.geolocation.getCurrentPosition(function (position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            return { 'location': { 'latitude': latitude, 'longitude': longitude } };
        });
    };
    return AppService;
}());



/***/ }),

/***/ "./src/app/services/data/address.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/data/address.service.ts ***!
  \**************************************************/
/*! exports provided: AddressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressService", function() { return AddressService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/services/settings/app-settings.service */ "./src/app/services/settings/app-settings.service.ts");





var AddressService = /** @class */ (function () {
    function AddressService(http) {
        this.http = http;
    }
    AddressService.prototype.addAddressInfo = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/addAddressInfo", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    AddressService.prototype.getAddressInfo = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/getAddressInfo", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    AddressService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }
    ]; };
    AddressService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], AddressService);
    return AddressService;
}());



/***/ }),

/***/ "./src/app/services/data/audio.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/data/audio.service.ts ***!
  \************************************************/
/*! exports provided: AudioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioService", function() { return AudioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/services/settings/app-settings.service */ "./src/app/services/settings/app-settings.service.ts");





var AudioService = /** @class */ (function () {
    function AudioService(http) {
        this.http = http;
    }
    AudioService.prototype.createAudioAlbum = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/createAudioAlbum", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    AudioService.prototype.updateAudioAlbum = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/updateAudioAlbum", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    AudioService.prototype.fetchAudioAlbumInfo = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/fetchAudioAlbumInfo", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    AudioService.prototype.fetchAlbumAudioInfo = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/fetchAlbumAudioInfo", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    AudioService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }
    ]; };
    AudioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], AudioService);
    return AudioService;
}());



/***/ }),

/***/ "./src/app/services/data/chat.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/data/chat.service.ts ***!
  \***********************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/services/settings/app-settings.service */ "./src/app/services/settings/app-settings.service.ts");





var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
    }
    ChatService.prototype.getChatBuddyList = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Accept': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/getChatBuddyList", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    ChatService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }
    ]; };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/services/data/comment.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/data/comment.service.ts ***!
  \**************************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/services/settings/app-settings.service */ "./src/app/services/settings/app-settings.service.ts");





var CommentService = /** @class */ (function () {
    function CommentService(http) {
        this.http = http;
    }
    CommentService.prototype.saveComment = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Accept': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/saveComment", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    CommentService.prototype.updateComment = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Accept': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/saveComment", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    CommentService.prototype.fetchCommentsForCurrentFeedItem = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Accept': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/fetchCommentsForCurrentFeedItem", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    CommentService.prototype.deleteCommentItem = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/deleteCommentItem", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    CommentService.prototype.updateLikeCommentChannel = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/updateLikeCommentChannel", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    CommentService.prototype.updateLoveCommentChannel = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/updateLoveCommentChannel", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    CommentService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }
    ]; };
    CommentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "./src/app/services/data/configuration.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/data/configuration.service.ts ***!
  \********************************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/services/settings/app-settings.service */ "./src/app/services/settings/app-settings.service.ts");





var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(http) {
        this.http = http;
    }
    ConfigurationService.prototype.saveCoverPicPos = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/saveCoverPicPos", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    ConfigurationService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }
    ]; };
    ConfigurationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], ConfigurationService);
    return ConfigurationService;
}());



/***/ }),

/***/ "./src/app/services/data/feed.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/data/feed.service.ts ***!
  \***********************************************/
/*! exports provided: FeedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedService", function() { return FeedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/services/settings/app-settings.service */ "./src/app/services/settings/app-settings.service.ts");





var FeedService = /** @class */ (function () {
    function FeedService(http) {
        this.http = http;
    }
    FeedService.prototype.savePost = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/savePost", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    FeedService.prototype.refreshFeed = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/refreshFeed", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    FeedService.prototype.deleteFeedItem = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/deleteFeedItem", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    FeedService.prototype.updateLikeFeedChannel = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/updateLikeFeedChannel", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    FeedService.prototype.updateLoveFeedChannel = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/updateLoveFeedChannel", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    FeedService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }
    ]; };
    FeedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], FeedService);
    return FeedService;
}());



/***/ }),

/***/ "./src/app/services/data/friends.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/data/friends.service.ts ***!
  \**************************************************/
/*! exports provided: FriendsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsService", function() { return FriendsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/services/settings/app-settings.service */ "./src/app/services/settings/app-settings.service.ts");





var FriendsService = /** @class */ (function () {
    function FriendsService(http) {
        this.http = http;
    }
    FriendsService.prototype.setFriendInfo = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Accept': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/setFriendInfo", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    FriendsService.prototype.getFriendInfo = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Accept': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/getFriendInfo", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    FriendsService.prototype.getFriendReq = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Accept': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/getFriendReq", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    FriendsService.prototype.getAllFriendReq = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Accept': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/getAllFriendReq", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    FriendsService.prototype.getRequestDetails = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Accept': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/getRequestDetails", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    FriendsService.prototype.confirmFriendReq = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Accept': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/confirmFriendReq", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    FriendsService.prototype.getAllConfirmedFriends = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Accept': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/getAllConfirmedFriends", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    FriendsService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }
    ]; };
    FriendsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], FriendsService);
    return FriendsService;
}());



/***/ }),

/***/ "./src/app/services/data/market.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/data/market.service.ts ***!
  \*************************************************/
/*! exports provided: MarketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketService", function() { return MarketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/services/settings/app-settings.service */ "./src/app/services/settings/app-settings.service.ts");





var MarketService = /** @class */ (function () {
    function MarketService(http) {
        this.http = http;
    }
    MarketService.prototype.addItem = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/addItem", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    MarketService.prototype.fetchMarketItems = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/fetchMarketItems", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    MarketService.prototype.doCheckOut = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/doCheckOut", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    MarketService.prototype.fetchCheckOut = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/fetchCheckOut", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    MarketService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }
    ]; };
    MarketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], MarketService);
    return MarketService;
}());



/***/ }),

/***/ "./src/app/services/data/notification.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/data/notification.service.ts ***!
  \*******************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/services/settings/app-settings.service */ "./src/app/services/settings/app-settings.service.ts");





var NotificationService = /** @class */ (function () {
    function NotificationService(http) {
        this.http = http;
    }
    NotificationService.prototype.updateNotificationDisplay = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/updateNotificationDisplay", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    NotificationService.prototype.checkNotification = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/checkNotification", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    NotificationService.prototype.fetchAllNotifications = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/fetchAllNotifications", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    NotificationService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }
    ]; };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/services/data/photos.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/data/photos.service.ts ***!
  \*************************************************/
/*! exports provided: PhotosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosService", function() { return PhotosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/services/settings/app-settings.service */ "./src/app/services/settings/app-settings.service.ts");





var PhotosService = /** @class */ (function () {
    function PhotosService(http) {
        this.http = http;
    }
    PhotosService.prototype.createPhotosAlbum = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/createPhotosAlbum", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    PhotosService.prototype.updatePhotosAlbum = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/updatePhotosAlbum", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    PhotosService.prototype.fetchPhotosAlbumInfo = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/fetchPhotosAlbumInfo", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    PhotosService.prototype.fetchAlbumPhotosInfo = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/fetchAlbumPhotosInfo", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    PhotosService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }
    ]; };
    PhotosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], PhotosService);
    return PhotosService;
}());



/***/ }),

/***/ "./src/app/services/data/profile.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/data/profile.service.ts ***!
  \**************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/services/settings/app-settings.service */ "./src/app/services/settings/app-settings.service.ts");





var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.profileInfo = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/profileInfo", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    ProfileService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }
    ]; };
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/services/data/registration.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/data/registration.service.ts ***!
  \*******************************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/services/settings/app-settings.service */ "./src/app/services/settings/app-settings.service.ts");





var RegistrationService = /** @class */ (function () {
    function RegistrationService(http) {
        this.http = http;
    }
    RegistrationService.prototype.signUp = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Accept': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/signUp", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    RegistrationService.prototype.logIn = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/logIn", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    RegistrationService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }
    ]; };
    RegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], RegistrationService);
    return RegistrationService;
}());



/***/ }),

/***/ "./src/app/services/data/search.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/data/search.service.ts ***!
  \*************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/services/settings/app-settings.service */ "./src/app/services/settings/app-settings.service.ts");





var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
    }
    SearchService.prototype.querySearch = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/querySearch", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    SearchService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }
    ]; };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/services/data/upload.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/data/upload.service.ts ***!
  \*************************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/settings/app-settings.service */ "./src/app/services/settings/app-settings.service.ts");





//import { Observable } from 'rxjs/Rx';
var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
        /*this.progress = Observable.create(observer => {
            this.progressObserver = observer
        }).share();*/
    }
    /*public makeFileRequest (url: string, params: string[], files: File[]): Observable<any> {
        return Observable.create(observer => {
            let formData: FormData = new FormData(),
                xhr: XMLHttpRequest = new XMLHttpRequest();

            for (let i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    } else {
                        observer.error(xhr.response);
                    }
                }
            };

            xhr.upload.onprogress = (event) => {
                this.progress = Math.round(event.loaded / event.total * 100);

                //this.progressObserver.next(this.progress);
            };

            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    }*/
    UploadService.prototype.uploadEncodedProfilePic = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Accept': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/uploadEncodedProfilePic", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    UploadService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }
    ]; };
    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/services/data/video.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/data/video.service.ts ***!
  \************************************************/
/*! exports provided: VideoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return VideoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/settings/app-settings.service */ "./src/app/services/settings/app-settings.service.ts");





var VideoService = /** @class */ (function () {
    function VideoService(http) {
        this.http = http;
    }
    VideoService.prototype.createVideoAlbum = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/createVideoAlbum", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    VideoService.prototype.updateVideoAlbum = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/updateVideoAlbum", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    VideoService.prototype.fetchVideoAlbumInfo = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/fetchVideoAlbumInfo", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    VideoService.prototype.fetchAlbumVideoInfo = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/fetchAlbumVideoInfo", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    VideoService.prototype.deletePreviewVideo = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        return this.http.post(_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + "/api/deletePreviewVideo", postObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    VideoService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }
    ]; };
    VideoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], VideoService);
    return VideoService;
}());



/***/ }),

/***/ "./src/app/services/settings/app-settings.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/settings/app-settings.service.ts ***!
  \***********************************************************/
/*! exports provided: AppSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettingsService", function() { return AppSettingsService; });
var port = 3000;
var AppSettingsService = /** @class */ (function () {
    function AppSettingsService() {
    }
    AppSettingsService.API_ENDPOINT = function (environment) {
        switch (environment) {
            case "local":
                return "";
            //return "https://localhost:"+port;
            //return "https://10.20.17.49:"+port;
            //return "https://192.168.225.177:"+port;
            case "dev":
                return "https://www.dev-wefrenz.com:" + port;
            case "prod":
                return "https://www.wefrenz.com" + port;
        }
    };
    return AppSettingsService;
}());



/***/ }),

/***/ "./src/app/services/shareobject/carouseldata.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/shareobject/carouseldata.service.ts ***!
  \**************************************************************/
/*! exports provided: CarouseldataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouseldataService", function() { return CarouseldataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var CarouseldataService = /** @class */ (function () {
    function CarouseldataService() {
        this.carouselSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("default message");
        this.currentCarouselSource = this.carouselSource.asObservable();
    }
    CarouseldataService.prototype.changeCarouselSource = function (msg) {
        this.carouselSource.next(msg);
    };
    CarouseldataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CarouseldataService);
    return CarouseldataService;
}());



/***/ }),

/***/ "./src/app/services/shareobject/routeinfo.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/shareobject/routeinfo.service.ts ***!
  \***********************************************************/
/*! exports provided: RouteinfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteinfoService", function() { return RouteinfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RouteinfoService = /** @class */ (function () {
    function RouteinfoService() {
    }
    RouteinfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], RouteinfoService);
    return RouteinfoService;
}());



/***/ }),

/***/ "./src/app/services/utility/country.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/utility/country.service.ts ***!
  \*****************************************************/
/*! exports provided: Country */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
var Country = /** @class */ (function () {
    function Country(id, name) {
        this.id = id;
        this.name = name;
    }
    Country.ctorParameters = function () { return [
        { type: Number },
        { type: String }
    ]; };
    return Country;
}());



/***/ }),

/***/ "./src/app/services/utility/data.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/utility/data.service.ts ***!
  \**************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _country_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country.service */ "./src/app/services/utility/country.service.ts");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state.service */ "./src/app/services/utility/state.service.ts");




var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.getCountries = function () {
        return [
            new _country_service__WEBPACK_IMPORTED_MODULE_2__["Country"](1, 'USA'),
            new _country_service__WEBPACK_IMPORTED_MODULE_2__["Country"](2, 'India'),
            new _country_service__WEBPACK_IMPORTED_MODULE_2__["Country"](3, 'Australia')
        ];
    };
    DataService.prototype.getStates = function () {
        return [
            new _state_service__WEBPACK_IMPORTED_MODULE_3__["State"](1, 1, 'Arizona'),
            new _state_service__WEBPACK_IMPORTED_MODULE_3__["State"](2, 1, 'Alaska'),
            new _state_service__WEBPACK_IMPORTED_MODULE_3__["State"](3, 1, 'Florida'),
            new _state_service__WEBPACK_IMPORTED_MODULE_3__["State"](4, 1, 'Hawaii'),
            new _state_service__WEBPACK_IMPORTED_MODULE_3__["State"](5, 2, 'Gujarat'),
            new _state_service__WEBPACK_IMPORTED_MODULE_3__["State"](6, 2, 'Goa'),
            new _state_service__WEBPACK_IMPORTED_MODULE_3__["State"](7, 2, 'Punjab'),
            new _state_service__WEBPACK_IMPORTED_MODULE_3__["State"](8, 3, 'Queensland'),
            new _state_service__WEBPACK_IMPORTED_MODULE_3__["State"](9, 3, 'South Australia'),
            new _state_service__WEBPACK_IMPORTED_MODULE_3__["State"](10, 3, 'Tasmania')
        ];
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/utility/state.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/utility/state.service.ts ***!
  \***************************************************/
/*! exports provided: State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
var State = /** @class */ (function () {
    function State(id, countryid, name) {
        this.id = id;
        this.countryid = countryid;
        this.name = name;
    }
    State.ctorParameters = function () { return [
        { type: Number },
        { type: Number },
        { type: String }
    ]; };
    return State;
}());



/***/ }),

/***/ "./src/app/services/utility/utility.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/utility/utility.service.ts ***!
  \*****************************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
var isInvokeWindow = false;
var UtilityService = /** @class */ (function () {
    function UtilityService() {
    }
    UtilityService.getPicDimension = function (dimension) {
        var width = dimension.split('x')[0];
        var height = dimension.split('x')[1];
        return { 'dimension': { 'width': width, 'height': height } };
    };
    UtilityService.getPicPosition = function (position) {
        var x = position.split('x')[0];
        var y = position.split('x')[1];
        return { 'position': { 'x': x, 'y': y } };
    };
    UtilityService.setSmileys = function (msg) {
        return msg
            .replace(/:\)/gi, "<span><img src='/assets/images/smileys/socialutility-emotion0-smile.gif'></img></span>")
            .replace(/:\(/gi, "<span><img src='/assets/images/smileys/socialutility-emotion1-sadsmile.gif'></img></span>")
            .replace(/B=\)/gi, "<span><img src='/assets/images/smileys/socialutility-emotion3-cool.gif'></img></span>")
            .replace(/:\D/, "<span><img src='/assets/images/smileys/socialutility-emotion2-bigsmile.gif'></img></span>")
            .replace(/B=\)/, "<span><img src='/assets/images/smileys/socialutility-emotion3-cool.gif'></img></span>")
            .replace(/:\=\O/, "<span><img src='/assets/images/smileys/socialutility-emotion4-surprised.gif'></img></span>")
            .replace(/;\)/, "<span><img src='/assets/images/smileys/socialutility-emotion5-wink.gif'></img></span>")
            .replace(/;\(/, "<span><img src='/assets/images/smileys/socialutility-emotion6-crying.gif'></img></span>");
    };
    UtilityService.setWindowInvocation = function (state) {
        isInvokeWindow = state;
    };
    UtilityService.getWindowInvocation = function () {
        return isInvokeWindow;
    };
    return UtilityService;
}());



/***/ }),

/***/ "./src/app/services/validators/validation.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/validators/validation.service.ts ***!
  \***********************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'blankValidator': 'Enter Some Value',
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 8 characters long, and contain a number.',
            'minlength': 'Minimum length ' + validatorValue.requiredLength
        };
        return config[validatorName];
    };
    ValidationService.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {8,100}           - Assert password is between 8 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    ValidationService.blankDataValidator = function (control) {
        // {8,100}           - Assert password is between 8 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value !== '') {
            return null;
        }
        else {
            return { 'blankValidator': true };
        }
    };
    return ValidationService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_services_validators_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/validators/validation.service */ "./src/app/services/validators/validation.service.ts");
/* harmony import */ var _app_services_data_registration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/data/registration.service */ "./src/app/services/data/registration.service.ts");





var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, registrationService) {
        this.formBuilder = formBuilder;
        this.registrationService = registrationService;
        this.renderLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.accountCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.serverMessage = '';
        this.isError = false;
        this.isStatus = false;
        this.signupForm = this.formBuilder.group({
            'fullName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _app_services_validators_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].emailValidator]],
            'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]]
        });
    }
    SignupComponent.prototype.ngAfterViewInit = function () {
    };
    SignupComponent.prototype.signUp = function () {
        var _this = this;
        if (this.signupForm.dirty && this.signupForm.valid) {
            var postObj = { 'fullname': this.signupForm.value.fullName,
                'email': this.signupForm.value.email,
                'password': this.signupForm.value.password };
            this.registrationService.signUp(postObj).subscribe(function (data) { return _this.afterSignUp(data); });
        }
    };
    SignupComponent.prototype.afterSignUp = function (result) {
        if (result.status === 'failure') {
            this.isError = true;
            this.isStatus = false;
            this.serverMessage = result.message;
        }
        else {
            this.isError = false;
            this.isStatus = true;
            this.serverMessage = result.message + ' Redirecting to Login.';
            //setTimeout(()=>{ this.accountCreated.emit(result.status);}, 4000)
            this.accountCreated.emit(result.status);
        }
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.showLogin = function () {
        this.renderLogin.emit('complete');
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _app_services_data_registration_service__WEBPACK_IMPORTED_MODULE_4__["RegistrationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], SignupComponent.prototype, "renderLogin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], SignupComponent.prototype, "accountCreated", void 0);
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
            providers: [_app_services_data_registration_service__WEBPACK_IMPORTED_MODULE_4__["RegistrationService"]],
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        })
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/stories/stories.component.css":
/*!***********************************************!*\
  !*** ./src/app/stories/stories.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feed-content{\n\toverflow-y: auto;\n}\n@media only screen and (max-width: 768px) {\n\t.profile-pic[_ngcontent-c5] {display:none;}\n\t.feed-content[_ngcontent-c2] {margin: 3%;}\n\t.story-feed[_ngcontent-c5] {padding: 6px 6px;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Rvcmllcy9zdG9yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLDZCQUE2QixZQUFZLENBQUM7Q0FDMUMsOEJBQThCLFVBQVUsQ0FBQztDQUN6Qyw0QkFBNEIsZ0JBQWdCLENBQUM7QUFDOUMiLCJmaWxlIjoic3JjL2FwcC9zdG9yaWVzL3N0b3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mZWVkLWNvbnRlbnR7XG5cdG92ZXJmbG93LXk6IGF1dG87XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdC5wcm9maWxlLXBpY1tfbmdjb250ZW50LWM1XSB7ZGlzcGxheTpub25lO31cblx0LmZlZWQtY29udGVudFtfbmdjb250ZW50LWMyXSB7bWFyZ2luOiAzJTt9XG5cdC5zdG9yeS1mZWVkW19uZ2NvbnRlbnQtYzVdIHtwYWRkaW5nOiA2cHggNnB4O31cbn0iXX0= */"

/***/ }),

/***/ "./src/app/stories/stories.component.ts":
/*!**********************************************!*\
  !*** ./src/app/stories/stories.component.ts ***!
  \**********************************************/
/*! exports provided: StoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoriesComponent", function() { return StoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var StoriesComponent = /** @class */ (function () {
    function StoriesComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.onAppLoggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onAppLoggedOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.feedScrollEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isMyProfile = false;
        this.userId = '';
        this.friendId = '';
        this.isStories = true;
        this.overFlowY = 'visible';
        this.action = 'post';
        this.screenHeight = window.screen.height - 175;
        route.params.subscribe(function (val) {
            var currentUser = localStorage.getItem('currentUser');
            var id = _this.route.snapshot.paramMap.get('id');
            if (!currentUser) {
                _this.triggerLoggedInCheck('onAppLoggedOut', { event: 'onAppLoggedOut', message: 'logged out' });
                _this.onAppLoggedOut.emit('logged Out');
                _this.router.navigate(['public']);
                return;
            }
            else {
                _this.triggerLoggedInCheck('onAppLoggedIn', { event: 'onAppLoggedIn', message: 'logged in' });
                _this.onAppLoggedIn.emit('logged In');
                localStorage.setItem('currentRoute', 'stories/' + id);
            }
            if (currentUser === id) {
                _this.isMyProfile = true;
                localStorage.setItem("isMyProfile", 'true');
            }
            else {
                _this.isMyProfile = false;
                localStorage.setItem("isMyProfile", 'false');
                var postObj = { 'userid': currentUser, 'friendid': id };
                _this.userId = currentUser;
                _this.friendId = id;
                //this.friendsService.getFriendInfo(postObj).subscribe(data => this.afterFriendInfo(data));
            }
            //this.routeSwitch.emit(this.isMyProfile);
            //this.getProfileInfo(id);
        });
    }
    StoriesComponent.prototype.ngOnInit = function () {
    };
    StoriesComponent.prototype.triggerLoggedInCheck = function (eventType, evtObj) {
        var evt = new CustomEvent(eventType, evtObj);
        window.dispatchEvent(evt);
    };
    StoriesComponent.prototype.onScroll = function (event) {
        var element = this.myScrollContainer.nativeElement;
        var atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
        if (atBottom) {
            //this.feedScrollEnd.emit('scroll end');
            this.storyBoxComponent.onFeedScrollEnd();
        }
    };
    StoriesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollMe', { static: true })
    ], StoriesComponent.prototype, "myScrollContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('storyBoxComponent', { static: true })
    ], StoriesComponent.prototype, "storyBoxComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], StoriesComponent.prototype, "onAppLoggedIn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], StoriesComponent.prototype, "onAppLoggedOut", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], StoriesComponent.prototype, "feedScrollEnd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('scroll', ['$event'])
    ], StoriesComponent.prototype, "onScroll", null);
    StoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stories',
            template: __webpack_require__(/*! raw-loader!./stories.component.html */ "./node_modules/raw-loader/index.js!./src/app/stories/stories.component.html"),
            styles: [__webpack_require__(/*! ./stories.component.css */ "./src/app/stories/stories.component.css")]
        })
    ], StoriesComponent);
    return StoriesComponent;
}());



/***/ }),

/***/ "./src/app/story-box/story-box.component.css":
/*!***************************************************!*\
  !*** ./src/app/story-box/story-box.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".story-feed{\n\tpadding: 5px;\n}\n.story-box{\n\theight: 100px;\n\tpadding: 3px ;\n\tborder: 1px solid #e6e6e6;\n}\n.profile-pic{\n    margin: 0px 2px;\n    width: 45px;\n    height: 45px;\n    position: absolute;\n    left: 5px;\n    border-radius: 50%;\n}\n.control-bar{\n\tmargin: 6px 0px 1px 0px;\n\tfont-size: 9px;\n}\n.post-button{\n    margin-left: 5px;\n}\n.post-btn{\n    width: auto;\n    height: 17px;\n    border-radius: 0px;\n    padding: 0px 3px !important;\n    line-height: 12px;\n    font-size: 12px !important;\n    background-color: #fff !important;\n    border: 1px solid #2b90d9 !important;\n    color: #2b90d9 !important;\n    background: #d9e1e8 !important;\n    height: 30px;\n    border-radius: 3px;\n}\n.post-btn:hover *{\n    color: red;\n}\n.post-btn:hover{\n    border: 1px solid red !important;\n}\n.file-input-container{\n    display: none;\n}\n.modal{\n    width: 500px !important;\n    height: 500px !important;  \n}\n#previewMusicPlayer{\n    height: 189px;\n    background: #000;\n}\napp-feeditem{\n    float: left;\n    width: 100%;\n    min-height: 60px;\n    border: 1px solid #e6e6e6;\n    margin: 5px 0px 0px 0px;\n    border-radius: 3px;\n    padding: 5px;\n}\n.preview-posted-pic{\n    width: 300px;\n    height: 300px;\n    background-size: cover !important;\n}\n.post-desc-content{\n    margin-top: 5px;\n}\n.action-bar{\n    margin-left: -5px;\n}\n.fa-map-marker{\n    font-size: 14px;\n}\n.text-styles{\n    margin: 40px 35px;\n    position: absolute;\n    width: 112px;\n}\n.comment-box{\n    height: 60px;\n    padding-left: 0px;\n    padding-right: 0px;\n}\n.comment-box .story-box{\n    height: 60px;\n    width: 275px;\n    padding-right: 15px;\n}\n.comment-box .control-bar{\n    width: 100%;\n}\n.font-sizes{\n    height: 100px;\n    overflow: auto;\n}\n#emotionArrow{\n    margin: 30px 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcnktYm94L3N0b3J5LWJveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsYUFBYTtDQUNiLHlCQUF5QjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7QUFDQTtDQUNDLHVCQUF1QjtDQUN2QixjQUFjO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsaUNBQWlDO0lBQ2pDLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztBQUNsQjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc3RvcnktYm94L3N0b3J5LWJveC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0b3J5LWZlZWR7XG5cdHBhZGRpbmc6IDVweDtcbn1cbi5zdG9yeS1ib3h7XG5cdGhlaWdodDogMTAwcHg7XG5cdHBhZGRpbmc6IDNweCA7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XG59XG4ucHJvZmlsZS1waWN7XG4gICAgbWFyZ2luOiAwcHggMnB4O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5jb250cm9sLWJhcntcblx0bWFyZ2luOiA2cHggMHB4IDFweCAwcHg7XG5cdGZvbnQtc2l6ZTogOXB4O1xufVxuLnBvc3QtYnV0dG9ue1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4ucG9zdC1idG57XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAxN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBwYWRkaW5nOiAwcHggM3B4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyYjkwZDkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzJiOTBkOSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICNkOWUxZTggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLnBvc3QtYnRuOmhvdmVyICp7XG4gICAgY29sb3I6IHJlZDtcbn1cbi5wb3N0LWJ0bjpob3ZlcntcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQgIWltcG9ydGFudDtcbn1cbi5maWxlLWlucHV0LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLm1vZGFse1xuICAgIHdpZHRoOiA1MDBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNTAwcHggIWltcG9ydGFudDsgIFxufVxuI3ByZXZpZXdNdXNpY1BsYXllcntcbiAgICBoZWlnaHQ6IDE4OXB4O1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG59XG5hcHAtZmVlZGl0ZW17XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogNjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xuICAgIG1hcmdpbjogNXB4IDBweCAwcHggMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG4ucHJldmlldy1wb3N0ZWQtcGlje1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbn1cbi5wb3N0LWRlc2MtY29udGVudHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uYWN0aW9uLWJhcntcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbn1cbi5mYS1tYXAtbWFya2Vye1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50ZXh0LXN0eWxlc3tcbiAgICBtYXJnaW46IDQwcHggMzVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDExMnB4O1xufVxuLmNvbW1lbnQtYm94e1xuICAgIGhlaWdodDogNjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG4uY29tbWVudC1ib3ggLnN0b3J5LWJveHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDI3NXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG4uY29tbWVudC1ib3ggLmNvbnRyb2wtYmFye1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmZvbnQtc2l6ZXN7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuI2Vtb3Rpb25BcnJvd3tcbiAgICBtYXJnaW46IDMwcHggODBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/story-box/story-box.component.ts":
/*!**************************************************!*\
  !*** ./src/app/story-box/story-box.component.ts ***!
  \**************************************************/
/*! exports provided: StoryBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryBoxComponent", function() { return StoryBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _modal_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal.service */ "./src/app/modal/modal.service.ts");
/* harmony import */ var _app_services_data_feed_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/services/data/feed.service */ "./src/app/services/data/feed.service.ts");
/* harmony import */ var _app_services_data_comment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/services/data/comment.service */ "./src/app/services/data/comment.service.ts");
/* harmony import */ var _app_services_data_friends_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app/services/data/friends.service */ "./src/app/services/data/friends.service.ts");
/* harmony import */ var _app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app/services/settings/app-settings.service */ "./src/app/services/settings/app-settings.service.ts");
/* harmony import */ var _checkin_checkin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../checkin/checkin.component */ "./src/app/checkin/checkin.component.ts");











var StoryBoxComponent = /** @class */ (function () {
    function StoryBoxComponent(checkinComponent, router, formBuilder, modalService, feedService, commentService, friendsService) {
        var _this = this;
        this.checkinComponent = checkinComponent;
        this.router = router;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.feedService = feedService;
        this.commentService = commentService;
        this.friendsService = friendsService;
        this.refreshCommentItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.profilePicWidth = 50;
        this.loginData = undefined;
        this.profilePic = '';
        this.color = "#000";
        this.isShowFontFamily = false;
        this.isShowFontSize = false;
        this.fontFamily = 'Open Sans, sans-serif';
        this.fontSize = 11 + 'px';
        this.isBoldBtnHighLight = false;
        this.isULBtnHighLight = false;
        this.isIBtnHighLight = false;
        this.isEmotionsHighLight = false;
        this.isAddPost = true;
        this.isPostImage = true;
        this.postTitle = '';
        this.postDesc = '';
        this.fontWeight = 'normal';
        this.txtDeco = 'none';
        this.fontStyle = 'normal';
        this.isSmileyAdded = false;
        this.isShowTextStyling = false;
        this.storyContent = '';
        this.modalId = 'storyModal';
        this.userId = '';
        this.fullName = '';
        this.email = '';
        this.friendIdArr = [];
        this.feedItem = [];
        this.fileType = '';
        this.postedMusicPath = '';
        this.uploadProgress = 0;
        this.isProgress = false;
        this.postId = '';
        this.feedLength = 0;
        this.isComment = false;
        this.isAddComment = true;
        this.skip = 0;
        this.limit = 10;
        this.total = 0;
        this.isLoading = false;
        var loginData = JSON.parse(localStorage.getItem('loginData'));
        this.userId = loginData.username;
        this.email = loginData.username;
        this.fullName = loginData.fullname;
        this.loginData = JSON.parse(localStorage.getItem('loginData'));
        this.profilePic = this.loginData.profilepic.imageBuffer;
        this.imageUploadForm = this.formBuilder.group({
            'file': ['']
        });
        this.imageGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
        this.musicUploadForm = this.formBuilder.group({
            'file': ['']
        });
        this.musicGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
        this.videoUploadForm = this.formBuilder.group({
            'file': ['']
        });
        this.videoGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
        router.events.forEach(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                clearInterval(_this.timer);
            }
        });
    }
    StoryBoxComponent.prototype.ngOnInit = function () {
    };
    StoryBoxComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.action) {
            if (this.action === 'comment') {
                this.isComment = true;
            }
            else {
                this.getAllConfirmedFriends();
            }
        }
        if (this.operation) {
            if (this.operation === 'add') {
                this.isAddComment = true;
            }
            else {
                this.isAddComment = false;
                this.storyContent = this.replyCommentItem.commenttext;
            }
        }
        this.timer = setInterval(function () {
            _this.resetFeedParam();
            _this.refreshFeed();
        }, 120000);
    };
    StoryBoxComponent.prototype.clickedOutside = function ($event) {
        this.isShowFontFamily = false;
        this.isShowFontSize = false;
        this.isEmotionsHighLight = false;
        this.isShowTextStyling = false;
    };
    StoryBoxComponent.prototype.clickedInside = function ($event) {
        $event.preventDefault();
        $event.stopPropagation(); // <- that will stop propagation on lower layers
    };
    StoryBoxComponent.prototype.colorPickerChange = function (event) {
        console.log(this.color);
    };
    StoryBoxComponent.prototype.toggleFontFamily = function (event) {
        this.isShowFontSize = false;
        this.isEmotionsHighLight = false;
        if (!this.isShowFontFamily) {
            this.isShowFontFamily = true;
        }
        else {
            this.isShowFontFamily = false;
        }
    };
    StoryBoxComponent.prototype.toggleTextStyling = function (event) {
        this.isEmotionsHighLight = false;
        if (this.isShowTextStyling) {
            this.isShowTextStyling = false;
        }
        else {
            this.isShowTextStyling = true;
        }
    };
    StoryBoxComponent.prototype.applyFontFamily = function (event, fontFamily) {
        this.isShowFontFamily = false;
        this.fontFamily = fontFamily;
    };
    StoryBoxComponent.prototype.toggleFontSize = function (event) {
        this.isShowFontFamily = false;
        this.isEmotionsHighLight = false;
        if (!this.isShowFontSize) {
            this.isShowFontSize = true;
        }
        else {
            this.isShowFontSize = false;
        }
    };
    StoryBoxComponent.prototype.applyFontSize = function (event, fontSize) {
        this.isShowFontSize = false;
        this.fontSize = fontSize.toString() + 'px';
    };
    StoryBoxComponent.prototype.applyBold = function (event) {
        if (this.isBoldBtnHighLight) {
            this.fontWeight = 'normal';
            this.isBoldBtnHighLight = false;
        }
        else {
            this.fontWeight = 'bold';
            this.isBoldBtnHighLight = true;
        }
    };
    StoryBoxComponent.prototype.applyUnderline = function (event) {
        if (this.isULBtnHighLight) {
            this.txtDeco = 'none';
            this.isULBtnHighLight = false;
        }
        else {
            this.txtDeco = 'underline';
            this.isULBtnHighLight = true;
        }
    };
    StoryBoxComponent.prototype.applyItalic = function (event) {
        if (this.isIBtnHighLight) {
            this.fontStyle = 'normal';
            this.isIBtnHighLight = false;
        }
        else {
            this.fontStyle = 'italic';
            this.isIBtnHighLight = true;
        }
    };
    StoryBoxComponent.prototype.showEmotions = function (event) {
        this.isShowFontFamily = false;
        this.isShowFontSize = false;
        this.isShowTextStyling = false;
        if (this.isEmotionsHighLight) {
            this.isEmotionsHighLight = false;
        }
        else {
            this.isEmotionsHighLight = true;
        }
    };
    StoryBoxComponent.prototype.onStoryContentChange = function (event) {
        if (this.storyBox.nativeElement.innerText.trim().length === 0) {
            this.isSmileyAdded = false;
        }
        switch (event.keyCode) {
            case 8:
                break;
            case 13:
                this.syncEmotion('');
                break;
            case 16:
                break;
            case 18:
                break;
            case 32:
                break;
            case 37:
                break;
            case 38:
                break;
            case 39:
                break;
            case 40:
                break;
            default:
        }
    };
    StoryBoxComponent.prototype.onStoryContentChanged = function (keyCode) {
        //this.storyContentText = 
        /*if(keyCode === 32){
            let storyContents = this.storyBox.nativeElement.innerHTML;
            storyContents = UtilityService.setSmileys(storyContents);
            console.log('change'+storyContents);
            this.storyContent = storyContents;
            this.setEndOfContenteditable(this.storyBox.nativeElement);
        }*/
    };
    StoryBoxComponent.prototype.setEndOfContenteditable = function (contentEditableElement) {
        var range, selection;
        if (document.createRange) //Firefox, Chrome, Opera, Safari, IE 9+
         {
            range = document.createRange(); //Create a range (a range is a like the selection but invisible)
            range.selectNodeContents(contentEditableElement); //Select the entire contents of the element with the range
            range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
            selection = window.getSelection(); //get the selection object (allows you to change selection)
            selection.removeAllRanges(); //remove any selections already made
            try {
                selection.addRange(range); //make the range you have just created the visible selection
            }
            catch (err) {
                console.log(err);
            }
        }
        /*else if(document.selection)//IE 8 and lower
        {
            range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
            range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
            range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
            range.select();//Select the range (make it the visible selection
        }*/
    };
    StoryBoxComponent.prototype.addEmotion = function (event, symbol) {
        this.syncEmotion(symbol);
    };
    StoryBoxComponent.prototype.syncEmotion = function (symbol) {
        var _this = this;
        this.isSmileyAdded = true;
        var storyContents = this.storyBox.nativeElement.innerHTML + symbol;
        storyContents = _app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"].setSmileys(storyContents);
        console.log('change' + storyContents);
        this.storyContent = storyContents;
        setTimeout(function () {
            _this.setEndOfContenteditable(_this.storyBox.nativeElement);
        }, 0.0001);
    };
    StoryBoxComponent.prototype.openAppModal = function (modalType) {
        if (modalType === void 0) { modalType = null; }
        var self = this;
        self.modalService.open(self.modalId);
        if (modalType === 'checkin') {
            self.checkinComponent.resetCheckin();
        }
    };
    StoryBoxComponent.prototype.editCurrentFeedItem = function (event) {
        var self = this;
        self.postId = event.item._id;
        self.fileType = event.item.type;
        self.postTitle = event.item.title;
        self.postDesc = event.item.description;
        if (self.fileType === 'text') {
            self.isAddPost = false;
            self.color = event.item.colorInfo;
            self.fontFamily = event.item.fontFamily;
            self.fontSize = event.item.fontSize;
            self.fontStyle = event.item.fontStyle;
            self.txtDeco = event.item.textDecoration;
            self.fontWeight = event.item.fontWeight;
            self.storyContent = event.item.post;
            var element = document.querySelector("#feedTop");
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
        else if (self.fileType === 'image') {
            self.isPostImage = false;
            self.encodedImage = event.item.filePath;
            self.openAppModal();
        }
        else {
            self.postedMusicPath = event.item.filePath;
            self.musicPlayer.nativeElement.load();
            self.openAppModal();
        }
    };
    StoryBoxComponent.prototype.fileChangeEvent = function (event, type) {
        this.fileType = type;
        //if(this.fileType === 'image'){
        this.files = event.target.files[0];
        //this.uploadCanvasPic();
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                //$('#preview').attr('src', e.target.result);
                if (type === 'image') {
                    self.encodedImage = e.target.result;
                }
                else {
                    self.postedMusicPath = e.target.result;
                    self.musicPlayer.nativeElement.load();
                    uploadMusic();
                }
                self.openAppModal();
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        function uploadMusic() {
            var formData = new FormData();
            formData.append('uploadfile', self.files);
            formData.append('userid', self.userId);
            var xhr = new XMLHttpRequest();
            xhr.open('post', _app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_9__["AppSettingsService"].API_ENDPOINT("local") + '/api/uploadMusicFeed', true);
            xhr.upload.onprogress = function (e) {
                if (e.lengthComputable) {
                    var percentage = (e.loaded / e.total) * 100;
                    console.log(percentage);
                    if ((percentage > 0) && (percentage < 100)) {
                        self.isProgress = true;
                    }
                    else {
                        self.isProgress = false;
                    }
                    self.uploadProgress = percentage;
                    //$('div.progress div').css('width', percentage.toFixed(0) + '%');
                    //$('div.progress div').html(percentage.toFixed(0) + '%');
                }
            };
            xhr.onerror = function (e) {
                alert('An error occurred while submitting the form. Maybe your file is too big');
            };
            xhr.onload = function () {
                self.postedMusicPath = JSON.parse(xhr.responseText).musicPath;
                /*let file = xhr.responseText;
                $('div.progress div').css('width','0%');
                $('div.progress').hide();
                showMsg("alert alert-success", "File uploaded successfully!");
                $('#myFile').val('');*/
                /*if(self.isAudioAlbum){
                    self.fetchAudioAlbumInfo();
                }else{
                    self.fetchAlbumAudioInfo();
                }*/
            };
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    callback(xhr.responseText); // Another callback here
                }
            };
            function callback(responseText) {
                if (JSON.parse(responseText).status === 'sessionExpired') {
                    alert('Session Expired, Please Login Again');
                }
            }
            xhr.send(formData);
            return false;
        }
        //}
        /*
        let self = this;
        let userId = this.userId;
        let file: any;
        if (event.target.files && event.target.files[0]) {
          file = event.target.files[0];
          uploadPhoto();
        }
        function uploadPhoto() {
            let formData = new FormData();
            formData.append('uploadfile', file);
            formData.append('userid', userId);
            if(!directUpload){
                formData.append('album', self.photosInfo.title);
            }else{
                formData.append('album', 'untitled');
        }

        let xhr = new XMLHttpRequest();
        xhr.open('post', AppSettingsService.API_ENDPOINT("local")+'/api/uploadPhotos', true);
        xhr.upload.onprogress = function(e) {
            if (e.lengthComputable) {
                let percentage = (e.loaded / e.total) * 100;
                console.log(percentage);
                if((percentage > 0) && (percentage < 100)){
                    self.isProgress = true;
                }else{
                    self.isProgress = false;
                }
            self.uploadProgress = percentage;

            //$('div.progress div').css('width', percentage.toFixed(0) + '%');
            //$('div.progress div').html(percentage.toFixed(0) + '%');
            }
        };

        xhr.onerror = function(e) {
            alert('An error occurred while submitting the form. Maybe your file is too big');
        };
        xhr.onload = function() {
            if(self.isPhotosAlbum){
              self.fetchPhotosAlbumInfo();
            }else{
              self.fetchAlbumPhotosInfo();
            }
        };

        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4 && xhr.status == 200)
            {
                callback(xhr.responseText); // Another callback here
            }
        };

        function callback(responseText){
            if(JSON.parse(responseText).status === 'sessionExpired'){
                alert('Session Expired, Please Login Again');
            }
        }

        xhr.send(formData);
        return false;*/
    };
    StoryBoxComponent.prototype.postStory = function (event) {
        this.syncEmotion('');
        /*if(this.isComment){
            alert(this.feedCommentItem._id);
        }*/
        if (this.isComment) {
            this.saveComment(undefined, 'text', this.storyContent, '', '', '', this.color, this.fontFamily, this.fontSize, this.fontStyle, this.txtDeco, this.fontWeight);
        }
        else {
            this.postItem(undefined, 'text', this.storyContent, '', '', '', '', this.color, this.fontFamily, this.fontSize, this.fontStyle, this.txtDeco, this.fontWeight);
        }
    };
    StoryBoxComponent.prototype.updateStory = function (event) {
        this.syncEmotion('');
        this.postItem(this.postId, 'text', this.storyContent, '', '', '', '', this.color, this.fontFamily, this.fontSize, this.fontStyle, this.txtDeco, this.fontWeight);
    };
    StoryBoxComponent.prototype.updateCommentItem = function (event) {
        this.syncEmotion('');
        this.updateComment(this.replyCommentItem._id, 'text', this.storyContent, '', '', '', this.color, this.fontFamily, this.fontSize, this.fontStyle, this.txtDeco, this.fontWeight);
    };
    StoryBoxComponent.prototype.postImage = function (event) {
        this.postItem(undefined, 'image', '', this.encodedImage, '', this.postTitle, this.postDesc, '#000000', 'Open Sans, sans-serif', '11px', 'normal', 'none', 'normal');
        //this.storyModal.close();
        this.modalService.close(this.modalId);
    };
    StoryBoxComponent.prototype.updateImage = function (event) {
        this.postItem(this.postId, 'image', '', this.encodedImage, this.postTitle, '', this.postDesc, '#000000', 'Open Sans, sans-serif', '11px', 'normal', 'none', 'normal');
        //this.storyModal.close();
        this.modalService.close(this.modalId);
    };
    StoryBoxComponent.prototype.postMusic = function (event) {
        this.postItem(undefined, 'music', '', this.postedMusicPath, this.postTitle, '', this.postDesc, '#000000', 'Open Sans, sans-serif', '11px', 'normal', 'none', 'normal');
        //this.storyModal.close();
        this.modalService.close(this.modalId);
    };
    StoryBoxComponent.prototype.onCheckIn = function (event) {
        this.postItem(undefined, 'checkin', '', event.data.mapData, '', event.data.postCheckIn, event.data.postDesc, '#000000', 'Open Sans, sans-serif', '11px', 'normal', 'none', 'normal');
        //this.storyModal.close();
        this.modalService.close(this.modalId);
    };
    StoryBoxComponent.prototype.postItem = function (postId, type, storyContent, filePath, poster, title, desc, color, fontFamily, fontSize, fontStyle, txtDeco, fontWeight) {
        var _this = this;
        var postObj = { 'id': postId,
            'username': this.userId,
            'email': this.email,
            'fullname': this.fullName,
            'profilepic': this.profilePic,
            'post': storyContent,
            'type': type,
            'title': title,
            'description': desc,
            'isReady': true,
            'isNotified': false,
            'coolArr': [],
            'commentArr': [],
            'filePath': filePath,
            'poster': poster,
            'colorInfo': color,
            'fontFamily': fontFamily,
            'fontSize': fontSize,
            'fontStyle': fontStyle,
            'textDecoration': txtDeco,
            'fontWeight': fontWeight,
            'addWatcherArr': []
        };
        this.feedService.savePost(postObj).subscribe(function (data) { return _this.afterPostSaved(data); });
    };
    StoryBoxComponent.prototype.saveComment = function (commentId, type, storyContent, filePath, title, desc, color, fontFamily, fontSize, fontStyle, txtDeco, fontWeight) {
        var _this = this;
        var postObj = { 'id': commentId,
            'feeditemid': this.feedCommentItem._id || undefined,
            'commenttext': storyContent,
            'commentfrom': this.userId,
            'commentto': this.feedCommentItem.userid || undefined,
            'fullname': this.fullName,
            'profilepic': this.profilePic,
            'commenttype': type,
            'filepath': filePath,
            'isReady': true,
            'isNotified': false,
            'coolArr': [],
            'commentArr': [],
            'filePath': filePath,
            'colorInfo': color,
            'fontFamily': fontFamily,
            'fontSize': fontSize,
            'fontStyle': fontStyle,
            'textDecoration': txtDeco,
            'fontWeight': fontWeight,
            'addWatcherArr': []
        };
        this.commentService.saveComment(postObj).subscribe(function (data) { return _this.afterCommentSaved(data); });
    };
    StoryBoxComponent.prototype.updateComment = function (commentId, type, storyContent, filePath, title, desc, color, fontFamily, fontSize, fontStyle, txtDeco, fontWeight) {
        var _this = this;
        var postObj = { 'id': commentId,
            'commenttext': storyContent,
            'fullname': this.fullName,
            'profilepic': this.profilePic,
            'commenttype': type,
            'filepath': filePath,
            'isReady': true,
            'isNotified': false,
            'coolArr': [],
            'commentArr': [],
            'filePath': filePath,
            'colorInfo': color,
            'fontFamily': fontFamily,
            'fontSize': fontSize,
            'fontStyle': fontStyle,
            'textDecoration': txtDeco,
            'fontWeight': fontWeight,
            'addWatcherArr': []
        };
        this.commentService.updateComment(postObj).subscribe(function (data) { return _this.afterCommentUpdated(data); });
    };
    StoryBoxComponent.prototype.afterPostSaved = function (result) {
        this.isSmileyAdded = false;
        this.storyContent = '';
        this.postTitle = '';
        this.postDesc = '';
        this.isAddPost = true;
        this.isPostImage = true;
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            this.resetFeedParam();
            this.refreshFeed();
        }
    };
    StoryBoxComponent.prototype.resetFeedParam = function () {
        this.skip = 0;
        this.limit = 10;
        this.total = 0;
        //this.feedItem = [];
    };
    StoryBoxComponent.prototype.afterCommentSaved = function (result) {
        /*this.isSmileyAdded = false;
        this.storyContent = '';
        this.postTitle = '';
        this.postDesc = '';
        this.isAddPost = true;
        this.isPostImage = true;*/
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            this.refreshCommentItem.emit({ data: this.feedCommentItem._id });
        }
    };
    StoryBoxComponent.prototype.afterCommentUpdated = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            this.refreshCommentItem.emit({ data: this.replyCommentItem.commentid });
        }
    };
    StoryBoxComponent.prototype.getAllConfirmedFriends = function () {
        var _this = this;
        var postObj = { 'userid': this.userId };
        this.friendsService.getAllConfirmedFriends(postObj).subscribe(function (data) { return _this.afterGetAllConfirmedFriends(data); });
    };
    StoryBoxComponent.prototype.afterGetAllConfirmedFriends = function (result) {
        this.friendIdArr.push(this.userId);
        for (var i in result) {
            if (this.userId !== result[i].friendid) {
                this.friendIdArr.push(result[i].friendid);
            }
            if (this.userId !== result[i].userid) {
                this.friendIdArr.push(result[i].userid);
            }
        }
        this.getFeed();
    };
    StoryBoxComponent.prototype.getFeed = function () {
        var _this = this;
        this.isLoading = true;
        var postObj = { 'reqidarr': this.friendIdArr, 'skip': this.skip, 'limit': this.limit };
        this.feedService.refreshFeed(postObj).subscribe(function (data) { return _this.afterGetFeed(data); });
    };
    StoryBoxComponent.prototype.afterGetFeed = function (result) {
        var data = result.infos;
        this.total = result.total;
        for (var i in data) {
            this.feedItem.push(data[i]);
        }
        this.isLoading = false;
    };
    StoryBoxComponent.prototype.refreshFeed = function () {
        var _this = this;
        this.isLoading = true;
        var postObj = { 'reqidarr': this.friendIdArr, 'skip': this.skip, 'limit': this.limit };
        this.feedService.refreshFeed(postObj).subscribe(function (data) { return _this.afterRefreshFeed(data); });
    };
    StoryBoxComponent.prototype.refreshFeedItem = function (event) {
        this.resetFeedParam();
        this.refreshFeed();
    };
    StoryBoxComponent.prototype.afterRefreshFeed = function (result) {
        //let scrollTop = this.storyBox.nativeElement.scrollTop();
        this.feedItem = [];
        var data = result.infos;
        this.total = result.total;
        for (var i in data) {
            this.feedItem.push(data[i]);
        }
        this.isLoading = false;
    };
    StoryBoxComponent.prototype.doCheckIn = function (event) {
        this.fileType = 'checkin';
        this.openAppModal('checkin');
    };
    StoryBoxComponent.prototype.onModalClosed = function (event) {
        alert('modal closed');
    };
    StoryBoxComponent.prototype.onFeedScrollEnd = function () {
        this.skip = this.skip + this.limit;
        if (this.skip < this.total) {
            this.getFeed();
        }
    };
    StoryBoxComponent.ctorParameters = function () { return [
        { type: _checkin_checkin_component__WEBPACK_IMPORTED_MODULE_10__["CheckinComponent"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _modal_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"] },
        { type: _app_services_data_feed_service__WEBPACK_IMPORTED_MODULE_6__["FeedService"] },
        { type: _app_services_data_comment_service__WEBPACK_IMPORTED_MODULE_7__["CommentService"] },
        { type: _app_services_data_friends_service__WEBPACK_IMPORTED_MODULE_8__["FriendsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('action')
    ], StoryBoxComponent.prototype, "action", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('feedCommentItem')
    ], StoryBoxComponent.prototype, "feedCommentItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('operation')
    ], StoryBoxComponent.prototype, "operation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('replyCommentItem')
    ], StoryBoxComponent.prototype, "replyCommentItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('storyBox', { static: true })
    ], StoryBoxComponent.prototype, "storyBox", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('storyFeed', { static: true })
    ], StoryBoxComponent.prototype, "storyFeed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('musicInput', { static: true })
    ], StoryBoxComponent.prototype, "musicInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('musicPlayer', { static: true })
    ], StoryBoxComponent.prototype, "musicPlayer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], StoryBoxComponent.prototype, "refreshCommentItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event'])
    ], StoryBoxComponent.prototype, "clickedOutside", null);
    StoryBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-story-box',
            template: __webpack_require__(/*! raw-loader!./story-box.component.html */ "./node_modules/raw-loader/index.js!./src/app/story-box/story-box.component.html"),
            providers: [_app_services_data_feed_service__WEBPACK_IMPORTED_MODULE_6__["FeedService"], _app_services_data_comment_service__WEBPACK_IMPORTED_MODULE_7__["CommentService"], _app_services_data_friends_service__WEBPACK_IMPORTED_MODULE_8__["FriendsService"], _checkin_checkin_component__WEBPACK_IMPORTED_MODULE_10__["CheckinComponent"]],
            styles: [__webpack_require__(/*! ./story-box.component.css */ "./src/app/story-box/story-box.component.css")]
        })
    ], StoryBoxComponent);
    return StoryBoxComponent;
}());



/***/ }),

/***/ "./src/app/tile-menu/tile-menu.component.css":
/*!***************************************************!*\
  !*** ./src/app/tile-menu/tile-menu.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stories-tile{\n    margin: 5px;\n}\n.entertainment-tile{\n\tmargin: 5px 5px 0px 0px;\n}\n.people-tile{\n\tmargin: 0px 5px;\n}\n.market-tile{\n\tmargin: 0px 5px 0px 0px;\n}\n.tile-name{\n\tcolor: #2b90d9;\n\tfont-size: 15px;\n\tmargin-left: 5px;\n}\n.tile-info{\n\tcolor: #2b90d9;\t\n}\n.tile-thumb:hover{\n\tborder: 1px solid #1da1f2;\n}\n.tile-thumb:hover .tile-name, .tile-thumb:hover .tile-info, .tile-thumb:hover i{\n\tcolor: #1da1f2;\n}\n.high-light-border{\n\tborder: 1px solid #1da1f2 !important;\n}\n.low-light-border{\n\tborder: 1px solid ##2b90d9 !important;\n}\n.tile-thumb, .tile-thumb *{\n\tcursor: pointer;\n}\n.tile-thumb{\n\tmin-height: 105px;\n}\n@media only screen and (max-width: 991px) {\n\t.tile-thumb{\n\t\tmin-height: 150px;\n\t}\n   .entertainment-tile{\n   \t\tmargin: 5px 5px 5px 0px;\n   \t} \n   \t.market-tile{\n   \t\tmargin: 0px 5px 0px 0px;\n   \t}\n}\n@media only screen and (max-width: 768px) {\n\t.entertainment-tile{\n    \tmargin: 0px 5px 5px 5px;\n    }\n    .market-tile{\n    \tmargin: 5px 5px 0px 5px;\n\t}\n}\t\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGlsZS1tZW51L3RpbGUtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7Q0FDQyx1QkFBdUI7QUFDeEI7QUFDQTtDQUNDLGVBQWU7QUFDaEI7QUFDQTtDQUNDLHVCQUF1QjtBQUN4QjtBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLG9DQUFvQztBQUNyQztBQUVBO0NBQ0MscUNBQXFDO0FBQ3RDO0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxpQkFBaUI7QUFDbEI7QUFFQTtDQUNDO0VBQ0MsaUJBQWlCO0NBQ2xCO0dBQ0U7S0FDRSx1QkFBdUI7SUFDeEI7SUFDQTtLQUNDLHVCQUF1QjtJQUN4QjtBQUNKO0FBRUE7Q0FDQztLQUNJLHVCQUF1QjtJQUN4QjtJQUNBO0tBQ0MsdUJBQXVCO0NBQzNCO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC90aWxlLW1lbnUvdGlsZS1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Rvcmllcy10aWxle1xuICAgIG1hcmdpbjogNXB4O1xufVxuLmVudGVydGFpbm1lbnQtdGlsZXtcblx0bWFyZ2luOiA1cHggNXB4IDBweCAwcHg7XG59XG4ucGVvcGxlLXRpbGV7XG5cdG1hcmdpbjogMHB4IDVweDtcbn1cbi5tYXJrZXQtdGlsZXtcblx0bWFyZ2luOiAwcHggNXB4IDBweCAwcHg7XG59XG4udGlsZS1uYW1le1xuXHRjb2xvcjogIzJiOTBkOTtcblx0Zm9udC1zaXplOiAxNXB4O1xuXHRtYXJnaW4tbGVmdDogNXB4O1xufVxuLnRpbGUtaW5mb3tcblx0Y29sb3I6ICMyYjkwZDk7XHRcbn1cbi50aWxlLXRodW1iOmhvdmVye1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMWRhMWYyO1xufVxuLnRpbGUtdGh1bWI6aG92ZXIgLnRpbGUtbmFtZSwgLnRpbGUtdGh1bWI6aG92ZXIgLnRpbGUtaW5mbywgLnRpbGUtdGh1bWI6aG92ZXIgaXtcblx0Y29sb3I6ICMxZGExZjI7XG59IFxuLmhpZ2gtbGlnaHQtYm9yZGVye1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMWRhMWYyICFpbXBvcnRhbnQ7XG59XG5cbi5sb3ctbGlnaHQtYm9yZGVye1xuXHRib3JkZXI6IDFweCBzb2xpZCAjIzJiOTBkOSAhaW1wb3J0YW50O1xufVxuLnRpbGUtdGh1bWIsIC50aWxlLXRodW1iICp7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cbi50aWxlLXRodW1ie1xuXHRtaW4taGVpZ2h0OiAxMDVweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuXHQudGlsZS10aHVtYntcblx0XHRtaW4taGVpZ2h0OiAxNTBweDtcblx0fVxuICAgLmVudGVydGFpbm1lbnQtdGlsZXtcbiAgIFx0XHRtYXJnaW46IDVweCA1cHggNXB4IDBweDtcbiAgIFx0fSBcbiAgIFx0Lm1hcmtldC10aWxle1xuICAgXHRcdG1hcmdpbjogMHB4IDVweCAwcHggMHB4O1xuICAgXHR9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcblx0LmVudGVydGFpbm1lbnQtdGlsZXtcbiAgICBcdG1hcmdpbjogMHB4IDVweCA1cHggNXB4O1xuICAgIH1cbiAgICAubWFya2V0LXRpbGV7XG4gICAgXHRtYXJnaW46IDVweCA1cHggMHB4IDVweDtcblx0fVxufVx0Il19 */"

/***/ }),

/***/ "./src/app/tile-menu/tile-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/tile-menu/tile-menu.component.ts ***!
  \**************************************************/
/*! exports provided: TileMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileMenuComponent", function() { return TileMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");




var TileMenuComponent = /** @class */ (function () {
    function TileMenuComponent(router) {
        this.router = router;
        this.activeHighLight = false;
        this.activeHighLightStories = false;
        this.loginData = undefined;
    }
    TileMenuComponent.prototype.ngOnInit = function () {
        this.loginData = JSON.parse(localStorage.getItem('loginData'));
        this.profilePic = this.loginData.profilepic.imageBuffer;
        this.fullName = this.loginData.fullname;
        this.userId = this.loginData.username;
        this.profilePicWidth = _app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"].getPicDimension(this.loginData.profilepic.profilePicDimension).dimension.width + 'px';
        this.profilePicHeight = _app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"].getPicDimension(this.loginData.profilepic.profilePicDimension).dimension.height + 'px';
    };
    TileMenuComponent.prototype.navigateToEntertainment = function (event) {
        this.router.navigate(['entertainment', this.userId]);
    };
    TileMenuComponent.prototype.navigateToStories = function (event) {
        this.router.navigate(['stories', this.userId]);
    };
    TileMenuComponent.prototype.navigateToMarket = function (event) {
        this.router.navigate(['market', this.userId]);
    };
    TileMenuComponent.prototype.navigateToPeople = function (event) {
        this.router.navigate(['people', this.userId]);
    };
    TileMenuComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    TileMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tile-menu',
            template: __webpack_require__(/*! raw-loader!./tile-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/tile-menu/tile-menu.component.html"),
            styles: [__webpack_require__(/*! ./tile-menu.component.css */ "./src/app/tile-menu/tile-menu.component.css")]
        })
    ], TileMenuComponent);
    return TileMenuComponent;
}());



/***/ }),

/***/ "./src/app/video-album-icon/video-album-icon.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/video-album-icon/video-album-icon.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".video-edit-icon{\n\tdisplay: inline-block;\n    background: #2b90d9;\n    /* margin-top: -2px; */\n    height: 16px\n}   \n.video-edit-icon .fa-pencil-square{\n\tmargin-right: 2px;\n\tfont-size: 15px;\n}   \n.video-edit-icon .fa-pencil-square:hover{\n\tcolor: #e9ebee;\n\tcursor: pointer;\n}   \n.video-icon-container .blue-fonts{\n\tpadding-left: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tYWxidW0taWNvbi92aWRlby1hbGJ1bS1pY29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxxQkFBcUI7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QjtBQUNKO0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWFsYnVtLWljb24vdmlkZW8tYWxidW0taWNvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvLWVkaXQtaWNvbntcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICMyYjkwZDk7XG4gICAgLyogbWFyZ2luLXRvcDogLTJweDsgKi9cbiAgICBoZWlnaHQ6IDE2cHhcbn0gICBcbi52aWRlby1lZGl0LWljb24gLmZhLXBlbmNpbC1zcXVhcmV7XG5cdG1hcmdpbi1yaWdodDogMnB4O1xuXHRmb250LXNpemU6IDE1cHg7XG59XG4udmlkZW8tZWRpdC1pY29uIC5mYS1wZW5jaWwtc3F1YXJlOmhvdmVye1xuXHRjb2xvcjogI2U5ZWJlZTtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuLnZpZGVvLWljb24tY29udGFpbmVyIC5ibHVlLWZvbnRze1xuXHRwYWRkaW5nLWxlZnQ6IDNweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/video-album-icon/video-album-icon.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/video-album-icon/video-album-icon.component.ts ***!
  \****************************************************************/
/*! exports provided: VideoAlbumIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoAlbumIconComponent", function() { return VideoAlbumIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoAlbumIconComponent = /** @class */ (function () {
    function VideoAlbumIconComponent() {
        this.onEditVideoAlbum = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onShowVideoList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    VideoAlbumIconComponent.prototype.ngOnInit = function () {
    };
    VideoAlbumIconComponent.prototype.editVideoAlbum = function (event) {
        this.onEditVideoAlbum.emit({ data: this.item });
    };
    VideoAlbumIconComponent.prototype.showVideoList = function (event) {
        this.onShowVideoList.emit({ data: this.item });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], VideoAlbumIconComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], VideoAlbumIconComponent.prototype, "onEditVideoAlbum", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], VideoAlbumIconComponent.prototype, "onShowVideoList", void 0);
    VideoAlbumIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-album-icon',
            template: __webpack_require__(/*! raw-loader!./video-album-icon.component.html */ "./node_modules/raw-loader/index.js!./src/app/video-album-icon/video-album-icon.component.html"),
            styles: [__webpack_require__(/*! ./video-album-icon.component.css */ "./src/app/video-album-icon/video-album-icon.component.css")]
        })
    ], VideoAlbumIconComponent);
    return VideoAlbumIconComponent;
}());



/***/ }),

/***/ "./src/app/video-icon/video-icon.component.css":
/*!*****************************************************!*\
  !*** ./src/app/video-icon/video-icon.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".video-icon{\n\twidth: 100px;\n    height: 100px;\n    border: 1px solid #2b90d9;\n    margin: 10px 5px 0px 0px;\n    background-size: cover !important;\n}\n.video-icon i{\n\tcolor: #fff;\n    text-align: center;\n    margin: 33px 35px;\n}\n.video-icon:hover{\n\tborder: 1px solid #fff;\n}\n.video-icon:hover i{\n\tcolor: #2b90d9;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8taWNvbi92aWRlby1pY29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0lBQ1QsYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsaUNBQWlDO0FBQ3JDO0FBQ0E7Q0FDQyxXQUFXO0lBQ1Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0NBQ0Msc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyxjQUFjO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC92aWRlby1pY29uL3ZpZGVvLWljb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWRlby1pY29ue1xuXHR3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmI5MGQ5O1xuICAgIG1hcmdpbjogMTBweCA1cHggMHB4IDBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG59XG4udmlkZW8taWNvbiBpe1xuXHRjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAzM3B4IDM1cHg7XG59XG4udmlkZW8taWNvbjpob3Zlcntcblx0Ym9yZGVyOiAxcHggc29saWQgI2ZmZjtcbn1cbi52aWRlby1pY29uOmhvdmVyIGl7XG5cdGNvbG9yOiAjMmI5MGQ5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/video-icon/video-icon.component.ts":
/*!****************************************************!*\
  !*** ./src/app/video-icon/video-icon.component.ts ***!
  \****************************************************/
/*! exports provided: VideoIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoIconComponent", function() { return VideoIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoIconComponent = /** @class */ (function () {
    function VideoIconComponent() {
    }
    VideoIconComponent.prototype.ngOnInit = function () {
        this.posterURL = this.item.poster;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], VideoIconComponent.prototype, "item", void 0);
    VideoIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-icon',
            template: __webpack_require__(/*! raw-loader!./video-icon.component.html */ "./node_modules/raw-loader/index.js!./src/app/video-icon/video-icon.component.html"),
            styles: [__webpack_require__(/*! ./video-icon.component.css */ "./src/app/video-icon/video-icon.component.css")]
        })
    ], VideoIconComponent);
    return VideoIconComponent;
}());



/***/ }),

/***/ "./src/app/video-list/video-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/video-list/video-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWxpc3QvdmlkZW8tbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/video-list/video-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/video-list/video-list.component.ts ***!
  \****************************************************/
/*! exports provided: VideoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListComponent", function() { return VideoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoListComponent = /** @class */ (function () {
    function VideoListComponent(el) {
        this.playVideo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pauseVideo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.resumeVideo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.replayVideo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isPlaying = true;
        this.isPause = false;
        this.itemCount = 0;
        this.videoListClick = false;
        this.isShow = true;
        this.bgSize = 'cover';
        this.ml = 2;
        this.mr = 2;
        this.iw = 17;
        this.ih = 17;
        this.el = el;
    }
    VideoListComponent.prototype.ngOnInit = function () {
    };
    VideoListComponent.prototype.ngAfterViewInit = function () {
        var cutOffHeight = 100;
        var playListHeight = this.videoPlayList.nativeElement.offsetHeight;
        var hostElem = this.el.nativeElement;
        var playListContentHeight = hostElem.parentNode.offsetHeight;
        if (playListHeight >= (playListContentHeight - cutOffHeight)) {
            playListHeight = playListContentHeight - cutOffHeight;
            this.videoPlayList.nativeElement.style.height = playListHeight + 'px';
        }
        //this.actualAudio = this.musicSource[0].actualAudio;
        this.addEventListeners();
    };
    VideoListComponent.prototype.removeEventListeners = function () {
        //let self = this;
        if (document.removeEventListener) { // For all major browsers, except IE 8 and earlier
            //document.removeEventListener('playNext', this.playNextItem);
            //document.removeEventListener('onPauseAudio', this.onPauseAudio);
            //document.removeEventListener('onPlayAudio', this.onPlayAudio);
        }
    };
    VideoListComponent.prototype.addEventListeners = function () {
        //document.addEventListener('playNext', this.playNextItem);
        //document.addEventListener('onPauseAudio', this.onPauseAudio);
        //document.addEventListener('onPlayAudio', this.onPlayAudio);
    };
    VideoListComponent.prototype.onPlayVideo = function (event) {
        //if(this.musicListClick === false){
        //}
        this.isPlaying = true;
        this.isPause = false;
        this.videoListClick = false;
    };
    VideoListComponent.prototype.onPauseVideo = function (event) {
        this.videoListClick = false;
        this.isPlaying = false;
        this.isPause = true;
    };
    VideoListComponent.prototype.videoListItemClick = function (event, item, indx) {
        this.videoListClick = true;
        this.playVideo.emit(item);
        this.isPlaying = true;
        this.isPause = false;
        this.mp4Video = item.mp4Video;
        this.itemCount = Number(indx);
    };
    VideoListComponent.prototype.pauseVideeo = function (event) {
        this.videoListClick = false;
        this.pauseVideo.emit('pause');
        this.isPause = true;
        this.isPlaying = false;
    };
    VideoListComponent.prototype.resumeVideeo = function (event) {
        this.videoListClick = false;
        this.resumeVideo.emit('resume');
        this.isPause = false;
        this.isPlaying = true;
    };
    VideoListComponent.prototype.replayVideeo = function (event) {
        this.replayVideo.emit('replay');
    };
    VideoListComponent.prototype.playNextItem = function (event) {
        this.videoListClick = false;
        if (this.itemCount < (this.videoSource.length - 1)) {
            this.itemCount++;
        }
        else {
            this.itemCount = 0;
        }
        var item = this.videoSource[this.itemCount];
        this.videoListItemClick(null, item, this.itemCount);
        this.mp4Video = item.mp4Video;
        this.smoothItemScroll();
    };
    VideoListComponent.prototype.playPreviousItem = function (event) {
        this.videoListClick = false;
        if (this.itemCount >= 1) {
            this.itemCount--;
        }
        else {
            this.itemCount = this.videoSource.length - 1;
        }
        var item = this.videoSource[this.itemCount];
        this.videoListItemClick(null, item, this.itemCount);
        this.mp4Video = item.mp4Video;
        this.smoothItemScroll();
    };
    VideoListComponent.prototype.smoothItemScroll = function () {
        var body = document.getElementsByTagName('body')[0];
        body.style.position = "fixed";
        var element = document.getElementById(this.mp4Video);
        element.scrollIntoView({ behavior: "smooth" });
        body.style.position = "relative";
    };
    VideoListComponent.prototype.hideControls = function (event) {
        this.isShow = false;
    };
    VideoListComponent.prototype.showControls = function (event) {
        this.isShow = true;
    };
    VideoListComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('videoPlayList', { static: true })
    ], VideoListComponent.prototype, "videoPlayList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('videoSource')
    ], VideoListComponent.prototype, "videoSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mp4Video')
    ], VideoListComponent.prototype, "mp4Video", void 0);
    VideoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-list',
            template: __webpack_require__(/*! raw-loader!./video-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/video-list/video-list.component.html"),
            host: {
                '(document:playNextVideo)': 'playNextItem($event)',
                '(document:onPlayVideo)': 'onPlayVideo($event)',
                '(document:onPauseVideo)': 'onPauseVideo($event)'
            },
            styles: [__webpack_require__(/*! ./video-list.component.css */ "./src/app/video-list/video-list.component.css")]
        })
    ], VideoListComponent);
    return VideoListComponent;
}());



/***/ }),

/***/ "./src/app/video-player/video-player.component.css":
/*!*********************************************************!*\
  !*** ./src/app/video-player/video-player.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#video{\n\twidth: 100%;\n}\n.video-content{\n\tpadding: 15px 0px;\n}\n.uplod-new:hover, .new-album:hover{\n\tcursor: pointer;\n}\n.uplod-new:hover span, .uplod-new:hover i, .new-album:hover span, .new-album:hover i {\n\tcolor: #fff !important;\n}\n.file-input-container{\n\tdisplay: none;\n}\n#progressBar{\n\twidth: 250px;\n}\n.under-line{\n\ttext-decoration: underline;\n}\n.search-input{\n    line-height: 25px;\n    height: 25px;\n    display: block;\n    width: 154px;\n    border: none;\n    outline: none;\n    border: 1px solid #2b90d9;\n    border-radius: 2px;\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n    background: none;\n}\n.fa-search{\n    float: right;\n    color: #2b90d9 !important;\n    font-size: 15px;\n    line-height: 23px;\n    background: #f5f8fa;\n    padding: 0px 3px;\n    border: 1px solid #2b90d9;\n    border-left: none;\n    border-radius: 2px;\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px;\n}\ntextarea.form-control{\n\theight: 100px !important;\n}\napp-video-album-icon{\n\twidth: 100px;\n    height: 100px;\n    border: 1px solid #2b90d9;\n    margin: 10px 5px 0px 0px;\n}\n.video-container, #video{\n    max-height: 314px;\n    background: #000;\n}\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: #2b90d9;\n}\n::-moz-placeholder { /* Firefox 19+ */\n  color: #2b90d9;\n}\n:-ms-input-placeholder { /* IE 10+ */\n  color: #2b90d9;\n}\n:-moz-placeholder { /* Firefox 18- */\n  color: #2b90d9;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tcGxheWVyL3ZpZGVvLXBsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxpQkFBaUI7QUFDbEI7QUFFQTtDQUNDLGVBQWU7QUFDaEI7QUFDQTtDQUNDLHNCQUFzQjtBQUN2QjtBQUNBO0NBQ0MsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTtDQUNDLDBCQUEwQjtBQUMzQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQztBQUNBO0NBQ0Msd0JBQXdCO0FBQ3pCO0FBQ0E7Q0FDQyxZQUFZO0lBQ1QsYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQSw4QkFBOEIsd0JBQXdCO0VBQ3BELGNBQWM7QUFDaEI7QUFDQSxxQkFBcUIsZ0JBQWdCO0VBQ25DLGNBQWM7QUFDaEI7QUFDQSx5QkFBeUIsV0FBVztFQUNsQyxjQUFjO0FBQ2hCO0FBQ0Esb0JBQW9CLGdCQUFnQjtFQUNsQyxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdmlkZW8tcGxheWVyL3ZpZGVvLXBsYXllci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3ZpZGVve1xuXHR3aWR0aDogMTAwJTtcbn1cbi52aWRlby1jb250ZW50e1xuXHRwYWRkaW5nOiAxNXB4IDBweDtcbn1cblxuLnVwbG9kLW5ldzpob3ZlciwgLm5ldy1hbGJ1bTpob3Zlcntcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuLnVwbG9kLW5ldzpob3ZlciBzcGFuLCAudXBsb2QtbmV3OmhvdmVyIGksIC5uZXctYWxidW06aG92ZXIgc3BhbiwgLm5ldy1hbGJ1bTpob3ZlciBpIHtcblx0Y29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5maWxlLWlucHV0LWNvbnRhaW5lcntcblx0ZGlzcGxheTogbm9uZTtcbn1cbiNwcm9ncmVzc0Jhcntcblx0d2lkdGg6IDI1MHB4O1xufVxuLnVuZGVyLWxpbmV7XG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLnNlYXJjaC1pbnB1dHtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDE1NHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyYjkwZDk7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLmZhLXNlYXJjaHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6ICMyYjkwZDkgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjhmYTtcbiAgICBwYWRkaW5nOiAwcHggM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyYjkwZDk7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG59XG50ZXh0YXJlYS5mb3JtLWNvbnRyb2x7XG5cdGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbn1cbmFwcC12aWRlby1hbGJ1bS1pY29ue1xuXHR3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmI5MGQ5O1xuICAgIG1hcmdpbjogMTBweCA1cHggMHB4IDBweDtcbn1cbi52aWRlby1jb250YWluZXIsICN2aWRlb3tcbiAgICBtYXgtaGVpZ2h0OiAzMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xufVxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xuICBjb2xvcjogIzJiOTBkOTtcbn1cbjo6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTkrICovXG4gIGNvbG9yOiAjMmI5MGQ5O1xufVxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIElFIDEwKyAqL1xuICBjb2xvcjogIzJiOTBkOTtcbn1cbjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOC0gKi9cbiAgY29sb3I6ICMyYjkwZDk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/video-player/video-player.component.ts":
/*!********************************************************!*\
  !*** ./src/app/video-player/video-player.component.ts ***!
  \********************************************************/
/*! exports provided: VideoPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayerComponent", function() { return VideoPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_services_validators_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/validators/validation.service */ "./src/app/services/validators/validation.service.ts");
/* harmony import */ var _app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/settings/app-settings.service */ "./src/app/services/settings/app-settings.service.ts");
/* harmony import */ var _app_services_data_video_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/data/video.service */ "./src/app/services/data/video.service.ts");
/* harmony import */ var _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../video-list/video-list.component */ "./src/app/video-list/video-list.component.ts");







var VideoPlayerComponent = /** @class */ (function () {
    function VideoPlayerComponent(formBuilder, videoService, componentFactoryResolver) {
        this.formBuilder = formBuilder;
        this.videoService = videoService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.userId = '';
        this.fullName = '';
        this.profilePic = '';
        this.uploadProgress = 0;
        this.isProgress = false;
        this.albumTitle = '';
        this.albumDesc = '';
        this.isCreateAlbum = false;
        this.isAddAlbum = false;
        this.isUpdateAlbum = false;
        this.isVideoAlbum = true;
        this.isAlbumVideo = false;
        this.loadCount = 0;
        this.mp4VideoPath = 'https://media.w3.org/2010/05/sintel/trailer.mp4';
        this.webmVideoPath = 'https://media.w3.org/2010/05/sintel/trailer.webm';
        this.posterPath = 'https://media.w3.org/2010/05/sintel/poster.png';
        this.videoSource = [];
        this.loadCount = 0;
        var loginData = JSON.parse(localStorage.getItem('loginData'));
        this.userId = loginData.username;
        this.fullName = loginData.fullname;
        this.profilePic = JSON.stringify(loginData.profilepic);
        this.videoUploadForm = this.formBuilder.group({
            'file': ['']
        });
        this.videoGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.albumForm = this.formBuilder.group({
            'albumTitle': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _app_services_validators_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].blankDataValidator]],
            'albumDesc': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _app_services_validators_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].blankDataValidator]]
        });
        this.fetchVideoAlbumInfo();
    }
    VideoPlayerComponent.prototype.ngOnInit = function () {
    };
    VideoPlayerComponent.prototype.ngAfterViewInit = function () {
        this.videoPlayer.nativeElement.addEventListener("ended", onPlayNextVideo);
        this.videoPlayer.nativeElement.addEventListener("pause", onPauseVideo);
        this.videoPlayer.nativeElement.addEventListener("play", onPlayVideo);
        var self = this;
        function onPlayNextVideo() {
            self.triggerDocumentEvent('playNextVideo', { 'event': 'playNextVideo', 'eventObj': '' });
        }
        function onPauseVideo() {
            self.triggerDocumentEvent('onPauseVideo', { 'event': 'onPauseVideo', 'eventObj': '' });
        }
        function onPlayVideo() {
            self.triggerDocumentEvent('onPlayVideo', { 'event': 'onPauseVideo', 'eventObj': '' });
        }
    };
    VideoPlayerComponent.prototype.fileChangeEvent = function (event, directUpload) {
        var self = this;
        if (self.loadCount > 0) {
            alert('Please wait while we are processing your previous video.');
            return;
        }
        var userId = this.userId;
        var fullName = this.fullName;
        var profilePic = this.profilePic;
        var file;
        if (event.target.files && event.target.files[0]) {
            file = event.target.files[0];
            var fileName = event.target.files[0].name;
            uploadVideo(fileName);
        }
        function uploadVideo(fileName) {
            self.loadCount++;
            var formData = new FormData();
            formData.append('uploadfile', file);
            formData.append('userid', userId);
            formData.append('fullname', fullName);
            formData.append('profilepic', profilePic);
            formData.append('fileName', fileName);
            //formData.append('fullname', );
            if (!directUpload) {
                formData.append('album', self.videoInfo.title);
            }
            else {
                formData.append('album', 'untitled');
            }
            var xhr = new XMLHttpRequest();
            xhr.open('post', _app_services_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"].API_ENDPOINT("local") + '/api/uploadVideo', true);
            xhr.upload.onprogress = function (e) {
                if (e.lengthComputable) {
                    var percentage = (e.loaded / e.total) * 100;
                    console.log(percentage);
                    if ((percentage > 0) && (percentage < 100)) {
                        self.isProgress = true;
                    }
                    else {
                        self.isProgress = false;
                    }
                    self.uploadProgress = percentage;
                    //$('div.progress div').css('width', percentage.toFixed(0) + '%');
                    //$('div.progress div').html(percentage.toFixed(0) + '%');
                }
            };
            xhr.onerror = function (e) {
                if (self.loadCount > 0) {
                    self.loadCount--;
                }
                alert('An error occurred while submitting the form. Maybe your file is too big');
            };
            xhr.onload = function () {
                /*let file = xhr.responseText;
                $('div.progress div').css('width','0%');
                $('div.progress').hide();
                showMsg("alert alert-success", "File uploaded successfully!");
                $('#myFile').val('');*/
                if (self.isVideoAlbum) {
                    self.fetchVideoAlbumInfo();
                }
                else {
                    self.fetchAlbumVideoInfo();
                }
                if (self.loadCount > 0) {
                    self.loadCount--;
                }
            };
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    callback(xhr.responseText); // Another callback here
                }
            };
            function callback(responseText) {
                if (JSON.parse(responseText).status === 'sessionExpired') {
                    alert('Session Expired, Please Login Again');
                }
            }
            xhr.send(formData);
            return false;
        }
        //var files = fileInput.srcElement.files;
        //console.log(files);
        //this.uploadService.makeFileRequest('https://localhost:3000/api/uploadCoverPic', [], files).subscribe(() => {
        //  console.log('sent');
        //});
    };
    VideoPlayerComponent.prototype.createAlbumInfo = function (event) {
        var _this = this;
        if (this.albumForm.dirty && this.albumForm.valid) {
            // alert('Name: ${this.loginForm.value.email} Email: ${this.loginForm.value.password}');
            var postObj = { 'username': this.userId,
                'title': this.albumForm.value.albumTitle,
                'desc': this.albumForm.value.albumDesc };
            this.videoService.createVideoAlbum(postObj).subscribe(function (data) { return _this.afterAlbumCreated(data); });
        }
    };
    VideoPlayerComponent.prototype.afterAlbumCreated = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            this.cancelAlbum(null);
            //alert(result.message);
            this.fetchVideoAlbumInfo();
        }
    };
    VideoPlayerComponent.prototype.updateAlbumInfo = function (event) {
        var _this = this;
        if (this.albumForm.dirty && this.albumForm.valid) {
            // alert('Name: ${this.loginForm.value.email} Email: ${this.loginForm.value.password}');
            var postObj = { 'id': this.albumInfo._id,
                'username': this.userId,
                'title': this.albumForm.value.albumTitle,
                'desc': this.albumForm.value.albumDesc };
            this.videoService.updateVideoAlbum(postObj).subscribe(function (data) { return _this.afterAlbumUpdated(data); });
        }
    };
    VideoPlayerComponent.prototype.afterAlbumUpdated = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            this.cancelAlbum(null);
            //alert(result.message);
            this.fetchVideoAlbumInfo();
        }
    };
    VideoPlayerComponent.prototype.createVideoAlbum = function (event) {
        this.isCreateAlbum = true;
        this.isAddAlbum = true;
        this.isUpdateAlbum = false;
    };
    VideoPlayerComponent.prototype.cancelAlbum = function (event) {
        this.isCreateAlbum = false;
        this.isAddAlbum = false;
        this.isUpdateAlbum = false;
        this.albumForm.reset();
    };
    VideoPlayerComponent.prototype.fetchVideoAlbumInfo = function () {
        var _this = this;
        var postObj = { 'username': this.userId };
        this.videoService.fetchVideoAlbumInfo(postObj).subscribe(function (data) { return _this.afterVideoAbumInfo(data); });
    };
    VideoPlayerComponent.prototype.fetchAlbumVideoInfo = function () {
        var _this = this;
        var postObj = { 'username': this.userId, 'album': this.albumTitle };
        this.videoService.fetchAlbumVideoInfo(postObj).subscribe(function (data) { return _this.afterAbumVideoInfo(data); });
    };
    /*private setNotification(){
        var dateNow = new Date();
        notificationInfo.create({
            userid : req.body.username,
            fullname : req.body.fullname,
            profilepic : req.body.profilePicObj,
            type : req.body.notificationType,
            text : req.body.notificationText,
            filePath : req.body.filePath,
            isReady : req.body.isReady,
            isShown : req.body.isShown
        }, function(err, info) {
            if (err){
                res.send(err);
            }else{
                res.json({"status": "success", "message": "Notification Configured", "info": info});
            }
        });
    }*/
    VideoPlayerComponent.prototype.afterVideoAbumInfo = function (result) {
        this.videoAlbumList = result;
        if (result.length > 0) {
            this.videoSource = [];
            this.videoSource = this.videoAlbumList[0].videosList;
            if (this.videoSource && (this.videoSource.length > 0)) {
                this.createVideoList(this.videoSource);
                this.playVideo(this.videoAlbumList[0].videosList[0], -1);
            }
        }
    };
    VideoPlayerComponent.prototype.afterAbumVideoInfo = function (result) {
        this.videosList = result[0].videosList;
    };
    //Need to activate/deactivate edit btn later based on changes in title field
    VideoPlayerComponent.prototype.editVideoAlbum = function (event) {
        this.albumInfo = event.data;
        this.isCreateAlbum = true;
        this.isAddAlbum = false;
        this.isUpdateAlbum = true;
        this.albumTitle = this.albumInfo.title;
        this.albumDesc = this.albumInfo.description;
    };
    //Diplaying the list of videos under a particular video album
    VideoPlayerComponent.prototype.showVideoList = function (event) {
        this.videoInfo = event.data;
        this.isVideoAlbum = false;
        this.isAlbumVideo = true;
        this.videosList = this.videoInfo.videosList;
        this.albumTitle = this.videoInfo.title;
    };
    VideoPlayerComponent.prototype.goToMyAlbum = function (event) {
        this.isVideoAlbum = true;
        this.isAlbumVideo = false;
        this.fetchVideoAlbumInfo();
    };
    VideoPlayerComponent.prototype.playVideo = function (data, indx) {
        console.log(data);
        this.videoPlayer.nativeElement.pause();
        this.posterPath = data.poster;
        this.mp4VideoPath = data.mp4Video;
        //this.webmVideoPath = data.webmVideo;
        try {
            this.videoListRef.instance.mp4Video = this.mp4VideoPath;
            this.videoListRef.instance.itemCount = indx;
            if (indx === -1) {
                this.videoListRef.instance.itemCount = 0;
            }
            if (indx !== -1) {
                //this.smoothItemScroll(this.mp3AudioPath);
                this.videoListRef.instance.smoothItemScroll();
            }
            this.videoPlayer.nativeElement.load();
            this.videoPlayer.nativeElement.play();
        }
        catch (err) {
            console.log(err);
        }
    };
    VideoPlayerComponent.prototype.playVideeo = function (data) {
        this.videoPlayer.nativeElement.pause();
        this.posterPath = data.poster;
        this.mp4VideoPath = data.mp4Video;
        try {
            this.videoPlayer.nativeElement.load();
            this.videoPlayer.nativeElement.play();
        }
        catch (err) {
            console.log(err);
        }
    };
    VideoPlayerComponent.prototype.createVideoList = function (videoSource) {
        var _this = this;
        if (this.videoListRef) {
            this.videoListRef.instance.playVideo.unsubscribe(function (data) { return _this.playVideeo(data); });
            this.videoListRef.instance.pauseVideo.unsubscribe(function (data) { return _this.pauseVideo(data); });
            this.videoListRef.instance.resumeVideo.unsubscribe(function (data) { return _this.resumeVideo(data); });
            //this.videoPlayer.nativeElement.removeEventListener("ended", this.playNextItem());
            this.videoListRef.instance.replayVideo.unsubscribe(function (data) { return _this.replayVideo(data); });
            this.videoListRef.instance.removeEventListeners();
            this.videoListRef.instance.videoSource = [];
            this.videoListRef.instance.mp4Video = '';
            this.videoListRef.destroy();
        }
        this.videoListComponent = this.componentFactoryResolver.resolveComponentFactory(_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_6__["VideoListComponent"]);
        this.videoListRef = this.videoList.createComponent(this.videoListComponent);
        this.videoListRef.instance.videoSource = videoSource;
        this.videoListRef.instance.mp4Video = videoSource[0].mp4Video;
        this.videoListRef.instance.playVideo.subscribe(function (data) { return _this.playVideeo(data); });
        this.videoListRef.instance.pauseVideo.subscribe(function (data) { return _this.pauseVideo(data); });
        this.videoListRef.instance.resumeVideo.subscribe(function (data) { return _this.resumeVideo(data); });
        this.videoListRef.instance.replayVideo.subscribe(function (data) { return _this.replayVideo(data); });
        //this.videoPlayer.nativeElement.addEventListener("ended", this.playNextItem());
    };
    VideoPlayerComponent.prototype.playNextItem = function () {
        alert('video ended');
    };
    VideoPlayerComponent.prototype.replayVideo = function (data) {
        this.videoPlayer.nativeElement.currentTime = 0;
        //this.videoPlayer.nativeElement.play();	
    };
    VideoPlayerComponent.prototype.pauseVideo = function (data) {
        this.videoPlayer.nativeElement.pause();
    };
    VideoPlayerComponent.prototype.resumeVideo = function (data) {
        this.videoPlayer.nativeElement.play();
    };
    VideoPlayerComponent.prototype.triggerDocumentEvent = function (eventType, evtObj) {
        var evt = new CustomEvent(eventType, { 'detail': evtObj });
        document.dispatchEvent(evt);
    };
    VideoPlayerComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _app_services_data_video_service__WEBPACK_IMPORTED_MODULE_5__["VideoService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('videoPlayer', { static: true })
    ], VideoPlayerComponent.prototype, "videoPlayer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('videoList', { static: true })
    ], VideoPlayerComponent.prototype, "videoList", void 0);
    VideoPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-player',
            template: __webpack_require__(/*! raw-loader!./video-player.component.html */ "./node_modules/raw-loader/index.js!./src/app/video-player/video-player.component.html"),
            providers: [_app_services_data_video_service__WEBPACK_IMPORTED_MODULE_5__["VideoService"]],
            styles: [__webpack_require__(/*! ./video-player.component.css */ "./src/app/video-player/video-player.component.css")]
        })
    ], VideoPlayerComponent);
    return VideoPlayerComponent;
}());



/***/ }),

/***/ "./src/app/video/video.component.css":
/*!*******************************************!*\
  !*** ./src/app/video/video.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.wrapper-app,\nfooter div {\n  max-width:80rem;\n  margin:0 auto;\n}\n\ndiv.wrapper-app {\n  border:0.1rem solid #000;\n  background-color:#fff;\n}\n\ndiv.wrapper-content {\n  min-height:40rem;\n  overflow: visible;\n  padding:2rem;\n}\n\n/** EasyRTC Styles **/\n\ndiv.connect-caller-buttons {\n  margin-bottom:1rem;\n}\n\ndiv.connect-caller-buttons > h3,\ndiv.connect-caller-buttons > div {\n  display:inline-block;\n}\n\ndiv.video-frames {\n  text-align:center;\n}\n\ndiv.video-self,\ndiv.video-caller {\n  width:32rem;\n  height:24rem;\n  display:inline-block;\n  overflow:hidden;\n  border:0.1rem solid #000;\n  background-color:#ddd;\n  margin:0 1.4rem;\n}\n\ndiv.video-caller {\n  position:relative; /* Required so that Close (X) button appears */\n}\n\nvideo {\n  width:32rem;\n  height:24rem;\n  -o-object-fit:cover;\n     object-fit:cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8vdmlkZW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBLHFCQUFxQjs7QUFFckI7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUIsRUFBRSw4Q0FBOEM7QUFDbkU7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFnQjtLQUFoQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC92aWRlby92aWRlby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LndyYXBwZXItYXBwLFxuZm9vdGVyIGRpdiB7XG4gIG1heC13aWR0aDo4MHJlbTtcbiAgbWFyZ2luOjAgYXV0bztcbn1cblxuZGl2LndyYXBwZXItYXBwIHtcbiAgYm9yZGVyOjAuMXJlbSBzb2xpZCAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG59XG5cbmRpdi53cmFwcGVyLWNvbnRlbnQge1xuICBtaW4taGVpZ2h0OjQwcmVtO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgcGFkZGluZzoycmVtO1xufVxuXG4vKiogRWFzeVJUQyBTdHlsZXMgKiovXG5cbmRpdi5jb25uZWN0LWNhbGxlci1idXR0b25zIHtcbiAgbWFyZ2luLWJvdHRvbToxcmVtO1xufVxuXG5kaXYuY29ubmVjdC1jYWxsZXItYnV0dG9ucyA+IGgzLFxuZGl2LmNvbm5lY3QtY2FsbGVyLWJ1dHRvbnMgPiBkaXYge1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbn1cblxuZGl2LnZpZGVvLWZyYW1lcyB7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG5kaXYudmlkZW8tc2VsZixcbmRpdi52aWRlby1jYWxsZXIge1xuICB3aWR0aDozMnJlbTtcbiAgaGVpZ2h0OjI0cmVtO1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6aGlkZGVuO1xuICBib3JkZXI6MC4xcmVtIHNvbGlkICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6I2RkZDtcbiAgbWFyZ2luOjAgMS40cmVtO1xufVxuXG5kaXYudmlkZW8tY2FsbGVyIHtcbiAgcG9zaXRpb246cmVsYXRpdmU7IC8qIFJlcXVpcmVkIHNvIHRoYXQgQ2xvc2UgKFgpIGJ1dHRvbiBhcHBlYXJzICovXG59XG5cbnZpZGVvIHtcbiAgd2lkdGg6MzJyZW07XG4gIGhlaWdodDoyNHJlbTtcbiAgb2JqZWN0LWZpdDpjb3Zlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/video/video.component.ts":
/*!******************************************!*\
  !*** ./src/app/video/video.component.ts ***!
  \******************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/// <reference path="../../../libs/easyrtc.d.ts" />


var VideoComponent = /** @class */ (function () {
    function VideoComponent(cdr) {
        this.cdr = cdr;
        this.myId = '';
        this.connectedClientsList = [];
        //this.loadScript('http://localhost:3000/libs/socket.io/socket.io.js');
        //this.loadScript('http://localhost:3000/libs/easyrtc/easyrtc.js');
    }
    VideoComponent.prototype.clearConnectList = function () {
        this.connectedClientsList = [];
        this.cdr.detectChanges();
    };
    VideoComponent.prototype.performCall = function (clientEasyrtcId) {
        var successCB = function (a, b) { };
        var failureCB = function (a, b) { };
        easyrtc.call(clientEasyrtcId, successCB, failureCB, undefined, undefined);
    };
    VideoComponent.prototype.buildCaller = function (easyrtcid) {
        var _this = this;
        return function () {
            _this.performCall(easyrtcid);
        };
    };
    VideoComponent.prototype.convertListToButtons = function (roomName, data, isPrimary) {
        this.clearConnectList();
        for (var easyrtcid in data) {
            this.connectedClientsList.push(easyrtc.idToName(easyrtcid));
        }
        this.cdr.detectChanges();
    };
    VideoComponent.prototype.updateMyEasyRTCId = function (myEasyRTCId) {
        this.myId = myEasyRTCId;
        this.cdr.detectChanges();
    };
    VideoComponent.prototype.loginSuccess = function (easyrtcid) {
        this.updateMyEasyRTCId(easyrtc.cleanId(easyrtcid));
    };
    VideoComponent.prototype.loginFailure = function (errorCode, message) {
        this.updateMyEasyRTCId('Login failed. Reason: ' + message);
    };
    VideoComponent.prototype.connect = function () {
        var _this = this;
        easyrtc.setVideoDims(320, 240, undefined);
        var convertListToButtonShim = function (roomName, data, isPrimary) {
            _this.convertListToButtons(roomName, data, isPrimary);
        };
        easyrtc.setRoomOccupantListener(convertListToButtonShim);
        easyrtc.easyApp("easyrtc.audioVideoSimple", "videoSelf", ["videoCaller"], this.loginSuccess.bind(this), this.loginFailure.bind(this));
    };
    VideoComponent.prototype.ngAfterViewInit = function () {
        // let socketServer = "http://localhost:3000/";
        //  easyrtc.setSocketUrl(socketServer, {});
        this.connect();
    };
    VideoComponent.prototype.loadScript = function (url) {
        console.log('preparing to load...');
        var node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(node);
    };
    VideoComponent.prototype.connectVideo = function () { };
    VideoComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    VideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video',
            template: __webpack_require__(/*! raw-loader!./video.component.html */ "./node_modules/raw-loader/index.js!./src/app/video/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.css */ "./src/app/video/video.component.css")]
        })
    ], VideoComponent);
    return VideoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/24712/Projects/wefrenz_angular_latest/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map