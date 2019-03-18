import React from 'react'
import Moment from 'react-moment'
import 'moment-timezone'

class AnecdoteItem extends React.Component {
  render() {
    return (
      <div className="card" style={{whiteSpace: 'pre-line'}}>
        <div className="card-body">
          {this.props.data.text}
        </div>
        <div className="card-footer text-muted">
          <div className="row">
            <div className="col-sm">
              {this.props.data.author}
            </div>
            <div className="col-sm text-right">
              <Moment 
                format="LLL"
                date={this.props.data.createdAt} />
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default AnecdoteItem