import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import { mutations } from './mutations'
import plugin from './plugin'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      'ahihi',
      'ahaha',
      'ohoho'
    ]
  },
  mutations,
  actions,
  plugin
})
