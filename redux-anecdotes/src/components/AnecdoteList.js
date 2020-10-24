import React from 'react'
import { connect } from 'react-redux'
import { changeVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

    const vote = (id) => {
      props.changeVote(id)
    }

    const showNotification = (content) => {
      props.timeOutIds.forEach(timeOutId => clearTimeout(timeOutId))
      props.setNotification(`you voted for '${content}'`, 5)
    }

  return (
    <div >
      {props.anecdotes.map(anecdote =>
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


const mapStateToProps = (state) => {

  const timeOutIds = state.notification.timeOutIds
  const anecdoteFilter = state.filter.toLocaleLowerCase()
  const filteredAnecdotes = state.anecdotes.filter(anecdote => anecdote.content.toLocaleLowerCase().includes(anecdoteFilter))

  return {
    anecdotes: filteredAnecdotes,
    timeOutIds: timeOutIds
  }
}

const mapDispatchToProps = {
  changeVote,
  setNotification
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnecdoteList