<template>
    <div class="main-list">
        <ul class="list">
          <toDoItem
            v-for="todo in todoList"
            v-bind:todo="todo"
            v-on:remove-todo="removeTodo"
            v-on:todoEvent="todoEvent"
          />
        </ul>
    </div>
</template>

<script>
import toDoItem from "@/components/toDoItem"
export default {
  props: {
    todoList:Array
  },
  components: {
    toDoItem
  },
  methods:{
    removeTodo(id,title){
      this.$emit('remove-todo',id, title)
    },
    todoEvent(id){
      this.$emit('todoEvent', id)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
