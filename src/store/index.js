import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginInfo : {
      username: '',
      password: '',
      role: '',
    },
    nurseData: {},
    patientData: {},
    orderData: {}
  },
  getters: {
  },
  mutations: {
    login(state, loginInfo) {
      state.loginInfo = loginInfo
    }
  },
  actions: {
  },
  modules: {
  }
})
