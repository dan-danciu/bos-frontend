
const state = {
  profile: {},
  id_token: '',
  auth2: null
}

const getters = {
  userProfile: state => {
    return state.profile
  },
  isAuthenticated: state => {
    return state.id_token != ''
  },
  idToken: state => {
    return state.id_token
  }
}

const mutations = {
  changeProfile (state, data) {
    state.profile.name = data.name
    state.profile.email = data.email
    state.profile.image = data.image
    state.profile.user_id = data.user_id
  },
  changeToken (state, token) {
    state.id_token = token
  },
  auth2Object (state, auth2) {
    state.auth2 = auth2
  }
}

const actions = {
  updateProfile ({ commit }, payload) {
    commit('changeProfile', payload)
  },
  setToken ({ commit }, payload) {
    commit('changeToken', payload)
  },
  createAuth2 ({ commit }, payload) {
    commit('auth2Object', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
