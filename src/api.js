const api = {
  async getAnecdotes(pageSize = 10, afterDate = Date.now()) {
    await new Promise(resolve => setInterval(resolve, 1000))
    const result = []
    for (let i = 0; i < pageSize; i++) {
      result.push({
        id: Math.floor(Math.random() * 10000 + 10000),
        author: 'admin',
        createdAt: afterDate - Math.floor(Math.random()*3600000 + 10000000),
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Zenonis est, inquam, hoc Stoici. Sed quae tandem ista ratio est? Minime vero, inquit ille, consentit. Sed ad haec, nisi molestum est, habeo quae velim. Duo Reges: constructio interrete. Quis istud possit, inquit, negare?'
      })
    }
    return result
  }
}

export default api