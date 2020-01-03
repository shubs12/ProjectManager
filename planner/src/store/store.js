import Vue from 'vue'
import Vuex from 'vuex'
import projects from './modules/projects'
import signups from './modules/signups'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    projects,
    signups
  }
})
