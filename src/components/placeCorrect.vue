<template>
    <div class="body-main-screen " > 
        <div class="title">{{todoTitleFromId}}</div>  
        <div class="wrap-place-content"> 
            <textarea rows="10" cols="45" name="text" placeholder="Пока тут ничего нет..."
                    v-model="todoContentFromId" 
                    @input="changeTextarea">{{ todoContentFromId }}
                    </textarea> 
                   <button type="submit" v-on:click='ClickBtn'>Save</button>
        </div> 
    </div>
</template>
<script>
export default {
    props:{
        todoContentFromId: [String, Number],
        todoList:Array,
        todoTitleFromId: String,

    },
    methods:{
        changeTextarea(){
            this.$emit('changesContent', this.todoContentFromId)
        },
        ClickBtn(){
            const bodyScreen = document.querySelector('.main-screen')
            const panel = document.querySelector('.lateral-panel')
            panel.classList.toggle('active')
            bodyScreen.classList.toggle('active')
            localStorage.removeItem('app.todored.todoList')
            localStorage.setItem('app.todored.todoList',JSON.stringify(todoList))
        }
    }
}
</script>
<style scoped>
.title{
    color: white;
    font-size: 28px;
    margin: 0 0 15px 15px;
    text-transform: uppercase;
}
.body-main-screen{
    
    width: 100%;
    height: 100%;
    margin: 0 auto;
}
.wrap-place-content{
    border-radius: 10px;
    width: 100%;
    height: 100%;
    background: white;
    align-items: center;
}
textarea{
    color: white;
    font-size: 16px;
    background:rgba(0, 0, 0, 0.9);
    border:#5092E3 1px solid;
    outline: none;
    padding: 50px;
    width: 100%;
    height: 100%;
    resize: none;
}

.place-content{
    width: 100%;
    height: 100%;
    padding: 50px;
}
button{
    color: #5092E3;
    font-size: 16px;
    margin: 15px 0;
    border: #5092E3 2px solid;
    background: transparent;
    width: 100%;
    height: 40px;
    transition: 1s all;
}
button:hover{
    color: white;
    background: #5092E3;
}
</style>