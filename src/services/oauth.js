import { post } from 'axios'

// Nuestros datos de cliente para OAuth: id y secret
const clientId = process.env.VUE_APP_CLIENTE_ID
const clientSecret = process.env.VUE_APP_CLIENTE_SECRET

const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

function getToken () {
  // Creamos un objeto de tipo 'FormData': clave/valor
  const body = new FormData()
  body.append('grant_type', 'client_credentials')
  // Insertamos parámetros de configuración
  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    auth: { username: clientId, password: clientSecret }
  }
  return post(API_URL, body, config)
}

export { getToken }
