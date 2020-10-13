import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { showNewAnecdoteNotice } from '../reducers/notificationReducer'
import { setNotificationTime } from '../reducers/notificationTimeReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addNewAnecdote = (event) => {
        event.preventDefault()
        const newAnecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(addAnecdote(newAnecdote))
        newAnecdoteNotice(newAnecdote)
    }

    const newAnecdoteNotice = (anecdote)  =>  {
      dispatch(showNewAnecdoteNotice(anecdote))
      dispatch(setNotificationTime())
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