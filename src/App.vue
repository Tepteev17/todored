<template>
  <div class="screen">
    <header>
      <div class="wrap-logo">
          <div class="logo">TODORED</div>
          <hr>
      </div>
    </header>
    <div class="main">
      <div class="lateral-panel active">
          <AddTodo @add-todo="addTodo"/>
          <mainToDo 
          v-bind:todoList="todoList"
          v-on:remove-todo="removeTodo"
          v-on:todoEvent="todoEvent"
          />
      </div>
      <div class="main-screen">
        <placeCorrect
          @changesContent="changesContent"
          v-bind:todoContentFromId="contentFromId"
          v-bind:todoTitleFromId="todoTitleFromId"
          v-bind:todoList="todoList"
        />
      </div>
    </div>
  </div>
</template>

<script>
import mainToDo from '@/components/mainToDo'
import AddTodo from '@/components/AddTodo'
import placeCorrect from '@/components/placeCorrect'
export default {
  setup() {
  localStorage.removeItem('loglevel:webpack-dev-server')
  let i = 0
  window.todoList = []
    while (i < localStorage.length){
      const nameEl = localStorage.key(i)
      const el = localStorage.getItem(nameEl)
      const elJson = JSON.parse(el)
      todoList.push(elJson)
      i = i + 1 
    }
    
  },
  data(){
    return{
      todoList: window.todoList,
      contentFromId:'',
      idEvent:'',
      todoTitleFromId:'',
    }
  },

  methods:{
    removeTodo(id,title){
      this.todoList = this.todoList.filter(t=> t.id !== id)
      localStorage.removeItem(title)
      

    },
    addTodo(newTodo){
      this.todoList.unshift(newTodo)
      localStorage.setItem(newTodo.title, JSON.stringify(newTodo))
    },
    changesContent(changesContent){   
      let id = this.idEvent
      if(changesContent !== ""){
        this.todoList.find(x => x.id === id).content = changesContent
      } else {
        this.contentFromId = this.todoList.find(x => x.id === id).content
      }
    },
    todoEvent(id){
      this.todoTitleFromId = this.todoList.find(x => x.id === id).title
      this.idEvent = id
      this.contentFromId = this.todoList.find(x => x.id === id).content

    },
  },
  components: {
    mainToDo, AddTodo, placeCorrect
  }
}
</script>

<style>
/**Fonts**/
@font-face {
  font-family: 'Cabin', sans-serif;
  src: local("Cabin"),
   url(https://fonts.googleapis.com/css2?family=Cabin:ital,wght@1,600&display=swap);
}
 html {
  box-sizing: border-box;
  margin: 0; padding: 0;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body{
   font-family: 'Cabin', sans-serif;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  max-width: 100vw;
  height: 100vh;
  background: #202225;
}
a{
  text-decoration: none;
}
#app{
  max-width: 100vw;
  height: 100vh;
}
.screen{
  max-width: 100vw;
  height: 100vh;
}
.container{
  position: relative;
  max-width: 1140px;
  margin: 1% auto;
}
li{
  list-style-type: none;
}
ul{
    position: relative;
    margin: 0;
    padding: 0; 
}

element {
  --main-bg-color: #f6414f;
  --second-color:#d02843;
  --thred-color:#ed8b87;
}

.main{
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  height: 80%;
}


.lateral-panel{
  padding: 0px 15px;
  position: relative;
  max-width: 360px;
}
.wrap-logo{
  position: relative;
  width: 100%;
  height: 85px;
  
}
.wrap-logo hr{
  border: none;
  position: absolute;
  width: 10%;
  background: #5092E3;
  bottom: 0;
  height: 3px;
  left: 50%;
  transform: translate(-50%,0);
}
.logo{
  font-size: 24px;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

.main-screen{
  position: relative;
  width: 60%;
  min-height: 100%;
  margin: 0 auto;
}

@media (max-width: 768px){
  .wrap-form{
    overflow: hidden;
  }
.lateral-panel.active{
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 100%;
  max-height: 100%;
}
.lateral-panel{
  display: none;
}
.main-screen{
  display: none;
}
.main{
}
.main-screen.active{
  width: 100%;
  height: 80%;
 display: block;
 margin: 15px;
}
}
@media (max-width: 400px){
  .lateral-panel.active{
    max-height: 458px;
  }
}
</style>
