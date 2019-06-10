export default {
  ADD_TODO ({commit}, text) {
    commit('addTodoMutation', text)
  },
  DEL_TODO ({commit}, index) {
    commit('delTodoMutation', index)
  },
  EDIT_TODO ({commit}, obj) {
    commit('editTodoMuttation', obj)
  }
}
