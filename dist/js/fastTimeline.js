!function(){var e={5378:function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(e,n)||t(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=t(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw i}}}}function t(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}window.OverlayPluginApi||(console.log("从CDN获取common.min.js失败，加载本地版本。"),function(){var t=/[\?&]OVERLAY_WS=([^&]+)/.exec(location.href),r=null,o=[],a=0,i={},c={},l=null,s=!1;function u(e){if(c[e.type]){var t,r=n(c[e.type]);try{for(r.s();!(t=r.n()).done;)(0,t.value)(e)}catch(e){r.e(e)}finally{r.f()}}}t?(l=function(e){o?o.push(e):r.send(JSON.stringify(e))},function e(){(r=new WebSocket(t[1])).addEventListener("error",(function(e){console.error(e)})),r.addEventListener("open",(function(){console.log("Connected!");var e=o;o=null;var t,r=n(e);try{for(r.s();!(t=r.n()).done;){var a=t.value;l(a)}}catch(e){r.e(e)}finally{r.f()}})),r.addEventListener("message",(function(e){try{e=JSON.parse(e.data)}catch(n){return void console.error("Invalid message received: ",e)}void 0!==e.rseq&&i[e.rseq]?(i[e.rseq](e),delete i[e.rseq]):u(e)})),r.addEventListener("close",(function(){o=[],console.log("Trying to reconnect..."),setTimeout((function(){e()}),300)}))}()):(l=function(e,n){o?o.push([e,n]):OverlayPluginApi.callHandler(JSON.stringify(e),n)},function t(){if(window.OverlayPluginApi&&window.OverlayPluginApi.ready){var r=o;o=null,window.__OverlayCallback=u;var a,i=n(r);try{for(i.s();!(a=i.n()).done;){var c=e(a.value,2),s=c[0],d=c[1];l(s,d)}}catch(e){i.e(e)}finally{i.f()}}else setTimeout(t,300)}()),window.dispatchOverlayEvent=u,window.addOverlayListener=function(e,n){s&&c[e]&&console.warn("A new listener for ".concat(e," has been registered after event transmission has already begun.\nSome events might have been missed and no cached values will be transmitted.\nPlease register your listeners before calling startOverlayEvents().")),c[e]||(c[e]=[]),c[e].push(n)},window.removeOverlayListener=function(e,n){if(c[e]){var t=c[e],r=t.indexOf(n);r>-1&&t.splice(r,1)}},window.callOverlayHandler=function(e){var n;return r?(e.rseq=a++,n=new Promise((function(n){i[e.rseq]=n})),l(e)):n=new Promise((function(n){l(e,(function(e){n(null==e?null:JSON.parse(e))}))})),n},window.startOverlayEvents=function(){s=!1,l({call:"subscribe",events:Object.keys(c)})}}())},1460:function(e,n,t){"use strict";var r=t(7537),o=t.n(r),a=t(3645),i=t.n(a)()(o());i.push([e.id,"*{padding:0;margin:0}body{background-color:#fff}body main>article>ul{list-style:none}body main>article>ul li{display:inline}body main>article>ul li label{-webkit-user-select:none;-ms-user-select:none;user-select:none;margin:0 2px;padding:0 2px;cursor:pointer;border-radius:10%}body main>article>ul li label:hover{background-color:#20b2aa}body main #show li{overflow:hidden;white-space:nowrap}body main #show li span{margin-right:5px}","",{version:3,sources:["webpack://./src/fastTimeline/index.scss"],names:[],mappings:"AAAA,EACE,SAAA,CACA,QAAA,CAGF,KACE,qBAAA,CAGI,qBACE,eAAA,CACA,wBACE,cAAA,CACA,8BACE,wBAAA,CAAA,oBAAA,CAAA,gBAAA,CACA,YAAA,CACA,aAAA,CACA,cAAA,CAIA,iBAAA,CAHA,oCACE,wBAAA,CAQR,mBACE,eAAA,CACA,kBAAA,CACA,wBACE,gBAAA",sourcesContent:["* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  background-color: white;\r\n  main {\r\n    > article {\r\n      > ul {\r\n        list-style: none;\r\n        li {\r\n          display: inline;\r\n          label {\r\n            user-select: none;\r\n            margin: 0 2px;\r\n            padding: 0 2px;\r\n            cursor: pointer;\r\n            &:hover {\r\n              background-color: lightseagreen;\r\n            }\r\n            border-radius: 10%;\r\n          }\r\n        }\r\n      }\r\n    }\r\n    #show {\r\n      li {\r\n        overflow: hidden;\r\n        white-space: nowrap;\r\n        span {\r\n          margin-right: 5px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n"],sourceRoot:""}]),n.Z=i},3645:function(e){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},7537:function(e){"use strict";e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */"),i=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([a]).join("\n")}return[n].join("\n")}},3379:function(e){"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],s=r.base?l[0]+r.base:l[0],u=a[s]||0,d="".concat(s," ").concat(u);a[s]=u+1;var f=t(d),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var v=o(p,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:v,references:1})}i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var l=r(e,o),s=0;s<a.length;s++){var u=t(a[s]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=l}}},569:function(e){"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},9216:function(e){"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},3565:function(e,n,t){"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},7795:function(e){"use strict";e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},4589:function(e){"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){"use strict";var e=new URLSearchParams(new URL(window.location).search),n=(setTimeout((function(){if(!window.OverlayPluginApi&&null===e.get("OVERLAY_WS")&&null===e.get("HOST_PORT")){var n=document.createElement("div");n.innerText="找不到OverlayPluginApi或WS服务，请在ACT悬浮窗中添加此页面，而不是浏览器中。\n若在OBS中添加请启用OverlayPlugin WSServer并在OBS的浏览器链接后追加OVERLAY_WS参数",document.body.appendChild(n),n.style.position="absolute",n.style.top=0,n.style.fontFamily="微软雅黑",n.style.fontSize="16px",n.style.color="white",n.style.textShadow="black -1px 0px 2px, black 0px 1px 2px, black 1px 0px 2px, black 0px -1px 2px"}}),1e3),t(3379)),r=t.n(n),o=t(7795),a=t.n(o),i=t(569),c=t.n(i),l=t(3565),s=t.n(l),u=t(9216),d=t.n(u),f=t(4589),p=t.n(f),v=t(1460),y={};y.styleTagTransform=p(),y.setAttributes=s(),y.insert=c().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=d(),r()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals,t(5378);var A,m=document.querySelector("#settings"),h=document.querySelector("#show"),g=0,b=document.querySelector("#toCopy"),w=document.querySelector("#copy"),x=document.querySelector("#clear"),C=document.querySelector("#justStart"),S={casterID:{text:"施法ID",index:2,enable:!1},casterName:{text:"施法人",index:3,enable:!1},actionID:{text:"行动ID",index:4,enable:!1},actionName:{text:"行动名",index:5,enable:!0},castTime:{text:"施法时间",index:8,enable:!1}};function E(e){g=e}function O(e){if("00"===e.line[0]&&"0039"===e.line[2])switch(e.line[4]){case"戦闘開始！":case"战斗开始！":case"Engage!":E(new Date(e.line[1]))}else if("20"===e.line[0]&&e.line[2]===A&&g>0){var n=function(e,n){var t,r={"Y+":n.getFullYear().toString(),"m+":(n.getMonth()+1).toString(),"d+":n.getDate().toString(),"H+":n.getHours().toString(),"M+":n.getMinutes().toString(),"S+":n.getSeconds().toString()};for(var o in r)(t=new RegExp("("+o+")").exec(e))&&(e=e.replace(t[1],1==t[1].length?r[o]:r[o].padStart(t[1].length,"0")));return e}("MM:SS",new Date(new Date(e.line[1])-g)),t=document.createElement("li");for(var r in h.appendChild(t),t.innerHTML="<span>".concat(n,"</span>"),S){var o=S[r];o.enable&&(t.innerHTML+="<span>".concat(e.line[o.index],"</span>"))}}}function L(e){var n;A=null===(n=e.Focus)||void 0===n?void 0:n.ID.toString(16).toUpperCase()}function T(){var e=h.innerHTML;e=(e=(e=e.replaceAll(/\<\/li\>/g,"\n")).replaceAll(new RegExp("</span><span>","g")," ")).replaceAll(/\<.+?\>/g,""),b.value=e,b.select(),document.execCommand("copy")}function k(){h.innerHTML=""}function I(){k(),E(new Date)}!function(){w.addEventListener("click",T),x.addEventListener("click",k),C.addEventListener("click",I),addOverlayListener("LogLine",O),addOverlayListener("EnmityTargetData",L),startOverlayEvents();var e=document.createElement("ul");for(var n in m.appendChild(e),S){var t=S[n],r=document.createElement("li");e.appendChild(r);var o=document.createElement("label");r.appendChild(o);var a=document.createElement("input");a.title=n,a.type="checkbox",a.checked=t.enable?"checked":"",o.appendChild(a);var i=document.createTextNode(t.text);o.appendChild(i)}m.addEventListener("click",(function(){m.querySelectorAll("input[type=checkbox]").forEach((function(e){S[e.title].enable=e.checked}))}),!0)}()}()}();