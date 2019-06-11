webpackJsonp([1],{"+VGo":function(e,t){},0:function(e,t,n){e.exports=n("NHnr")},"2teO":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("/5sW"),r=(n("EuXz"),n("SldL"),n("7hDC")),s=n.n(r),u=n("mtWM"),o=n.n(u),i={name:"mongodb",data:function(){return{example1:"",users:[],name:"",username:"",user:{},updatedUser:{},age:0,insertedUser:{},new_name:"",new_age:0}},methods:{getTest:function(){var e=s()(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post("http://localhost:8888/graphql",{query:"{ get }"});case 3:t=e.sent,this.example1=t.data.data.get,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log("err",e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}(),updateUserAge:function(){var e=s()(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("http://localhost:8888/graphql",{query:" \n        mutation UpdateUserAge($name: String!, $age: Int!) {\n          updateUserAge(name: $name, age: $age) { \n            name\n            age\n          }  \n        }",variables:{name:this.name,age:this.age}});case 2:t=e.sent,null==t.data.data.updateUserAge||""==t.data.data.updateUserAge?alert("Incorrect user"):(this.updatedUser=t.data.data.updateUserAge,alert("User Updated"));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getUserByName:function(){var e=s()(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("http://localhost:8888/graphql",{query:" \n        query getUserByName($name:String!){\n          getUserByName(name:$name){\n            name\n            age\n          }\n        }",variables:{name:this.username}});case 2:t=e.sent,this.user=t.data.data.getUserByName;case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getUsers:function(){var e=s()(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("http://localhost:8888/graphql",{query:"{ \n          getUsers { \n            name \n          } \n        }"});case 2:t=e.sent,this.users=t.data.data.getUsers;case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),newUser:function(){var e=s()(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("http://localhost:8888/graphql",{query:" \n        mutation insertUser($new_name:String!,$new_age:Int!) { \n\t            insertUser(name:$new_name,age:$new_age){\n\t\t            name\n                age\n              }\n            }",variables:{new_name:this.new_name,new_age:this.new_age}});case 2:t=e.sent,this.insertedUser=t.data.data.insertUser,alert("New User Inserted");case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("h3",[e._v("Example 1 : Test Example")]),n("div",[e._v("Data: "+e._s(e.example1))]),n("button",{on:{click:e.getTest}},[e._v("Test")]),n("hr"),n("h3",[e._v("Example 2 : Show all users")]),n("div",[e._v("\n    Data:\n    "),n("ul",{attrs:{id:"example-2"}},e._l(e.users,function(t){return n("li",{key:t.name},[e._v(e._s(t.name))])}))]),n("button",{on:{click:e.getUsers}},[e._v("Get Users")]),n("hr"),n("h3",[e._v("Example 3 : Get user by name")]),e._v("Name:\n  "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),n("div",[e._v("\n    Data:\n    "+e._s(e.user)+"\n  ")]),n("button",{on:{click:e.getUserByName}},[e._v("Get User")]),n("hr"),n("h3",[e._v("Example 4 : Update User")]),e._v("Name:\n  "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v("\n  Age:\n  "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.age,expression:"age",modifiers:{number:!0}}],domProps:{value:e.age},on:{input:function(t){t.target.composing||(e.age=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}}),n("div",[e._v("\n    Data:\n    "+e._s(e.updatedUser)+"\n  ")]),n("button",{on:{click:e.updateUserAge}},[e._v("Update User")]),n("hr"),n("h3",[e._v("Example 5 : Add New User")]),e._v("Name:\n  "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_name,expression:"new_name"}],domProps:{value:e.new_name},on:{input:function(t){t.target.composing||(e.new_name=t.target.value)}}}),e._v("\n  Age:\n  "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.new_age,expression:"new_age",modifiers:{number:!0}}],domProps:{value:e.new_age},on:{input:function(t){t.target.composing||(e.new_age=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}}),n("div",[e._v("\n    Data:\n    "+e._s(e.insertedUser)+"\n  ")]),n("button",{on:{click:e.newUser}},[e._v("Insert New User")])])},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[n("u",[e._v("Vue + GraphQL + MongoDB + NodeJS Examples")])])}],c=n("XyMi");function v(e){n("roYt")}var p=!1,g=v,h="data-v-7b36f974",d=null,_=Object(c["a"])(i,l,m,p,g,h,d),f=_.exports,w={name:"HelloWorld",props:{msg:String}},b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),n("h3",[e._v("Installed CLI Plugins")]),e._m(0),n("h3",[e._v("Essential Links")]),e._m(1),n("h3",[e._v("Ecosystem")]),e._m(2)])},U=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("Twitter")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org/en/essentials/getting-started.html",target:"_blank"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org/en/intro.html",target:"_blank"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org/en",target:"_blank"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[e._v("awesome-vue")])])])}];function x(e){n("2teO")}var k=!1,y=x,$="data-v-135f991c",N=null,E=Object(c["a"])(w,b,U,k,y,$,N),j=E.exports,q={name:"app",components:{mongodb:f,HelloWorld:j}},A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelloWorld",{attrs:{msg:"Welcome to vue application"}}),n("hr"),n("br"),n("mongodb")],1)},R=[];function D(e){n("+VGo")}var I=!1,P=D,S=null,B=null,C=Object(c["a"])(q,A,R,I,P,S,B),G=C.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(G)}}).$mount("#app")},roYt:function(e,t){}},[0]);
//# sourceMappingURL=app.8ea4fa9a.js.map