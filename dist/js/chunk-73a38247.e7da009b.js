(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73a38247"],{"58b1":function(t,e,a){"use strict";var s=a("c03b"),n=a.n(s);n.a},c03b:function(t,e,a){},d000:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topnav",class:{responsive:t.makeReactive}},[t._m(0),a("a",{class:{active:"home"==t.page},attrs:{href:"#"},on:{click:function(e){t.setPage("home")}}},[t._v("Home")]),t.authenticated?a("a",{class:{active:"mystuff"==t.page},attrs:{href:"#"}},[t._v("My Stuff")]):t._e(),t.authenticated?t._e():a("a",{staticClass:"disabled",attrs:{href:"#"}},[t._v("My Stuff")]),t.authenticated?a("a",{class:{active:"allusers"==t.page},attrs:{href:"#"},on:{click:function(e){t.setPage("allusers")}}},[t._v("All Users")]):t._e(),t.authenticated?t._e():a("a",{staticClass:"disabled",attrs:{href:"#"}},[t._v("All Users")]),t.authenticated?a("div",{staticClass:"dropdown"},[a("button",{staticClass:"dropbtn",attrs:{href:"#"}},[t._v("User▾")]),a("div",{staticClass:"dropdown-content"},[a("a",{attrs:{href:"#"},on:{click:function(e){t.setPage("profile")}}},[t._v("Profile")]),a("a",{attrs:{href:"#"},on:{click:t.signOut}},[t._v("Signout")])])]):t._e(),a("a",{staticClass:"icon",staticStyle:{"font-size":"15px"},attrs:{href:"#"},on:{click:function(e){t.makeReactive=!t.makeReactive}}},[t._v("☰")])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"brand",attrs:{href:"#"}},[a("strong",[t._v("Amazing App")])])}],c=(a("cadf"),a("551c"),a("097d"),{props:{signOut:Function,authenticated:Boolean},data:function(){return{makeReactive:!1,page:"home"}},methods:{setPage:function(t){this.makeReactive=!1,this.page=t,this.$emit("pageChange",t)}}}),i=c,r=(a("58b1"),a("2877")),o=Object(r["a"])(i,s,n,!1,null,"89743fac",null);o.options.__file="NavBar.vue";e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-73a38247.e7da009b.js.map