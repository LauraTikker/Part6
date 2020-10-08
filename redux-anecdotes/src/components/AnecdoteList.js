import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeVote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'
import { hideNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()
  
    const vote = (id, content) => {
      dispatch(changeVote(id))
    }

    const notification = (content) => {
        dispatch(showNotification(content))
        setTimeout(() => {
          dispatch(hideNotification())
        }, 5000)
    }

  return (
    <div >
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={
              () => {
                vote(anecdote.id)
                notification(anecdote.content)
              }
            }>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList