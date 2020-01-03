const state = {
  projects: [
    {title: 'vue', content: 'Vue tutorial', author: 'shubham'},
    {title: 'React', content: 'React tutorial', author: 'atharva'},
    {title: 'Angular', content: 'Angular tutorial', author: 'sriujan'}
  ],
  viewProject: []
}

const getters = {
  allProject: state => state.projects,
  viewPro: state => state.viewProject
}

const actions = {
  fetchProject ({commit}, projects) {
    commit('setProjects', projects)
  },
  addProject ({commit}, project) {
    commit('newProject', project)
  },
  fetchPro ({commit}, proj) {
    commit('setPro', proj)
  }
}

const mutations = {
  setProjects (state, projects) {
    state.projects = projects
  },
  newProject (state, project) {
    state.projects.push(project)
  },
  setPro (state, pro) {
    state.viewProject = state.projects.filter(p => pro.title === p.title)
  }
}

export default {
  state, getters, actions, mutations
}
