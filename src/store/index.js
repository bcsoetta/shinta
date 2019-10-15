import Vue from 'vue'
import Vuex from 'vuex'

import loginModule from './login'
import appModule from './app'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login: loginModule,
    app: appModule
  }
})
