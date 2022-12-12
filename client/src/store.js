import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const store = new Vuex.Store({
  state: {
    username: '',
    token: '',
    member: false,
  },
  actions: {
    login(context, token) {
      context.commit('login', token)
    },
    logout(context){
      context.commit('logout')
    }
  },
  mutations: {
    login(state, payload){
      state.username = payload[0]
      state.member = payload[1]
      state.token = payload[2]
    },
    logout(state){
      state.token = ''
      state.username = ''
      state.member = ''
    }
  },
  getters: {
    getToken: (state) => {
      return state.token
    },
    getUsername: (state) => {
      return state.username
    },
    getMember: (state) => {
      return state.member
    }
  },
  plugins: [vuexLocal.plugin]
})
export default store;