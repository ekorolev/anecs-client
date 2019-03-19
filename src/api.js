import axios from 'axios'

const baseUrl = `/`

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
    return (await axios.post(`${baseUrl}anecdotes/create`, data)).data
  }
}

export default api