export default {
  state: {
    token: null,
    userData: null
  },
  mutations: {
    // set token data
    setTokenData (state, payload) {
      state.token = payload
    },
    // set user data
    setUserData (state, payload) {
      state.userData = payload
    }
  },
  actions: {
    // logout remove token and user data
    logout (context) {
      context.commit('setTokenData', null)
      context.commit('setUserData', null)

      // also call api here too
    },
    mockupLogin (context, tokenName) {
      // only several tokenName supported
      switch (tokenName) {
        case 'token_pdtt':
          context.commit('setTokenData', tokenName)
          context.commit('setUserData', {
            username: 'PDTT',
            role: ['PDTT']
          })
          break
        case 'token_admin':
          context.commit('setTokenData', tokenName)
          context.commit('setUserData', {
            username: 'ADMIN',
            role: ['PDTT', 'CONSOLE']
          })
          break
      }
    }
  },
  getters: {
    // grab token
    getTokenData (state) {
      return state.token
    },
    // grab user data
    getUserData (state) {
      return state.userData
    },
    // grab user name
    getUserName (state) {
      return state.userData ? state.userData.username : null
    },
    // check login state
    isLoggedIn (state) {
      return state.token !== null
    }
  }
}
