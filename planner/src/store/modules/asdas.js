// Tasks module
import axios from 'axios'

const resourceUri = 'http://localhost:8080/task/'

const state = {
  projects: [
    {title: 'vue', content: 'Vue tutorial'},
    {title: 'React', content: 'React tutorial'},
    {title: 'Angular', content: 'Angular tutorial'}
  ]
}

const getters = {
  allProjects: state => state.projects
}

const actions = {
  async fetchProjects ({ commit }) {
    const response = await axios.get(resourceUri)
    commit('setProjects', response.data)
  },
  async addProjects ({ commit }, project) {
    const response = await axios.post(resourceUri, project)
    commit('newProject', response.data)
  },
  async removeProject ({ commit }, project) {
    await axios.delete(`${resourceUri}${project.id}`)
    commit('deleteProject', project)
  }
}

const mutations = {
  setProjects (state, projects) {
    state.projects = projects
  },
  newProject (state, project) {
    state.projects.unshift(project)
  },
  deleteProject (state, project) {
    state.projects = state.projects.filter(p => project.id !== p.id)
  }
}

export default {
  state, getters, actions, mutations
}
