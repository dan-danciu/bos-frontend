import axios from 'axios'

const state = {
  profile: {},
  id_token: null,
  user_id: null,
  auth2: null
}

const getters = {
  userProfile: state => {
    return state.profile
  },
  isAuthenticated: state => {
    return state.id_token !== null
  },
  idToken: state => {
    return state.id_token
  },
  auth2: state => {
    return state.auth2
  },
  userId: state => {
    return state.user_id
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
  authenticate ({ commit }, token) {
    axios
      .get('/auth', {
        headers: {
          "Authorization": token
        }
      })
      .then(response => {
        commit('changeProfile', {
          name: response.data.name,
          email: response.data.email,
          image: response.data.image,
          user_id: response.data.user_id
        })
    })
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
