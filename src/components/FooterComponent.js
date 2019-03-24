import React from 'react'
import Counter from './LICounter'

class Footer extends React.Component {
  render() {
    return (
      <footer className="container">
        <p className="text-muted">
          <Counter /> <small>Разработано <b>aksyline</b></small>
        </p>
      </footer>
    )
  }
}

export default Footer