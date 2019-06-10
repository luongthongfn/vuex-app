export const mutations = {
  addTodoMutation (state, text) {
    state.todos.push(text)
  },
  delTodoMutation (state, index) {
    state.todos.splice(index, 1)
  },
  editTodoMuttation (state, obj) {
    state.todos.splice(obj.index, 1, obj.todo)
  }
}
