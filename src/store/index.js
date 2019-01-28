import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: '123456',
    openedTab: ['index'],
    activeTab: ''
  },
  mutations: {
    addTab (state, componentName) {
      state.openedTab.push(componentName)
    },
    changeTab (state, componentName) {
      state.activeTab = componentName
    },
    deductTab (state, componentName) {
      let index = state.openedTab.indexOf(componentName)
      state.openedTab.splice(index, 1)
    }
  }
})
