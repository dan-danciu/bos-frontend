(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5279386c"],{"587f":function(n,e,t){"use strict";t.r(e);var s=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{},[n._v("\n  "+n._s(n.response.all_users)+"\n")])},o=[],a=(t("cadf"),t("551c"),t("097d"),{props:{id_token:String},data:function(){return{response:null}},mounted:function(){var n=this;axios.get("https://hzyo7y0ukj.execute-api.eu-west-1.amazonaws.com/dev/all_users",{headers:{Authorization:this.id_token}}).then(function(e){n.response=e.data}).catch(function(e){n.message=e,n.showAlert=!0})}}),u=a,c=(t("f62a"),t("2877")),i=Object(c["a"])(u,s,o,!1,null,null,null);i.options.__file="AllUsers.vue";e["default"]=i.exports},d5cf:function(n,e,t){},f62a:function(n,e,t){"use strict";var s=t("d5cf"),o=t.n(s);o.a}}]);
//# sourceMappingURL=chunk-5279386c.f5d2148f.js.map