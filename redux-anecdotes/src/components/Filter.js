import React from 'react'
import { useDispatch } from 'react-redux'
import { filterAnecdotes } from '../reducers/anecdoteFilterReducer'

const Filter = () => {
    const dispatch = useDispatch()

  const handleChange = (event) => {
    event.preventDefault()
    const filter = event.target.value
    console.log(filter)
    dispatch(filterAnecdotes(filter))

  }

  return (
    <div className='filter'>
      Filter anecdotes <input onChange={handleChange} />
    </div>
  )
}

export default Filter