import React from 'react'

class LoadingSpinner extends React.Component {
  render() {
    return (
      <div className="text-center">
        <div className="spinner-grow text-pripary">
          <span className="sr-only">Loading</span>
        </div>
      </div>
    )
  }
}

export default LoadingSpinner