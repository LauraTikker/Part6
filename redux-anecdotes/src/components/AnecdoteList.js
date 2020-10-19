import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdoteFilter = useSelector(state => state.filter).toLocaleLowerCase()
    const anecdotes = useSelector(state => state.anecdotes).filter(anecdote => anecdote.content.toLocaleLowerCase().includes(anecdoteFilter))
    
    const dispatch = useDispatch()

    const vote = (id) => {
      dispatch(changeVote(id))
    }

    const showNotification = (content) => {
      dispatch(setNotification(`you voted for'${content}'`, 5))
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
                vote(anecdote)
                showNotification(anecdote.content)
              }
            }>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList