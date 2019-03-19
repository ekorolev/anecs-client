import React from 'react'
import api from '../api'

class AboutPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="my-2">
          <p>Всего в базе данных на текущий момент анекдотов: {this.props.anecdotes_count}</p>
          <p>Разработка того глядишь не секретная, скрывать нечего, так что все исходные коды лежат здесь: <a href="https://github.com/ekorolev/anecs-client" target="blank">github.com/ekorolev/anecs-client</a> и здесь <a href="https://github.com/ekorolev/anecs-server" target="blank">github.com/ekorolev/anecs-server</a></p>
        </div>
      </div>
    )
  }

  async componentDidMount() {
    this.props.setAnecdotesCount(await api.getAnecotesCount())
  }
}

export default AboutPage