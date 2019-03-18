import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import AnecdoteItem from './AnecdoteItem'
import LoadingSpinner from './LoadingSpinner'
import api from '../api'

class AnecdoteList extends React.Component {
  constructor() {
    super()

    this.loadMore = this.loadMore.bind(this)
  }
  async loadMore() {
    const aneks = await api.getAnecdotes()
    console.log('yes')
    try {
      this.props.addAnecdotes(aneks)
    } catch(e) {
      console.log('22')
      console.log(e)
    }
  }

  render() {
    const list = this.props.anecdotes.map(anec => (
      <li key={anec.id} className="p-2 m-2">
        <AnecdoteItem data={anec} />
      </li>
    ))
    return (
      <InfiniteScroll
        hasMore={true}
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