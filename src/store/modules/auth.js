
const state = {
  profile: {},
  id_token: '',
  auth2: null
};

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
};

const mutations = {
  updateProfile (state, {payload}) {
    state.profile.name = payload.name
    state.profile.email = payload.email
    state.profile.image = payload.image
    state.profile.user_id = payload.user_id
  },
  setToken (state, {payload}) {
    state.id_token = payload
  },
  auth2Object (state, {auth2}) {
    state.auth2 = auth2
  }
};

const actions = {
  updateProfile ({ commit }, payload) {
    commit('updateProfile', payload)
  },
  setToken ({ commit }, payload) {
    commit('setToken', payload)
  },
  createAuth2 ({ commit }, payload) {
    commit('auth2Object', payload)
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
