(function(e){function t(t){for(var r,i,u=t[0],c=t[1],s=t[2],d=0,f=[];d<u.length;d++)i=u[d],a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},i={app:0},a={app:0},o=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-02212e8e":"5c7a61ef","chunk-0c15634c":"08dd14d8","chunk-131f8260":"d76fbeb2","chunk-5279386c":"ba5b8df7","chunk-6d397597":"df79f8ce","chunk-14f775ec":"284f3b5e","chunk-d10f16c2":"f76634e7","chunk-79205765":"1948bc90"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-02212e8e":1,"chunk-0c15634c":1,"chunk-131f8260":1,"chunk-5279386c":1,"chunk-6d397597":1,"chunk-14f775ec":1,"chunk-d10f16c2":1,"chunk-79205765":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-02212e8e":"0b885270","chunk-0c15634c":"e890e884","chunk-131f8260":"69275f70","chunk-5279386c":"239437fd","chunk-6d397597":"e7f25fd6","chunk-14f775ec":"a1af8bd7","chunk-d10f16c2":"2ab82147","chunk-79205765":"fa24ad81"}[e]+".css",i=c.p+r,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var u=a[o],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===r||s===i))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],s=u.getAttribute("data-href");if(s===r||s===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,n(a)},f.href=i;var l=document.getElementsByTagName("head")[0];l.appendChild(f)}).then(function(){i[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=o);var s,d=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=u(e),s=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");o.type=r,o.request=i,n[1](o)}a[e]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:f})},12e4);f.onerror=f.onload=s,d.appendChild(f)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var l=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("c21b"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("7f7f"),n("cadf"),n("551c"),n("097d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg",attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("NavBar",{attrs:{signOut:e.signOut,authenticated:e.authenticated},on:{pageChange:function(t){e.page=t}}}),n("br")],1),n("div",{staticClass:"container"},[n("div",{staticClass:"card"},[""==e.id_token?n("google-auth",{attrs:{attachSignin:e.attachSignin},on:{authenticated:function(t){e.auth2=t}}}):e._e(),"home"==e.page?n("HomeCalendar"):e._e(),"profile"==e.page?n("UserProfile",{attrs:{id_token:e.id_token,profile:e.profile}}):e._e(),"allusers"==e.page?n("AllUsers",{attrs:{id_token:e.id_token}}):e._e()],1)])])},a=[],o=n("bc3a"),u=n.n(o),c={name:"app",components:{HomeCalendar:function(){return n.e("chunk-131f8260").then(n.bind(null,"4b8e"))},NavBar:function(){return n.e("chunk-02212e8e").then(n.bind(null,"d000"))},UserProfile:function(){return n.e("chunk-6d397597").then(n.bind(null,"9f73"))},AllUsers:function(){return n.e("chunk-5279386c").then(n.bind(null,"587f"))}},data:function(){return{auth2:null,id_token:"",profile:{},authenticated:!1,page:"login",loading:!1,message:"",showAlert:!1,windowWidth:0}},methods:{attachSignin:function(e){var t=this;this.auth2.attachClickHandler(e,{},function(e){t.id_token=e.getAuthResponse().id_token,t.authenticate()},function(e){alert(JSON.stringify(e,void 0,2))})},authenticate:function(){var e=this;this.loading=!0,u.a.get("https://hzyo7y0ukj.execute-api.eu-west-1.amazonaws.com/dev/auth",{headers:{Authorization:this.id_token}}).then(function(t){e.profile.name=t.data.name,e.profile.email=t.data.email,e.profile.image=t.data.image,e.profile.user_id=t.data.user_id,e.message=e.profile.name+" - authenticated successfully!",e.authenticated=!0,e.showAlert=!0,e.loading=!1,e.page="home"})},signOut:function(){var e=this;this.auth2.signOut().then(function(){e.id_token="",e.authenticated=!1,e.page="login"})}}},s=c,d=(n("034f"),n("2877")),f=Object(d["a"])(s,i,a,!1,null,null,null);f.options.__file="App.vue";var l=f.exports,h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"unsupported"}},[n("h1",[e._v("Unsupported browser")]),n("h4",[e._v("Use Google Chrome or Mozilla Firefox")])])}],g={name:"unsupported"},m=g,v=(n("60d3"),Object(d["a"])(m,h,p,!1,null,null,null));v.options.__file="Unsupported.vue";var k=v.exports;r["a"].component("google-auth",function(){return n.e("chunk-0c15634c").then(n.bind(null,"ece7"))}),r["a"].config.productionTip=!0,r["a"].mixin({data:function(){return{windowWidth:0}},mounted:function(){this.$nextTick(function(){window.addEventListener("resize",this.getWindowWidth),this.getWindowWidth()})},methods:{getWindowWidth:function(){this.windowWidth=document.documentElement.clientWidth}},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth)}});var b=n("4a35"),w=b.detect,_=w();switch(_&&_.name){case"chrome":case"firefox":window.app=new r["a"]({render:function(e){return e(l)}}).$mount("#app");break;default:window.app=new r["a"]({render:function(e){return e(k)}}).$mount("#app")}},"60d3":function(e,t,n){"use strict";var r=n("b7dd"),i=n.n(r);i.a},b7dd:function(e,t,n){},c21b:function(e,t,n){}});
//# sourceMappingURL=app.ad2a8e8e.js.map