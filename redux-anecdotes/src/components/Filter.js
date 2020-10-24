import React from 'react'
import { connect } from 'react-redux'
import { filterAnecdotes } from '../reducers/anecdoteFilterReducer'

const Filter = (props) => {

  const handleChange = (event) => {
    event.preventDefault()
    const filter = event.target.value
    props.filterAnecdotes(filter)

  }

  return (
    <div className='filter'>
      Filter anecdotes <input onChange={handleChange} />
    </div>
  )
}


const mapDispatchToProps = {
  filterAnecdotes
}

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter)
export default ConnectedFilter