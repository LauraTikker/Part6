import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { showNewAnecdoteNotice } from '../reducers/notificationReducer'
import { setNotificationTime } from '../reducers/notificationTimeReducer'
import anecdoteService from '../services/anecdotes'


const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addNewAnecdote = async (event) => {
        event.preventDefault()
        const newAnecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
        const createdAnecdote = await anecdoteService.createNewAnecdote(newAnecdote)
        dispatch(addAnecdote(createdAnecdote))
        newAnecdoteNotice(createdAnecdote)
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