const apiRoot = 'http://apishinta.test'
const apiMap = {
  çd: '/dokumen/cd',
  kurs: '/kurs'
}

const axios = require('axios').default
const apiShinta = axios.create({
  baseURL: apiRoot,
  timeout: 30000,
  headers: {
    'Authorization': 'Bearer token_admin'
  }
})

export default {
  state: {
    name: 'SHINTA',
    data: {
      cd: null,
      is: null,
      spmb: null,
      penumpang: null,
      kurs: null
    }
  },
  mutations: {
    setData (state, payload) {
      // console.log(payload)
      switch (payload.type) {
        case 'cd':
        case 'is':
        case 'spmb':
        case 'kurs':
        case 'penumpang':
          console.log(payload.data)
          state.data[payload.doctype] = payload.data
          break
      }
    }
  },
  actions: {
    fetchData (ctx, payload) {
      // map api address?
      // handle pagination
      // var url = apiMap[payload.doctype];
      if (payload.pagination) {
        console.log('Pagination:')
        console.log(payload.pagination)
      }
      // build parameter
      var config = {
        params: {
          ...payload.params
        }
      }
      return apiShinta.get(apiMap[payload.doctype], config)
    }
  },
  getters: {
    getAppName: (state) => state.name,
    getKurs: (state) => state.kurs
  }
}
