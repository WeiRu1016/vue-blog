webpackJsonp([19],{25:function(t,e,a){var o,n;a(26),o=a(28),n=a(29),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},26:function(t,e,a){var o=a(27);"string"==typeof o&&(o=[[t.id,o,""]]);a(8)(o,{});o.locals&&(t.exports=o.locals)},27:function(t,e,a){e=t.exports=a(7)(),e.push([t.id,".content{overflow-wrap:break-word}.article article>h1{margin-top:0;text-align:center;font-size:38px;margin-bottom:5px}.article article>p{text-align:center;margin-bottom:48px}.article article>p span{margin:0 5px}.article article>.container p{font-size:18px;color:#4f6a85}.article article>.container hr{background:#fff;color:#fff;background-color:#ccc;height:1px;border:none}.article article>.container a{color:#59b6f4}.article article>.container a:hover{color:#29a1f1}.article article>.container img{width:100%;border-radius:15px}.article .pl{text-align:center;font-size:34px;border-radius:25px;padding-left:25px;padding-right:25px}",""])},28:function(t,e){"use strict";function a(){var t,e;return window.pageYOffset?(e=window.pageYOffset,t=window.pageXOffset):document.documentElement&&document.documentElement.scrollTop?(e=document.documentElement.scrollTop,t=document.documentElement.scrollLeft):document.body&&(e=document.body.scrollTop,t=document.body.scrollLeft),e}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{loading:!1,data:{},ds:!0}},methods:{duoshuo:function(t,e){var a=document.createElement("div"),o=document.getElementsByClassName("article")[0];a.setAttribute("data-thread-key",this.data._id),a.setAttribute("data-url",window.location.href),a.setAttribute("data-author-key","作者的本地用户ID"),DUOSHUO.EmbedThread(a),o.appendChild(a),this.ds=!1}},init:function(){var t=this,e=this.$route.matched[0].params.id;this.$http.post("/article",{id:e}).then(function(e){t.data=e.data,t.loading=!0});var o=setInterval(function(){var t=a();0==t?clearInterval(o):window.scrollTo(0,t-20)},5)}}},29:function(t,e){t.exports=' <div class="col-6-c article" v-if=loading transition=op> <article> <h1 class=title>{{data.title}}</h1> <p> <span><i class=iconfont>&#xe604;</i>{{data.author}}</span> <span><i class=iconfont>&#xe600;</i>{{data.time}}</span> <span><i class=iconfont>&#xe602;</i>{{data.vistits}}</span> </p> <p style="display: none"> <span><i class=iconfont>&#xe609;</i>{{data.type}}</span> <span><i class=iconfont>&#xe60a;</i>{{data.tags}}</span> </p> <div class=container v-html=data.content> </div> </article> <div class=pl><button @click=duoshuo class="btn btn-blue pl" v-if=ds>加载。。评论</button></div> </div> '}});