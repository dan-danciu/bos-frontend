(function(t){function e(e){for(var a,r,i=e[0],c=e[1],s=e[2],l=0,f=[];l<i.length;l++)r=i[l],o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(u.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},u=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-0c15634c":"4bba0ef9","chunk-7c10fd8e":"b60a0e38"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-0c15634c":1,"chunk-7c10fd8e":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-0c15634c":"e890e884","chunk-7c10fd8e":"9ba7b6f0"}[t]+".css",r=c.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var i=o[u],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===a||s===r))return e()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){i=l[u],s=i.getAttribute("data-href");if(s===a||s===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.request=a,n(o)},f.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){r[t]=0}));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var u=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=u);var s,l=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=i(t),s=function(e){f.onerror=f.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,u=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");u.type=a,u.request=r,n[1](u)}o[t]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:f})},12e4);f.onerror=f.onload=s,l.appendChild(f)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("c21b"),r=n.n(a);r.a},"34ba":function(t,e,n){"use strict";var a=n("cfd9"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg",attrs:{id:"app"}},[n("NavBar",{attrs:{signOut:t.signOut,authenticated:t.authenticated}}),n("b-card",[""==t.id_token?n("google-auth",{attrs:{attachSignin:t.attachSignin},on:{authenticated:function(e){t.auth2=e}}}):t._e(),n("Home")],1)],1)},o=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"info"}},[n("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),n("b-navbar-brand",{attrs:{href:"#"}},[t._v("Amazing App")]),n("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{href:"#"}},[t._v("Home")]),t.authenticated?n("b-nav-item",{attrs:{href:"#"}},[t._v("My Stuff")]):t._e(),t.authenticated?t._e():n("b-nav-item",{attrs:{href:"#",disabled:""}},[t._v("My Stuff")])],1),n("b-navbar-nav",{staticClass:"ml-auto"},[t.authenticated?n("b-nav-item-dropdown",{attrs:{right:""}},[n("template",{slot:"button-content"},[n("em",[t._v("User")])]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Profile")]),n("b-dropdown-item",{attrs:{href:"#"},on:{click:t.signOut}},[t._v("Signout")])],2):t._e()],1)],1)],1)},i=[],c={props:{signOut:Function,authenticated:Boolean}},s=c,l=(n("34ba"),n("2877")),f=Object(l["a"])(s,u,i,!1,null,null,null);f.options.__file="NavBar.vue";var d=f.exports,p={name:"app",components:{Home:function(){return n.e("chunk-7c10fd8e").then(n.bind(null,"57da"))},NavBar:d},data:function(){return{auth2:null,id_token:"",authenticated:!1}},methods:{attachSignin:function(t){var e=this;this.auth2.attachClickHandler(t,{},function(t){e.id_token=t.getAuthResponse().id_token,e.authenticated=!0},function(t){alert(JSON.stringify(t,void 0,2))})},signOut:function(){var t=this;this.auth2.signOut().then(function(){t.id_token="",t.authenticated=!1})}}},h=p,v=(n("034f"),Object(l["a"])(h,r,o,!1,null,null,null));v.options.__file="App.vue";var b=v.exports,g=n("bc3a"),m=n.n(g),_=n("a7fe"),y=n.n(_),k=(n("f9e3"),n("2dd8"),n("7b38"));a["a"].use(y.a,m.a),a["a"].component("google-auth",function(){return n.e("chunk-0c15634c").then(n.bind(null,"ece7"))}),a["a"].use(k["d"]),a["a"].use(k["a"]),a["a"].use(k["c"]),a["a"].use(k["b"]),a["a"].config.productionTip=!1,window.app=new a["a"]({render:function(t){return t(b)}}).$mount("#app")},c21b:function(t,e,n){},cfd9:function(t,e,n){}});
//# sourceMappingURL=app.fac11856.js.map