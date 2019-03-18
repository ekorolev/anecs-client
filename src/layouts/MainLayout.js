import React from 'react'
import Footer from './../components/FooterComponent'

class MainLayout extends React.Component {
  render() {
    return (
      <div className="flex-shrink-0">
        <div className="container">
          <div className="mt-5">
            {this.props.children}
            <Footer/>
          </div>
        </div>
      </div>
    )
  }
}

export default MainLayout