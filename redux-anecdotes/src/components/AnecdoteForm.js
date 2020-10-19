import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addNewAnecdote = async (event) => {
        event.preventDefault()
        const newAnecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
        
        dispatch(addAnecdote(newAnecdote))
        showNotification(newAnecdote)
    }

    const showNotification = (content) => {
      dispatch(setNotification(`You added '${content}'`, 5))
    }

  return (
    <div >
      <h2>create new</h2>
      <form onSubmit={addNewAnecdote}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm