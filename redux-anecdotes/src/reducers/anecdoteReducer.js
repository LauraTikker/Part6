import anecdoteService from '../services/anecdotes'

export const changeVote = (anecdoteToBechanged) => {
  return async dispatch => {
    const changedAnecdote = await anecdoteService.changeAnecdote(anecdoteToBechanged)
    dispatch({
      type: 'VOTE',
      data: {
        changedAnecdote: changedAnecdote
      }
    })
  }
}

export const addAnecdote = (newAnecdote) => {
  return async dispatch => {
    const createdAnecdote = await anecdoteService.createNewAnecdote(newAnecdote)
    dispatch({
      type: 'NEW',
      data: {
        newAnecdote: createdAnecdote
      }
    })
  }
}

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT',
      data: anecdotes
    })
  }
}

const sortAncdotes = (anecdotes) => {
  return anecdotes.sort((a, b) => a.votes > b.votes ? -1 : a.votes < b.votes ? 1 : 0)
}

const anecdoteReducer = (state = [], action) => {
  switch (action.type)  {
    case 'VOTE': {
      const updatedAnecdote = action.data.changedAnecdote
      return sortAncdotes(state.map(anecdote => anecdote.id !== updatedAnecdote.id ? anecdote : updatedAnecdote))
    }
    case 'NEW': {
      return state.concat(action.data.newAnecdote)
    }
    case 'INIT':
      return sortAncdotes(action.data)
    default:
       return state
  }
}

export default anecdoteReducer