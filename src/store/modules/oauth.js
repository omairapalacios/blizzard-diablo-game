
import * as oauth from '@/services/oauth'

export default {
  namespaced: true,
  state: {
    accessToken: null
  },
  mutations: {
    SET_ACCESS_TOKEN (state, payload) {
      state.accessToken = payload
    }
  },
  actions: {
    getToken ({ commit }) {
      oauth
        .getToken()
        .then(({ data }) => {
          // Paso 2: Guardamos el valor del token llamando a nuestra mutación
          commit('SET_ACCESS_TOKEN', data.access_token)
        })
        .catch(err => {
          // Paso 3: En caso de error limpiamos el token
          commit('SET_ACCESS_TOKEN', null)
          console.log('Error OAuth: ', err)
        })
        .finally(() => {
          // Por ahora no hacemos nada más aquí
          console.log('Done!')
        })
    }
  }
}
