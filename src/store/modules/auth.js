import axios from 'axios'
import { router } from '../../router'

const state = {
  profile: {
    name: 'John Doe',
    email: 'john.doe@webapp.link',
    image: '',
    user_id: '12345'
  },
  id_token: null,
  auth2: null
}

const getters = {
  isAuthenticated: state => {
    return state.id_token !== null
  }
}

const mutations = {
  changeProfile (state, data) {
    state.profile = {
      ...state.profile,
      name: data.name,
      email: data.email,
      image: data.image,
      user_id: data.user_id
    }
  },
  changeToken (state, token) {
    state.id_token = token
  },
  auth2Object (state, auth2) {
    state.auth2 = auth2
  },
  clearAuth (state) {
    state.profile = {}
    state.id_token = null
    state.auth2 = null
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
        router.push({name: 'home'})
    })
  },
  signOut ({ commit, state }) {
    state.auth2.signOut().then(function () {
      commit('clearAuth')
      router.push({name: 'login'})
    });
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
