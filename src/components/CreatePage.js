import React from 'react'
import api from '../api'

class CreatePage extends React.Component {
  constructor() {
    super()

    this.state = {
      author: 'admin',
      text: '',
      secretCode: ''
    }

    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleCodeChange = this.handleCodeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleAuthorChange(event) {
    this.setState({ author: event.target.value })
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value })
  }

  handleCodeChange(event) {
    this.setState({ secretCode: event.target.value })
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
            onChange={this.handleAuthorChange}
            value={this.state.author} 
            type="text" 
            className="form-control" 
            id="authorAnec"/>
        </div>
        <div className="form-group">
          <label htmlFor="codeAnec">Secret code</label>
          <input 
            onChange={this.handleCodeChange}
            value={this.state.secretCode} 
            type="password" 
            className="form-control" 
            id="codeAnec"/>
        </div>
        <div className="form-group">
          <label htmlFor="textAnec">Anecdote's text</label>
          <textarea 
            value={this.state.text}
            onChange={this.handleTextChange}
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