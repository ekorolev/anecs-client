import React from 'react'
import api from '../api'

class CreatePage extends React.Component {
  constructor() {
    super()

    this.state = {
      author: 'admin',
      text: '',
    }

    this.onFieldChange = this.onFieldChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onFieldChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  async handleSubmit(event) {
    event.preventDefault()
    const response = await api.createAnecdote(this.state)
    this.props.addAnecdote(response.anecdote)
    this.props.history.push('/')
  }

  render() {
    return (
      <form>
        <p className="text-center" style={{ fontSize: '30px' }}>Create an anecdote</p>
        <div className="form-group">
          <label htmlFor="authorAnec">Author</label>
          <input 
            onChange={this.onFieldChange}
            value={this.state.author} 
            type="text"
            name="author"
            className="form-control" 
            id="authorAnec"/>
        </div>
        <div className="form-group">
          <label htmlFor="textAnec">Anecdote's text</label>
          <textarea 
            name="text"
            value={this.state.text}
            onChange={this.onFieldChange}
            className="form-control" 
            id="textAnec" 
            rows="4"/>
        </div>
        <div className="form-group">
          <button onClick={this.handleSubmit} className="btn btn-primary">Create</button>
        </div>
      </form>
    )
  }
}

export default CreatePage