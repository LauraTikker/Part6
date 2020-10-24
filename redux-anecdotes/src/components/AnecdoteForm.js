import React from 'react'
import { connect } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteForm = (props) => {

    const addNewAnecdote = async (event) => {
        event.preventDefault()
        const newAnecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
        
        props.addAnecdote(newAnecdote)
        showNotification(newAnecdote)
    }

    const showNotification = (content) => {
      props.setNotification(`You added '${content}'`, 5)
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

const mapDispatchToProps = {
  addAnecdote,
  setNotification
}

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm