(function(t){function e(e){for(var n,i,d=e[0],a=e[1],l=e[2],u=0,f=[];u<d.length;u++)i=d[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);s&&s(e);while(f.length)f.shift()();return c.push.apply(c,l||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,d=1;d<o.length;d++){var a=o[d];0!==r[a]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},c=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],a=d.push.bind(d);d.push=e,d=d.slice();for(var l=0;l<d.length;l++)e(d[l]);var s=a;c.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"223c":function(t,e,o){},"4ff5":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),r={class:"screen"},c=Object(n["e"])("header",null,[Object(n["e"])("div",{class:"wrap-logo"},[Object(n["e"])("div",{class:"logo"},"TODORED"),Object(n["e"])("hr")])],-1),i={class:"main"},d={class:"lateral-panel active"},a={class:"main-screen"};function l(t,e,o,l,s,u){var f=Object(n["k"])("AddTodo"),b=Object(n["k"])("mainToDo"),v=Object(n["k"])("placeCorrect");return Object(n["g"])(),Object(n["d"])("div",r,[c,Object(n["e"])("div",i,[Object(n["e"])("div",d,[Object(n["f"])(f,{onAddTodo:u.addTodo},null,8,["onAddTodo"]),Object(n["f"])(b,{todoList:s.todoList,onRemoveTodo:u.removeTodo,onTodoEvent:u.todoEvent},null,8,["todoList","onRemoveTodo","onTodoEvent"])]),Object(n["e"])("div",a,[Object(n["f"])(v,{onChangesContent:u.changesContent,todoContentFromId:s.contentFromId,todoTitleFromId:s.todoTitleFromId,todoList:s.todoList},null,8,["onChangesContent","todoContentFromId","todoTitleFromId","todoList"])])])])}o("4de4"),o("d3b7"),o("e9c4"),o("7db0");var s={class:"main-list"},u={class:"list"};function f(t,e,o,r,c,i){var d=Object(n["k"])("toDoItem");return Object(n["g"])(),Object(n["d"])("div",s,[Object(n["e"])("ul",u,[(Object(n["g"])(!0),Object(n["d"])(n["a"],null,Object(n["j"])(o.todoList,(function(t){return Object(n["g"])(),Object(n["c"])(d,{todo:t,onRemoveTodo:i.removeTodo,onTodoEvent:i.todoEvent},null,8,["todo","onRemoveTodo","onTodoEvent"])})),256))])])}var b=function(t){return Object(n["i"])("data-v-b7e937fa"),t=t(),Object(n["h"])(),t},v={class:"list-item"},m={class:"title"},p={class:"date"},O=b((function(){return Object(n["e"])("div",{class:"outer"},[Object(n["e"])("div",{class:"inner"},[Object(n["e"])("label",null,"Delete")])],-1)})),j=[O];function g(t,e,o,r,c,i){return Object(n["g"])(),Object(n["d"])("li",v,[Object(n["e"])("div",{class:"flex-width",onClick:[e[0]||(e[0]=function(e){return t.$emit("todoEvent",o.todo.id)}),e[1]||(e[1]=function(){return i.toggleActive&&i.toggleActive.apply(i,arguments)})]},[Object(n["e"])("div",m,Object(n["l"])(o.todo.title),1),Object(n["e"])("div",p,Object(n["l"])(o.todo.date),1)]),Object(n["e"])("div",{class:"remove",onClick:e[2]||(e[2]=function(e){return t.$emit("remove-todo",o.todo.id,o.todo.title)})},j)])}var h={props:{todo:Object},components:{},methods:{toggleActive:function(t){var e=document.querySelector(".main-screen"),o=document.querySelector(".lateral-panel");console.log(o),o.classList.toggle("active"),e.classList.toggle("active")}}},y=(o("aa84"),o("6b0d")),T=o.n(y);const S=T()(h,[["render",g],["__scopeId","data-v-b7e937fa"]]);var I=S,L={props:{todoList:Array},components:{toDoItem:I},methods:{removeTodo:function(t,e){this.$emit("remove-todo",t,e)},todoEvent:function(t){this.$emit("todoEvent",t)}}};const w=T()(L,[["render",f]]);var C=w,F=function(t){return Object(n["i"])("data-v-2d1d4e3c"),t=t(),Object(n["h"])(),t},k={class:"wrap-form"},E=F((function(){return Object(n["e"])("div",{class:"title"},"New Todo:",-1)})),x=F((function(){return Object(n["e"])("button",{type:"submit"},"Create",-1)}));function _(t,e,o,r,c,i){return Object(n["g"])(),Object(n["d"])("div",k,[Object(n["e"])("form",{onSubmit:e[1]||(e[1]=Object(n["o"])((function(){return i.onSubmit&&i.onSubmit.apply(i,arguments)}),["prevent"]))},[E,Object(n["n"])(Object(n["e"])("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=function(t){return c.title=t})},null,512),[[n["m"],c.title]]),x],32)])}o("498a");var D={data:function(){return{title:""}},methods:{onSubmit:function(){var t=new Date,e=t.getDate()+"."+t.getMonth()+"."+t.getFullYear();if(this.title.trim()){var o={id:Date.now(),title:this.title,date:e,content:""};this.$emit("add-todo",o)}this.title=""}}};o("6458");const A=T()(D,[["render",_],["__scopeId","data-v-2d1d4e3c"]]);var P=A,$={class:"body-main-screen"},J={class:"title"},M={class:"wrap-place-content"};function N(t,e,o,r,c,i){return Object(n["g"])(),Object(n["d"])("div",$,[Object(n["e"])("div",J,Object(n["l"])(o.todoTitleFromId),1),Object(n["e"])("div",M,[Object(n["n"])(Object(n["e"])("textarea",{rows:"10",cols:"45",name:"text",placeholder:"Пока тут ничего нет...","onUpdate:modelValue":e[0]||(e[0]=function(t){return o.todoContentFromId=t}),onInput:e[1]||(e[1]=function(){return i.changeTextarea&&i.changeTextarea.apply(i,arguments)})},Object(n["l"])(o.todoContentFromId)+"\r\n                    ",545),[[n["m"],o.todoContentFromId]]),Object(n["e"])("button",{type:"submit",onSubmit:e[2]||(e[2]=Object(n["o"])((function(){return i.onSubmit&&i.onSubmit.apply(i,arguments)}),["prevent"])),onClick:e[3]||(e[3]=function(){return i.ClickBtn&&i.ClickBtn.apply(i,arguments)})},"Save",32)])])}o("a9e3"),o("159b");var R={props:{todoContentFromId:[String,Number],todoList:Array,todoTitleFromId:String},methods:{changeTextarea:function(){this.$emit("changesContent",this.todoContentFromId)},onSubmit:function(){console.log(1),localStorage.clear(),this.todoList.forEach((function(t){localStorage.removeItem(t.title),localStorage.setItem(t.title+t.id,JSON.stringify(t))}))},ClickBtn:function(){var t=document.querySelector(".main-screen"),e=document.querySelector(".lateral-panel");console.log(e),e.classList.toggle("active"),t.classList.toggle("active")}}};o("e91c");const q=T()(R,[["render",N],["__scopeId","data-v-5ee97b8b"]]);var B=q,U={setup:function(){localStorage.removeItem("loglevel:webpack-dev-server");var t=0;window.todoList=[];while(t<localStorage.length){var e=localStorage.key(t),o=localStorage.getItem(e),n=JSON.parse(o);todoList.push(n),t+=1}},data:function(){return{todoList:window.todoList,contentFromId:"",idEvent:"",todoTitleFromId:""}},methods:{removeTodo:function(t,e){this.todoList=this.todoList.filter((function(e){return e.id!==t})),localStorage.removeItem(e)},addTodo:function(t){this.todoList.unshift(t),localStorage.setItem(t.title,JSON.stringify(t))},changesContent:function(t){var e=this.idEvent;""!==t?this.todoList.find((function(t){return t.id===e})).content=t:this.contentFromId=this.todoList.find((function(t){return t.id===e})).content},todoEvent:function(t){this.todoTitleFromId=this.todoList.find((function(e){return e.id===t})).title,this.idEvent=t,this.contentFromId=this.todoList.find((function(e){return e.id===t})).content}},components:{mainToDo:C,AddTodo:P,placeCorrect:B}};o("e7e0");const V=T()(U,[["render",l]]);var Y=V;Object(n["b"])(Y).mount("#app")},"5e37":function(t,e,o){},6458:function(t,e,o){"use strict";o("223c")},aa84:function(t,e,o){"use strict";o("4ff5")},e58a:function(t,e,o){},e7e0:function(t,e,o){"use strict";o("5e37")},e91c:function(t,e,o){"use strict";o("e58a")}});
//# sourceMappingURL=app.fa58fac1.js.map