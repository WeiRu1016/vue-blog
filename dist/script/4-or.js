webpackJsonp([4],{65:function(t,e,o){var s,a;o(66),s=o(68),a=o(69),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},66:function(t,e,o){var s=o(67);"string"==typeof s&&(s=[[t.id,s,""]]);o(17)(s,{});s.locals&&(t.exports=s.locals)},67:function(t,e,o){e=t.exports=o(12)(),e.push([t.id,".login{box-sizing:border-box;padding:35px 45px;border:1px solid #dcdcdc;border-radius:3px}",""])},68:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(23);e["default"]={vuex:{actions:{alertshow:s.alertshow,alerttitle:s.alerttitle,alertstyle:s.alertstyle}},data:function(){return{loading:!1}},methods:{test:function(){var t=this;this.$http.post("/login",{name:this.$els.name.value,password:this.$els.password.value}).then(function(e){t.op=e.data.op,"true"==t.op?(t.alertshow(!0),t.alerttitle("登陆成功"),window.location.href="#/admin"):(t.alertshow(!0),t.alertstyle("warn"),t.alerttitle("登录失败！！"))})}},init:function(){var t=this;this.$http.post("/log").then(function(e){"true"==e.data.op?window.location.href="#/admin":t.loading=!0})}}},69:function(t,e){t.exports=' <div class="login col-4-c" transition=op transition-mode=out-in v-if=loading> <label> <input type=text id=name class="y block" placeholder=帐号： autocomplete=new-password v-el:name> </label> <label> <input type=password class="y block" placeholder=密码： id=password autocomplete=new-password v-el:password @keyup.enter=test> </label> <button @click=test class="btn btn-default block">on</button> </div> '}});