import React from 'react'
import api from '../api'

const text = {
  ph1: `
    Это страница с авторской подборкой анекдотов. Эти анекдоты фигурировали в разговорах, 
    были услышаны в СМИ, прочитаны в разных открытых источниках в интернете или почерпнуты из 
    юмористических книг. По большому счёту, сайт носит скорее личный характер, отражая вкусы 
    разработчика. Однако я буду рад, если собранный здесь фольклор вам понравится.
  `
}

class AboutPage extends React.Component {
  constructor() {
    super()

    this.goToLoginPage = this.goToLoginPage.bind(this)
  }

  goToLoginPage(evt) {
    evt.preventDefault()
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="container">
        <div className="my-2">
          <p>{text.ph1}</p>
          <p>Количество опубликованных на данный момент анекдотов: <b>{this.props.anecdotes_count}</b></p>
        </div>
      </div>
    )
  }

  async componentDidMount() {
    if (!this.props.anecdotes_count && this.props.anecdotes_count !== 0) {
      this.props.setAnecdotesCount(await api.getAnecotesCount())
    }
  }
}

export default AboutPage