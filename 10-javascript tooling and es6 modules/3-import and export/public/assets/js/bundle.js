(()=>{"use strict";var o={d:(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o:(o,t)=>Object.prototype.hasOwnProperty.call(o,t),r:o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},t={};function e(o){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},e(o)}function n(o,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,(void 0,i=function(o,t){if("object"!==e(o)||null===o)return o;var n=o[Symbol.toPrimitive];if(void 0!==n){var r=n.call(o,"string");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(r.key),"symbol"===e(i)?i:String(i)),r)}var i}function r(o,t,e){return t&&n(o.prototype,t),e&&n(o,e),Object.defineProperty(o,"prototype",{writable:!1}),o}o.r(t),o.d(t,{Person:()=>f,age:()=>l,default:()=>y,lastName:()=>a,name3:()=>i,subtraction:()=>u,sum:()=>c});var i="Lex",a="Luthor",l=35;function c(o,t){return o+t}function u(o,t){return o-t}var f=r((function o(t,e){!function(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.name=t,this.lastName=e}));const y="it is default";var s=new f(i,a);console.log("".concat(i," ").concat("Wayne"," ").concat(a," ").concat(l)),console.log("Sum "+c(53,90)),console.log("subtraction "+u(90,53)),console.log(s),console.log(t),console.log(y)})();
//# sourceMappingURL=bundle.js.map