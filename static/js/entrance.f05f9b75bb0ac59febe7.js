webpackJsonp([6],{170:function(e,a,t){"use strict";function n(e){t(194)}Object.defineProperty(a,"__esModule",{value:!0});var s=t(184),r=t(197),i=t(3),c=n,o=i(s.a,r.a,!1,c,"data-v-317db1ae",null);a.default=o.exports},184:function(e,a,t){"use strict";var n=t(32),s=t.n(n),r=t(33),i=t(13);a.a={name:"Entrance",data:function(){return{credentials:{username:"",password:""},nameInvalid:!1,passwordInvalid:!1,passwordHidden:!0,isEnterAction:!0,checkinLoading:!1,enterLoading:!1}},computed:{avatarLink:function(){return this.$store.state.auth.user.avatar||r.a.defaultAvatar(this.$store.state.auth.user.gender)}},methods:{nameCheck:function(e,a){var t=r.a.checkName(e);return t?(this.nameInvalid=!0,t):(this.nameInvalid=!1,!0)},passwordCheck:function(e,a){var t=r.a.checkPassword(e);return t?(this.passwordInvalid=!0,t):(this.passwordInvalid=!1,!0)},oldPath:function(){var e=new URL(document.location.href),a=new URLSearchParams(e.search),t=a.get("redirect");return t&&(t=t.slice(1)),t},logoStyle:function(){return{color:"green",fontWeight:"bold",fontSize:"15px"}},guestCheckin:function(){var e=this,a={username:this.credentials.username,password:this.credentials.password};this.nameInvalid||this.passwordInvalid?r.a.showMessage("Please check your input."):(this.checkinLoading=!0,r.a.publicRequest(r.a.checkinConfig(s()(a))).then(function(a){e.checkinLoading=!1,e.isEnterAction=!0,r.a.showMessage("Checkin OK, "+e.credentials.username+". Please enter your Room.")}).catch(function(a){e.checkinLoading=!1}))},guestEnter:function(){var e=this,a={username:this.credentials.username,password:this.credentials.password};if(this.nameInvalid||this.passwordInvalid)r.a.showMessage("Please check your input.");else{this.enterLoading=!0;var t=this.oldPath();r.a.publicRequest(r.a.enterConfig(s()(a))).then(function(a){i.a.storeToken(a),t?i.a.redirectPath(t):i.a.redirectPath("home"),r.a.showMessage("Welcome, "+e.$store.state.auth.user.name)}).catch(function(a){e.enterLoading=!1})}}}}},194:function(e,a,t){var n=t(195);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t(169)("cd45a396",n,!0,{})},195:function(e,a,t){var n=t(171);a=e.exports=t(168)(!0),a.push([e.i,".my-entrance[data-v-317db1ae]{background-image:url("+n(t(196))+");background-size:100% 100%}.my-entrance__logo[data-v-317db1ae]{max-width:46px;padding-left:12px;padding-top:4px}.my-entrance__logo-name img[data-v-317db1ae]{max-width:200px;width:100%}.my-entrance__subheading[data-v-317db1ae]{color:#fff;padding-top:10px;padding-bottom:20px}.my-entrance__card[data-v-317db1ae]{background-color:hsla(0,0%,100%,.8);max-width:370px;margin:0 auto}.my-entrance__card-actions[data-v-317db1ae],.my-entrance__card-title[data-v-317db1ae]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}","",{version:3,sources:["/home/kousai/Workspace/amazeinn-vue/src/features/entrance/main.vue"],names:[],mappings:"AACA,8BACE,+CAAuD,AACvD,yBAA2B,CAC5B,AACD,oCACE,eAAgB,AAChB,kBAAmB,AACnB,eAAiB,CAClB,AACD,6CACE,gBAAiB,AACjB,UAAY,CACb,AACD,0CACE,WAAY,AACZ,iBAAkB,AAClB,mBAAqB,CACtB,AACD,oCACE,oCAAwC,AACxC,gBAAiB,AACjB,aAAe,CAChB,AAMD,sFACE,wBAAyB,AACrB,qBAAsB,AAClB,sBAAwB,CACjC",file:"main.vue",sourcesContent:['\n.my-entrance[data-v-317db1ae] {\n  background-image: url("../../assets/images/enter.jpg");\n  background-size: 100% 100%;\n}\n.my-entrance__logo[data-v-317db1ae] {\n  max-width: 46px;\n  padding-left: 12px;\n  padding-top: 4px;\n}\n.my-entrance__logo-name img[data-v-317db1ae] {\n  max-width: 200px;\n  width: 100%;\n}\n.my-entrance__subheading[data-v-317db1ae] {\n  color: #fff;\n  padding-top: 10px;\n  padding-bottom: 20px;\n}\n.my-entrance__card[data-v-317db1ae] {\n  background-color: rgba(255,255,255,0.8);\n  max-width: 370px;\n  margin: 0 auto;\n}\n.my-entrance__card-title[data-v-317db1ae] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.my-entrance__card-actions[data-v-317db1ae] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}'],sourceRoot:""}])},196:function(e,a,t){e.exports=t.p+"static/img/enter.9a282f0.jpg"},197:function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("v-container",{staticClass:"my-entrance",attrs:{fluid:"fluid","fill-height":"fill-height"}},[n("v-toolbar",{attrs:{color:"primary",flat:"flat",dark:"dark",fixed:"fixed",app:"app",dense:"dense"}},[n("v-btn",{attrs:{icon:"icon"}},[n("img",{staticClass:"my-entrance__logo",attrs:{src:t(198),alt:"VueAMazeInn Logo"}})])],1),n("v-layout",{attrs:{"justify-center":"justify-center","align-center":"align-center"}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"xs12",lg6:"lg6"}},[n("v-layout",{attrs:{row:"row",wrap:"wrap"}},[n("v-flex",{attrs:{xs12:"xs12"}},[n("div",{staticClass:"my-entrance__logo-name"},[n("img",{attrs:{src:t(199),alt:"AMazeInn"}})])]),n("v-flex",{attrs:{xs12:"xs12"}},[n("div",{staticClass:"my-entrance__subheading subheading"},[n("span",{style:e.logoStyle()},[e._v("Welcome to AMazeInn!")])])]),n("v-flex",{attrs:{xs12:"xs12"}},[n("v-card",{staticClass:"my-entrance__card"},[n("v-card-title",{staticClass:"my-entrance__card-title",attrs:{"primary-title":"primary-title"}},[n("v-avatar",{attrs:{size:100}},[n("img",{attrs:{src:e.avatarLink,alt:"Avatar"}})])],1),n("v-card-text",[n("v-form",[n("v-text-field",{attrs:{label:"Name",rules:[e.nameCheck],counter:"counter"},model:{value:e.credentials.username,callback:function(a){e.$set(e.credentials,"username",a)},expression:"credentials.username"}}),n("v-text-field",{attrs:{label:"Password",rules:[e.passwordCheck],counter:"counter","append-icon":e.passwordHidden?"visibility":"visibility_off",type:e.passwordHidden?"password":"text"},on:{"click:append":function(){return e.passwordHidden=!e.passwordHidden}},model:{value:e.credentials.password,callback:function(a){e.$set(e.credentials,"password",a)},expression:"credentials.password"}})],1)],1),n("v-card-actions",{staticClass:"my-entrance__card-actions"},[n("v-btn",{attrs:{loading:e.isEnterAction?e.enterLoading:e.checkinLoading,block:"block",color:"accent",dark:"dark"},on:{click:function(a){e.isEnterAction?e.guestEnter():e.guestCheckin()}}},[e._v(e._s(e.isEnterAction?"Enter":"Check-in"))])],1),n("span",[e._v("Or")]),n("v-spacer"),n("a",{on:{click:function(a){e.isEnterAction=!e.isEnterAction}}},[e._v(e._s(e.isEnterAction?"Check-in":"Enter"))])],1)],1)],1)],1)],1)],1)},s=[],r={render:n,staticRenderFns:s};a.a=r},198:function(e,a,t){e.exports=t.p+"static/img/logo.942d3ce.png"},199:function(e,a,t){e.exports=t.p+"static/img/logo-name.771449a.svg"}});
//# sourceMappingURL=entrance.f05f9b75bb0ac59febe7.js.map