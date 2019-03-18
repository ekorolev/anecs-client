import React from 'react'

class MainLayout extends React.Component {
  render() {
    return (
      <div className="flex-shrink-0">
        <div className="container">
          <div className="mt-5">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default MainLayout