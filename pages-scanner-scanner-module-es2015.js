(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-scanner-scanner-module"],{

/***/ "./node_modules/@ericblade/quagga2/dist/quagga.min.js":
/*!************************************************************!*\
  !*** ./node_modules/@ericblade/quagga2/dist/quagga.min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=87)}([function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){var r=n(19),o=n(1);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},function(t,e,n){var r=n(222);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e,n){t.exports={EPSILON:n(61),create:n(62),clone:n(154),fromValues:n(155),copy:n(156),set:n(157),equals:n(158),exactEquals:n(159),add:n(160),subtract:n(63),sub:n(161),multiply:n(64),mul:n(162),divide:n(65),div:n(163),inverse:n(164),min:n(165),max:n(166),rotate:n(167),floor:n(168),ceil:n(169),round:n(170),scale:n(171),scaleAndAdd:n(172),distance:n(66),dist:n(173),squaredDistance:n(67),sqrDist:n(174),length:n(68),len:n(175),squaredLength:n(69),sqrLen:n(176),negate:n(177),normalize:n(178),dot:n(179),cross:n(180),lerp:n(181),random:n(182),transformMat2:n(183),transformMat2d:n(184),transformMat3:n(185),transformMat4:n(186),forEach:n(187),limit:n(188)}},function(t,e,n){"use strict";e.a={init:function(t,e){for(var n=t.length;n--;)t[n]=e},shuffle:function(t){for(var e=t.length-1;e>=0;e--){var n=Math.floor(Math.random()*e),r=t[e];t[e]=t[n],t[n]=r}return t},toPointList:function(t){var e=t.reduce((function(t,e){var n="[".concat(e.join(","),"]");return t.push(n),t}),[]);return"[".concat(e.join(",\r\n"),"]")},threshold:function(t,e,n){return t.reduce((function(r,o){return n.apply(t,[o])>=e&&r.push(o),r}),[])},maxIndex:function(t){for(var e=0,n=0;n<t.length;n++)t[n]>t[e]&&(e=n);return e},max:function(t){for(var e=0,n=0;n<t.length;n++)t[n]>e&&(e=t[n]);return e},sum:function(t){for(var e=t.length,n=0;e--;)n+=t[e];return n}}},function(t,e,n){"use strict";n.d(e,"h",(function(){return l})),n.d(e,"i",(function(){return d})),n.d(e,"b",(function(){return v})),n.d(e,"j",(function(){return p})),n.d(e,"e",(function(){return g})),n.d(e,"c",(function(){return y})),n.d(e,"f",(function(){return x})),n.d(e,"g",(function(){return m})),n.d(e,"a",(function(){return b})),n.d(e,"d",(function(){return O}));var r=n(7),o=n(83),i={clone:r.clone,dot:r.dot},a=function(t,e){var n=[],r={rad:0,vec:i.clone([0,0])},o={};function a(t){o[t.id]=t,n.push(t)}function u(){var t,e=0;for(t=0;t<n.length;t++)e+=n[t].rad;r.rad=e/n.length,r.vec=i.clone([Math.cos(r.rad),Math.sin(r.rad)])}return a(t),u(),{add:function(t){o[t.id]||(a(t),u())},fits:function(t){return Math.abs(i.dot(t.point.vec,r.vec))>e},getPoints:function(){return n},getCenter:function(){return r}}},u=function(t,e,n){return{rad:t[n],point:t,id:e}},c=n(8),s={clone:r.clone},f={clone:o.clone};function l(t,e){return{x:t,y:e,toVec2:function(){return s.clone([this.x,this.y])},toVec3:function(){return f.clone([this.x,this.y,1])},round:function(){return this.x=this.x>0?Math.floor(this.x+.5):Math.floor(this.x-.5),this.y=this.y>0?Math.floor(this.y+.5):Math.floor(this.y-.5),this}}}function h(t,e){e||(e=8);for(var n=t.data,r=n.length,o=8-e,i=new Int32Array(1<<e);r--;)i[n[r]>>o]++;return i}function d(t,e){var n=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,r=8-n;function o(t,n){for(var r=0,o=t;o<=n;o++)r+=e[o];return r}function i(t,n){for(var r=0,o=t;o<=n;o++)r+=o*e[o];return r}function a(){var r,a,u,s,f=[0],l=(1<<n)-1;e=h(t,n);for(var d=1;d<l;d++)0===(u=(r=o(0,d))*(a=o(d+1,l)))&&(u=1),s=i(0,d)*a-i(d+1,l)*r,f[d]=s*s/u;return c.a.maxIndex(f)}var u=a();return u<<r}(t);return function(t,e,n){n||(n=t);for(var r=t.data,o=r.length,i=n.data;o--;)i[o]=r[o]<e?1:0}(t,n,e),n}function v(t,e,n){var r,o,i,c,s=[];function f(t){var e=!1;for(o=0;o<s.length;o++)(i=s[o]).fits(t)&&(i.add(t),e=!0);return e}for(n||(n="rad"),r=0;r<t.length;r++)f(c=u(t[r],r,n))||s.push(a(c,e));return s}function p(t,e,n){var r,o,i,a,u=0,c=0,s=[];for(r=0;r<e;r++)s[r]={score:0,item:null};for(r=0;r<t.length;r++)if((o=n.apply(this,[t[r]]))>c)for((i=s[u]).score=o,i.item=t[r],c=Number.MAX_VALUE,a=0;a<e;a++)s[a].score<c&&(c=s[a].score,u=a);return s}function g(t,e,n){for(var r,o=0,i=e.x,a=Math.floor(t.length/4),u=e.x/2,c=0,s=e.x;i<a;){for(r=0;r<u;r++)n[c]=(.299*t[4*o+0]+.587*t[4*o+1]+.114*t[4*o+2]+(.299*t[4*(o+1)+0]+.587*t[4*(o+1)+1]+.114*t[4*(o+1)+2])+(.299*t[4*i+0]+.587*t[4*i+1]+.114*t[4*i+2])+(.299*t[4*(i+1)+0]+.587*t[4*(i+1)+1]+.114*t[4*(i+1)+2]))/4,c++,o+=2,i+=2;o+=s,i+=s}}function y(t,e,n){var r=t.length/4|0;if(n&&!0===n.singleChannel)for(var o=0;o<r;o++)e[o]=t[4*o+0];else for(var i=0;i<r;i++)e[i]=.299*t[4*i+0]+.587*t[4*i+1]+.114*t[4*i+2]}function x(t,e){for(var n=t.data,r=t.size.x,o=e.data,i=0,a=r,u=n.length,c=r/2,s=0;a<u;){for(var f=0;f<c;f++)o[s]=Math.floor((n[i]+n[i+1]+n[a]+n[a+1])/4),s++,i+=2,a+=2;i+=r,a+=r}}function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,0],n=t[0],r=t[1],o=t[2],i=o*r,a=i*(1-Math.abs(n/60%2-1)),u=o-i,c=0,s=0,f=0;return n<60?(c=i,s=a):n<120?(c=a,s=i):n<180?(s=i,f=a):n<240?(s=a,f=i):n<300?(c=a,f=i):n<360&&(c=i,f=a),e[0]=255*(c+u)|0,e[1]=255*(s+u)|0,e[2]=255*(f+u)|0,e}function _(t){for(var e=[],n=[],r=1;r<Math.sqrt(t)+1;r++)t%r==0&&(n.push(r),r!==t/r&&e.unshift(Math.floor(t/r)));return n.concat(e)}function b(t,e){var n,r=_(e.x),o=_(e.y),i=Math.max(e.x,e.y),a=function(t,e){for(var n=0,r=0,o=[];n<t.length&&r<e.length;)t[n]===e[r]?(o.push(t[n]),n++,r++):t[n]>e[r]?r++:n++;return o}(r,o),u=[8,10,15,20,32,60,80],c={"x-small":5,small:4,medium:3,large:2,"x-large":1},s=c[t]||c.medium,f=u[s],l=Math.floor(i/f);function h(t){for(var e=0,n=t[Math.floor(t.length/2)];e<t.length-1&&t[e]<l;)e++;return e>0&&(n=Math.abs(t[e]-l)>Math.abs(t[e-1]-l)?t[e-1]:t[e]),l/n<u[s+1]/u[s]&&l/n>u[s-1]/u[s]?{x:n,y:n}:null}return(n=h(a))||(n=h(_(i)))||(n=h(_(l*f))),n}var w={top:function(t,e){return"%"===t.unit?Math.floor(e.height*(t.value/100)):null},right:function(t,e){return"%"===t.unit?Math.floor(e.width-e.width*(t.value/100)):null},bottom:function(t,e){return"%"===t.unit?Math.floor(e.height-e.height*(t.value/100)):null},left:function(t,e){return"%"===t.unit?Math.floor(e.width*(t.value/100)):null}};function O(t,e,n){var r={width:t,height:e},o=Object.keys(n).reduce((function(t,e){var o=function(t){return{value:parseFloat(t),unit:(t.indexOf("%"),t.length,"%")}}(n[e]),i=w[e](o,r);return t[e]=i,t}),{});return{sx:o.left,sy:o.top,sw:o.right-o.left,sh:o.bottom-o.top}}},function(t,e,n){"use strict";var r=n(82),o=n.n(r),i=n(3),a=n.n(i),u=n(4),c=n.n(u),s=n(0),f=n.n(s),l=n(7),h=n(9),d=n(8),v={clone:l.clone};function p(t){if(t<0)throw new Error("expected positive number, received ".concat(t))}var g=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Uint8Array,o=arguments.length>3?arguments[3]:void 0;a()(this,t),f()(this,"data",void 0),f()(this,"size",void 0),f()(this,"indexMapping",void 0),n?this.data=n:(this.data=new r(e.x*e.y),o&&d.a.init(this.data,0)),this.size=e}return c()(t,[{key:"inImageWithBorder",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return p(e),t.x>=0&&t.y>=0&&t.x<this.size.x+2*e&&t.y<this.size.y+2*e}},{key:"subImageAsCopy",value:function(t,e){p(e.x),p(e.y);for(var n=t.size,r=n.x,o=n.y,i=0;i<r;i++)for(var a=0;a<o;a++)t.data[a*r+i]=this.data[(e.y+a)*this.size.x+e.x+i];return t}},{key:"get",value:function(t,e){return this.data[e*this.size.x+t]}},{key:"getSafe",value:function(t,e){if(!this.indexMapping){this.indexMapping={x:[],y:[]};for(var n=0;n<this.size.x;n++)this.indexMapping.x[n]=n,this.indexMapping.x[n+this.size.x]=n;for(var r=0;r<this.size.y;r++)this.indexMapping.y[r]=r,this.indexMapping.y[r+this.size.y]=r}return this.data[this.indexMapping.y[e+this.size.y]*this.size.x+this.indexMapping.x[t+this.size.x]]}},{key:"set",value:function(t,e,n){return this.data[e*this.size.x+t]=n,delete this.indexMapping,this}},{key:"zeroBorder",value:function(){for(var t=this.size,e=t.x,n=t.y,r=0;r<e;r++)this.data[r]=this.data[(n-1)*e+r]=0;for(var o=1;o<n-1;o++)this.data[o*e]=this.data[o*e+(e-1)]=0;return delete this.indexMapping,this}},{key:"moments",value:function(t){var e,n,r,o,i,a,u,c,s,f,l=this.data,h=this.size.y,d=this.size.x,p=[],g=[],y=Math.PI,x=y/4;if(t<=0)return g;for(i=0;i<t;i++)p[i]={m00:0,m01:0,m10:0,m11:0,m02:0,m20:0,theta:0,rad:0};for(n=0;n<h;n++)for(o=n*n,e=0;e<d;e++)(r=l[n*d+e])>0&&((a=p[r-1]).m00+=1,a.m01+=n,a.m10+=e,a.m11+=e*n,a.m02+=o,a.m20+=e*e);for(i=0;i<t;i++)a=p[i],isNaN(a.m00)||0===a.m00||(c=a.m10/a.m00,s=a.m01/a.m00,u=a.m11/a.m00-c*s,f=(a.m02/a.m00-s*s-(a.m20/a.m00-c*c))/(2*u),f=.5*Math.atan(f)+(u>=0?x:-x)+y,a.theta=(180*f/y+90)%180-90,a.theta<0&&(a.theta+=180),a.rad=f>y?f-y:f,a.vec=v.clone([Math.cos(f),Math.sin(f)]),g.push(a));return g}},{key:"getAsRGBA",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=new Uint8ClampedArray(4*this.size.x*this.size.y),n=0;n<this.size.y;n++)for(var r=0;r<this.size.x;r++){var o=n*this.size.x+r,i=this.get(r,n)*t;e[4*o+0]=i,e[4*o+1]=i,e[4*o+2]=i,e[4*o+3]=255}return e}},{key:"show",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=t.getContext("2d");if(!n)throw new Error("Unable to get canvas context");var r=n.getImageData(0,0,t.width,t.height),o=this.getAsRGBA(e);t.width=this.size.x,t.height=this.size.y;var i=new ImageData(o,r.width,r.height);n.putImageData(i,0,0)}},{key:"overlay",value:function(t,e,n){var r=e<0||e>360?360:e,i=[0,1,1],a=[0,0,0],u=[255,255,255],c=[0,0,0],s=t.getContext("2d");if(!s)throw new Error("Unable to get canvas context");for(var f=s.getImageData(n.x,n.y,this.size.x,this.size.y),l=f.data,d=this.data.length;d--;){i[0]=this.data[d]*r;var v=4*d,p=i[0]<=0?u:i[0]>=360?c:Object(h.g)(i,a),g=o()(p,3);l[v]=g[0],l[v+1]=g[1],l[v+2]=g[2],l[v+3]=255}s.putImageData(f,n.x,n.y)}}]),t}();e.a=g},function(t,e,n){t.exports=n(227)},function(t,e,n){var r=n(226);function o(e,n,i){return"undefined"!=typeof Reflect&&Reflect.get?t.exports=o=Reflect.get:t.exports=o=function(t,e,n){var o=r(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}},o(e,n,i||e)}t.exports=o},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e){var n=Array.isArray;t.exports=n},function(t,e,n){"use strict";e.a={drawRect:function(t,e,n,r){n.strokeStyle=r.color,n.fillStyle=r.color,n.lineWidth=r.lineWidth||1,n.beginPath(),n.strokeRect(t.x,t.y,e.x,e.y)},drawPath:function(t,e,n,r){n.strokeStyle=r.color,n.fillStyle=r.color,n.lineWidth=r.lineWidth,n.beginPath(),n.moveTo(t[0][e.x],t[0][e.y]);for(var o=1;o<t.length;o++)n.lineTo(t[o][e.x],t[o][e.y]);n.closePath(),n.stroke()},drawImage:function(t,e,n){var r=n.getImageData(0,0,e.x,e.y),o=r.data,i=o.length,a=t.length;if(i/a!=4)return!1;for(;a--;){var u=t[a];o[--i]=255,o[--i]=u,o[--i]=u,o[--i]=u}return n.putImageData(r,0,0),!0}}},function(t,e,n){var r=n(88),o=n(143)((function(t,e,n){r(t,e,n)}));t.exports=o},function(t,e,n){var r=n(44),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e){function n(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}},function(t,e,n){"use strict";e.a={searchDirections:[[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]],create:function(t,e){var n,r=t.data,o=e.data,i=this.searchDirections,a=t.size.x;function u(t,e,u,c){var s,f,l;for(s=0;s<7;s++){if(f=t.cy+i[t.dir][0],l=t.cx+i[t.dir][1],r[n=f*a+l]===e&&(0===o[n]||o[n]===u))return o[n]=u,t.cy=f,t.cx=l,!0;0===o[n]&&(o[n]=c),t.dir=(t.dir+1)%8}return!1}function c(t,e,n){return{dir:n,x:t,y:e,next:null,prev:null}}return{trace:function(t,e,n,r){return u(t,e,n,r)},contourTracing:function(t,e,n,r,o){return function(t,e,n,r,o){var i,a,s,f=null,l={cx:e,cy:t,dir:0};if(u(l,r,n,o)){i=f=c(e,t,l.dir),s=l.dir,(a=c(l.cx,l.cy,0)).prev=i,i.next=a,a.next=null,i=a;do{l.dir=(l.dir+6)%8,u(l,r,n,o),s!==l.dir?(i.dir=l.dir,(a=c(l.cx,l.cy,0)).prev=i,i.next=a,a.next=null,i=a):(i.dir=s,i.x=l.cx,i.y=l.cy),s=l.dir}while(l.cx!==e||l.cy!==t);f.prev=i.prev,i.prev.next=f}return f}(t,e,n,r,o)}}}}},function(t,e,n){var r=n(27),o=n(101),i=n(102),a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?o(t):i(t)}},function(t,e,n){"use strict";(function(t){var r,o,i,a,u,c,s,f,l,h,d,v,p=n(7),g=n(34),y=n(10),x=n(9),m=n(8),_=(n(15),n(85)),b=n(21),w=n(86),O={ctx:{binary:null},dom:{binary:null}},R={x:0,y:0};function C(t){var e,n,o,i,a,u,c,s=l.size.x,f=l.size.y,h=-l.size.x,d=-l.size.y;for(e=0,n=0;n<t.length;n++)e+=(i=t[n]).rad;for((e=(180*(e/=t.length)/Math.PI+90)%180-90)<0&&(e+=180),e=(180-e)*Math.PI/180,a=g.copy(g.create(),[Math.cos(e),Math.sin(e),-Math.sin(e),Math.cos(e)]),n=0;n<t.length;n++){for(i=t[n],o=0;o<4;o++)p.transformMat2(i.box[o],i.box[o],a);0}for(n=0;n<t.length;n++)for(i=t[n],o=0;o<4;o++)i.box[o][0]<s&&(s=i.box[o][0]),i.box[o][0]>h&&(h=i.box[o][0]),i.box[o][1]<f&&(f=i.box[o][1]),i.box[o][1]>d&&(d=i.box[o][1]);for(u=[[s,f],[h,f],[h,d],[s,d]],c=r.halfSample?2:1,a=g.invert(a,a),o=0;o<4;o++)p.transformMat2(u[o],u[o],a);for(o=0;o<4;o++)p.scale(u[o],u[o],c);return u}function E(t,e){l.subImageAsCopy(a,Object(x.h)(t,e)),v.skeletonize()}function S(t,e,n,r){var o,i,u,c,s=[],f=[],l=Math.ceil(h.x/3);if(t.length>=2){for(o=0;o<t.length;o++)t[o].m00>l&&s.push(t[o]);if(s.length>=2){for(u=function(t){var e=Object(x.b)(t,.9),n=Object(x.j)(e,1,(function(t){return t.getPoints().length})),r=[],o=[];if(1===n.length){r=n[0].item.getPoints();for(var i=0;i<r.length;i++)o.push(r[i].point)}return o}(s),i=0,o=0;o<u.length;o++)i+=u[o].rad;u.length>1&&u.length>=s.length/4*3&&u.length>t.length/4&&(i/=u.length,c={index:e[1]*R.x+e[0],pos:{x:n,y:r},box:[p.clone([n,r]),p.clone([n+a.size.x,r]),p.clone([n+a.size.x,r+a.size.y]),p.clone([n,r+a.size.y])],moments:u,rad:i,vec:p.clone([Math.cos(i),Math.sin(i)])},f.push(c))}}return f}e.a={init:function(e,n){r=n,d=e,function(){o=r.halfSample?new y.a({x:d.size.x/2|0,y:d.size.y/2|0}):d,h=Object(x.a)(r.patchSize,o.size),R.x=o.size.x/h.x|0,R.y=o.size.y/h.y|0,l=new y.a(o.size,void 0,Uint8Array,!1),u=new y.a(h,void 0,Array,!0);var e=new ArrayBuffer(65536);a=new y.a(h,new Uint8Array(e,0,h.x*h.y)),i=new y.a(h,new Uint8Array(e,h.x*h.y*3,h.x*h.y),void 0,!0),v=Object(w.a)("undefined"!=typeof window?window:"undefined"!=typeof self?self:t,{size:h.x},e),f=new y.a({x:o.size.x/a.size.x|0,y:o.size.y/a.size.y|0},void 0,Array,!0),c=new y.a(f.size,void 0,void 0,!0),s=new y.a(f.size,void 0,Int32Array,!0)}(),r.useWorker||"undefined"==typeof document||(O.dom.binary=document.createElement("canvas"),O.dom.binary.className="binaryBuffer",O.ctx.binary=O.dom.binary.getContext("2d"),O.dom.binary.width=l.size.x,O.dom.binary.height=l.size.y)},locate:function(){r.halfSample&&Object(x.f)(d,o),Object(x.i)(o,l),l.zeroBorder();var t=function(){var t,e,n,r,o,c,s=[];for(t=0;t<R.x;t++)for(e=0;e<R.y;e++)E(n=a.size.x*t,r=a.size.y*e),i.zeroBorder(),m.a.init(u.data,0),c=_.a.create(i,u).rasterize(0),o=u.moments(c.count),s=s.concat(S(o,[t,e],n,r));return s}();if(t.length<R.x*R.y*.05)return null;var e=function(t){var e,n,r=0,o=0;function i(){var t;for(t=0;t<s.data.length;t++)if(0===s.data[t]&&1===c.data[t])return t;return s.length}function a(t){var e,n,o,i,u,l=t%s.size.x,h=t/s.size.x|0;if(t<s.data.length)for(o=f.data[t],s.data[t]=r,u=0;u<b.a.searchDirections.length;u++)n=h+b.a.searchDirections[u][0],e=l+b.a.searchDirections[u][1],i=n*s.size.x+e,0!==c.data[i]?0===s.data[i]&&Math.abs(p.dot(f.data[i].vec,o.vec))>.95&&a(i):s.data[i]=Number.MAX_VALUE}for(m.a.init(c.data,0),m.a.init(s.data,0),m.a.init(f.data,null),e=0;e<t.length;e++)n=t[e],f.data[n.index]=n,c.data[n.index]=1;for(c.zeroBorder();(o=i())<s.data.length;)r++,a(o);return r}(t);if(e<1)return null;var n=function(t){var e,n,r=[];for(e=0;e<t;e++)r.push(0);for(n=s.data.length;n--;)s.data[n]>0&&r[s.data[n]-1]++;return(r=r.map((function(t,e){return{val:t,label:e+1}}))).sort((function(t,e){return e.val-t.val})),r.filter((function(t){return t.val>=5}))}(e);return 0===n.length?null:function(t,e){var n,r,o,i,a=[],u=[];for(n=0;n<t.length;n++){for(r=s.data.length,a.length=0;r--;)s.data[r]===t[n].label&&(o=f.data[r],a.push(o));(i=C(a))&&u.push(i)}return u}(n)},checkImageConstraints:function(t,e){var n,r,o=t.getWidth(),i=t.getHeight(),a=e.halfSample?.5:1;t.getConfig().area&&(r=Object(x.d)(o,i,t.getConfig().area),t.setTopRight({x:r.sx,y:r.sy}),t.setCanvasSize({x:o,y:i}),o=r.sw,i=r.sh);var u={x:Math.floor(o*a),y:Math.floor(i*a)};if(n=Object(x.a)(e.patchSize,u),t.setWidth(Math.floor(Math.floor(u.x/n.x)*(1/a)*n.x)),t.setHeight(Math.floor(Math.floor(u.y/n.y)*(1/a)*n.y)),t.getWidth()%n.x==0&&t.getHeight()%n.y==0)return!0;throw new Error("Image dimensions do not comply with the current settings: Width (".concat(o," )and height (").concat(i,") must a multiple of ").concat(n.x))}}}).call(this,n(45))},function(t,e,n){var r=n(90),o=n(91),i=n(92),a=n(93),u=n(94);function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=a,c.prototype.set=u,t.exports=c},function(t,e,n){var r=n(26);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,n){var r=n(17).Symbol;t.exports=r},function(t,e,n){var r=n(35)(Object,"create");t.exports=r},function(t,e,n){var r=n(115);t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},function(t,e,n){var r=n(130),o=n(18),i=Object.prototype,a=i.hasOwnProperty,u=i.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(t){return o(t)&&a.call(t,"callee")&&!u.call(t,"callee")};t.exports=c},function(t,e){var n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&n.test(t))&&t>-1&&t%1==0&&t<e}},function(t,e,n){var r=n(14),o=n(231),i=n(232),a=n(235);t.exports=function(t,e){return r(t)?t:o(t,e)?[t]:i(a(t))}},function(t,e,n){var r=n(223),o=n(224),i=n(59),a=n(225);t.exports=function(t){return r(t)||o(t)||i(t)||a()}},function(t,e,n){t.exports={determinant:n(247),transpose:n(248),multiply:n(249),identity:n(250),adjoint:n(251),rotate:n(252),invert:n(253),create:n(254),scale:n(255),copy:n(256),frob:n(257),ldu:n(258)}},function(t,e,n){var r=n(100),o=n(106);t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},function(t,e,n){var r=n(22),o=n(13);t.exports=function(t){if(!o(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},function(t,e,n){var r=n(48);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){var r=n(36),o=n(40);t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},function(t,e){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},function(t,e,n){var r=n(22),o=n(18);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},function(t,e,n){var r=n(41);t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},function(t,e,n){var r=n(35)(n(17),"Map");t.exports=r},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(45))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(107),o=n(114),i=n(116),a=n(117),u=n(118);function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=a,c.prototype.set=u,t.exports=c},function(t,e,n){var r=n(37),o=n(26);t.exports=function(t,e,n){(void 0!==n&&!o(t[e],n)||void 0===n&&!(e in t))&&r(t,e,n)}},function(t,e,n){var r=n(35),o=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},function(t,e,n){var r=n(129)(Object.getPrototypeOf,Object);t.exports=r},function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},function(t,e,n){(function(t){var r=n(17),o=n(132),i=e&&!e.nodeType&&e,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,u=a&&a.exports===i?r.Buffer:void 0,c=(u?u.isBuffer:void 0)||o;t.exports=c}).call(this,n(38)(t))},function(t,e,n){var r=n(134),o=n(135),i=n(136),a=i&&i.isTypedArray,u=a?o(a):r;t.exports=u},function(t,e){t.exports=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}},function(t,e,n){var r=n(37),o=n(26),i=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var a=t[e];i.call(t,e)&&o(a,n)&&(void 0!==n||e in t)||r(t,e,n)}},function(t,e,n){var r=n(139),o=n(141),i=n(39);t.exports=function(t){return i(t)?r(t,!0):o(t)}},function(t,e){t.exports=function(t){return t}},function(t,e,n){var r=n(145),o=Math.max;t.exports=function(t,e,n){return e=o(void 0===e?t.length-1:e,0),function(){for(var i=arguments,a=-1,u=o(i.length-e,0),c=Array(u);++a<u;)c[a]=i[e+a];a=-1;for(var s=Array(e+1);++a<e;)s[a]=i[a];return s[e]=n(c),r(t,this,s)}}},function(t,e,n){var r=n(146),o=n(148)(r);t.exports=o},function(t,e,n){var r=n(60);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},function(t,e){t.exports=1e-6},function(t,e){t.exports=function(){var t=new Float32Array(2);return t[0]=0,t[1]=0,t}},function(t,e){t.exports=function(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t}},function(t,e){t.exports=function(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t}},function(t,e){t.exports=function(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t}},function(t,e){t.exports=function(t,e){var n=e[0]-t[0],r=e[1]-t[1];return Math.sqrt(n*n+r*r)}},function(t,e){t.exports=function(t,e){var n=e[0]-t[0],r=e[1]-t[1];return n*n+r*r}},function(t,e){t.exports=function(t){var e=t[0],n=t[1];return Math.sqrt(e*e+n*n)}},function(t,e){t.exports=function(t){var e=t[0],n=t[1];return e*e+n*n}},function(t,e){t.exports=1e-6},function(t,e){t.exports=function(){var t=new Float32Array(3);return t[0]=0,t[1]=0,t[2]=0,t}},function(t,e){t.exports=function(t,e,n){var r=new Float32Array(3);return r[0]=t,r[1]=e,r[2]=n,r}},function(t,e){t.exports=function(t,e){var n=e[0],r=e[1],o=e[2],i=n*n+r*r+o*o;i>0&&(i=1/Math.sqrt(i),t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i);return t}},function(t,e){t.exports=function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}},function(t,e){t.exports=function(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t}},function(t,e){t.exports=function(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t}},function(t,e){t.exports=function(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t}},function(t,e){t.exports=function(t,e){var n=e[0]-t[0],r=e[1]-t[1],o=e[2]-t[2];return Math.sqrt(n*n+r*r+o*o)}},function(t,e){t.exports=function(t,e){var n=e[0]-t[0],r=e[1]-t[1],o=e[2]-t[2];return n*n+r*r+o*o}},function(t,e){t.exports=function(t){var e=t[0],n=t[1],r=t[2];return Math.sqrt(e*e+n*n+r*r)}},function(t,e){t.exports=function(t){var e=t[0],n=t[1],r=t[2];return e*e+n*n+r*r}},function(t,e,n){var r=n(151),o=n(152),i=n(59),a=n(153);t.exports=function(t,e){return r(t)||o(t,e)||i(t,e)||a()}},function(t,e,n){t.exports={EPSILON:n(70),create:n(71),clone:n(189),angle:n(190),fromValues:n(72),copy:n(191),set:n(192),equals:n(193),exactEquals:n(194),add:n(195),subtract:n(75),sub:n(196),multiply:n(76),mul:n(197),divide:n(77),div:n(198),min:n(199),max:n(200),floor:n(201),ceil:n(202),round:n(203),scale:n(204),scaleAndAdd:n(205),distance:n(78),dist:n(206),squaredDistance:n(79),sqrDist:n(207),length:n(80),len:n(208),squaredLength:n(81),sqrLen:n(209),negate:n(210),inverse:n(211),normalize:n(73),dot:n(74),cross:n(212),lerp:n(213),random:n(214),transformMat4:n(215),transformMat3:n(216),transformQuat:n(217),rotateX:n(218),rotateY:n(219),rotateZ:n(220),forEach:n(221)}},function(t,e,n){var r=n(228),o=n(242)((function(t,e){return null==t?{}:r(t,e)}));t.exports=o},function(t,e,n){"use strict";var r=n(21),o={createContour2D:function(){return{dir:null,index:null,firstVertex:null,insideContours:null,nextpeer:null,prevpeer:null}},CONTOUR_DIR:{CW_DIR:0,CCW_DIR:1,UNKNOWN_DIR:2},DIR:{OUTSIDE_EDGE:-32767,INSIDE_EDGE:-32766},create:function(t,e){var n=t.data,i=e.data,a=t.size.x,u=t.size.y,c=r.a.create(t,e);return{rasterize:function(t){var e,r,s,f,l,h,d,v,p,g,y,x,m=[],_=0;for(x=0;x<400;x++)m[x]=0;for(m[0]=n[0],p=null,h=1;h<u-1;h++)for(f=0,r=m[0],l=1;l<a-1;l++)if(0===i[y=h*a+l])if((e=n[y])!==r){if(0===f)m[s=_+1]=e,r=e,null!==(d=c.contourTracing(h,l,s,e,o.DIR.OUTSIDE_EDGE))&&(_++,f=s,(v=o.createContour2D()).dir=o.CONTOUR_DIR.CW_DIR,v.index=f,v.firstVertex=d,v.nextpeer=p,v.insideContours=null,null!==p&&(p.prevpeer=v),p=v);else if(null!==(d=c.contourTracing(h,l,o.DIR.INSIDE_EDGE,e,f))){for((v=o.createContour2D()).firstVertex=d,v.insideContours=null,v.dir=0===t?o.CONTOUR_DIR.CCW_DIR:o.CONTOUR_DIR.CW_DIR,v.index=t,g=p;null!==g&&g.index!==f;)g=g.nextpeer;null!==g&&(v.nextpeer=g.insideContours,null!==g.insideContours&&(g.insideContours.prevpeer=v),g.insideContours=v)}}else i[y]=f;else i[y]===o.DIR.OUTSIDE_EDGE||i[y]===o.DIR.INSIDE_EDGE?(f=0,r=i[y]===o.DIR.INSIDE_EDGE?n[y]:m[0]):r=m[f=i[y]];for(g=p;null!==g;)g.index=t,g=g.nextpeer;return{cc:p,count:_}},debug:{drawContour:function(t,e){var n,r,i,a=t.getContext("2d"),u=e;for(a.strokeStyle="red",a.fillStyle="red",a.lineWidth=1,n=null!==u?u.insideContours:null;null!==u;){switch(null!==n?(r=n,n=n.nextpeer):(r=u,n=null!==(u=u.nextpeer)?u.insideContours:null),r.dir){case o.CONTOUR_DIR.CW_DIR:a.strokeStyle="red";break;case o.CONTOUR_DIR.CCW_DIR:a.strokeStyle="blue";break;case o.CONTOUR_DIR.UNKNOWN_DIR:a.strokeStyle="green"}i=r.firstVertex,a.beginPath(),a.moveTo(i.x,i.y);do{i=i.next,a.lineTo(i.x,i.y)}while(i!==r.firstVertex);a.stroke()}}}}}};e.a=o},function(t,e,n){"use strict";
/* @preserve ASM BEGIN */
/* @preserve ASM END */e.a=function(t,e,n){"use asm";var r=new t.Uint8Array(n),o=e.size|0,i=t.Math.imul;function a(t,e){t|=0;e|=0;var n=0;var i=0;var a=0;var u=0;var c=0;var s=0;var f=0;var l=0;for(n=1;(n|0)<(o-1|0);n=n+1|0){l=l+o|0;for(i=1;(i|0)<(o-1|0);i=i+1|0){u=l-o|0;c=l+o|0;s=i-1|0;f=i+1|0;a=(r[t+u+s|0]|0)+(r[t+u+f|0]|0)+(r[t+l+i|0]|0)+(r[t+c+s|0]|0)+(r[t+c+f|0]|0)|0;if((a|0)==(5|0)){r[e+l+i|0]=1}else{r[e+l+i|0]=0}}}}function u(t,e,n){t|=0;e|=0;n|=0;var a=0;a=i(o,o)|0;while((a|0)>0){a=a-1|0;r[n+a|0]=(r[t+a|0]|0)-(r[e+a|0]|0)|0}}function c(t,e,n){t|=0;e|=0;n|=0;var a=0;a=i(o,o)|0;while((a|0)>0){a=a-1|0;r[n+a|0]=r[t+a|0]|0|(r[e+a|0]|0)|0}}function s(t){t|=0;var e=0;var n=0;n=i(o,o)|0;while((n|0)>0){n=n-1|0;e=(e|0)+(r[t+n|0]|0)|0}return e|0}function f(t,e){t|=0;e|=0;var n=0;n=i(o,o)|0;while((n|0)>0){n=n-1|0;r[t+n|0]=e}}function l(t,e){t|=0;e|=0;var n=0;var i=0;var a=0;var u=0;var c=0;var s=0;var f=0;var l=0;for(n=1;(n|0)<(o-1|0);n=n+1|0){l=l+o|0;for(i=1;(i|0)<(o-1|0);i=i+1|0){u=l-o|0;c=l+o|0;s=i-1|0;f=i+1|0;a=(r[t+u+s|0]|0)+(r[t+u+f|0]|0)+(r[t+l+i|0]|0)+(r[t+c+s|0]|0)+(r[t+c+f|0]|0)|0;if((a|0)>(0|0)){r[e+l+i|0]=1}else{r[e+l+i|0]=0}}}}function h(t,e){t|=0;e|=0;var n=0;n=i(o,o)|0;while((n|0)>0){n=n-1|0;r[e+n|0]=r[t+n|0]|0}}function d(t){t|=0;var e=0;var n=0;for(e=0;(e|0)<(o-1|0);e=e+1|0){r[t+e|0]=0;r[t+n|0]=0;n=n+o-1|0;r[t+n|0]=0;n=n+1|0}for(e=0;(e|0)<(o|0);e=e+1|0){r[t+n|0]=0;n=n+1|0}}function v(){var t=0;var e=0;var n=0;var r=0;var v=0;var p=0;e=i(o,o)|0;n=e+e|0;r=n+e|0;f(r,0);d(t);do{a(t,e);l(e,n);u(t,n,n);c(r,n,r);h(e,t);v=s(t)|0;p=(v|0)==0|0}while(!p)}return{skeletonize:v}}},function(t,e,n){t.exports=n(259)},function(t,e,n){var r=n(89),o=n(47),i=n(119),a=n(121),u=n(13),c=n(55),s=n(53);t.exports=function t(e,n,f,l,h){e!==n&&i(n,(function(i,c){if(h||(h=new r),u(i))a(e,n,c,f,t,l,h);else{var d=l?l(s(e,c),i,c+"",e,n,h):void 0;void 0===d&&(d=i),o(e,c,d)}}),c)}},function(t,e,n){var r=n(24),o=n(95),i=n(96),a=n(97),u=n(98),c=n(99);function s(t){var e=this.__data__=new r(t);this.size=e.size}s.prototype.clear=o,s.prototype.delete=i,s.prototype.get=a,s.prototype.has=u,s.prototype.set=c,t.exports=s},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,n){var r=n(25),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0)&&(n==e.length-1?e.pop():o.call(e,n,1),--this.size,!0)}},function(t,e,n){var r=n(25);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},function(t,e,n){var r=n(25);t.exports=function(t){return r(this.__data__,t)>-1}},function(t,e,n){var r=n(25);t.exports=function(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}},function(t,e,n){var r=n(24);t.exports=function(){this.__data__=new r,this.size=0}},function(t,e){t.exports=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}},function(t,e){t.exports=function(t){return this.__data__.get(t)}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e,n){var r=n(24),o=n(43),i=n(46);t.exports=function(t,e){var n=this.__data__;if(n instanceof r){var a=n.__data__;if(!o||a.length<199)return a.push([t,e]),this.size=++n.size,this;n=this.__data__=new i(a)}return n.set(t,e),this.size=n.size,this}},function(t,e,n){var r=n(36),o=n(103),i=n(13),a=n(105),u=/^\[object .+?Constructor\]$/,c=Function.prototype,s=Object.prototype,f=c.toString,l=s.hasOwnProperty,h=RegExp("^"+f.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(r(t)?h:u).test(a(t))}},function(t,e,n){var r=n(27),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,u=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,u),n=t[u];try{t[u]=void 0;var r=!0}catch(t){}var o=a.call(t);return r&&(e?t[u]=n:delete t[u]),o}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e,n){var r,o=n(104),i=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!i&&i in t}},function(t,e,n){var r=n(17)["__core-js_shared__"];t.exports=r},function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e,n){var r=n(108),o=n(24),i=n(43);t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(i||o),string:new r}}},function(t,e,n){var r=n(109),o=n(110),i=n(111),a=n(112),u=n(113);function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=a,c.prototype.set=u,t.exports=c},function(t,e,n){var r=n(28);t.exports=function(){this.__data__=r?r(null):{},this.size=0}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e,n){var r=n(28),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(e,t)?e[t]:void 0}},function(t,e,n){var r=n(28),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:o.call(e,t)}},function(t,e,n){var r=n(28);t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,this}},function(t,e,n){var r=n(29);t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,n){var r=n(29);t.exports=function(t){return r(this,t).get(t)}},function(t,e,n){var r=n(29);t.exports=function(t){return r(this,t).has(t)}},function(t,e,n){var r=n(29);t.exports=function(t,e){var n=r(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}},function(t,e,n){var r=n(120)();t.exports=r},function(t,e){t.exports=function(t){return function(e,n,r){for(var o=-1,i=Object(e),a=r(e),u=a.length;u--;){var c=a[t?u:++o];if(!1===n(i[c],c,i))break}return e}}},function(t,e,n){var r=n(47),o=n(122),i=n(123),a=n(126),u=n(127),c=n(30),s=n(14),f=n(131),l=n(51),h=n(36),d=n(13),v=n(133),p=n(52),g=n(53),y=n(137);t.exports=function(t,e,n,x,m,_,b){var w=g(t,n),O=g(e,n),R=b.get(O);if(R)r(t,n,R);else{var C=_?_(w,O,n+"",t,e,b):void 0,E=void 0===C;if(E){var S=s(O),A=!S&&l(O),M=!S&&!A&&p(O);C=O,S||A||M?s(w)?C=w:f(w)?C=a(w):A?(E=!1,C=o(O,!0)):M?(E=!1,C=i(O,!0)):C=[]:v(O)||c(O)?(C=w,c(w)?C=y(w):d(w)&&!h(w)||(C=u(O))):E=!1}E&&(b.set(O,C),m(C,O,x,_,b),b.delete(O)),r(t,n,C)}}},function(t,e,n){(function(t){var r=n(17),o=e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o?r.Buffer:void 0,u=a?a.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var n=t.length,r=u?u(n):new t.constructor(n);return t.copy(r),r}}).call(this,n(38)(t))},function(t,e,n){var r=n(124);t.exports=function(t,e){var n=e?r(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}},function(t,e,n){var r=n(125);t.exports=function(t){var e=new t.constructor(t.byteLength);return new r(e).set(new r(t)),e}},function(t,e,n){var r=n(17).Uint8Array;t.exports=r},function(t,e){t.exports=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}},function(t,e,n){var r=n(128),o=n(49),i=n(50);t.exports=function(t){return"function"!=typeof t.constructor||i(t)?{}:r(o(t))}},function(t,e,n){var r=n(13),o=Object.create,i=function(){function t(){}return function(e){if(!r(e))return{};if(o)return o(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();t.exports=i},function(t,e){t.exports=function(t,e){return function(n){return t(e(n))}}},function(t,e,n){var r=n(22),o=n(18);t.exports=function(t){return o(t)&&"[object Arguments]"==r(t)}},function(t,e,n){var r=n(39),o=n(18);t.exports=function(t){return o(t)&&r(t)}},function(t,e){t.exports=function(){return!1}},function(t,e,n){var r=n(22),o=n(49),i=n(18),a=Function.prototype,u=Object.prototype,c=a.toString,s=u.hasOwnProperty,f=c.call(Object);t.exports=function(t){if(!i(t)||"[object Object]"!=r(t))return!1;var e=o(t);if(null===e)return!0;var n=s.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&c.call(n)==f}},function(t,e,n){var r=n(22),o=n(40),i=n(18),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,t.exports=function(t){return i(t)&&o(t.length)&&!!a[r(t)]}},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e,n){(function(t){var r=n(44),o=e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o&&r.process,u=function(){try{var t=i&&i.require&&i.require("util").types;return t||a&&a.binding&&a.binding("util")}catch(t){}}();t.exports=u}).call(this,n(38)(t))},function(t,e,n){var r=n(138),o=n(55);t.exports=function(t){return r(t,o(t))}},function(t,e,n){var r=n(54),o=n(37);t.exports=function(t,e,n,i){var a=!n;n||(n={});for(var u=-1,c=e.length;++u<c;){var s=e[u],f=i?i(n[s],t[s],s,n,t):void 0;void 0===f&&(f=t[s]),a?o(n,s,f):r(n,s,f)}return n}},function(t,e,n){var r=n(140),o=n(30),i=n(14),a=n(51),u=n(31),c=n(52),s=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=i(t),f=!n&&o(t),l=!n&&!f&&a(t),h=!n&&!f&&!l&&c(t),d=n||f||l||h,v=d?r(t.length,String):[],p=v.length;for(var g in t)!e&&!s.call(t,g)||d&&("length"==g||l&&("offset"==g||"parent"==g)||h&&("buffer"==g||"byteLength"==g||"byteOffset"==g)||u(g,p))||v.push(g);return v}},function(t,e){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},function(t,e,n){var r=n(13),o=n(50),i=n(142),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return i(t);var e=o(t),n=[];for(var u in t)("constructor"!=u||!e&&a.call(t,u))&&n.push(u);return n}},function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},function(t,e,n){var r=n(144),o=n(149);t.exports=function(t){return r((function(e,n){var r=-1,i=n.length,a=i>1?n[i-1]:void 0,u=i>2?n[2]:void 0;for(a=t.length>3&&"function"==typeof a?(i--,a):void 0,u&&o(n[0],n[1],u)&&(a=i<3?void 0:a,i=1),e=Object(e);++r<i;){var c=n[r];c&&t(e,c,r,a)}return e}))}},function(t,e,n){var r=n(56),o=n(57),i=n(58);t.exports=function(t,e){return i(o(t,e,r),t+"")}},function(t,e){t.exports=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}},function(t,e,n){var r=n(147),o=n(48),i=n(56),a=o?function(t,e){return o(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0})}:i;t.exports=a},function(t,e){t.exports=function(t){return function(){return t}}},function(t,e){var n=Date.now;t.exports=function(t){var e=0,r=0;return function(){var o=n(),i=16-(o-r);if(r=o,i>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}},function(t,e,n){var r=n(26),o=n(39),i=n(31),a=n(13);t.exports=function(t,e,n){if(!a(n))return!1;var u=typeof e;return!!("number"==u?o(n)&&i(e,n.length):"string"==u&&e in n)&&r(n[e],t)}},function(t,e){"undefined"!=typeof window&&(window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)})),"function"!=typeof Math.imul&&(Math.imul=function(t,e){var n=65535&t,r=65535&e;return n*r+((t>>>16&65535)*r+n*(e>>>16&65535)<<16>>>0)|0}),"function"!=typeof Object.assign&&(Object.assign=function(t){"use strict";if(null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var r=arguments[n];if(null!==r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e})},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e){t.exports=function(t){var e=new Float32Array(2);return e[0]=t[0],e[1]=t[1],e}},function(t,e){t.exports=function(t,e){var n=new Float32Array(2);return n[0]=t,n[1]=e,n}},function(t,e){t.exports=function(t,e){return t[0]=e[0],t[1]=e[1],t}},function(t,e){t.exports=function(t,e,n){return t[0]=e,t[1]=n,t}},function(t,e,n){t.exports=function(t,e){var n=t[0],o=t[1],i=e[0],a=e[1];return Math.abs(n-i)<=r*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(o-a)<=r*Math.max(1,Math.abs(o),Math.abs(a))};var r=n(61)},function(t,e){t.exports=function(t,e){return t[0]===e[0]&&t[1]===e[1]}},function(t,e){t.exports=function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t}},function(t,e,n){t.exports=n(63)},function(t,e,n){t.exports=n(64)},function(t,e,n){t.exports=n(65)},function(t,e){t.exports=function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t}},function(t,e){t.exports=function(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t}},function(t,e){t.exports=function(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t}},function(t,e){t.exports=function(t,e,n){var r=Math.cos(n),o=Math.sin(n),i=e[0],a=e[1];return t[0]=i*r-a*o,t[1]=i*o+a*r,t}},function(t,e){t.exports=function(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t}},function(t,e){t.exports=function(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t}},function(t,e){t.exports=function(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t}},function(t,e){t.exports=function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t}},function(t,e){t.exports=function(t,e,n,r){return t[0]=e[0]+n[0]*r,t[1]=e[1]+n[1]*r,t}},function(t,e,n){t.exports=n(66)},function(t,e,n){t.exports=n(67)},function(t,e,n){t.exports=n(68)},function(t,e,n){t.exports=n(69)},function(t,e){t.exports=function(t,e){return t[0]=-e[0],t[1]=-e[1],t}},function(t,e){t.exports=function(t,e){var n=e[0],r=e[1],o=n*n+r*r;o>0&&(o=1/Math.sqrt(o),t[0]=e[0]*o,t[1]=e[1]*o);return t}},function(t,e){t.exports=function(t,e){return t[0]*e[0]+t[1]*e[1]}},function(t,e){t.exports=function(t,e,n){var r=e[0]*n[1]-e[1]*n[0];return t[0]=t[1]=0,t[2]=r,t}},function(t,e){t.exports=function(t,e,n,r){var o=e[0],i=e[1];return t[0]=o+r*(n[0]-o),t[1]=i+r*(n[1]-i),t}},function(t,e){t.exports=function(t,e){e=e||1;var n=2*Math.random()*Math.PI;return t[0]=Math.cos(n)*e,t[1]=Math.sin(n)*e,t}},function(t,e){t.exports=function(t,e,n){var r=e[0],o=e[1];return t[0]=n[0]*r+n[2]*o,t[1]=n[1]*r+n[3]*o,t}},function(t,e){t.exports=function(t,e,n){var r=e[0],o=e[1];return t[0]=n[0]*r+n[2]*o+n[4],t[1]=n[1]*r+n[3]*o+n[5],t}},function(t,e){t.exports=function(t,e,n){var r=e[0],o=e[1];return t[0]=n[0]*r+n[3]*o+n[6],t[1]=n[1]*r+n[4]*o+n[7],t}},function(t,e){t.exports=function(t,e,n){var r=e[0],o=e[1];return t[0]=n[0]*r+n[4]*o+n[12],t[1]=n[1]*r+n[5]*o+n[13],t}},function(t,e,n){t.exports=function(t,e,n,o,i,a){var u,c;e||(e=2);n||(n=0);c=o?Math.min(o*e+n,t.length):t.length;for(u=n;u<c;u+=e)r[0]=t[u],r[1]=t[u+1],i(r,r,a),t[u]=r[0],t[u+1]=r[1];return t};var r=n(62)()},function(t,e){t.exports=function(t,e,n){var r=e[0]*e[0]+e[1]*e[1];if(r>n*n){var o=Math.sqrt(r);t[0]=e[0]/o*n,t[1]=e[1]/o*n}else t[0]=e[0],t[1]=e[1];return t}},function(t,e){t.exports=function(t){var e=new Float32Array(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}},function(t,e,n){t.exports=function(t,e){var n=r(t[0],t[1],t[2]),a=r(e[0],e[1],e[2]);o(n,n),o(a,a);var u=i(n,a);return u>1?0:Math.acos(u)};var r=n(72),o=n(73),i=n(74)},function(t,e){t.exports=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}},function(t,e){t.exports=function(t,e,n,r){return t[0]=e,t[1]=n,t[2]=r,t}},function(t,e,n){t.exports=function(t,e){var n=t[0],o=t[1],i=t[2],a=e[0],u=e[1],c=e[2];return Math.abs(n-a)<=r*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(o-u)<=r*Math.max(1,Math.abs(o),Math.abs(u))&&Math.abs(i-c)<=r*Math.max(1,Math.abs(i),Math.abs(c))};var r=n(70)},function(t,e){t.exports=function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}},function(t,e){t.exports=function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t}},function(t,e,n){t.exports=n(75)},function(t,e,n){t.exports=n(76)},function(t,e,n){t.exports=n(77)},function(t,e){t.exports=function(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t[2]=Math.min(e[2],n[2]),t}},function(t,e){t.exports=function(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t[2]=Math.max(e[2],n[2]),t}},function(t,e){t.exports=function(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t}},function(t,e){t.exports=function(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t}},function(t,e){t.exports=function(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t}},function(t,e){t.exports=function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t}},function(t,e){t.exports=function(t,e,n,r){return t[0]=e[0]+n[0]*r,t[1]=e[1]+n[1]*r,t[2]=e[2]+n[2]*r,t}},function(t,e,n){t.exports=n(78)},function(t,e,n){t.exports=n(79)},function(t,e,n){t.exports=n(80)},function(t,e,n){t.exports=n(81)},function(t,e){t.exports=function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}},function(t,e){t.exports=function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}},function(t,e){t.exports=function(t,e,n){var r=e[0],o=e[1],i=e[2],a=n[0],u=n[1],c=n[2];return t[0]=o*c-i*u,t[1]=i*a-r*c,t[2]=r*u-o*a,t}},function(t,e){t.exports=function(t,e,n,r){var o=e[0],i=e[1],a=e[2];return t[0]=o+r*(n[0]-o),t[1]=i+r*(n[1]-i),t[2]=a+r*(n[2]-a),t}},function(t,e){t.exports=function(t,e){e=e||1;var n=2*Math.random()*Math.PI,r=2*Math.random()-1,o=Math.sqrt(1-r*r)*e;return t[0]=Math.cos(n)*o,t[1]=Math.sin(n)*o,t[2]=r*e,t}},function(t,e){t.exports=function(t,e,n){var r=e[0],o=e[1],i=e[2],a=n[3]*r+n[7]*o+n[11]*i+n[15];return a=a||1,t[0]=(n[0]*r+n[4]*o+n[8]*i+n[12])/a,t[1]=(n[1]*r+n[5]*o+n[9]*i+n[13])/a,t[2]=(n[2]*r+n[6]*o+n[10]*i+n[14])/a,t}},function(t,e){t.exports=function(t,e,n){var r=e[0],o=e[1],i=e[2];return t[0]=r*n[0]+o*n[3]+i*n[6],t[1]=r*n[1]+o*n[4]+i*n[7],t[2]=r*n[2]+o*n[5]+i*n[8],t}},function(t,e){t.exports=function(t,e,n){var r=e[0],o=e[1],i=e[2],a=n[0],u=n[1],c=n[2],s=n[3],f=s*r+u*i-c*o,l=s*o+c*r-a*i,h=s*i+a*o-u*r,d=-a*r-u*o-c*i;return t[0]=f*s+d*-a+l*-c-h*-u,t[1]=l*s+d*-u+h*-a-f*-c,t[2]=h*s+d*-c+f*-u-l*-a,t}},function(t,e){t.exports=function(t,e,n,r){var o=n[1],i=n[2],a=e[1]-o,u=e[2]-i,c=Math.sin(r),s=Math.cos(r);return t[0]=e[0],t[1]=o+a*s-u*c,t[2]=i+a*c+u*s,t}},function(t,e){t.exports=function(t,e,n,r){var o=n[0],i=n[2],a=e[0]-o,u=e[2]-i,c=Math.sin(r),s=Math.cos(r);return t[0]=o+u*c+a*s,t[1]=e[1],t[2]=i+u*s-a*c,t}},function(t,e){t.exports=function(t,e,n,r){var o=n[0],i=n[1],a=e[0]-o,u=e[1]-i,c=Math.sin(r),s=Math.cos(r);return t[0]=o+a*s-u*c,t[1]=i+a*c+u*s,t[2]=e[2],t}},function(t,e,n){t.exports=function(t,e,n,o,i,a){var u,c;e||(e=3);n||(n=0);c=o?Math.min(o*e+n,t.length):t.length;for(u=n;u<c;u+=e)r[0]=t[u],r[1]=t[u+1],r[2]=t[u+2],i(r,r,a),t[u]=r[0],t[u+1]=r[1],t[u+2]=r[2];return t};var r=n(71)()},function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},function(t,e,n){var r=n(60);t.exports=function(t){if(Array.isArray(t))return r(t)}},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e,n){var r=n(2);t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=r(t)););return t}},function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function u(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new w(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return R()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=m(a,n);if(u){if(u===s)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var f=c(t,e,n);if("normal"===f.type){if(r=n.done?"completed":"suspendedYield",f.arg===s)continue;return{value:f.arg,done:n.done}}"throw"===f.type&&(r="completed",n.method="throw",n.arg=f.arg)}}}(t,n,a),i}function c(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s={};function f(){}function l(){}function h(){}var d={};d[o]=function(){return this};var v=Object.getPrototypeOf,p=v&&v(v(O([])));p&&p!==e&&n.call(p,o)&&(d=p);var g=h.prototype=f.prototype=Object.create(d);function y(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function x(t,e){var r;this._invoke=function(o,i){function a(){return new e((function(r,a){!function r(o,i,a,u){var s=c(t[o],t,i);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return r("throw",t,a,u)}))}u(s.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function m(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,m(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=c(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function w(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:R}}function R(){return{value:void 0,done:!0}}return l.prototype=g.constructor=h,h.constructor=l,h[a]=l.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===l||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(x.prototype),x.prototype[i]=function(){return this},t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new x(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(g),g[a]="Generator",g[o]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,w.prototype={constructor:w,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),b(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;b(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){var r=n(229),o=n(239);t.exports=function(t,e){return r(t,e,(function(e,n){return o(t,n)}))}},function(t,e,n){var r=n(230),o=n(238),i=n(32);t.exports=function(t,e,n){for(var a=-1,u=e.length,c={};++a<u;){var s=e[a],f=r(t,s);n(f,s)&&o(c,i(s,t),f)}return c}},function(t,e,n){var r=n(32),o=n(42);t.exports=function(t,e){for(var n=0,i=(e=r(e,t)).length;null!=t&&n<i;)t=t[o(e[n++])];return n&&n==i?t:void 0}},function(t,e,n){var r=n(14),o=n(41),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;t.exports=function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!o(t))||(a.test(t)||!i.test(t)||null!=e&&t in Object(e))}},function(t,e,n){var r=n(233),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,a=r((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,(function(t,n,r,o){e.push(r?o.replace(i,"$1"):n||t)})),e}));t.exports=a},function(t,e,n){var r=n(234);t.exports=function(t){var e=r(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}},function(t,e,n){var r=n(46);function o(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(o.Cache||r),n}o.Cache=r,t.exports=o},function(t,e,n){var r=n(236);t.exports=function(t){return null==t?"":r(t)}},function(t,e,n){var r=n(27),o=n(237),i=n(14),a=n(41),u=r?r.prototype:void 0,c=u?u.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(i(e))return o(e,t)+"";if(a(e))return c?c.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},function(t,e,n){var r=n(54),o=n(32),i=n(31),a=n(13),u=n(42);t.exports=function(t,e,n,c){if(!a(t))return t;for(var s=-1,f=(e=o(e,t)).length,l=f-1,h=t;null!=h&&++s<f;){var d=u(e[s]),v=n;if("__proto__"===d||"constructor"===d||"prototype"===d)return t;if(s!=l){var p=h[d];void 0===(v=c?c(p,d,h):void 0)&&(v=a(p)?p:i(e[s+1])?[]:{})}r(h,d,v),h=h[d]}return t}},function(t,e,n){var r=n(240),o=n(241);t.exports=function(t,e){return null!=t&&o(t,e,r)}},function(t,e){t.exports=function(t,e){return null!=t&&e in Object(t)}},function(t,e,n){var r=n(32),o=n(30),i=n(14),a=n(31),u=n(40),c=n(42);t.exports=function(t,e,n){for(var s=-1,f=(e=r(e,t)).length,l=!1;++s<f;){var h=c(e[s]);if(!(l=null!=t&&n(t,h)))break;t=t[h]}return l||++s!=f?l:!!(f=null==t?0:t.length)&&u(f)&&a(h,f)&&(i(t)||o(t))}},function(t,e,n){var r=n(243),o=n(57),i=n(58);t.exports=function(t){return i(o(t,void 0,r),t+"")}},function(t,e,n){var r=n(244);t.exports=function(t){return(null==t?0:t.length)?r(t,1):[]}},function(t,e,n){var r=n(245),o=n(246);t.exports=function t(e,n,i,a,u){var c=-1,s=e.length;for(i||(i=o),u||(u=[]);++c<s;){var f=e[c];n>0&&i(f)?n>1?t(f,n-1,i,a,u):r(u,f):a||(u[u.length]=f)}return u}},function(t,e){t.exports=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}},function(t,e,n){var r=n(27),o=n(30),i=n(14),a=r?r.isConcatSpreadable:void 0;t.exports=function(t){return i(t)||o(t)||!!(a&&t&&t[a])}},function(t,e){t.exports=function(t){return t[0]*t[3]-t[2]*t[1]}},function(t,e){t.exports=function(t,e){if(t===e){var n=e[1];t[1]=e[2],t[2]=n}else t[0]=e[0],t[1]=e[2],t[2]=e[1],t[3]=e[3];return t}},function(t,e){t.exports=function(t,e,n){var r=e[0],o=e[1],i=e[2],a=e[3],u=n[0],c=n[1],s=n[2],f=n[3];return t[0]=r*u+i*c,t[1]=o*u+a*c,t[2]=r*s+i*f,t[3]=o*s+a*f,t}},function(t,e){t.exports=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t}},function(t,e){t.exports=function(t,e){var n=e[0];return t[0]=e[3],t[1]=-e[1],t[2]=-e[2],t[3]=n,t}},function(t,e){t.exports=function(t,e,n){var r=e[0],o=e[1],i=e[2],a=e[3],u=Math.sin(n),c=Math.cos(n);return t[0]=r*c+i*u,t[1]=o*c+a*u,t[2]=r*-u+i*c,t[3]=o*-u+a*c,t}},function(t,e){t.exports=function(t,e){var n=e[0],r=e[1],o=e[2],i=e[3],a=n*i-o*r;return a?(a=1/a,t[0]=i*a,t[1]=-r*a,t[2]=-o*a,t[3]=n*a,t):null}},function(t,e){t.exports=function(){var t=new Float32Array(4);return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t}},function(t,e){t.exports=function(t,e,n){var r=e[0],o=e[1],i=e[2],a=e[3],u=n[0],c=n[1];return t[0]=r*u,t[1]=o*u,t[2]=i*c,t[3]=a*c,t}},function(t,e){t.exports=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}},function(t,e){t.exports=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2))}},function(t,e){t.exports=function(t,e,n,r){return t[2]=r[2]/r[0],n[0]=r[0],n[1]=r[1],n[3]=r[3]-t[2]*n[1],[t,e,n]}},function(t,e,n){"use strict";n.r(e),n.d(e,"BarcodeDecoder",(function(){return Tt})),n.d(e,"Readers",(function(){return r})),n.d(e,"CameraAccess",(function(){return Kt})),n.d(e,"ImageDebug",(function(){return d.a})),n.d(e,"ImageWrapper",(function(){return c.a})),n.d(e,"ResultCollector",(function(){return Jt}));var r={};n.r(r),n.d(r,"BarcodeReader",(function(){return M})),n.d(r,"TwoOfFiveReader",(function(){return Ot})),n.d(r,"NewCodabarReader",(function(){return rt})),n.d(r,"Code128Reader",(function(){return k})),n.d(r,"Code32Reader",(function(){return kt})),n.d(r,"Code39Reader",(function(){return H})),n.d(r,"Code39VINReader",(function(){return K})),n.d(r,"Code93Reader",(function(){return St})),n.d(r,"EAN2Reader",(function(){return st})),n.d(r,"EAN5Reader",(function(){return ht})),n.d(r,"EAN8Reader",(function(){return ut})),n.d(r,"EANReader",(function(){return W})),n.d(r,"I2of5Reader",(function(){return yt})),n.d(r,"UPCEReader",(function(){return pt})),n.d(r,"UPCReader",(function(){return it}));var o=n(19),i=n.n(o),a=n(16),u=n.n(a),c=(n(150),n(10)),s={},f={UP:1,DOWN:-1};s.getBarcodeLine=function(t,e,n){var r,o,i,a,u,c=0|e.x,s=0|e.y,f=0|n.x,l=0|n.y,h=Math.abs(l-s)>Math.abs(f-c),d=[],v=t.data,p=t.size.x,g=255,y=0;function x(t,e){u=v[e*p+t],g=u<g?u:g,y=u>y?u:y,d.push(u)}h&&(i=c,c=s,s=i,i=f,f=l,l=i),c>f&&(i=c,c=f,f=i,i=s,s=l,l=i);var m=f-c,_=Math.abs(l-s);r=m/2|0,o=s;var b=s<l?1:-1;for(a=c;a<f;a++)h?x(o,a):x(a,o),(r-=_)<0&&(o+=b,r+=m);return{line:d,min:g,max:y}},s.toBinaryLine=function(t){var e,n,r,o,i,a,u=t.min,c=t.max,s=t.line,l=u+(c-u)/2,h=[],d=(c-u)/12,v=-d;for(r=s[0]>l?f.UP:f.DOWN,h.push({pos:0,val:s[0]}),i=0;i<s.length-2;i++)r!==(o=(e=s[i+1]-s[i])+(n=s[i+2]-s[i+1])<v&&s[i+1]<1.5*l?f.DOWN:e+n>d&&s[i+1]>.5*l?f.UP:r)&&(h.push({pos:i,val:s[i]}),r=o);for(h.push({pos:s.length,val:s[s.length-1]}),a=h[0].pos;a<h[1].pos;a++)s[a]=s[a]>l?0:1;for(i=1;i<h.length-1;i++)for(d=h[i+1].val>h[i].val?h[i].val+(h[i+1].val-h[i].val)/3*2|0:h[i+1].val+(h[i].val-h[i+1].val)/3|0,a=h[i].pos;a<h[i+1].pos;a++)s[a]=s[a]>d?0:1;return{line:s,threshold:d}},s.debug={printFrequency:function(t,e){var n,r=e.getContext("2d");for(e.width=t.length,e.height=256,r.beginPath(),r.strokeStyle="blue",n=0;n<t.length;n++)r.moveTo(n,255),r.lineTo(n,255-t[n]);r.stroke(),r.closePath()},printPattern:function(t,e){var n,r=e.getContext("2d");for(e.width=t.length,r.fillColor="black",n=0;n<t.length;n++)1===t[n]&&r.fillRect(n,0,1,100)}};var l,h=s,d=n(15),v=n(3),p=n.n(v),g=n(4),y=n.n(g),x=n(1),m=n.n(x),_=n(6),b=n.n(_),w=n(5),O=n.n(w),R=n(2),C=n.n(R),E=n(0),S=n.n(E),A=n(8);!function(t){t[t.Forward=1]="Forward",t[t.Reverse=-1]="Reverse"}(l||(l={}));var M=function(){function t(e,n){return p()(this,t),S()(this,"_row",[]),S()(this,"config",{}),S()(this,"supplements",[]),S()(this,"SINGLE_CODE_ERROR",0),S()(this,"FORMAT","unknown"),S()(this,"CONFIG_KEYS",{}),this._row=[],this.config=e||{},n&&(this.supplements=n),this}return y()(t,[{key:"_nextUnset",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e;n<t.length;n++)if(!t[n])return n;return t.length}},{key:"_matchPattern",value:function(t,e,n){var r,o=0,i=0,a=0,u=0,c=0,s=0;n=n||this.SINGLE_CODE_ERROR||1;for(var f=0;f<t.length;f++)a+=t[f],u+=e[f];if(a<u)return Number.MAX_VALUE;n*=r=a/u;for(var l=0;l<t.length;l++){if(c=t[l],s=e[l]*r,(i=Math.abs(c-s)/s)>n)return Number.MAX_VALUE;o+=i}return o/u}},{key:"_nextSet",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e;n<t.length;n++)if(t[n])return n;return t.length}},{key:"_correctBars",value:function(t,e,n){for(var r=n.length,o=0;r--;)(o=t[n[r]]*(1-(1-e)/2))>1&&(t[n[r]]=o)}},{key:"decodePattern",value:function(t){this._row=t;var e=this.decode();return null===e?(this._row.reverse(),(e=this.decode())&&(e.direction=l.Reverse,e.start=this._row.length-e.start,e.end=this._row.length-e.end)):e.direction=l.Forward,e&&(e.format=this.FORMAT),e}},{key:"_matchRange",value:function(t,e,n){var r;for(r=t=t<0?0:t;r<e;r++)if(this._row[r]!==n)return!1;return!0}},{key:"_fillCounters",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._nextUnset(this._row),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._row.length,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=[],o=0;r[o]=0;for(var i=t;i<e;i++)this._row[i]^(n?1:0)?r[o]++:(r[++o]=1,n=!n);return r}},{key:"_toCounters",value:function(t,e){var n=e.length,r=this._row.length,o=!this._row[t],i=0;A.a.init(e,0);for(var a=t;a<r;a++)if(this._row[a]^(o?1:0))e[i]++;else{if(++i===n)break;e[i]=1,o=!o}return e}}],[{key:"Exception",get:function(){return{StartNotFoundException:"Start-Info was not found!",CodeNotFoundException:"Code could not be found!",PatternNotFoundException:"Pattern could not be found!"}}}]),t}();function D(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=C()(t);if(e){var o=C()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O()(this,n)}}var k=function(t){b()(n,t);var e=D(n);function n(){var t;p()(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=e.call.apply(e,[this].concat(o)),S()(m()(t),"CODE_SHIFT",98),S()(m()(t),"CODE_C",99),S()(m()(t),"CODE_B",100),S()(m()(t),"CODE_A",101),S()(m()(t),"START_CODE_A",103),S()(m()(t),"START_CODE_B",104),S()(m()(t),"START_CODE_C",105),S()(m()(t),"STOP_CODE",106),S()(m()(t),"CODE_PATTERN",[[2,1,2,2,2,2],[2,2,2,1,2,2],[2,2,2,2,2,1],[1,2,1,2,2,3],[1,2,1,3,2,2],[1,3,1,2,2,2],[1,2,2,2,1,3],[1,2,2,3,1,2],[1,3,2,2,1,2],[2,2,1,2,1,3],[2,2,1,3,1,2],[2,3,1,2,1,2],[1,1,2,2,3,2],[1,2,2,1,3,2],[1,2,2,2,3,1],[1,1,3,2,2,2],[1,2,3,1,2,2],[1,2,3,2,2,1],[2,2,3,2,1,1],[2,2,1,1,3,2],[2,2,1,2,3,1],[2,1,3,2,1,2],[2,2,3,1,1,2],[3,1,2,1,3,1],[3,1,1,2,2,2],[3,2,1,1,2,2],[3,2,1,2,2,1],[3,1,2,2,1,2],[3,2,2,1,1,2],[3,2,2,2,1,1],[2,1,2,1,2,3],[2,1,2,3,2,1],[2,3,2,1,2,1],[1,1,1,3,2,3],[1,3,1,1,2,3],[1,3,1,3,2,1],[1,1,2,3,1,3],[1,3,2,1,1,3],[1,3,2,3,1,1],[2,1,1,3,1,3],[2,3,1,1,1,3],[2,3,1,3,1,1],[1,1,2,1,3,3],[1,1,2,3,3,1],[1,3,2,1,3,1],[1,1,3,1,2,3],[1,1,3,3,2,1],[1,3,3,1,2,1],[3,1,3,1,2,1],[2,1,1,3,3,1],[2,3,1,1,3,1],[2,1,3,1,1,3],[2,1,3,3,1,1],[2,1,3,1,3,1],[3,1,1,1,2,3],[3,1,1,3,2,1],[3,3,1,1,2,1],[3,1,2,1,1,3],[3,1,2,3,1,1],[3,3,2,1,1,1],[3,1,4,1,1,1],[2,2,1,4,1,1],[4,3,1,1,1,1],[1,1,1,2,2,4],[1,1,1,4,2,2],[1,2,1,1,2,4],[1,2,1,4,2,1],[1,4,1,1,2,2],[1,4,1,2,2,1],[1,1,2,2,1,4],[1,1,2,4,1,2],[1,2,2,1,1,4],[1,2,2,4,1,1],[1,4,2,1,1,2],[1,4,2,2,1,1],[2,4,1,2,1,1],[2,2,1,1,1,4],[4,1,3,1,1,1],[2,4,1,1,1,2],[1,3,4,1,1,1],[1,1,1,2,4,2],[1,2,1,1,4,2],[1,2,1,2,4,1],[1,1,4,2,1,2],[1,2,4,1,1,2],[1,2,4,2,1,1],[4,1,1,2,1,2],[4,2,1,1,1,2],[4,2,1,2,1,1],[2,1,2,1,4,1],[2,1,4,1,2,1],[4,1,2,1,2,1],[1,1,1,1,4,3],[1,1,1,3,4,1],[1,3,1,1,4,1],[1,1,4,1,1,3],[1,1,4,3,1,1],[4,1,1,1,1,3],[4,1,1,3,1,1],[1,1,3,1,4,1],[1,1,4,1,3,1],[3,1,1,1,4,1],[4,1,1,1,3,1],[2,1,1,4,1,2],[2,1,1,2,1,4],[2,1,1,2,3,2],[2,3,3,1,1,1,2]]),S()(m()(t),"SINGLE_CODE_ERROR",.64),S()(m()(t),"AVG_CODE_ERROR",.3),S()(m()(t),"FORMAT","code_128"),S()(m()(t),"MODULE_INDICES",{bar:[0,2,4],space:[1,3,5]}),t}return y()(n,[{key:"_decodeCode",value:function(t,e){for(var n={error:Number.MAX_VALUE,code:-1,start:t,end:t,correction:{bar:1,space:1}},r=[0,0,0,0,0,0],o=t,i=!this._row[o],a=0,u=o;u<this._row.length;u++)if(this._row[u]^(i?1:0))r[a]++;else{if(a===r.length-1){e&&this._correct(r,e);for(var c=0;c<this.CODE_PATTERN.length;c++){var s=this._matchPattern(r,this.CODE_PATTERN[c]);s<n.error&&(n.code=c,n.error=s)}return n.end=u,-1===n.code||n.error>this.AVG_CODE_ERROR?null:(this.CODE_PATTERN[n.code]&&(n.correction.bar=this.calculateCorrection(this.CODE_PATTERN[n.code],r,this.MODULE_INDICES.bar),n.correction.space=this.calculateCorrection(this.CODE_PATTERN[n.code],r,this.MODULE_INDICES.space)),n)}r[++a]=1,i=!i}return null}},{key:"_correct",value:function(t,e){this._correctBars(t,e.bar,this.MODULE_INDICES.bar),this._correctBars(t,e.space,this.MODULE_INDICES.space)}},{key:"_findStart",value:function(){for(var t=[0,0,0,0,0,0],e=this._nextSet(this._row),n={error:Number.MAX_VALUE,code:-1,start:0,end:0,correction:{bar:1,space:1}},r=!1,o=0,i=e;i<this._row.length;i++)if(this._row[i]^(r?1:0))t[o]++;else{if(o===t.length-1){for(var a=t.reduce((function(t,e){return t+e}),0),u=this.START_CODE_A;u<=this.START_CODE_C;u++){var c=this._matchPattern(t,this.CODE_PATTERN[u]);c<n.error&&(n.code=u,n.error=c)}if(n.error<this.AVG_CODE_ERROR)return n.start=i-a,n.end=i,n.correction.bar=this.calculateCorrection(this.CODE_PATTERN[n.code],t,this.MODULE_INDICES.bar),n.correction.space=this.calculateCorrection(this.CODE_PATTERN[n.code],t,this.MODULE_INDICES.space),n;for(var s=0;s<4;s++)t[s]=t[s+2];t[4]=0,t[5]=0,o--}else o++;t[o]=1,r=!r}return null}},{key:"decode",value:function(t,e){var n=this,r=this._findStart();if(null===r)return null;var o={code:r.code,start:r.start,end:r.end,correction:{bar:r.correction.bar,space:r.correction.space}},i=[];i.push(o);for(var a=o.code,u=function(t){switch(t){case n.START_CODE_A:return n.CODE_A;case n.START_CODE_B:return n.CODE_B;case n.START_CODE_C:return n.CODE_C;default:return null}}(o.code),c=!1,s=!1,f=s,l=!0,h=0,d=[],v=[];!c;){if(f=s,s=!1,null!==(o=this._decodeCode(o.end,o.correction)))switch(o.code!==this.STOP_CODE&&(l=!0),o.code!==this.STOP_CODE&&(d.push(o.code),a+=++h*o.code),i.push(o),u){case this.CODE_A:if(o.code<64)v.push(String.fromCharCode(32+o.code));else if(o.code<96)v.push(String.fromCharCode(o.code-64));else switch(o.code!==this.STOP_CODE&&(l=!1),o.code){case this.CODE_SHIFT:s=!0,u=this.CODE_B;break;case this.CODE_B:u=this.CODE_B;break;case this.CODE_C:u=this.CODE_C;break;case this.STOP_CODE:c=!0}break;case this.CODE_B:if(o.code<96)v.push(String.fromCharCode(32+o.code));else switch(o.code!==this.STOP_CODE&&(l=!1),o.code){case this.CODE_SHIFT:s=!0,u=this.CODE_A;break;case this.CODE_A:u=this.CODE_A;break;case this.CODE_C:u=this.CODE_C;break;case this.STOP_CODE:c=!0}break;case this.CODE_C:if(o.code<100)v.push(o.code<10?"0"+o.code:o.code);else switch(o.code!==this.STOP_CODE&&(l=!1),o.code){case this.CODE_A:u=this.CODE_A;break;case this.CODE_B:u=this.CODE_B;break;case this.STOP_CODE:c=!0}}else c=!0;f&&(u=u===this.CODE_A?this.CODE_B:this.CODE_A)}return null===o?null:(o.end=this._nextUnset(this._row,o.end),this._verifyTrailingWhitespace(o)?(a-=h*d[d.length-1])%103!==d[d.length-1]?null:v.length?(l&&v.splice(v.length-1,1),{code:v.join(""),start:r.start,end:o.end,codeset:u,startInfo:r,decodedCodes:i,endInfo:o,format:this.FORMAT}):null:null)}},{key:"_verifyTrailingWhitespace",value:function(t){var e;return(e=t.end+(t.end-t.start)/2)<this._row.length&&this._matchRange(t.end,e,0)?t:null}},{key:"calculateCorrection",value:function(t,e,n){for(var r=n.length,o=0,i=0;r--;)i+=t[n[r]],o+=e[n[r]];return i/o}}]),n}(M);function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(Object(n),!0).forEach((function(e){S()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=C()(t);if(e){var o=C()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O()(this,n)}}var I=[1,1,1],z=[1,1,1,1,1],U=[1,1,2],L=[[3,2,1,1],[2,2,2,1],[2,1,2,2],[1,4,1,1],[1,1,3,2],[1,2,3,1],[1,1,1,4],[1,3,1,2],[1,2,1,3],[3,1,1,2],[1,1,2,3],[1,2,2,2],[2,2,1,2],[1,1,4,1],[2,3,1,1],[1,3,2,1],[4,1,1,1],[2,1,3,1],[3,1,2,1],[2,1,1,3]],N=[0,11,13,14,19,25,28,21,22,26],W=function(t){b()(n,t);var e=j(n);function n(t,r){var o;return p()(this,n),o=e.call(this,u()({supplements:[]},t),r),S()(m()(o),"FORMAT","ean_13"),S()(m()(o),"SINGLE_CODE_ERROR",.7),S()(m()(o),"STOP_PATTERN",[1,1,1]),o}return y()(n,[{key:"_findPattern",value:function(t,e,n,r){var o=new Array(t.length).fill(0),i={error:Number.MAX_VALUE,start:0,end:0},a=0;e||(e=this._nextSet(this._row));for(var u=!1,c=e;c<this._row.length;c++)if(this._row[c]^(n?1:0))o[a]+=1;else{if(a===o.length-1){var s=this._matchPattern(o,t);if(s<.48&&i.error&&s<i.error)return u=!0,i.error=s,i.start=c-o.reduce((function(t,e){return t+e}),0),i.end=c,i;if(r){for(var f=0;f<o.length-2;f++)o[f]=o[f+2];o[o.length-2]=0,o[o.length-1]=0,a--}}else a++;o[a]=1,n=!n}return u?i:null}},{key:"_decodeCode",value:function(t,e){var n=[0,0,0,0],r=t,o={error:Number.MAX_VALUE,code:-1,start:t,end:t},i=!this._row[r],a=0;e||(e=L.length);for(var u=r;u<this._row.length;u++)if(this._row[u]^(i?1:0))n[a]++;else{if(a===n.length-1){for(var c=0;c<e;c++){var s=this._matchPattern(n,L[c]);o.end=u,s<o.error&&(o.code=c,o.error=s)}return o.error>.48?null:o}n[++a]=1,i=!i}return null}},{key:"_findStart",value:function(){for(var t=this._nextSet(this._row),e=null;!e;){if(!(e=this._findPattern(I,t,!1,!0)))return null;var n=e.start-(e.end-e.start);if(n>=0&&this._matchRange(n,e.start,0))return e;t=e.end,e=null}return null}},{key:"_calculateFirstDigit",value:function(t){for(var e=0;e<N.length;e++)if(t===N[e])return e;return null}},{key:"_decodePayload",value:function(t,e,n){for(var r=T({},t),o=0,i=0;i<6;i++){if(!(r=this._decodeCode(r.end)))return null;r.code>=10?(r.code-=10,o|=1<<5-i):o|=0<<5-i,e.push(r.code),n.push(r)}var a=this._calculateFirstDigit(o);if(null===a)return null;e.unshift(a);var u=this._findPattern(z,r.end,!0,!1);if(null===u||!u.end)return null;n.push(u);for(var c=0;c<6;c++){if(!(u=this._decodeCode(u.end,10)))return null;n.push(u),e.push(u.code)}return u}},{key:"_verifyTrailingWhitespace",value:function(t){var e=t.end+(t.end-t.start);return e<this._row.length&&this._matchRange(t.end,e,0)?t:null}},{key:"_findEnd",value:function(t,e){var n=this._findPattern(this.STOP_PATTERN,t,e,!1);return null!==n?this._verifyTrailingWhitespace(n):null}},{key:"_checksum",value:function(t){for(var e=0,n=t.length-2;n>=0;n-=2)e+=t[n];e*=3;for(var r=t.length-1;r>=0;r-=2)e+=t[r];return e%10==0}},{key:"_decodeExtensions",value:function(t){var e=this._nextSet(this._row,t),n=this._findPattern(U,e,!1,!1);if(null===n)return null;for(var r=0;r<this.supplements.length;r++)try{var o=this.supplements[r].decode(this._row,n.end);if(null!==o)return{code:o.code,start:e,startInfo:n,end:o.end,decodedCodes:o.decodedCodes,format:this.supplements[r].FORMAT}}catch(t){console.error("* decodeExtensions error in ",this.supplements[r],": ",t)}return null}},{key:"decode",value:function(t,e){var n=new Array,r=new Array,o={},i=this._findStart();if(!i)return null;var a={start:i.start,end:i.end};if(r.push(a),!(a=this._decodePayload(a,n,r)))return null;if(!(a=this._findEnd(a.end,!1)))return null;if(r.push(a),!this._checksum(n))return null;if(this.supplements.length>0){var u=this._decodeExtensions(a.end);if(!u)return null;if(!u.decodedCodes)return null;var c=u.decodedCodes[u.decodedCodes.length-1],s={start:c.start+((c.end-c.start)/2|0),end:c.end};if(!this._verifyTrailingWhitespace(s))return null;o={supplement:u,code:n.join("")+u.code}}return T(T({code:n.join(""),start:i.start,end:a.end,startInfo:i,decodedCodes:r},o),{},{format:this.FORMAT})}}]),n}(M),F=n(33),B=n.n(F);function V(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=C()(t);if(e){var o=C()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O()(this,n)}}var q=new Uint16Array(B()("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. *$/+%").map((function(t){return t.charCodeAt(0)}))),G=new Uint16Array([52,289,97,352,49,304,112,37,292,100,265,73,328,25,280,88,13,268,76,28,259,67,322,19,274,82,7,262,70,22,385,193,448,145,400,208,133,388,196,148,168,162,138,42]),H=function(t){b()(n,t);var e=V(n);function n(){var t;p()(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=e.call.apply(e,[this].concat(o)),S()(m()(t),"FORMAT","code_39"),t}return y()(n,[{key:"_findStart",value:function(){for(var t=this._nextSet(this._row),e=t,n=new Uint16Array([0,0,0,0,0,0,0,0,0]),r=0,o=!1,i=t;i<this._row.length;i++)if(this._row[i]^(o?1:0))n[r]++;else{if(r===n.length-1){if(148===this._toPattern(n)){var a=Math.floor(Math.max(0,e-(i-e)/4));if(this._matchRange(a,e,0))return{start:e,end:i}}e+=n[0]+n[1];for(var u=0;u<7;u++)n[u]=n[u+2];n[7]=0,n[8]=0,r--}else r++;n[r]=1,o=!o}return null}},{key:"_toPattern",value:function(t){for(var e=t.length,n=0,r=e,o=0;r>3;){n=this._findNextWidth(t,n),r=0;for(var i=0,a=0;a<e;a++)t[a]>n&&(i|=1<<e-1-a,r++,o+=t[a]);if(3===r){for(var u=0;u<e&&r>0;u++)if(t[u]>n&&(r--,2*t[u]>=o))return-1;return i}}return-1}},{key:"_findNextWidth",value:function(t,e){for(var n=Number.MAX_VALUE,r=0;r<t.length;r++)t[r]<n&&t[r]>e&&(n=t[r]);return n}},{key:"_patternToChar",value:function(t){for(var e=0;e<G.length;e++)if(G[e]===t)return String.fromCharCode(q[e]);return null}},{key:"_verifyTrailingWhitespace",value:function(t,e,n){var r=A.a.sum(n);return 3*(e-t-r)>=r}},{key:"decode",value:function(t,e){var n=new Uint16Array([0,0,0,0,0,0,0,0,0]),r=[];if(!(e=this._findStart()))return null;var o,i,a=this._nextSet(this._row,e.end);do{n=this._toCounters(a,n);var u=this._toPattern(n);if(u<0)return null;if(null===(o=this._patternToChar(u)))return null;r.push(o),i=a,a+=A.a.sum(n),a=this._nextSet(this._row,a)}while("*"!==o);return r.pop(),r.length&&this._verifyTrailingWhitespace(i,a,n)?{code:r.join(""),start:e.start,end:a,startInfo:e,decodedCodes:r,format:this.FORMAT}:null}}]),n}(M),X=n(12),Q=n.n(X);function Y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=C()(t);if(e){var o=C()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O()(this,n)}}var $=/[IOQ]/g,Z=/[A-Z0-9]{17}/,K=function(t){b()(n,t);var e=Y(n);function n(){var t;p()(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=e.call.apply(e,[this].concat(o)),S()(m()(t),"FORMAT","code_39_vin"),t}return y()(n,[{key:"_checkChecksum",value:function(t){return!!t}},{key:"decode",value:function(t,e){var r=Q()(C()(n.prototype),"decode",this).call(this,t,e);if(!r)return null;var o=r.code;return o&&(o=o.replace($,"")).match(Z)&&this._checkChecksum(o)?(r.code=o,r):null}}]),n}(H);function J(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=C()(t);if(e){var o=C()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O()(this,n)}}var tt=[48,49,50,51,52,53,54,55,56,57,45,36,58,47,46,43,65,66,67,68],et=[3,6,9,96,18,66,33,36,48,72,12,24,69,81,84,21,26,41,11,14],nt=[26,41,11,14],rt=function(t){b()(n,t);var e=J(n);function n(){var t;p()(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=e.call.apply(e,[this].concat(o)),S()(m()(t),"_counters",[]),S()(m()(t),"FORMAT","codabar"),t}return y()(n,[{key:"_computeAlternatingThreshold",value:function(t,e){for(var n=Number.MAX_VALUE,r=0,o=0,i=t;i<e;i+=2)(o=this._counters[i])>r&&(r=o),o<n&&(n=o);return(n+r)/2|0}},{key:"_toPattern",value:function(t){var e=t+7;if(e>this._counters.length)return-1;for(var n=this._computeAlternatingThreshold(t,e),r=this._computeAlternatingThreshold(t+1,e),o=64,i=0,a=0,u=0;u<7;u++)i=0==(1&u)?n:r,this._counters[t+u]>i&&(a|=o),o>>=1;return a}},{key:"_isStartEnd",value:function(t){for(var e=0;e<nt.length;e++)if(nt[e]===t)return!0;return!1}},{key:"_sumCounters",value:function(t,e){for(var n=0,r=t;r<e;r++)n+=this._counters[r];return n}},{key:"_findStart",value:function(){for(var t=this._nextUnset(this._row),e=1;e<this._counters.length;e++){var n=this._toPattern(e);if(-1!==n&&this._isStartEnd(n))return{start:t+=this._sumCounters(0,e),end:t+this._sumCounters(e,e+8),startCounter:e,endCounter:e+8}}return null}},{key:"_patternToChar",value:function(t){for(var e=0;e<et.length;e++)if(et[e]===t)return String.fromCharCode(tt[e]);return null}},{key:"_calculatePatternLength",value:function(t){for(var e=0,n=t;n<t+7;n++)e+=this._counters[n];return e}},{key:"_verifyWhitespace",value:function(t,e){return(t-1<=0||this._counters[t-1]>=this._calculatePatternLength(t)/2)&&(e+8>=this._counters.length||this._counters[e+7]>=this._calculatePatternLength(e)/2)}},{key:"_charToPattern",value:function(t){for(var e=t.charCodeAt(0),n=0;n<tt.length;n++)if(tt[n]===e)return et[n];return 0}},{key:"_thresholdResultPattern",value:function(t,e){for(var n,r={space:{narrow:{size:0,counts:0,min:0,max:Number.MAX_VALUE},wide:{size:0,counts:0,min:0,max:Number.MAX_VALUE}},bar:{narrow:{size:0,counts:0,min:0,max:Number.MAX_VALUE},wide:{size:0,counts:0,min:0,max:Number.MAX_VALUE}}},o=e,i=0;i<t.length;i++){n=this._charToPattern(t[i]);for(var a=6;a>=0;a--){var u=2==(1&a)?r.bar:r.space,c=1==(1&n)?u.wide:u.narrow;c.size+=this._counters[o+a],c.counts++,n>>=1}o+=8}return["space","bar"].forEach((function(t){var e=r[t];e.wide.min=Math.floor((e.narrow.size/e.narrow.counts+e.wide.size/e.wide.counts)/2),e.narrow.max=Math.ceil(e.wide.min),e.wide.max=Math.ceil((2*e.wide.size+1.5)/e.wide.counts)})),r}},{key:"_validateResult",value:function(t,e){for(var n,r=this._thresholdResultPattern(t,e),o=e,i=0;i<t.length;i++){n=this._charToPattern(t[i]);for(var a=6;a>=0;a--){var u=0==(1&a)?r.bar:r.space,c=1==(1&n)?u.wide:u.narrow,s=this._counters[o+a];if(s<c.min||s>c.max)return!1;n>>=1}o+=8}return!0}},{key:"decode",value:function(t,e){if(this._counters=this._fillCounters(),!(e=this._findStart()))return null;var n,r=e.startCounter,o=[];do{if((n=this._toPattern(r))<0)return null;var i=this._patternToChar(n);if(null===i)return null;if(o.push(i),r+=8,o.length>1&&this._isStartEnd(n))break}while(r<this._counters.length);if(o.length-2<4||!this._isStartEnd(n))return null;if(!this._verifyWhitespace(e.startCounter,r-8))return null;if(!this._validateResult(o,e.startCounter))return null;r=r>this._counters.length?this._counters.length:r;var a=e.start+this._sumCounters(e.startCounter,r-8);return{code:o.join(""),start:e.start,end:a,startInfo:e,decodedCodes:o,format:this.FORMAT}}}]),n}(M);function ot(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=C()(t);if(e){var o=C()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O()(this,n)}}var it=function(t){b()(n,t);var e=ot(n);function n(){var t;p()(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=e.call.apply(e,[this].concat(o)),S()(m()(t),"FORMAT","upc_a"),t}return y()(n,[{key:"decode",value:function(t,e){var n=W.prototype.decode.call(this);return n&&n.code&&13===n.code.length&&"0"===n.code.charAt(0)?(n.code=n.code.substring(1),n):null}}]),n}(W);function at(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=C()(t);if(e){var o=C()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O()(this,n)}}var ut=function(t){b()(n,t);var e=at(n);function n(){var t;p()(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=e.call.apply(e,[this].concat(o)),S()(m()(t),"FORMAT","ean_8"),t}return y()(n,[{key:"_decodePayload",value:function(t,e,n){for(var r=t,o=0;o<4;o++){if(!(r=this._decodeCode(r.end,10)))return null;e.push(r.code),n.push(r)}if(null===(r=this._findPattern(z,r.end,!0,!1)))return null;n.push(r);for(var i=0;i<4;i++){if(!(r=this._decodeCode(r.end,10)))return null;n.push(r),e.push(r.code)}return r}}]),n}(W);function ct(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=C()(t);if(e){var o=C()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O()(this,n)}}var st=function(t){b()(n,t);var e=ct(n);function n(){var t;p()(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=e.call.apply(e,[this].concat(o)),S()(m()(t),"FORMAT","ean_2"),t}return y()(n,[{key:"decode",value:function(t,e){t&&(this._row=t);var n=0,r=e,o=this._row.length,i=[],a=[],u=null;if(void 0===r)return null;for(var c=0;c<2&&r<o;c++){if(!(u=this._decodeCode(r)))return null;a.push(u),i.push(u.code%10),u.code>=10&&(n|=1<<1-c),1!==c&&(r=this._nextSet(this._row,u.end),r=this._nextUnset(this._row,r))}if(2!==i.length||parseInt(i.join(""))%4!==n)return null;var s=this._findStart();return{code:i.join(""),decodedCodes:a,end:u.end,format:this.FORMAT,startInfo:s,start:s.start}}}]),n}(W);function ft(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=C()(t);if(e){var o=C()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O()(this,n)}}var lt=[24,20,18,17,12,6,3,10,9,5];var ht=function(t){b()(n,t);var e=ft(n);function n(){var t;p()(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=e.call.apply(e,[this].concat(o)),S()(m()(t),"FORMAT","ean_5"),t}return y()(n,[{key:"decode",value:function(t,e){if(void 0===e)return null;t&&(this._row=t);for(var n=0,r=e,o=this._row.length,i=null,a=[],u=[],c=0;c<5&&r<o;c++){if(!(i=this._decodeCode(r)))return null;u.push(i),a.push(i.code%10),i.code>=10&&(n|=1<<4-c),4!==c&&(r=this._nextSet(this._row,i.end),r=this._nextUnset(this._row,r))}if(5!==a.length)return null;if(function(t){for(var e=t.length,n=0,r=e-2;r>=0;r-=2)n+=t[r];n*=3;for(var o=e-1;o>=0;o-=2)n+=t[o];return(n*=3)%10}(a)!==function(t){for(var e=0;e<10;e++)if(t===lt[e])return e;return null}(n))return null;var s=this._findStart();return{code:a.join(""),decodedCodes:u,end:i.end,format:this.FORMAT,startInfo:s,start:s.start}}}]),n}(W);function dt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function vt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=C()(t);if(e){var o=C()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O()(this,n)}}var pt=function(t){b()(n,t);var e=vt(n);function n(){var t;p()(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=e.call.apply(e,[this].concat(o)),S()(m()(t),"CODE_FREQUENCY",[[56,52,50,49,44,38,35,42,41,37],[7,11,13,14,19,25,28,21,22,26]]),S()(m()(t),"STOP_PATTERN",[1/6*7,1/6*7,1/6*7,1/6*7,1/6*7,1/6*7]),S()(m()(t),"FORMAT","upc_e"),t}return y()(n,[{key:"_decodePayload",value:function(t,e,n){for(var r=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?dt(Object(n),!0).forEach((function(e){S()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):dt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t),o=0,i=0;i<6;i++){if(!(r=this._decodeCode(r.end)))return null;r.code>=10&&(r.code=r.code-10,o|=1<<5-i),e.push(r.code),n.push(r)}return this._determineParity(o,e)?r:null}},{key:"_determineParity",value:function(t,e){for(var n=0;n<this.CODE_FREQUENCY.length;n++)for(var r=0;r<this.CODE_FREQUENCY[n].length;r++)if(t===this.CODE_FREQUENCY[n][r])return e.unshift(n),e.push(r),!0;return!1}},{key:"_convertToUPCA",value:function(t){var e=[t[0]],n=t[t.length-2];return(e=n<=2?e.concat(t.slice(1,3)).concat([n,0,0,0,0]).concat(t.slice(3,6)):3===n?e.concat(t.slice(1,4)).concat([0,0,0,0,0]).concat(t.slice(4,6)):4===n?e.concat(t.slice(1,5)).concat([0,0,0,0,0,t[5]]):e.concat(t.slice(1,6)).concat([0,0,0,0,n])).push(t[t.length-1]),e}},{key:"_checksum",value:function(t){return Q()(C()(n.prototype),"_checksum",this).call(this,this._convertToUPCA(t))}},{key:"_findEnd",value:function(t,e){return Q()(C()(n.prototype),"_findEnd",this).call(this,t,!0)}},{key:"_verifyTrailingWhitespace",value:function(t){var e=t.end+(t.end-t.start)/2;return e<this._row.length&&this._matchRange(t.end,e,0)?t:null}}]),n}(W);function gt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=C()(t);if(e){var o=C()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O()(this,n)}}var yt=function(t){b()(n,t);var e=gt(n);function n(t){var r;return p()(this,n),r=e.call(this,u()({normalizeBarSpaceWidth:!1},t)),S()(m()(r),"barSpaceRatio",[1,1]),S()(m()(r),"SINGLE_CODE_ERROR",.78),S()(m()(r),"AVG_CODE_ERROR",.38),S()(m()(r),"START_PATTERN",[1,1,1,1]),S()(m()(r),"STOP_PATTERN",[1,1,3]),S()(m()(r),"CODE_PATTERN",[[1,1,3,3,1],[3,1,1,1,3],[1,3,1,1,3],[3,3,1,1,1],[1,1,3,1,3],[3,1,3,1,1],[1,3,3,1,1],[1,1,1,3,3],[3,1,1,3,1],[1,3,1,3,1]]),S()(m()(r),"MAX_CORRECTION_FACTOR",5),S()(m()(r),"FORMAT","i2of5"),t.normalizeBarSpaceWidth&&(r.SINGLE_CODE_ERROR=.38,r.AVG_CODE_ERROR=.09),r.config=t,O()(r,m()(r))}return y()(n,[{key:"_matchPattern",value:function(t,e){if(this.config.normalizeBarSpaceWidth){for(var r=[0,0],o=[0,0],i=[0,0],a=this.MAX_CORRECTION_FACTOR,u=1/a,c=0;c<t.length;c++)r[c%2]+=t[c],o[c%2]+=e[c];i[0]=o[0]/r[0],i[1]=o[1]/r[1],i[0]=Math.max(Math.min(i[0],a),u),i[1]=Math.max(Math.min(i[1],a),u),this.barSpaceRatio=i;for(var s=0;s<t.length;s++)t[s]*=this.barSpaceRatio[s%2]}return Q()(C()(n.prototype),"_matchPattern",this).call(this,t,e)}},{key:"_findPattern",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=new Array(t.length).fill(0),i=0,a={error:Number.MAX_VALUE,start:0,end:0},u=this.AVG_CODE_ERROR;n=n||!1,r=r||!1,e||(e=this._nextSet(this._row));for(var c=e;c<this._row.length;c++)if(this._row[c]^(n?1:0))o[i]++;else{if(i===o.length-1){var s=o.reduce((function(t,e){return t+e}),0),f=this._matchPattern(o,t);if(f<u)return a.error=f,a.start=c-s,a.end=c,a;if(!r)return null;for(var l=0;l<o.length-2;l++)o[l]=o[l+2];o[o.length-2]=0,o[o.length-1]=0,i--}else i++;o[i]=1,n=!n}return null}},{key:"_findStart",value:function(){for(var t=0,e=this._nextSet(this._row),n=null,r=1;!n;){if(!(n=this._findPattern(this.START_PATTERN,e,!1,!0)))return null;if(r=Math.floor((n.end-n.start)/4),(t=n.start-10*r)>=0&&this._matchRange(t,n.start,0))return n;e=n.end,n=null}return null}},{key:"_verifyTrailingWhitespace",value:function(t){var e=t.end+(t.end-t.start)/2;return e<this._row.length&&this._matchRange(t.end,e,0)?t:null}},{key:"_findEnd",value:function(){this._row.reverse();var t=this._findPattern(this.STOP_PATTERN);if(this._row.reverse(),null===t)return null;var e=t.start;return t.start=this._row.length-t.end,t.end=this._row.length-e,null!==t?this._verifyTrailingWhitespace(t):null}},{key:"_decodePair",value:function(t){for(var e=[],n=0;n<t.length;n++){var r=this._decodeCode(t[n]);if(!r)return null;e.push(r)}return e}},{key:"_decodeCode",value:function(t){for(var e=this.AVG_CODE_ERROR,n={error:Number.MAX_VALUE,code:-1,start:0,end:0},r=0;r<this.CODE_PATTERN.length;r++){var o=this._matchPattern(t,this.CODE_PATTERN[r]);o<n.error&&(n.code=r,n.error=o)}return n.error<e?n:null}},{key:"_decodePayload",value:function(t,e,n){for(var r=0,o=t.length,i=[[0,0,0,0,0],[0,0,0,0,0]],a=null;r<o;){for(var u=0;u<5;u++)i[0][u]=t[r]*this.barSpaceRatio[0],i[1][u]=t[r+1]*this.barSpaceRatio[1],r+=2;if(!(a=this._decodePair(i)))return null;for(var c=0;c<a.length;c++)e.push(a[c].code+""),n.push(a[c])}return a}},{key:"_verifyCounterLength",value:function(t){return t.length%10==0}},{key:"decode",value:function(t,e){var n=new Array,r=new Array,o=this._findStart();if(!o)return null;r.push(o);var i=this._findEnd();if(!i)return null;var a=this._fillCounters(o.end,i.start,!1);return this._verifyCounterLength(a)&&this._decodePayload(a,n,r)?n.length%2!=0||n.length<6?null:(r.push(i),{code:n.join(""),start:o.start,end:i.end,startInfo:o,decodedCodes:r,format:this.FORMAT}):null}}]),n}(M);function xt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=C()(t);if(e){var o=C()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O()(this,n)}}var mt=[3,1,3,1,1,1],_t=[3,1,1,1,3],bt=[[1,1,3,3,1],[3,1,1,1,3],[1,3,1,1,3],[3,3,1,1,1],[1,1,3,1,3],[3,1,3,1,1],[1,3,3,1,1],[1,1,1,3,3],[3,1,1,3,1],[1,3,1,3,1]],wt=mt.reduce((function(t,e){return t+e}),0),Ot=function(t){b()(n,t);var e=xt(n);function n(){var t;p()(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=e.call.apply(e,[this].concat(o)),S()(m()(t),"barSpaceRatio",[1,1]),S()(m()(t),"FORMAT","2of5"),S()(m()(t),"SINGLE_CODE_ERROR",.78),S()(m()(t),"AVG_CODE_ERROR",.3),t}return y()(n,[{key:"_findPattern",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=[],i=0,a={error:Number.MAX_VALUE,code:-1,start:0,end:0},u=0,c=0,s=this.AVG_CODE_ERROR;e||(e=this._nextSet(this._row));for(var f=0;f<t.length;f++)o[f]=0;for(var l=e;l<this._row.length;l++)if(this._row[l]^(n?1:0))o[i]++;else{if(i===o.length-1){u=0;for(var h=0;h<o.length;h++)u+=o[h];if((c=this._matchPattern(o,t))<s)return a.error=c,a.start=l-u,a.end=l,a;if(!r)return null;for(var d=0;d<o.length-2;d++)o[d]=o[d+2];o[o.length-2]=0,o[o.length-1]=0,i--}else i++;o[i]=1,n=!n}return null}},{key:"_findStart",value:function(){for(var t=null,e=this._nextSet(this._row),n=1,r=0;!t;){if(!(t=this._findPattern(mt,e,!1,!0)))return null;if(n=Math.floor((t.end-t.start)/wt),(r=t.start-5*n)>=0&&this._matchRange(r,t.start,0))return t;e=t.end,t=null}return t}},{key:"_verifyTrailingWhitespace",value:function(t){var e=t.end+(t.end-t.start)/2;return e<this._row.length&&this._matchRange(t.end,e,0)?t:null}},{key:"_findEnd",value:function(){this._row.reverse();var t=this._nextSet(this._row),e=this._findPattern(_t,t,!1,!0);if(this._row.reverse(),null===e)return null;var n=e.start;return e.start=this._row.length-e.end,e.end=this._row.length-n,null!==e?this._verifyTrailingWhitespace(e):null}},{key:"_verifyCounterLength",value:function(t){return t.length%10==0}},{key:"_decodeCode",value:function(t){for(var e=this.AVG_CODE_ERROR,n={error:Number.MAX_VALUE,code:-1,start:0,end:0},r=0;r<bt.length;r++){var o=this._matchPattern(t,bt[r]);o<n.error&&(n.code=r,n.error=o)}return n.error<e?n:null}},{key:"_decodePayload",value:function(t,e,n){for(var r=0,o=t.length,i=[0,0,0,0,0],a=null;r<o;){for(var u=0;u<5;u++)i[u]=t[r]*this.barSpaceRatio[0],r+=2;if(!(a=this._decodeCode(i)))return null;e.push("".concat(a.code)),n.push(a)}return a}},{key:"decode",value:function(t,e){var n=this._findStart();if(!n)return null;var r=this._findEnd();if(!r)return null;var o=this._fillCounters(n.end,r.start,!1);if(!this._verifyCounterLength(o))return null;var i=[];i.push(n);var a=[];return this._decodePayload(o,a,i)?a.length<5?null:(i.push(r),{code:a.join(""),start:n.start,end:r.end,startInfo:n,decodedCodes:i,format:this.FORMAT}):null}}]),n}(M);function Rt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=C()(t);if(e){var o=C()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O()(this,n)}}var Ct=new Uint16Array(B()("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%abcd*").map((function(t){return t.charCodeAt(0)}))),Et=new Uint16Array([276,328,324,322,296,292,290,336,274,266,424,420,418,404,402,394,360,356,354,308,282,344,332,326,300,278,436,434,428,422,406,410,364,358,310,314,302,468,466,458,366,374,430,294,474,470,306,350]),St=function(t){b()(n,t);var e=Rt(n);function n(){var t;p()(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=e.call.apply(e,[this].concat(o)),S()(m()(t),"FORMAT","code_93"),t}return y()(n,[{key:"_patternToChar",value:function(t){for(var e=0;e<Et.length;e++)if(Et[e]===t)return String.fromCharCode(Ct[e]);return null}},{key:"_toPattern",value:function(t){for(var e=t.length,n=t.reduce((function(t,e){return t+e}),0),r=0,o=0;o<e;o++){var i=Math.round(9*t[o]/n);if(i<1||i>4)return-1;if(0==(1&o))for(var a=0;a<i;a++)r=r<<1|1;else r<<=i}return r}},{key:"_findStart",value:function(){for(var t=this._nextSet(this._row),e=t,n=new Uint16Array([0,0,0,0,0,0]),r=0,o=!1,i=t;i<this._row.length;i++)if(this._row[i]^(o?1:0))n[r]++;else{if(r===n.length-1){if(350===this._toPattern(n)){var a=Math.floor(Math.max(0,e-(i-e)/4));if(this._matchRange(a,e,0))return{start:e,end:i}}e+=n[0]+n[1];for(var u=0;u<4;u++)n[u]=n[u+2];n[4]=0,n[5]=0,r--}else r++;n[r]=1,o=!o}return null}},{key:"_verifyEnd",value:function(t,e){return!(t===e||!this._row[e])}},{key:"_decodeExtended",value:function(t){for(var e=t.length,n=[],r=0;r<e;r++){var o=t[r];if(o>="a"&&o<="d"){if(r>e-2)return null;var i=t[++r],a=i.charCodeAt(0),u=void 0;switch(o){case"a":if(!(i>="A"&&i<="Z"))return null;u=String.fromCharCode(a-64);break;case"b":if(i>="A"&&i<="E")u=String.fromCharCode(a-38);else if(i>="F"&&i<="J")u=String.fromCharCode(a-11);else if(i>="K"&&i<="O")u=String.fromCharCode(a+16);else if(i>="P"&&i<="S")u=String.fromCharCode(a+43);else{if(!(i>="T"&&i<="Z"))return null;u=String.fromCharCode(127)}break;case"c":if(i>="A"&&i<="O")u=String.fromCharCode(a-32);else{if("Z"!==i)return null;u=":"}break;case"d":if(!(i>="A"&&i<="Z"))return null;u=String.fromCharCode(a+32);break;default:return console.warn("* code_93_reader _decodeExtended hit default case, this may be an error",u),null}n.push(u)}else n.push(o)}return n}},{key:"_matchCheckChar",value:function(t,e,n){var r=t.slice(0,e),o=r.length,i=r.reduce((function(t,e,r){return t+((-1*r+(o-1))%n+1)*Ct.indexOf(e.charCodeAt(0))}),0);return Ct[i%47]===t[e].charCodeAt(0)}},{key:"_verifyChecksums",value:function(t){return this._matchCheckChar(t,t.length-2,20)&&this._matchCheckChar(t,t.length-1,15)}},{key:"decode",value:function(t,e){if(!(e=this._findStart()))return null;var n,r,o=new Uint16Array([0,0,0,0,0,0]),i=[],a=this._nextSet(this._row,e.end);do{o=this._toCounters(a,o);var u=this._toPattern(o);if(u<0)return null;if(null===(r=this._patternToChar(u)))return null;i.push(r),n=a,a+=A.a.sum(o),a=this._nextSet(this._row,a)}while("*"!==r);return i.pop(),i.length&&this._verifyEnd(n,a)&&this._verifyChecksums(i)?(i=i.slice(0,i.length-2),null===(i=this._decodeExtended(i))?null:{code:i.join(""),start:e.start,end:a,startInfo:e,decodedCodes:i,format:this.FORMAT}):null}}]),n}(M);function At(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=C()(t);if(e){var o=C()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O()(this,n)}}var Mt,Dt=/[AEIO]/g,kt=function(t){b()(n,t);var e=At(n);function n(){var t;p()(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=e.call.apply(e,[this].concat(o)),S()(m()(t),"FORMAT","code_32_reader"),t}return y()(n,[{key:"_decodeCode32",value:function(t){if(/[^0-9BCDFGHJKLMNPQRSTUVWXYZ]/.test(t))return null;for(var e=0,n=0;n<t.length;n++)e=32*e+"0123456789BCDFGHJKLMNPQRSTUVWXYZ".indexOf(t[n]);var r=""+e;return r.length<9&&(r=("000000000"+r).slice(-9)),"A"+r}},{key:"_checkChecksum",value:function(t){return!!t}},{key:"decode",value:function(t,e){var r=Q()(C()(n.prototype),"decode",this).call(this,t,e);if(!r)return null;var o=r.code;if(!o)return null;if(o=o.replace(Dt,""),!this._checkChecksum(o))return null;var i=this._decodeCode32(o);return i?(r.code=i,r):null}}]),n}(H),Pt={code_128_reader:k,ean_reader:W,ean_5_reader:ht,ean_2_reader:st,ean_8_reader:ut,code_39_reader:H,code_39_vin_reader:K,codabar_reader:rt,upc_reader:it,upc_e_reader:pt,i2of5_reader:yt,"2of5_reader":Ot,code_93_reader:St,code_32_reader:kt},Tt={registerReader:function(t,e){Pt[t]=e},create:function(t,e){var n={frequency:null,pattern:null,overlay:null},r=[];function o(){t.readers.forEach((function(t){var e,n={},o=[];"object"===i()(t)?(e=t.format,n=t.config):"string"==typeof t&&(e=t),n.supplements&&(o=n.supplements.map((function(t){return new Pt[t]})));try{var a=new Pt[e](n,o);r.push(a)}catch(t){throw console.error("* Error constructing reader ",e,t),t}}))}function a(t){var n,o=null,i=h.getBarcodeLine(e,t[0],t[1]);for(h.toBinaryLine(i),n=0;n<r.length&&null===o;n++)o=r[n].decodePattern(i.line);return null===o?null:{codeResult:o,barcodeLine:i}}function u(t){var r,o;n.overlay;var i=function(t){return Math.sqrt(Math.pow(Math.abs(t[1].y-t[0].y),2)+Math.pow(Math.abs(t[1].x-t[0].x),2))}(r=function(t){return[{x:(t[1][0]-t[0][0])/2+t[0][0],y:(t[1][1]-t[0][1])/2+t[0][1]},{x:(t[3][0]-t[2][0])/2+t[2][0],y:(t[3][1]-t[2][1])/2+t[2][1]}]}(t)),u=Math.atan2(r[1].y-r[0].y,r[1].x-r[0].x);return null===(r=function(t,n,r){function o(e){var r=e*Math.sin(n),o=e*Math.cos(n);t[0].y-=r,t[0].x-=o,t[1].y+=r,t[1].x+=o}for(o(r);r>1&&(!e.inImageWithBorder(t[0])||!e.inImageWithBorder(t[1]));)o(-(r-=Math.ceil(r/2)));return t}(r,u,Math.floor(.1*i)))?null:(null===(o=a(r))&&(o=function(t,e,n){var r,o,i,u=Math.sqrt(Math.pow(t[1][0]-t[0][0],2)+Math.pow(t[1][1]-t[0][1],2)),c=null,s=Math.sin(n),f=Math.cos(n);for(r=1;r<16&&null===c;r++)i={y:(o=u/16*r*(r%2==0?-1:1))*s,x:o*f},e[0].y+=i.x,e[0].x-=i.y,e[1].y+=i.x,e[1].x-=i.y,c=a(e);return c}(t,r,u)),null===o?null:{codeResult:o.codeResult,line:r,angle:u,pattern:o.barcodeLine.line,threshold:o.barcodeLine.threshold})}return o(),{decodeFromBoundingBox:function(t){return u(t)},decodeFromBoundingBoxes:function(e){var n,r,o=[],i=t.multiple;for(n=0;n<e.length;n++){var a=e[n];if((r=u(a)||{}).box=a,i)o.push(r);else if(r.codeResult)return r}if(i)return{barcodes:o}},decodeFromImage:function(t){return function(t){for(var e=null,n=0;n<r.length&&null===e;n++)e=r[n].decodeImage?r[n].decodeImage(t):null;return e}(t)},registerReader:function(t,e){if(Pt[t])throw new Error("cannot register existing reader",t);Pt[t]=e},setReaders:function(e){t.readers=e,r.length=0,o()}}}},jt=function(){var t={};function e(e){return t[e]||(t[e]={subscribers:[]}),t[e]}function n(t,e){t.async?setTimeout((function(){t.callback(e)}),4):t.callback(e)}function r(t,n,r){var o;if("function"==typeof n)o={callback:n,async:r};else if(!(o=n).callback)throw new Error("Callback was not specified on options");e(t).subscribers.push(o)}return{subscribe:function(t,e,n){return r(t,e,n)},publish:function(t,r){var o=e(t),i=o.subscribers;i.filter((function(t){return!!t.once})).forEach((function(t){n(t,r)})),o.subscribers=i.filter((function(t){return!t.once})),o.subscribers.forEach((function(t){n(t,r)}))},once:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];r(t,{callback:e,async:n,once:!0})},unsubscribe:function(n,r){if(n){var o=e(n);o.subscribers=o&&r?o.subscribers.filter((function(t){return t.callback!==r})):[]}else t={}}}}(),It=n(11),zt=n.n(It),Ut=n(20),Lt=n.n(Ut),Nt=n(84),Wt=n.n(Nt),Ft="This may mean that the user has declined camera access, or the browser does not support media APIs. If you are running in iOS, you must use Safari.";function Bt(){try{return navigator.mediaDevices.enumerateDevices()}catch(e){var t=new Error("enumerateDevices is not defined. ".concat(Ft));return t.code=-1,Promise.reject(t)}}function Vt(t){try{return navigator.mediaDevices.getUserMedia(t)}catch(t){var e=new Error("getUserMedia is not defined. ".concat(Ft));return e.code=-1,Promise.reject(e)}}function qt(t){return new Promise((function(e,n){var r=10;!function o(){r>0?t.videoWidth>10&&t.videoHeight>10?e():window.setTimeout(o,500):n(new Error("Unable to play video stream. Is webcam working?")),r--}()}))}function Gt(t,e){return Ht.apply(this,arguments)}function Ht(){return(Ht=Lt()(zt.a.mark((function t(e,n){var r;return zt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Vt(n);case 2:if(r=t.sent,Mt=r,!e){t.next=11;break}return e.setAttribute("autoplay","true"),e.setAttribute("muted","true"),e.setAttribute("playsinline","true"),e.srcObject=r,e.addEventListener("loadedmetadata",(function(){e.play()})),t.abrupt("return",qt(e));case 11:return t.abrupt("return",Promise.resolve());case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Xt(t){var e=Wt()(t,["width","height","facingMode","aspectRatio","deviceId"]);return void 0!==t.minAspectRatio&&t.minAspectRatio>0&&(e.aspectRatio=t.minAspectRatio,console.log("WARNING: Constraint 'minAspectRatio' is deprecated; Use 'aspectRatio' instead")),void 0!==t.facing&&(e.facingMode=t.facing,console.log("WARNING: Constraint 'facing' is deprecated. Use 'facingMode' instead'")),e}function Qt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Xt(t);return e&&e.deviceId&&e.facingMode&&delete e.facingMode,Promise.resolve({audio:!1,video:e})}function Yt(){return(Yt=Lt()(zt.a.mark((function t(){var e;return zt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Bt();case 2:return e=t.sent,t.abrupt("return",e.filter((function(t){return"videoinput"===t.kind})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function $t(){if(!Mt)return null;var t=Mt.getVideoTracks();return t&&null!=t&&t.length?t[0]:null}var Zt={requestedVideoElement:null,request:function(t,e){return Lt()(zt.a.mark((function n(){var r;return zt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return Zt.requestedVideoElement=t,n.next=3,Qt(e);case 3:return r=n.sent,n.abrupt("return",Gt(t,r));case 5:case"end":return n.stop()}}),n)})))()},release:function(){var t=Mt&&Mt.getVideoTracks();return null!==Zt.requestedVideoElement&&Zt.requestedVideoElement.pause(),new Promise((function(e){setTimeout((function(){t&&t.length&&t[0].stop(),Mt=null,Zt.requestedVideoElement=null,e()}),0)}))},enumerateVideoDevices:function(){return Yt.apply(this,arguments)},getActiveStreamLabel:function(){var t=$t();return t?t.label:""},getActiveTrack:$t},Kt=Zt;var Jt={create:function(t){var e,n=document.createElement("canvas"),r=n.getContext("2d"),o=[],i=null!==(e=t.capacity)&&void 0!==e?e:20,a=!0===t.capture;function u(e){return!!i&&e&&!function(t,e){return e&&e.some((function(e){return Object.keys(e).every((function(n){return e[n]===t[n]}))}))}(e,t.blacklist)&&function(t,e){return"function"!=typeof e||e(t)}(e,t.filter)}return{addResult:function(t,e,c){var s={};u(c)&&(i--,s.codeResult=c,a&&(n.width=e.x,n.height=e.y,d.a.drawImage(t,e,r),s.frame=n.toDataURL()),o.push(s))},getResults:function(){return o}}}},te={inputStream:{name:"Live",type:"LiveStream",constraints:{width:640,height:480,facingMode:"environment"},area:{top:"0%",right:"0%",left:"0%",bottom:"0%"},singleChannel:!1},locate:!0,numOfWorkers:4,decoder:{readers:["code_128_reader"]},locator:{halfSample:!0,patchSize:"medium"}},ee=n(7),ne=function t(){p()(this,t),S()(this,"config",void 0),S()(this,"inputStream",void 0),S()(this,"framegrabber",void 0),S()(this,"inputImageWrapper",void 0),S()(this,"stopped",!1),S()(this,"boxSize",void 0),S()(this,"resultCollector",void 0),S()(this,"decoder",void 0),S()(this,"workerPool",[]),S()(this,"onUIThread",!0),S()(this,"canvasContainer",new oe)},re=function t(){p()(this,t),S()(this,"image",void 0),S()(this,"overlay",void 0)},oe=function t(){p()(this,t),S()(this,"ctx",void 0),S()(this,"dom",void 0),this.ctx=new re,this.dom=new re},ie=n(23);function ae(t){if("undefined"==typeof document)return null;if(t instanceof HTMLElement&&t.nodeName&&1===t.nodeType)return t;var e="string"==typeof t?t:"#interactive.viewport";return document.querySelector(e)}function ue(t,e){var n=function(t,e){var n=document.querySelector(t);return n||((n=document.createElement("canvas")).className=e),n}(t,e),r=n.getContext("2d");return{canvas:n,context:r}}function ce(t){var e,n,r,o,i=ae(null==t||null===(e=t.config)||void 0===e||null===(n=e.inputStream)||void 0===n?void 0:n.target),a=null==t||null===(r=t.config)||void 0===r||null===(o=r.inputStream)||void 0===o?void 0:o.type;if(!a)return null;var u=function(t){if("undefined"!=typeof document){var e=ue("canvas.imgBuffer","imgBuffer"),n=ue("canvas.drawingBuffer","drawingBuffer");return e.canvas.width=n.canvas.width=t.x,e.canvas.height=n.canvas.height=t.y,{dom:{image:e.canvas,overlay:n.canvas},ctx:{image:e.context,overlay:n.context}}}return null}(t.inputStream.getCanvasSize());if(!u)return{dom:{image:null,overlay:null},ctx:{image:null,overlay:null}};var c=u.dom;return"undefined"!=typeof document&&i&&("ImageStream"!==a||i.contains(c.image)||i.appendChild(c.image),i.contains(c.overlay)||i.appendChild(c.overlay)),u}var se={274:"orientation"},fe=Object.keys(se).map((function(t){return se[t]}));function le(t){return new Promise((function(e){var n=new FileReader;n.onload=function(t){return e(t.target.result)},n.readAsArrayBuffer(t)}))}function he(t){return new Promise((function(e,n){var r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="blob",r.onreadystatechange=function(){r.readyState!==XMLHttpRequest.DONE||200!==r.status&&0!==r.status||e(this.response)},r.onerror=n,r.send()}))}function de(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:fe,n=new DataView(t),r=t.byteLength,o=e.reduce((function(t,e){var n=Object.keys(se).filter((function(t){return se[t]===e}))[0];return n&&(t[n]=e),t}),{}),i=2;if(255!==n.getUint8(0)||216!==n.getUint8(1))return!1;for(;i<r;){if(255!==n.getUint8(i))return!1;if(225===n.getUint8(i+1))return ve(n,i+4,o);i+=2+n.getUint16(i+2)}return!1}function ve(t,e,n){if("Exif"!==function(t,e,n){for(var r="",o=e;o<e+n;o++)r+=String.fromCharCode(t.getUint8(o));return r}(t,e,4))return!1;var r,o=e+6;if(18761===t.getUint16(o))r=!1;else{if(19789!==t.getUint16(o))return!1;r=!0}if(42!==t.getUint16(o+2,!r))return!1;var i=t.getUint32(o+4,!r);return!(i<8)&&function(t,e,n,r,o){for(var i=t.getUint16(n,!o),a={},u=0;u<i;u++){var c=n+12*u+2,s=r[t.getUint16(c,!o)];s&&(a[s]=pe(t,c,e,n,o))}return a}(t,o,o+i,n,r)}function pe(t,e,n,r,o){var i=t.getUint16(e+2,!o),a=t.getUint32(e+4,!o);switch(i){case 3:if(1===a)return t.getUint16(e+8,!o)}return null}var ge={};function ye(t,e){t.onload=function(){e.loaded(this)}}ge.load=function(t,e,n,r,o){var i,a,u,c=new Array(r),s=new Array(c.length);if(!1===o)c[0]=t;else for(i=0;i<c.length;i++)u=n+i,c[i]="".concat(t,"image-").concat("00".concat(u).slice(-3),".jpg");for(s.notLoaded=[],s.addImage=function(t){s.notLoaded.push(t)},s.loaded=function(n){for(var r=s.notLoaded,i=0;i<r.length;i++)if(r[i]===n){r.splice(i,1);for(var a=0;a<c.length;a++){var u=c[a].substr(c[a].lastIndexOf("/"));if(-1!==n.src.lastIndexOf(u)){s[a]={img:n};break}}break}0===r.length&&(!1===o?function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:fe;return/^blob:/i.test(t)?he(t).then(le).then((function(t){return de(t,e)})):Promise.resolve(null)}(t,["orientation"]).then((function(t){s[0].tags=t,e(s)})).catch((function(t){console.log(t),e(s)})):e(s))},i=0;i<c.length;i++)a=new Image,s.addImage(a),ye(a,s),a.src=c[i]};var xe=ge,me={createVideoStream:function(t){var e,n,r=null,o=["canrecord","ended"],i={},a={x:0,y:0,type:"Point"},u={x:0,y:0,type:"XYSize"};var c={getRealWidth:function(){return t.videoWidth},getRealHeight:function(){return t.videoHeight},getWidth:function(){return e},getHeight:function(){return n},setWidth:function(t){e=t},setHeight:function(t){n=t},setInputStream:function(t){r=t,this.setAttribute("src",void 0!==t.src?t.src:"")},ended:function(){return t.ended},getConfig:function(){return r},setAttribute:function(e,n){t&&t.setAttribute(e,n)},pause:function(){t.pause()},play:function(){t.play()},setCurrentTime:function(t){var e;"LiveStream"!==(null===(e=r)||void 0===e?void 0:e.type)&&this.setAttribute("currentTime",t.toString())},addEventListener:function(e,n,r){-1!==o.indexOf(e)?(i[e]||(i[e]=[]),i[e].push(n)):t.addEventListener(e,n,r)},clearEventHandlers:function(){o.forEach((function(e){var n=i[e];n&&n.length>0&&n.forEach((function(n){t.removeEventListener(e,n)}))}))},trigger:function(o,a){var s,f,l,h,d,v=i[o];if("canrecord"===o&&(h=t.videoWidth,d=t.videoHeight,e=null!==(f=r)&&void 0!==f&&f.size?h/d>1?r.size:Math.floor(h/d*r.size):h,n=null!==(l=r)&&void 0!==l&&l.size?h/d>1?Math.floor(d/h*r.size):r.size:d,u.x=e,u.y=n),v&&v.length>0)for(s=0;s<v.length;s++)v[s].apply(c,a)},setTopRight:function(t){a.x=t.x,a.y=t.y},getTopRight:function(){return a},setCanvasSize:function(t){u.x=t.x,u.y=t.y},getCanvasSize:function(){return u},getFrame:function(){return t}};return c},createLiveStream:function(t){t&&t.setAttribute("autoplay","true");var e=me.createVideoStream(t);return e.ended=function(){return!1},e},createImageStream:function(){var t,e,n=null,r=0,o=0,i=0,a=!0,u=!1,c=null,s=0,f=null,l=!1,h=["canrecord","ended"],d={},v={x:0,y:0,type:"Point"},p={x:0,y:0,type:"XYSize"};function g(t,e){var n,r=d[t];if(r&&r.length>0)for(n=0;n<r.length;n++)r[n].apply(y,e)}var y={trigger:g,getWidth:function(){return t},getHeight:function(){return e},setWidth:function(e){t=e},setHeight:function(t){e=t},getRealWidth:function(){return r},getRealHeight:function(){return o},setInputStream:function(a){var l;n=a,!1===a.sequence?(f=a.src,s=1):(f=a.src,s=a.length),u=!1,xe.load(f,(function(a){var s,f;if(c=a,a[0].tags&&a[0].tags.orientation)switch(a[0].tags.orientation){case 6:case 8:r=a[0].img.height,o=a[0].img.width;break;default:r=a[0].img.width,o=a[0].img.height}else r=a[0].img.width,o=a[0].img.height;t=null!==(s=n)&&void 0!==s&&s.size?r/o>1?n.size:Math.floor(r/o*n.size):r,e=null!==(f=n)&&void 0!==f&&f.size?r/o>1?Math.floor(o/r*n.size):n.size:o,p.x=t,p.y=e,u=!0,i=0,setTimeout((function(){g("canrecord",[])}),0)}),1,s,null===(l=n)||void 0===l?void 0:l.sequence)},ended:function(){return l},setAttribute:function(){},getConfig:function(){return n},pause:function(){a=!0},play:function(){a=!1},setCurrentTime:function(t){i=t},addEventListener:function(t,e){-1!==h.indexOf(t)&&(d[t]||(d[t]=[]),d[t].push(e))},clearEventHandlers:function(){Object.keys(d).forEach((function(t){return delete d[t]}))},setTopRight:function(t){v.x=t.x,v.y=t.y},getTopRight:function(){return v},setCanvasSize:function(t){p.x=t.x,p.y=t.y},getCanvasSize:function(){return p},getFrame:function(){var t,e;if(!u)return null;a||(t=null===(e=c)||void 0===e?void 0:e[i],i<s-1?i++:setTimeout((function(){l=!0,g("ended",[])}),0));return t}};return y}},_e=me,be=n(9),we=Math.PI/180;var Oe={create:function(t,e){var n,r={},o=t.getConfig(),i=(Object(be.h)(t.getRealWidth(),t.getRealHeight()),t.getCanvasSize()),a=Object(be.h)(t.getWidth(),t.getHeight()),u=t.getTopRight(),c=u.x,s=u.y,f=null,l=null;return(n=e||document.createElement("canvas")).width=i.x,n.height=i.y,f=n.getContext("2d"),l=new Uint8Array(a.x*a.y),r.attachData=function(t){l=t},r.getData=function(){return l},r.grab=function(){var e,r=o.halfSample,u=t.getFrame(),h=u,d=0;if(h){if(function(t,e){t.width!==e.x&&(t.width=e.x),t.height!==e.y&&(t.height=e.y)}(n,i),"ImageStream"===o.type&&(h=u.img,u.tags&&u.tags.orientation))switch(u.tags.orientation){case 6:d=90*we;break;case 8:d=-90*we}return 0!==d?(f.translate(i.x/2,i.y/2),f.rotate(d),f.drawImage(h,-i.y/2,-i.x/2,i.y,i.x),f.rotate(-d),f.translate(-i.x/2,-i.y/2)):f.drawImage(h,0,0,i.x,i.y),e=f.getImageData(c,s,a.x,a.y).data,r?Object(be.e)(e,a,l):Object(be.c)(e,l,o),!0}return!1},r.getSize=function(){return a},r}},Re=Oe;function Ce(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Ee(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Ce(Object(n),!0).forEach((function(e){S()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ce(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Se=[];function Ae(t){return Ee(Ee({},t),{},{inputStream:Ee(Ee({},t.inputStream),{},{target:null})})}function Me(t){if(t){var e=t().default;if(!e)return void self.postMessage({event:"error",message:"Quagga could not be created"})}var n;function r(t){self.postMessage({event:"processed",imageData:n.data,result:t},[n.data.buffer])}function o(){self.postMessage({event:"initialized",imageData:n.data},[n.data.buffer])}self.onmessage=function(t){if("init"===t.data.cmd){var i=t.data.config;i.numOfWorkers=0,n=new e.ImageWrapper({x:t.data.size.x,y:t.data.size.y},new Uint8Array(t.data.imageData)),e.init(i,o,n),e.onProcessed(r)}else"process"===t.data.cmd?(n.data=new Uint8Array(t.data.imageData),e.start()):"setReaders"===t.data.cmd?e.setReaders(t.data.readers):"registerReader"===t.data.cmd&&e.registerReader(t.data.name,t.data.reader)}}function De(t,e,n){var r,o,i=("undefined"!=typeof __factorySource__&&(o=__factorySource__),r=new Blob(["("+Me.toString()+")("+o+");"],{type:"text/javascript"}),window.URL.createObjectURL(r)),a={worker:new Worker(i),imageData:new Uint8Array(e.getWidth()*e.getHeight()),busy:!0};a.worker.onmessage=function(t){"initialized"===t.data.event?(URL.revokeObjectURL(i),a.busy=!1,a.imageData=new Uint8Array(t.data.imageData),n(a)):"processed"===t.data.event?(a.imageData=new Uint8Array(t.data.imageData),a.busy=!1):t.data.event},a.worker.postMessage({cmd:"init",size:{x:e.getWidth(),y:e.getHeight()},imageData:a.imageData,config:Ae(t)},[a.imageData.buffer])}function ke(t,e,n,r){var o=t-Se.length;if(0===o&&r)r();else if(o<0){Se.slice(o).forEach((function(t){t.worker.terminate()})),Se=Se.slice(0,o),r&&r()}else{var i=function(e){Se.push(e),Se.length>=t&&r&&r()};if(e)for(var a=0;a<o;a++)De(e,n,i)}}function Pe(t,e,n){for(var r=t.length;r--;)t[r][0]+=e,t[r][1]+=n}var Te=function(){function t(){var e=this;p()(this,t),S()(this,"context",new ne),S()(this,"canRecord",(function(t){var n;e.context.config&&(ie.a.checkImageConstraints(e.context.inputStream,null===(n=e.context.config)||void 0===n?void 0:n.locator),e.initCanvas(),e.context.framegrabber=Re.create(e.context.inputStream,e.context.canvasContainer.dom.image),void 0===e.context.config.numOfWorkers&&(e.context.config.numOfWorkers=0),ke(e.context.config.numOfWorkers,e.context.config,e.context.inputStream,(function(){var n;0===(null===(n=e.context.config)||void 0===n?void 0:n.numOfWorkers)&&e.initializeData(),e.ready(t)})))})),S()(this,"update",(function(){if(e.context.onUIThread){var t,n=(o=e.context.framegrabber,Se.length?!!(i=Se.filter((function(t){return!t.busy}))[0])&&(o.attachData(i.imageData),o.grab()&&(i.busy=!0,i.worker.postMessage({cmd:"process",imageData:i.imageData},[i.imageData.buffer])),!0):null);if(!n)e.context.framegrabber.attachData(null===(t=e.context.inputImageWrapper)||void 0===t?void 0:t.data),e.context.framegrabber.grab()&&(n||e.locateAndDecode())}else{var r;e.context.framegrabber.attachData(null===(r=e.context.inputImageWrapper)||void 0===r?void 0:r.data),e.context.framegrabber.grab(),e.locateAndDecode()}var o,i}))}var e;return y()(t,[{key:"initBuffers",value:function(t){if(this.context.config){var e=function(t,e,n){var r=e||new c.a({x:t.getWidth(),y:t.getHeight(),type:"XYSize"}),o=[Object(ee.clone)([0,0]),Object(ee.clone)([0,r.size.y]),Object(ee.clone)([r.size.x,r.size.y]),Object(ee.clone)([r.size.x,0])];return ie.a.init(r,n),{inputImageWrapper:r,boxSize:o}}(this.context.inputStream,t,this.context.config.locator),n=e.inputImageWrapper,r=e.boxSize;this.context.inputImageWrapper=n,this.context.boxSize=r}}},{key:"initializeData",value:function(t){this.context.config&&(this.initBuffers(t),this.context.decoder=Tt.create(this.context.config.decoder,this.context.inputImageWrapper))}},{key:"getViewPort",value:function(){return this.context.config&&this.context.config.inputStream?ae(this.context.config.inputStream.target):null}},{key:"ready",value:function(t){this.context.inputStream.play(),t()}},{key:"initCanvas",value:function(){var t=ce(this.context);if(t){var e=t.ctx,n=t.dom;this.context.canvasContainer.dom.image=n.image,this.context.canvasContainer.dom.overlay=n.overlay,this.context.canvasContainer.ctx.image=e.image,this.context.canvasContainer.ctx.overlay=e.overlay}}},{key:"initInputStream",value:function(t){if(this.context.config&&this.context.config.inputStream){var e=this.context.config.inputStream,n=e.type,r=e.constraints,o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"LiveStream",e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;switch(t){case"VideoStream":var r=document.createElement("video");return{video:r,inputStream:n.createVideoStream(r)};case"ImageStream":return{inputStream:n.createImageStream()};case"LiveStream":var o=null;return e&&((o=e.querySelector("video"))||(o=document.createElement("video"),e.appendChild(o))),{video:o,inputStream:n.createLiveStream(o)};default:return console.error("* setupInputStream invalid type ".concat(t)),{video:null,inputStream:null}}}(n,this.getViewPort(),_e),i=o.video,a=o.inputStream;"LiveStream"===n&&i&&Kt.request(i,r).then((function(){return a.trigger("canrecord")})).catch((function(e){return t(e)})),a.setAttribute("preload","auto"),a.setInputStream(this.context.config.inputStream),a.addEventListener("canrecord",this.canRecord.bind(void 0,t)),this.context.inputStream=a}}},{key:"getBoundingBoxes",value:function(){var t;return null!==(t=this.context.config)&&void 0!==t&&t.locate?ie.a.locate():[[Object(ee.clone)(this.context.boxSize[0]),Object(ee.clone)(this.context.boxSize[1]),Object(ee.clone)(this.context.boxSize[2]),Object(ee.clone)(this.context.boxSize[3])]]}},{key:"transformResult",value:function(t){var e=this,n=this.context.inputStream.getTopRight(),r=n.x,o=n.y;if((0!==r||0!==o)&&(t.barcodes&&t.barcodes.forEach((function(t){return e.transformResult(t)})),t.line&&2===t.line.length&&function(t,e,n){t[0].x+=e,t[0].y+=n,t[1].x+=e,t[1].y+=n}(t.line,r,o),t.box&&Pe(t.box,r,o),t.boxes&&t.boxes.length>0))for(var i=0;i<t.boxes.length;i++)Pe(t.boxes[i],r,o)}},{key:"addResult",value:function(t,e){var n=this;e&&this.context.resultCollector&&(t.barcodes?t.barcodes.filter((function(t){return t.codeResult})).forEach((function(t){return n.addResult(t,e)})):t.codeResult&&this.context.resultCollector.addResult(e,this.context.inputStream.getCanvasSize(),t.codeResult))}},{key:"hasCodeResult",value:function(t){return!(!t||!(t.barcodes?t.barcodes.some((function(t){return t.codeResult})):t.codeResult))}},{key:"publishResult",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0,n=t;t&&this.context.onUIThread&&(this.transformResult(t),this.addResult(t,e),n=t.barcodes||t),jt.publish("processed",n),this.hasCodeResult(t)&&jt.publish("detected",n)}},{key:"locateAndDecode",value:function(){var t=this.getBoundingBoxes();if(t){var e,n=this.context.decoder.decodeFromBoundingBoxes(t)||{};n.boxes=t,this.publishResult(n,null===(e=this.context.inputImageWrapper)||void 0===e?void 0:e.data)}else{var r,o=this.context.decoder.decodeFromImage(this.context.inputImageWrapper);if(o)this.publishResult(o,null===(r=this.context.inputImageWrapper)||void 0===r?void 0:r.data);else this.publishResult()}}},{key:"startContinuousUpdate",value:function(){var t,e=this,n=null,r=1e3/((null===(t=this.context.config)||void 0===t?void 0:t.frequency)||60);this.context.stopped=!1;var o=this.context;!function t(i){n=n||i,o.stopped||(i>=n&&(n+=r,e.update()),window.requestAnimationFrame(t))}(performance.now())}},{key:"start",value:function(){var t,e;this.context.onUIThread&&"LiveStream"===(null===(t=this.context.config)||void 0===t||null===(e=t.inputStream)||void 0===e?void 0:e.type)?this.startContinuousUpdate():this.update()}},{key:"stop",value:(e=Lt()(zt.a.mark((function t(){var e;return zt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.context.stopped=!0,ke(0),null===(e=this.context.config)||void 0===e||!e.inputStream||"LiveStream"!==this.context.config.inputStream.type){t.next=6;break}return t.next=5,Kt.release();case 5:this.context.inputStream.clearEventHandlers();case 6:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"setReaders",value:function(t){this.context.decoder&&this.context.decoder.setReaders(t),function(t){Se.forEach((function(e){return e.worker.postMessage({cmd:"setReaders",readers:t})}))}(t)}},{key:"registerReader",value:function(t,e){Tt.registerReader(t,e),this.context.decoder&&this.context.decoder.registerReader(t,e),function(t,e){Se.forEach((function(n){return n.worker.postMessage({cmd:"registerReader",name:t,reader:e})}))}(t,e)}}]),t}(),je=new Te,Ie=je.context,ze={init:function(t,e,n){var r,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:je;return e||(r=new Promise((function(t,n){e=function(e){e?n(e):t()}}))),o.context.config=u()({},te,t),o.context.config.numOfWorkers>0&&(o.context.config.numOfWorkers=0),n?(o.context.onUIThread=!1,o.initializeData(n),e&&e()):o.initInputStream(e),r},start:function(){return je.start()},stop:function(){return je.stop()},pause:function(){Ie.stopped=!0},onDetected:function(t){t&&("function"==typeof t||"object"===i()(t)&&t.callback)?jt.subscribe("detected",t):console.trace("* warning: Quagga.onDetected called with invalid callback, ignoring")},offDetected:function(t){jt.unsubscribe("detected",t)},onProcessed:function(t){t&&("function"==typeof t||"object"===i()(t)&&t.callback)?jt.subscribe("processed",t):console.trace("* warning: Quagga.onProcessed called with invalid callback, ignoring")},offProcessed:function(t){jt.unsubscribe("processed",t)},setReaders:function(t){t?je.setReaders(t):console.trace("* warning: Quagga.setReaders called with no readers, ignoring")},registerReader:function(t,e){t?e?je.registerReader(t,e):console.trace("* warning: Quagga.registerReader called with no reader, ignoring"):console.trace("* warning: Quagga.registerReader called with no name, ignoring")},registerResultCollector:function(t){t&&"function"==typeof t.addResult&&(Ie.resultCollector=t)},get canvas(){return Ie.canvasContainer},decodeSingle:function(t,e){var n=this,r=new Te;return(t=u()({inputStream:{type:"ImageStream",sequence:!1,size:800,src:t.src},numOfWorkers:1,locator:{halfSample:!1}},t)).numOfWorkers>0&&(t.numOfWorkers=0),t.numOfWorkers>0&&("undefined"==typeof Blob||"undefined"==typeof Worker)&&(console.warn("* no Worker and/or Blob support - forcing numOfWorkers to 0"),t.numOfWorkers=0),new Promise((function(o,i){try{n.init(t,(function(){jt.once("processed",(function(t){r.stop(),e&&e.call(null,t),o(t)}),!0),r.start()}),null,r)}catch(t){i(t)}}))},get default(){return ze},Readers:r,CameraAccess:Kt,ImageDebug:d.a,ImageWrapper:c.a,ResultCollector:Jt};e.default=ze}]).default}));

/***/ }),

/***/ "./node_modules/lodash.defaultsdeep/index.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash.defaultsdeep/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeMax = Math.max,
    nativeNow = Date.now;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
 * objects into destination objects that are passed thru.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to merge.
 * @param {Object} object The parent object of `objValue`.
 * @param {Object} source The parent object of `srcValue`.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
  if (isObject(objValue) && isObject(srcValue)) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, objValue);
    baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
    stack['delete'](srcValue);
  }
  return objValue;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

/**
 * This method is like `_.defaults` except that it recursively assigns
 * default properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaults
 * @example
 *
 * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
 * // => { 'a': { 'b': 2, 'c': 3 } }
 */
var defaultsDeep = baseRest(function(args) {
  args.push(undefined, customDefaultsMerge);
  return apply(mergeWith, undefined, args);
});

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = defaultsDeep;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/ngx-barcode-scanner/__ivy_ngcc__/fesm2015/ngx-barcode-scanner.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/ngx-barcode-scanner/__ivy_ngcc__/fesm2015/ngx-barcode-scanner.js ***!
  \***************************************************************************************/
/*! exports provided: BarcodeScannerLivestreamComponent, BarcodeScannerLivestreamModule, BarcodeScannerLivestreamOverlayComponent, BarcodeScannerLivestreamOverlayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeScannerLivestreamComponent", function() { return BarcodeScannerLivestreamComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeScannerLivestreamModule", function() { return BarcodeScannerLivestreamModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeScannerLivestreamOverlayComponent", function() { return BarcodeScannerLivestreamOverlayComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeScannerLivestreamOverlayModule", function() { return BarcodeScannerLivestreamOverlayModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ericblade/quagga2 */ "./node_modules/@ericblade/quagga2/dist/quagga.min.js");
/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ericblade_quagga2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.defaultsdeep */ "./node_modules/lodash.defaultsdeep/index.js");
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_4__);









const _c0 = ["BarcodeScanner"];
function BarcodeScannerLivestreamOverlayComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BarcodeScannerLivestreamOverlayComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const DEFAULT_CONFIG = {
    inputStream: {
        name: 'Live',
        type: 'LiveStream',
        target: null,
        constraints: {
            width: { min: 640 },
            height: { min: 480 },
            aspectRatio: { min: 1, max: 2 },
            facingMode: 'environment',
        },
        singleChannel: false // true: only the red color-channel is read
    },
    locator: {
        patchSize: 'medium',
        halfSample: true
    },
    locate: true,
    numOfWorkers: 4,
    decoder: {
        readers: ['code_128_reader']
    }
};

const BARCODE_TYPES = [
    'code_128',
    'code_39',
    'code_39_vin',
    'ean',
    'ean_extended',
    'ean_8',
    'upc',
    'upc_e',
    'codabar',
    'i2of5',
    '2of5',
    'code_93'
];
function mapToReader(value) {
    if (typeof value === 'string') {
        checkBarCodeType(value);
        return [mapToBarcodeType(value)];
    }
    else {
        return value.map(val => {
            checkBarCodeType(val);
            return mapToBarcodeType(val);
        });
    }
}
function checkBarCodeType(value) {
    if (!BARCODE_TYPES.some(t => t === value)) {
        throw new Error(`This barcode type '${value}' is not valid.`);
    }
}
function mapToBarcodeType(value) {
    return `${value}_reader`;
}

class BarcodeScannerLivestreamComponent {
    constructor() {
        this.maxWidth = '100%';
        // Outputs
        this.valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._started = false;
    }
    get _maxWidth() {
        return this.maxWidth ? `${this.maxWidth}` : 'auto';
    }
    get _maxHeight() {
        return this.maxHeight ? `${this.maxHeight}` : 'auto';
    }
    get isStarted() {
        return this._started;
    }
    ngOnDestroy() {
        this.stop();
    }
    ngOnChanges(changes) {
        this.restart();
    }
    _init() {
        return new Promise((resolve, reject) => {
            _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_3___default.a.onProcessed((result) => this.onProcessed(result));
            _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_3___default.a.onDetected((result) => this.onDetected(result));
            this.configQuagga = lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_4___default()({}, this.config, DEFAULT_CONFIG);
            this.configQuagga.inputStream.target = this.barcodeScanner.nativeElement;
            if (this.type) {
                this.configQuagga.decoder.readers = mapToReader(this.type);
            }
            if (this.deviceId) {
                this.configQuagga.inputStream.constraints.deviceId = this.deviceId;
            }
            _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_3___default.a.init(this.configQuagga, (err) => {
                if (err) {
                    console.log(err);
                    return reject(err);
                }
                resolve();
            });
        });
    }
    start() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this._started) {
                yield this._init();
                _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_3___default.a.start();
                this._started = true;
                this.started.next(true);
            }
        });
    }
    stop() {
        if (this._started) {
            _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_3___default.a.stop();
            this._started = false;
            this.started.next(false);
        }
    }
    restart() {
        if (this._started) {
            this.stop();
            this.start();
        }
    }
    onProcessed(result) {
        const drawingCtx = _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_3___default.a.canvas.ctx.overlay;
        const drawingCanvas = _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_3___default.a.canvas.dom.overlay;
        if (result) {
            if (result.boxes) {
                drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute('width'), 10), parseInt(drawingCanvas.getAttribute('height'), 10));
                result.boxes.filter((box) => {
                    return box !== result.box;
                }).forEach((box) => {
                    _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_3___default.a.ImageDebug.drawPath(box, {
                        x: 0,
                        y: 1,
                    }, drawingCtx, {
                        color: 'green',
                        lineWidth: 2,
                    });
                });
            }
            if (result.box) {
                _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_3___default.a.ImageDebug.drawPath(result.box, {
                    x: 0,
                    y: 1,
                }, drawingCtx, {
                    color: '#00F',
                    lineWidth: 2,
                });
            }
            if (result.codeResult && result.codeResult.code) {
                _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_3___default.a.ImageDebug.drawPath(result.line, {
                    x: 'x',
                    y: 'y',
                }, drawingCtx, {
                    color: 'red',
                    lineWidth: 3,
                });
            }
        }
    }
    onDetected(result) {
        this.valueChanges.next(result);
    }
}
BarcodeScannerLivestreamComponent.ɵfac = function BarcodeScannerLivestreamComponent_Factory(t) { return new (t || BarcodeScannerLivestreamComponent)(); };
BarcodeScannerLivestreamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BarcodeScannerLivestreamComponent, selectors: [["barcode-scanner-livestream"]], viewQuery: function BarcodeScannerLivestreamComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.barcodeScanner = _t.first);
    } }, inputs: { maxWidth: "maxWidth", type: "type", deviceId: "deviceId", maxHeight: "maxHeight", config: "config" }, outputs: { valueChanges: "valueChanges", started: "started" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 13, consts: [[1, "scanner", 3, "hidden"], ["BarcodeScanner", ""], [1, "drawingBuffer"]], template: function BarcodeScannerLivestreamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "video");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "canvas", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-height", ctx._maxHeight)("max-width", ctx._maxWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.isStarted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-height", ctx._maxHeight)("max-width", ctx._maxWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-height", ctx._maxHeight)("max-width", ctx._maxWidth);
    } }, styles: [".scanner{position:relative}.scanner canvas,.scanner video{height:100%;width:100%}.scanner canvas.drawingBuffer{left:0;position:absolute;top:0}"], encapsulation: 2 });
BarcodeScannerLivestreamComponent.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    deviceId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    maxHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    valueChanges: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    started: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    barcodeScanner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['BarcodeScanner',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BarcodeScannerLivestreamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'barcode-scanner-livestream',
                template: "<div\n  #BarcodeScanner\n  class=\"scanner\"\n  [hidden]=\"!isStarted\"\n  [style.max-height]=\"_maxHeight\"\n  [style.max-width]=\"_maxWidth\"\n>\n  <video [style.max-height]=\"_maxHeight\" [style.max-width]=\"_maxWidth\"></video>\n  <canvas\n    [style.max-height]=\"_maxHeight\"\n    [style.max-width]=\"_maxWidth\"\n    class=\"drawingBuffer\"\n  ></canvas>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                styles: [".scanner{position:relative}.scanner canvas,.scanner video{height:100%;width:100%}.scanner canvas.drawingBuffer{left:0;position:absolute;top:0}"]
            }]
    }], function () { return []; }, { maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], valueChanges: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], started: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], deviceId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], barcodeScanner: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['BarcodeScanner']
        }] }); })();

class BarcodeScannerLivestreamModule {
}
BarcodeScannerLivestreamModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BarcodeScannerLivestreamModule });
BarcodeScannerLivestreamModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function BarcodeScannerLivestreamModule_Factory(t) { return new (t || BarcodeScannerLivestreamModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BarcodeScannerLivestreamModule, { declarations: function () { return [BarcodeScannerLivestreamComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]; }, exports: function () { return [BarcodeScannerLivestreamComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BarcodeScannerLivestreamModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                ],
                declarations: [
                    BarcodeScannerLivestreamComponent
                ],
                exports: [
                    BarcodeScannerLivestreamComponent
                ]
            }]
    }], null, null); })();

class BarcodeScannerLivestreamOverlayComponent {
    constructor() {
        this._started = false;
        this.width = '90vw';
        this.maxWidth = '640px';
        this.valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._showScanner = false;
    }
    get isStarted() {
        return this._started;
    }
    get showScanner() {
        return this._showScanner;
    }
    ngOnDestroy() {
        this.scanner.stop();
    }
    show() {
        this._showScanner = true;
        this.scanner.start();
    }
    hide() {
        this._showScanner = false;
        this.scanner.stop();
    }
    onStarted(value) {
        this._started = value;
        this.started.next(value);
    }
    onValueChanges(result) {
        this.valueChanges.next(result);
    }
}
BarcodeScannerLivestreamOverlayComponent.ɵfac = function BarcodeScannerLivestreamOverlayComponent_Factory(t) { return new (t || BarcodeScannerLivestreamOverlayComponent)(); };
BarcodeScannerLivestreamOverlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BarcodeScannerLivestreamOverlayComponent, selectors: [["barcode-scanner-livestream-overlay"]], viewQuery: function BarcodeScannerLivestreamOverlayComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](BarcodeScannerLivestreamComponent, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scanner = _t.first);
    } }, inputs: { width: "width", maxWidth: "maxWidth", type: "type", deviceId: "deviceId", height: "height", maxHeight: "maxHeight", config: "config" }, outputs: { valueChanges: "valueChanges", started: "started" }, decls: 4, vars: 13, consts: [[1, "barcode-scanner-livestream-overlay", 3, "hidden"], [1, "barcode-scanner-livestream-overlay-content"], ["class", "barcode-scanner-livestream-overlay-close", 3, "click", 4, "ngIf"], [3, "type", "deviceId", "config", "valueChanges", "started"], [1, "barcode-scanner-livestream-overlay-close", 3, "click"]], template: function BarcodeScannerLivestreamOverlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BarcodeScannerLivestreamOverlayComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "barcode-scanner-livestream", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChanges", function BarcodeScannerLivestreamOverlayComponent_Template_barcode_scanner_livestream_valueChanges_3_listener($event) { return ctx.onValueChanges($event); })("started", function BarcodeScannerLivestreamOverlayComponent_Template_barcode_scanner_livestream_started_3_listener($event) { return ctx.onStarted($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.showScanner);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.width)("max-width", ctx.maxWidth)("height", ctx.height)("max-height", ctx.maxHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isStarted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.type)("deviceId", ctx.deviceId)("config", ctx.config);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], BarcodeScannerLivestreamComponent], styles: [".barcode-scanner-livestream-overlay[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.3);bottom:0;left:0;overflow:hidden;position:fixed;right:0;top:0;width:100%;z-index:1000}.barcode-scanner-livestream-overlay[_ngcontent-%COMP%]   .barcode-scanner-livestream-overlay-content[_ngcontent-%COMP%]{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.barcode-scanner-livestream-overlay[_ngcontent-%COMP%]   .barcode-scanner-livestream-overlay-content[_ngcontent-%COMP%]   .barcode-scanner-livestream-overlay-close[_ngcontent-%COMP%]{background-color:#fff;border:2px solid #000;border-radius:2rem;box-sizing:initial;cursor:pointer;font-size:1.3rem;height:1.5rem;line-height:1.5rem;margin:-1rem;padding:.5rem;position:absolute;right:0;text-align:center;width:1.5rem;z-index:100}"] });
BarcodeScannerLivestreamOverlayComponent.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    deviceId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    maxHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    valueChanges: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    started: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    scanner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [BarcodeScannerLivestreamComponent,] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BarcodeScannerLivestreamOverlayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'barcode-scanner-livestream-overlay',
                template: "<div class=\"barcode-scanner-livestream-overlay\" [hidden]=\"!showScanner\">\n  <div\n    class=\"barcode-scanner-livestream-overlay-content\"\n    [style.width]=\"width\"\n    [style.max-width]=\"maxWidth\"\n    [style.height]=\"height\"\n    [style.max-height]=\"maxHeight\"\n  >\n    <div\n      class=\"barcode-scanner-livestream-overlay-close\"\n      *ngIf=\"isStarted\"\n      (click)=\"hide()\"\n    >\n      X\n    </div>\n    <barcode-scanner-livestream\n      [type]=\"type\"\n      [deviceId]=\"deviceId\"\n      [config]=\"config\"\n      (valueChanges)=\"onValueChanges($event)\"\n      (started)=\"onStarted($event)\"\n    ></barcode-scanner-livestream>\n  </div>\n</div>\n",
                styles: [".barcode-scanner-livestream-overlay{background-color:rgba(0,0,0,.3);bottom:0;left:0;overflow:hidden;position:fixed;right:0;top:0;width:100%;z-index:1000}.barcode-scanner-livestream-overlay .barcode-scanner-livestream-overlay-content{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.barcode-scanner-livestream-overlay .barcode-scanner-livestream-overlay-content .barcode-scanner-livestream-overlay-close{background-color:#fff;border:2px solid #000;border-radius:2rem;box-sizing:initial;cursor:pointer;font-size:1.3rem;height:1.5rem;line-height:1.5rem;margin:-1rem;padding:.5rem;position:absolute;right:0;text-align:center;width:1.5rem;z-index:100}"]
            }]
    }], function () { return []; }, { width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], valueChanges: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], started: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], deviceId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], scanner: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [BarcodeScannerLivestreamComponent]
        }] }); })();

class BarcodeScannerLivestreamOverlayModule {
}
BarcodeScannerLivestreamOverlayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BarcodeScannerLivestreamOverlayModule });
BarcodeScannerLivestreamOverlayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function BarcodeScannerLivestreamOverlayModule_Factory(t) { return new (t || BarcodeScannerLivestreamOverlayModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            BarcodeScannerLivestreamModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BarcodeScannerLivestreamOverlayModule, { declarations: function () { return [BarcodeScannerLivestreamOverlayComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], BarcodeScannerLivestreamModule]; }, exports: function () { return [BarcodeScannerLivestreamOverlayComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BarcodeScannerLivestreamOverlayModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    BarcodeScannerLivestreamModule
                ],
                declarations: [
                    BarcodeScannerLivestreamOverlayComponent
                ],
                exports: [
                    BarcodeScannerLivestreamOverlayComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-barcode-scanner
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-barcode-scanner.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scanner/scanner.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scanner/scanner.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <barcode-scanner-livestream\n        type=\"code_128\"\n        (valueChanges)=\"onValueChanges($event)\"\n        (started)=\"(onStarted)\"\n      ></barcode-scanner-livestream>\n          <div>\n          {{barcodeValue}}\n         </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/app/pages/scanner/scanner-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/scanner/scanner-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ScannerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannerPageRoutingModule", function() { return ScannerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _scanner_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scanner.page */ "./src/app/pages/scanner/scanner.page.ts");




const routes = [
    {
        path: '',
        component: _scanner_page__WEBPACK_IMPORTED_MODULE_3__["ScannerPage"]
    }
];
let ScannerPageRoutingModule = class ScannerPageRoutingModule {
};
ScannerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ScannerPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/scanner/scanner.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/scanner/scanner.module.ts ***!
  \*************************************************/
/*! exports provided: ScannerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannerPageModule", function() { return ScannerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _scanner_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scanner-routing.module */ "./src/app/pages/scanner/scanner-routing.module.ts");
/* harmony import */ var _scanner_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scanner.page */ "./src/app/pages/scanner/scanner.page.ts");
/* harmony import */ var ngx_barcode_scanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-barcode-scanner */ "./node_modules/ngx-barcode-scanner/__ivy_ngcc__/fesm2015/ngx-barcode-scanner.js");








let ScannerPageModule = class ScannerPageModule {
};
ScannerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _scanner_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScannerPageRoutingModule"],
            ngx_barcode_scanner__WEBPACK_IMPORTED_MODULE_7__["BarcodeScannerLivestreamModule"]
        ],
        declarations: [_scanner_page__WEBPACK_IMPORTED_MODULE_6__["ScannerPage"]]
    })
], ScannerPageModule);



/***/ }),

/***/ "./src/app/pages/scanner/scanner.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/scanner/scanner.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NjYW5uZXIvc2Nhbm5lci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/scanner/scanner.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/scanner/scanner.page.ts ***!
  \***********************************************/
/*! exports provided: ScannerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannerPage", function() { return ScannerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_servicio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/servicio.service */ "./src/app/services/servicio.service.ts");
/* harmony import */ var ngx_barcode_scanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-barcode-scanner */ "./node_modules/ngx-barcode-scanner/__ivy_ngcc__/fesm2015/ngx-barcode-scanner.js");





let ScannerPage = class ScannerPage {
    constructor(router, serv) {
        this.router = router;
        this.serv = serv;
        this.pdf = {
            id: '',
            num: '',
            nombre: '',
            ambiente: '',
            factor: '',
            personaje: '',
            solitario: true,
            solido: '',
            gaseoso: '',
            liquido: '',
            P1: '',
            P2: '',
            P3_1: '',
            P3_2: '',
            P3_3: '',
            P3_4: '',
            tarjeta: '',
            tarjeta2: '',
            idea1: '',
            idea2: '',
            idea3: '',
            idea4: '',
            ideaselecionada: '',
            aprendizaje: '',
            V: '',
            C: '',
            R: '',
            P: '',
            tipo: '',
            img: ''
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    ngAfterViewInit() {
        this.barcodeScanner.start();
    }
    onValueChanges(result) {
        this.barcodeValue = result.codeResult.code;
        var resultstring = "" + this.barcodeValue;
        if ((resultstring == "solido/s1/0") || (resultstring == "solido/s2/0") || (resultstring == "solido/s3/0") ||
            (resultstring == "gaseoso/0") || (resultstring == "gaseoso/1") || (resultstring == "gaseoso/2")
            || (resultstring == "gaseoso/3") || (resultstring == "gaseoso/4") || (resultstring == "fisico/video") ||
            (resultstring == "fisico/feli1") || (resultstring == "virtual") || (resultstring == "img/0") ||
            (resultstring == "img/2") || (resultstring == "img/4")) {
            console.log("link", resultstring);
            this.router.navigateByUrl(resultstring);
        }
    }
    onStarted(started) {
        console.log("Iniciando", started);
    }
};
ScannerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_servicio_service__WEBPACK_IMPORTED_MODULE_3__["ServicioService"] }
];
ScannerPage.propDecorators = {
    barcodeScanner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [ngx_barcode_scanner__WEBPACK_IMPORTED_MODULE_4__["BarcodeScannerLivestreamComponent"],] }]
};
ScannerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scanner',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./scanner.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scanner/scanner.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./scanner.page.scss */ "./src/app/pages/scanner/scanner.page.scss")).default]
    })
], ScannerPage);



/***/ })

}]);
//# sourceMappingURL=pages-scanner-scanner-module-es2015.js.map