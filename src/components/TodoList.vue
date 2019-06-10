<template>
  <fieldset>
    <legend>todolist</legend>
    <ul>
      <todo-list-text v-for="(todo, i) in todos" :todo="todo" :key="i" :index="i" />
    </ul>
  </fieldset>
</template>
<script>
  import TodoListText from '@/components/TodoListText'
  export default {
    name: 'TodoList',
    data () {
      return {
        todos: this.$store.state.todos
      }
    },
    components: {
      TodoListText
    }
  }

</script>
