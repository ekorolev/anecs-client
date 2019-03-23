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
              <small>{this.props.data.author}</small>
            </div>
            <div className="col-sm text-right">
              <small><Moment 
                format="HH:MM DD.MM.Y"
                date={this.props.data.publishedAt} /></small>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default AnecdoteItem