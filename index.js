(()=>{var e={915:function(e,t,n){var r,o,i,a;function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}e=n.nmd(e),a=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";e.exports=function(e){var t,n,r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};function a(e,t){var n=Object.getOwnPropertyDescriptor(e,t);n&&n.configurable&&delete e[t]}function c(e){var t="#".concat((parseInt(e.substr(1),16)+1).toString(16));return"#1000000"===t?"#000000":t}"change"===o?(n=Object.getOwnPropertyDescriptor(e,"value"),(t=document.createEvent("UIEvents")).initEvent("focus",!1,!1),e.dispatchEvent(t),r=e.value,e.value=c(r),a(e,"value"),e.value=r,(t=document.createEvent("HTMLEvents")).initEvent("propertychange",!1,!1),t.propertyName="value",e.dispatchEvent(t),(t=document.createEvent("HTMLEvents")).initEvent("input",!0,!1),e.dispatchEvent(t),n&&Object.defineProperty(e,"value",n)):(t=new MouseEvent(o,u({bubbles:!0},i)),e.dispatchEvent(t))}}])},"object"===l(t)&&"object"===l(e)?e.exports=a():(o=[],void 0===(i="function"==typeof(r=a)?r.apply(t,o):r)||(e.exports=i))}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{"use strict";var e=n(915),t=n.n(e);function r(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function c(e){r(a,o,i,c,u,"next",e)}function u(e){r(a,o,i,c,u,"throw",e)}c(void 0)}))}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(e){return e%500==0?new Promise((function(e){return requestAnimationFrame(e)})):void 0};function c(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){c(i,r,o,a,u,"next",e)}function u(e){c(i,r,o,a,u,"throw",e)}a(void 0)}))}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=new function e(){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"COLOR_INPUT_SELECTOR",'.draw input[type="color"]'),i(this,"THICKNESS_SELECTOR",".draw .options > div > div"),i(this,"PEN_TOOL_SELECTOR",".draw .tool.pen"),i(this,"CANVAS_SELECTOR",".draw .core canvas:last-child"),i(this,"color","#000000"),i(this,"isLoading",!1),i(this,"stopRequested",!1),i(this,"setColor",(function(e){var r=document.querySelector(n.COLOR_INPUT_SELECTOR);if(!r)throw new Error("Color input not found");r.value=e,n.color=e,t()(r,"change")})),i(this,"selectPencilTool",(function(){var e,t;null===(e=document.querySelector(n.THICKNESS_SELECTOR))||void 0===e||e.click(),null===(t=document.querySelector(n.PEN_TOOL_SELECTOR))||void 0===t||t.click()})),i(this,"loadImageData",function(){var e=o(regeneratorRuntime.mark((function e(t,r,o){var i,a,c,u,s,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return i=e.sent,e.next=6,i.blob();case 6:return a=e.sent,c=new Image(r,o),e.next=10,new Promise((function(e){c.onload=e;var t=URL.createObjectURL(a);c.src=t,n.imgBlob&&(URL.revokeObjectURL(n.imgBlob),n.imgBlob=t)}));case 10:return u=document.createElement("canvas",{width:c.naturalWidth,height:c.naturalHeight}),(s=u.getContext("2d")).drawImage(c,0,0),l=s.getImageData(0,0,c.naturalWidth,c.naturalHeight),e.abrupt("return",l);case 17:throw e.prev=17,e.t0=e.catch(0),e.t0;case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t,n,r){return e.apply(this,arguments)}}()),i(this,"drawPoint",function(){var e=o(regeneratorRuntime.mark((function e(r,o,i,c,u){var s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={clientX:i,clientY:c,movementX:0,movementY:0,offsetX:r,offsetY:o,pageX:i,pageY:c,screenX:i,screenY:c+3,x:i,y:c,view:window},t()(n.canvas,"mousedown",s),e.next=4,a(u);case 4:return t()(n.canvas,"mouseup",s),e.next=7,a(u);case 7:case"end":return e.stop()}}),e)})));return function(t,n,r,o,i){return e.apply(this,arguments)}}()),i(this,"drawImage",function(){var e=o(regeneratorRuntime.mark((function e(t){var r,o,i,c,u,s,l,p,f,v,d,h,m,b;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.isInProgress=!0,n.selectPencilTool(),e.next=5,n.loadImageData(t);case 5:r=e.sent,o=r.data,i=r.width,n.canvas=document.querySelector(n.CANVAS_SELECTOR),c=n.canvas.getBoundingClientRect(),u=c.top,s=c.left,l=0;case 11:if(!(l<o.length)){e.next=30;break}if(!n.stopRequested){e.next=14;break}return e.abrupt("break",30);case 14:if(p=o[l].toString(16).padStart(2,"0"),f=o[l+1].toString(16).padStart(2,"0"),v=o[l+2].toString(16).padStart(2,"0"),d="#".concat(p).concat(f).concat(v),n.color===d){e.next=22;break}return n.setColor(d),e.next=22,a(l);case 22:return h=Math.floor(l/4),m=h%i,b=Math.floor(h/i),e.next=27,n.drawPoint(m,b,s+m+3,u+b,l);case 27:l+=4,e.next=11;break;case 30:e.next=35;break;case 32:throw e.prev=32,e.t0=e.catch(0),e.t0;case 35:return e.prev=35,n.canvas=null,n.isInProgress=!1,n.stopRequested=!1,e.finish(35);case 40:case"end":return e.stop()}}),e,null,[[0,32,35,40]])})));return function(t){return e.apply(this,arguments)}}()),i(this,"requestStop",(function(){n.isInProgress&&(n.stopRequested=!0)}))},f=new function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"getInputValue",(function(){return n.input.value})),s(this,"setButtonText",(function(e){n.button.innerText=e})),s(this,"onClick",u(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.getInputValue(),!n.painter.isInProgress){e.next=4;break}return n.painter.requestStop(),e.abrupt("return");case 4:if(t){e.next=6;break}return e.abrupt("return");case 6:return e.prev=6,n.setButtonText("Stop"),e.next=10,n.painter.drawImage(t);case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(6),console.trace(e.t0),alert("Sorry an error occured while processing the image.");case 16:return e.prev=16,n.setButtonText("Draw!"),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[6,12,16,19]])})))),s(this,"initInputElement",(function(){n.input=document.createElement("input"),n.input.placeholder="Image URL",n.input.style="min-width: 200px;"})),s(this,"initButtonElement",(function(){n.button=document.createElement("button"),n.button.innerText="Draw!",n.button.style="margin-left: 1rem",n.button.addEventListener("click",n.onClick,{passive:!0})})),s(this,"initRootElement",(function(){n.root=document.createElement("div"),n.root.append(n.input),n.root.append(n.button),n.root.style="display: flex;position: absolute;top: 1rem;right: 1rem"})),s(this,"dispose",(function(){n.button.removeEventListener("click",n.onClick)})),this.painter=t,this.initInputElement(),this.initButtonElement(),this.initRootElement()}(p),v=new function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"CONTAINER_SELECTOR","#content"),l(this,"inject",(function(){document.querySelector(n.CONTAINER_SELECTOR).prepend(n.view.root)})),this.view=t}(f);v.inject(),window.DATA={painter:p,painterView:f,uiInjector:v}})()})();
//# sourceMappingURL=index.js.map