(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b092af2"],{"23a8":function(t,a,e){},"3c1d":function(t,a,e){"use strict";var s=e("23a8"),n=e.n(s);n.a},d000:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"topnav",class:{responsive:t.makeReactive}},[t._m(0),e("a",{class:{active:"home"==t.page},attrs:{href:"#"},on:{click:function(a){t.setPage("home")}}},[t._v("Home")]),t.authenticated?e("a",{class:{active:"mystuff"==t.page},attrs:{href:"#"}},[t._v("My Stuff")]):t._e(),t.authenticated?t._e():e("a",{staticClass:"disabled",attrs:{href:"#"}},[t._v("My Stuff")]),t.authenticated?e("a",{class:{active:"allusers"==t.page},attrs:{href:"#"},on:{click:function(a){t.setPage("allusers")}}},[t._v("All Users")]):t._e(),t.authenticated?t._e():e("a",{staticClass:"disabled",attrs:{href:"#"}},[t._v("All Users")]),t.authenticated?e("div",{staticClass:"dropdown"},[e("button",{staticClass:"dropbtn",attrs:{href:"#"}},[t._v("User")]),e("div",{staticClass:"dropdown-content"},[e("a",{attrs:{href:"#"},on:{click:function(a){t.setPage("profile")}}},[t._v("Profile")]),e("a",{attrs:{href:"#"},on:{click:t.signOut}},[t._v("Signout")])])]):t._e(),e("a",{staticClass:"icon",staticStyle:{"font-size":"15px"},attrs:{href:"#"},on:{click:function(a){t.makeReactive=!t.makeReactive}}},[t._v("☰")])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"brand",attrs:{href:"#"}},[e("strong",[t._v("Amazing App")])])}],i=(e("cadf"),e("551c"),e("097d"),{props:{signOut:Function,authenticated:Boolean},data:function(){return{makeReactive:!1,page:"home"}},methods:{setPage:function(t){this.makeReactive=!1,this.page=t,this.$emit("pageChange",t)}}}),c=i,r=(e("3c1d"),e("2877")),o=Object(r["a"])(c,s,n,!1,null,"2f4a7669",null);o.options.__file="NavBar.vue";a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-6b092af2.8ff2b41d.js.map