!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-tantan-stack",[],e):"object"==typeof exports?exports["vue-tantan-stack"]=e():t["vue-tantan-stack"]=e()}(this,function(){return function(t){function e(i){if(a[i])return a[i].exports;var r=a[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var a={};return e.m=t,e.c=a,e.p="",e(0)}([function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=a(1),n=i(r);new Vue(n.default)},function(t,e,a){var i,r,n={};i=a(2),r=a(11),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default);var s="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;r&&(s.template=r),s.computed||(s.computed={}),Object.keys(n).forEach(function(t){var e=n[t];s.computed[t]=function(){return e}})},function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(3),n=i(r);e.default={el:"#stack",data:function(){return{someList:[],stackinit:{visible:3}}},mounted:function(){var t=this;setTimeout(function(){t.someList=[{html:'<img src="src/img/1.jpg" alt="01"><h5>Saudade</h5>'},{html:'<img src="src/img/2.jpg" alt="01"><h5>Saudade</h5>'},{html:'<img src="src/img/3.jpg" alt="03"><h5>Saudade</h5>'},{html:'<img src="src/img/4.jpg" alt="01"><h5>Saudade</h5>'},{html:'<img src="src/img/5.jpg" alt="01"><h5>Saudade</h5>'},{html:'<img src="src/img/6.jpg" alt="01"><h5>Saudade</h5>'}]},2e3)},components:{stack:n.default}}},function(t,e,a){var i,r,n={};a(4),i=a(8),r=a(10),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default);var s="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;r&&(s.template=r),s.computed||(s.computed={}),Object.keys(n).forEach(function(t){var e=n[t];s.computed[t]=function(){return e}})},function(t,e,a){var i=a(5);"string"==typeof i&&(i=[[t.id,i,""]]);a(7)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,a){e=t.exports=a(6)(),e.push([t.id,".stack-container{position:relative;margin:40px auto;padding:0;width:340px;height:380px;list-style:none;-webkit-perspective:1000px;-webkit-perspective-origin:50% 150%;perspective:1000px;perspective-origin:50% 150%}.stack-container li{position:absolute;z-index:1;width:340px;height:380px;border-width:60px 20px;border-style:solid;border-color:#fff;box-shadow:0 10px 7px -7px rgba(0,0,0,.12),0 0 4px rgba(0,0,0,.1);opacity:0;cursor:pointer}.stack-container li img{display:block}.stack-container li h5{margin:0 5px;color:#143f51;height:60px;text-align:right;font-size:1.4em;font-family:Sacramento,cursive;line-height:60px}.stack-container li.animate{transition:all .3s ease-out}.stack-container li.move-back{transition-timing-function:cubic-bezier(.175,.885,.47,1.515)}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var a=this[e];a[2]?t.push("@media "+a[2]+"{"+a[1]+"}"):t.push(a[1])}return t.join("")},t.i=function(e,a){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var n=this[r][0];"number"==typeof n&&(i[n]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&i[s[0]]||(a&&!s[2]?s[2]=a:a&&(s[2]="("+s[2]+") and ("+a+")"),t.push(s))}},t}},function(t,e,a){function i(t,e){for(var a=0;a<t.length;a++){var i=t[a],r=h[i.id];if(r){r.refs++;for(var n=0;n<r.parts.length;n++)r.parts[n](i.parts[n]);for(;n<i.parts.length;n++)r.parts.push(p(i.parts[n],e))}else{for(var s=[],n=0;n<i.parts.length;n++)s.push(p(i.parts[n],e));h[i.id]={id:i.id,refs:1,parts:s}}}}function r(t){for(var e=[],a={},i=0;i<t.length;i++){var r=t[i],n=r[0],s=r[1],o=r[2],p=r[3],c={css:s,media:o,sourceMap:p};a[n]?a[n].parts.push(c):e.push(a[n]={id:n,parts:[c]})}return e}function n(t,e){var a=m(),i=g[g.length-1];if("top"===t.insertAt)i?i.nextSibling?a.insertBefore(e,i.nextSibling):a.appendChild(e):a.insertBefore(e,a.firstChild),g.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");a.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function o(t){var e=document.createElement("style");return e.type="text/css",n(t,e),e}function p(t,e){var a,i,r;if(e.singleton){var n=y++;a=f||(f=o(e)),i=c.bind(null,a,n,!1),r=c.bind(null,a,n,!0)}else a=o(e),i=u.bind(null,a),r=function(){s(a)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}function c(t,e,a,i){var r=a?"":i.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var n=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(n,s[e]):t.appendChild(n)}}function u(t,e){var a=e.css,i=e.media,r=e.sourceMap;if(i&&t.setAttribute("media",i),r&&(a+="\n/*# sourceURL="+r.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}var h={},d=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},l=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=d(function(){return document.head||document.getElementsByTagName("head")[0]}),f=null,y=0,g=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=l()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var a=r(t);return i(a,e),function(t){for(var n=[],s=0;s<a.length;s++){var o=a[s],p=h[o.id];p.refs--,n.push(p)}if(t){var c=r(t);i(c,e)}for(var s=0;s<n.length;s++){var p=n[s];if(0===p.refs){for(var u=0;u<p.parts.length;u++)p.parts[u]();delete h[p.id]}}}};var x=function(){var t=[];return function(e,a){return t[e]=a,t.filter(Boolean).join("\n")}}()},function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(9),n=i(r);e.default={props:["stackinit","pages"],data:function(){return{basicdata:{start:{},end:{}},temporaryData:{prefixes:(0,n.default)(),poswidth:"",posheight:"",lastPosWidth:"",lastPosHeight:"",visible:this.stackinit.visible||3,tracking:!1,animation:!1,currentPage:this.stackinit.currentPage||0,currentSwipe:!1,opacity:1,lastOpacity:0,swipe:!1,zIndex:10}}},computed:{},mounted:function(){},methods:{touchstart:function(t){if(!this.temporaryData.tracking){if("touchstart"===t.type){if(t.touches.length>1)return void(this.temporaryData.tracking=!1);this.basicdata.start.t=(new Date).getTime(),this.basicdata.start.x=t.targetTouches[0].clientX,this.basicdata.start.y=t.targetTouches[0].clientY,this.basicdata.end.x=t.targetTouches[0].clientX,this.basicdata.end.y=t.targetTouches[0].clientY}else this.basicdata.start.t=(new Date).getTime(),this.basicdata.start.x=t.clientX,this.basicdata.start.y=t.clientY,this.basicdata.end.x=t.clientX,this.basicdata.end.y=t.clientY;this.temporaryData.tracking=!0,this.temporaryData.animation=!1}},touchmove:function(t){this.temporaryData.tracking&&!this.temporaryData.animation&&("touchmove"===t.type?(t.preventDefault(),this.basicdata.end.x=t.targetTouches[0].clientX,this.basicdata.end.y=t.targetTouches[0].clientY):(t.preventDefault(),this.basicdata.end.x=t.clientX,this.basicdata.end.y=t.clientY),this.temporaryData.poswidth=this.basicdata.end.x-this.basicdata.start.x,this.temporaryData.posheight=this.basicdata.end.y-this.basicdata.start.y)},touchend:function(t){var e=this;this.temporaryData.tracking=!1,this.temporaryData.animation=!0,Math.abs(this.temporaryData.poswidth)>=200?(this.temporaryData.poswidth=this.temporaryData.poswidth>=0?this.temporaryData.poswidth+200:this.temporaryData.poswidth-200,this.temporaryData.lastPosWidth=this.temporaryData.poswidth,this.temporaryData.lastPosHeight=this.temporaryData.posheight,this.temporaryData.opacity=0,this.temporaryData.swipe=!0,this.temporaryData.currentPage=this.temporaryData.currentPage<this.pages.length-1?this.temporaryData.currentPage+1:0,this.$nextTick(function(){e.temporaryData.poswidth=0,e.temporaryData.posheight=0,e.temporaryData.opacity=1})):(this.temporaryData.poswidth=0,this.temporaryData.posheight=0,this.temporaryData.swipe=!1)},onTransitionEnd:function(t){this.temporaryData.swipe&&t===this.temporaryData.currentPage-1&&(this.temporaryData.animation=!0,this.temporaryData.lastPosWidth=0,this.temporaryData.lastPosHeight=0,this.temporaryData.lastOpacity=0,this.temporaryData.swipe=!1)},transform:function(t){if(t>this.temporaryData.currentPage){var e={},a=this.temporaryData.visible,i=t-this.temporaryData.currentPage;return t<=this.temporaryData.currentPage+a-1?(e.opacity="1",e.transform="translate3D(0,0,"+-1*i*60+"px)",e.zIndex=a-t+this.temporaryData.currentPage,e[this.temporaryData.prefixes.transition+"TimingFunction"]="ease",e[this.temporaryData.prefixes.transition+"Duration"]="300ms"):(e.zIndex="-1",e.transform="translate3D(0,0,"+-1*a*60+"px)"),e}if(t===this.temporaryData.currentPage-1){var r={};return r.transform="translate3D("+this.temporaryData.lastPosWidth+"px,"+this.temporaryData.lastPosHeight+"px,0px)",r.opacity=this.temporaryData.lastOpacity,r.zIndex=-1,r[this.temporaryData.prefixes.transition+"TimingFunction"]="ease",r[this.temporaryData.prefixes.transition+"Duration"]="300ms",r}},styleIndex:function(t){if(t===this.temporaryData.currentPage){var e={};return e.transform="translate3D("+this.temporaryData.poswidth+"px,"+this.temporaryData.posheight+"px,0px)",e.opacity=this.temporaryData.opacity,e.zIndex=10,this.temporaryData.animation&&(e[this.temporaryData.prefixes.transition+"TimingFunction"]="ease",e[this.temporaryData.prefixes.transition+"Duration"]=(this.temporaryData.animation?300:0)+"ms"),e}},isQueue:function(t){}}}},function(t,e){(function(t){"use strict";function a(){var e=void 0,a=void 0,i=void 0,r=void 0;return function(){var n=document.createElement("_"),s=n.style,o=void 0;""===s[o="webkitTransition"]&&(i="webkitTransitionEnd",a=o),""===s[o="transition"]&&(i="transitionend",a=o),""===s[o="webkitTransform"]&&(e=o),""===s[o="msTransform"]&&(e=o),""===s[o="transform"]&&(e=o),document.body.insertBefore(n,null),s[e]="translate3d(0, 0, 0)",r=!!t.getComputedStyle(n).getPropertyValue(e),document.body.removeChild(n)}(),{transform:e,transition:a,transitionEnd:i,hasTranslate3d:r}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a}).call(e,function(){return this}())},function(t,e){t.exports=' <ul class=stack-container> <li v-for="(item, index) in pages" :style=[styleIndex(index),transform(index)] @touchmove=touchmove @touchstart=touchstart @touchend=touchend @mousedown=touchstart @mouseup=touchend @mousemove=touchmove @webkit-transition-end=onTransitionEnd(index) @transitionend=onTransitionEnd(index)> <div v-html=item.html></div> </li> </ul> '},function(t,e){t.exports=" <stack :pages=someList :stackinit=stackinit></stack> "}])});