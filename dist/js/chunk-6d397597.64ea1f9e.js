(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d397597"],{"16c0":function(e,t,i){"use strict";var a=i("2616"),s=i.n(a);s.a},2616:function(e,t,i){},"9f73":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"card"},[i("div",{staticClass:"cardimg"},[i("img",{attrs:{src:e.profile.image,alt:""}})]),i("div",{staticClass:"container"},[i("h4",[i("strong",[e._v(e._s(e.profile.name))])]),i("p",[e._v(e._s(e.profile.email))])])])},s=[],n=(i("7f7f"),i("cadf"),i("551c"),i("097d"),i("bc3a")),r=i.n(n),o={props:{id_token:String,profile:Object},data:function(){return{message:"",showAlert:!1}},mounted:function(){var e=this,t=this;r.a.get("https://hzyo7y0ukj.execute-api.eu-west-1.amazonaws.com/dev/"+this.profile.user_id,{headers:{Authorization:this.id_token}}).then(function(e){t.profile.name=e.data.name,t.profile.email=e.data.email,t.profile.image=e.data.image,t.profile.user_id=e.data.user_id}).catch(function(t){e.message=t,e.showAlert=!0})}},c=o,l=(i("16c0"),i("2877")),u=Object(l["a"])(c,a,s,!1,null,null,null);u.options.__file="UserProfile.vue";t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-6d397597.64ea1f9e.js.map