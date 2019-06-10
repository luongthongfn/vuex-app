<template>
  <fieldset>
    <legend>todoform</legend>
    <input type="text" v-model="input">
    <button @click="add(input)">add</button>
  </fieldset>
</template>
<script>
  import {mapActions} from 'vuex'
  export default {
    name: 'TodoForm',
    data: () => {
      return {
        input: ''
      }
    },
    methods: {
      ...mapActions(['addTodo']),
      add (todo) {
        !!todo ? this.$store.dispatch('ADD_TODO', todo) : ''
        this.input = ''
      }
    }
  }
</script>
