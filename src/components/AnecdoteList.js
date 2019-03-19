import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import AnecdoteItem from './AnecdoteItem'
import LoadingSpinner from './LoadingSpinner'
import api from '../api'

class AnecdoteList extends React.Component {
  constructor() {
    super()

    this.state = {
      hasMore: true
    }
    this.loadMore = this.loadMore.bind(this)
  }
  async loadMore() {
    let afterDate
    if (this.props.anecdotes.length) {
      afterDate = this.props.anecdotes[this.props.anecdotes.length - 1].createdAt
    }
    const response = await api.getAnecdotes(undefined, afterDate)
    this.props.addAnecdotes(response.anecdotes)
    this.state.hasMore = response.anecdotes.length !== response.count
  }

  render() {
    const list = this.props.anecdotes.map(anec => (
      <li key={anec._id} className="p-2 m-2">
        <AnecdoteItem data={anec} />
      </li>
    ))
    return (
      <InfiniteScroll
        hasMore={this.state.hasMore}
        loader={<LoadingSpinner key={0}/>}
        loadMore={this.loadMore}>
        <ul className="list-unstyled">
          {list}
        </ul>
      </InfiniteScroll>
    )
  }
}

export default AnecdoteList