import axios from 'axios'
import store from './store'
import {
  setCredentials
} from './actions'

const baseUrl = `http://localhost:2999/`

const authWrapping = async (method, url, data) => {
  const token = store.getState().auth.accessToken
  try {
    console.log(`try request to ${url} with token ${token}`)
    let result = await axios[method](url, data, {
      headers: {
        'Token': token
      }
    })
    return result
  } catch(e) {
    const credentials = store.getState().auth
    console.log('old credentials: ', credentials)
    if (e.response.data.message==='TokenExpired') {
      const newData = (await axios.post(`${baseUrl}refresh`, credentials)).data
      console.log('new data: ', newData)
      const newCredentials = {
        tokenId: credentials.tokenId,
        accessToken: newData.accessToken,
        refreshToken: newData.refreshToken
      }
      store.dispatch(setCredentials(newCredentials))
      localStorage.setItem('credentials', JSON.stringify(newCredentials))
      return axios[method](url, data, { headers:{token:newData.accessToken}})
    } else {
      throw e
    }
  }
}

const api = {
  async getAnecdotes(pageSize = 10, afterDate = Date.now()) {
    console.log(`pagesize: ${pageSize}, afterDate: ${afterDate}`)
    return (
      await axios.get(
        `${baseUrl}anecdotes?size=${pageSize}&before=${afterDate}`
      )
    ).data
  },

  async getAnecotesCount() {
    return (await axios.get(`${baseUrl}anecdotes/count`)).data
  },

  async createAnecdote(data) {
    const token = store.getState().auth.accessToken
    if (!token) {
      throw new Error('Authorization is needed')
    }
    return (await authWrapping('post', `${baseUrl}anecdotes/create`, data)).data
  },

  async createToken(data) {
    return (await axios.post(`${baseUrl}signin`, data)).data
  },

  async register(data) {
    return (await axios.post(`${baseUrl}signup`, data)).data
  }
}

export default api