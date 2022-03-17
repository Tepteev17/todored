<template> 
        <li class="list-item" >
          <div class="flex-width" v-on:click="$emit('todoEvent', todo.id)" @click="toggleActive">
              <div class="title">{{todo.title}}</div>
              <div class="date">{{todo.date}}</div>
            </div>
            <div class="remove" v-on:click="$emit('remove-todo',todo.id, todo.title)">
            <div class="outer">
                <div class="inner">
                  <label>Delete</label>
                </div>
            </div>
            </div>
        </li>
</template>

<script>
export default {
    props: {
          todo:Object
    },
    components:{

    },
    methods:{
      toggleActive(event){
        const bodyScreen = document.querySelector('.main-screen')
        const panel = document.querySelector('.lateral-panel')
        console.log(panel);
        panel.classList.toggle('active')
        bodyScreen.classList.toggle('active')
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-item{
    text-align: center;
    position: relative;
    color: white;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    border: 1px #5092E3 solid;
    margin: 5px 0px;
    padding: 5px 10px;
    align-items: center;
    z-index: 14;
    transition: .5s all;
    width: 100%;
    z-index: 10;
}
.list-item .active{
  background: #5092E3;
}
.flex-width{
  align-items: center;
  height: 40px;
  width: 80%;
  display: flex;
  
}
.title{
  width: 30%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.list-item:hover{
    width: 100%;
    background: #5092E3;
    margin: 10px 30px;
}
.remove{
    width: 45px;
    z-index: 1;
}
.date{
  width: 70%;
  font-size: 14px;
}
.outer{
  position: relative;
  width: 45px;
  cursor: pointer;
}

.inner {
    align-items: center;
  width: inherit;
  text-align: center;
}

label { 
  font-size: 10px; 
  line-height: 4em;
  text-transform: uppercase;
  color: #fff;
  transition: all .3s ease-in;
  opacity: 0;
  cursor: pointer;
}

.inner:before, .inner:after {
  position: absolute;
  content: '';
  height: 1px;
  width: 30px;
  background: #ffffff;
  left: 0;
  transition: all .3s ease-in;
}

.inner:before {
  top: 50%; 
  transform: rotate(45deg);  
}

.inner:after {  
  bottom: 50%;
  transform: rotate(-45deg);  
}

.outer:hover label {
  opacity: 1;
}

.outer:hover .inner:before,
.outer:hover .inner:after {
  transform: rotate(0);
}

.outer:hover .inner:before {
  top: 25%;
}

.outer:hover .inner:after {
  bottom: 25%;
}
@media (max-width: 720px){

}
</style>
