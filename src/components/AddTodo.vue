<template>
    <div class="wrap-form">
        <form @submit.prevent="onSubmit">
            <div class="title">New Todo:</div> 
            <input type="text" v-model="title">
            <button type="submit">Create</button>
        </form>  
    </div>
</template>
<script>
export default {
    data(){
       return{
           title:'',
       } 
    },
    methods:{
        onSubmit(){
            const nowDate = new Date()
            const today = nowDate.getDate() + '.' + nowDate.getMonth() + '.' + nowDate.getFullYear()
            if(this.title.trim()){
                const newTodo = {
                    id:Date.now(),
                    title: this.title,
                    date:today,
                    content:''
                }
            this.$emit('add-todo',newTodo) 
            }
            this.title = ''
        }
    }
}
</script>
<style scoped>

button{
    cursor: pointer;
}
.wrap-form{
    margin: 15px ;
    position: relative;
}
form{
    position: relative;
    width: 100%;
    padding: 10px 15px;
}
input{
    outline: none;
    height: 40px;
    color: white;
    background-color: transparent;
    border: #5092E3 2px solid;
    width: 100%;
    border-radius: 10px;
}
button{
    color: #5092E3;
    text-transform: uppercase;
    width: 200px;
    padding: 10px 5px;
    margin: 15px 0 15px 50%;
    transform: translate(-50%);
    background: transparent;
    border: #5092E3 2px solid;
    border-radius: 10px;
    transition: 1s all;
}
button:hover{
    background: #5092E3;
    color: white;
}
.title{
    color: #5092E3;
    font-size: 28px;
    padding: 10px;
}
</style>