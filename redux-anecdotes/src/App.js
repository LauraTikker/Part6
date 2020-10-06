import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch({
      type: 'VOTE',
      data: {
        id: id
      }
    })
  }

  const addNewAnecdote = (event) => {
    event.preventDefault()
    const newAnecdote = event.target.anecdote.value
    dispatch({
      type: 'NEW',
      data: {
        newAnecdote: newAnecdote
        
      }
    })
  }


  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addNewAnecdote}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App