<template>
  <li v-if="!toggleEdit">
    {{todo}} <button class="handle" @click="del">-</button><button class="handle" @click="toggle">edit</button>
  </li>
  <li v-else>
    <input type="text" :value="todo" ref="text"> <button class="handle" @click="del">-</button><button class="handle"
      @click="edit">save</button>
  </li>
</template>
<script>
  import {
    mapActions
  } from 'vuex'
  export default {
    name: 'TodoListText',
    props: ['todo', 'index'],
    data() {
      return {
        toggleEdit: false
      }
    },
    methods: {
      ...mapActions(['DEL_TODO', 'EDIT_TODO']),
      del() {
        this.$store.dispatch('DEL_TODO', this.index)
      },
      toggle() {
        this.toggleEdit = !this.toggleEdit
      },
      edit(index, text) {
        this.$store.dispatch('EDIT_TODO', {
          index: this.index,
          todo: this.$refs.text.value
        })
        this.toggleEdit = !this.toggleEdit
      }
    }
  }

</script>
<style lang="scss" scoped>
  li {
    clear: both;
  }

  .handle {
    float: right;
  }

</style>
