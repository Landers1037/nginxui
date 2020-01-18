(function(t){function e(e){for(var o,i,s=e[0],c=e[1],u=e[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"4e36":function(t,e,n){"use strict";var o=n("a17f"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=(n("d3b7"),n("bc3a")),a=n.n(r),i={},s=a.a.create(i);s.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),s.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=s,window.axios=s,Object.defineProperties(t.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},o["default"].use(Plugin);Plugin;var c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("img",{attrs:{src:n("cf05")}}),o("UI",{attrs:{msg:"An Nginx UI"}})],1)},u=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),n("p",[t._v(" Help you manage nginx service ")]),n("el-row",[n("el-button",{attrs:{type:"primary",plain:""},on:{click:t.start}},[t._v("启动服务")]),n("el-button",{attrs:{type:"success",plain:""},on:{click:t.restart}},[t._v("重启服务")]),n("el-button",{attrs:{type:"info",plain:""},on:{click:t.close}},[t._v("关闭服务")])],1),n("br"),n("el-row",[n("el-input",{staticClass:"path",attrs:{placeholder:"请输入地址"},model:{value:t.inpath,callback:function(e){t.inpath=e},expression:"inpath"}},[n("template",{slot:"prepend"},[t._v("Nginx地址")])],2),n("span",{staticStyle:{padding:"0 5px 5px 0"}}),n("el-button",{attrs:{type:"warning",plain:""},on:{click:t.sendconf}},[t._v("应用配置")])],1),n("br"),n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("操作信息")])]),n("div",{staticClass:"card"},[t._v(" "+t._s(t.log)+" ")])])],1)},p=[],f={name:"UI",data:function(){return{log:"there is no output now",inpath:"输入nginx程序的路径"}},props:{msg:String},watch:{inpath:function(){}},methods:{start:function(){a.a.post("/api",{do:"start"}).then((function(t){console.log(t)}))},restart:function(){a.a.post("/api",{do:"restart"}).then((function(t){console.log(t)}))},close:function(){a.a.post("/api",{do:"stop"}).then((function(t){console.log(t)}))},sendconf:function(){var t=this,e=t.inpath,n={do:"conf",path:e};console.log(e),a.a.post("/api",n).then((function(t){console.log(t)}))}}},d=f,g=(n("4e36"),n("2877")),h=Object(g["a"])(d,l,p,!1,null,"74a9e4ee",null),v=h.exports,b={name:"app",components:{UI:v}},m=b,y=(n("034f"),Object(g["a"])(m,c,u,!1,null,null,null)),x=y.exports,_=n("5c96"),w=n.n(_);n("0fae");o["default"].use(w.a),o["default"].config.productionTip=!1,a.a.defaults.timeout=1e4,a.a.defaults.baseURL="/",new o["default"]({render:function(t){return t(x)}}).$mount("#app")},"85ec":function(t,e,n){},a17f:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"static/img/logo.82b9c7a5.png"}});