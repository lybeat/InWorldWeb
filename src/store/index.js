import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    keyword: ''
  },
  mutations: {
    newKeyword(state, k) {
      state.keyword = k
    }
  },
  actions: {
  },
  modules: {
  }
})
