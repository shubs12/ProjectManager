import router from '../../router'

const state = {
  signups: [
    {fname: 'shubham', lname: 'junghare', email: 'jungharesj7@gmail.com', password: 'rait@dyp'},
    {fname: 'aaa', lname: 'aaa', email: 'aaa', password: 'aaa'}
  ],
  currentUser: {},
  loggedIn: false
}

const getters = {
  allSignups: state => state.signups,
  user: state => state.currentUser,
  logIn: state => state.loggedIn
}

const actions = {
  fetchSignups ({commit}, signups) {
    commit('setSignups', signups)
  },
  addSignups ({commit}, signups) {
    commit('newSignup', signups)
  },
  login ({commit}, login) {
    commit('newLogin', login)
  },
  logout ({commit}) {
    commit('logot')
  }
}

const mutations = {
  setSignups (state, signups) {
    state.signups = signups
  },
  newSignup (state, signup) {
    state.signups.push(signup)
  },
  newLogin (state, login) {
    state.currentUser = state.signups.filter(p => login.email === p.email && login.password === p.password)
    if (state.currentUser.length === 0) {
      alert('User not Registered')
    } else {
      state.loggedIn = true
      router.push('./')
    }
  },
  logot (state) {
    state.loggedIn = false
    state.currentUser.pop()
  }
}

export default {
  state, getters, actions, mutations
}
