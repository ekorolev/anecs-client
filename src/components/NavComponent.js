import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    let link

    if (this.props.location.pathname==='/') {
      link = <Link to="/about">О проекте</Link>
    } else {
      link = <Link to="/">Лента</Link>
    }

    return (
      <ul className="nav justify-content-center">
        <li className="nav-item px-2">
          {link}
        </li>
      </ul>
    )
  }
}

export default withRouter(props => <Nav {...props}/>)