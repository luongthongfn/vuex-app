<template>
  <fieldset class="todo-app">
    <legend>todo</legend>
    <todo-form />
    <todo-list />
  </fieldset>
</template>
<script>
  import TodoForm from '@/Components/TodoForm'
  import TodoList from '@/Components/TodoList'

  export default {
    name: 'Todo',
    components: {
      TodoForm,
      TodoList
    }
  }
</script>
<style lang="scss" scoped>
  .todo-app {
    max-width: 300px;
    text-align: left;
    margin: auto;
  }
</style>
