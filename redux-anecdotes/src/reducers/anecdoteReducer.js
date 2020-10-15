import anecdoteService from './services/anecdotes'

export const changeVote = (id) => {
  return {
    type: 'VOTE',
    data: {
      id: id
    }
  }
}

export const addAnecdote = (newAnecdote) => {
  return {
    type: 'NEW',
    data: {
      newAnecdote: newAnecdote
    }
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
      const id = action.data.id
      const previousStateOfAnecdote = state.find( anecdote => anecdote.id === id)
      const updatedAnecdote = {...previousStateOfAnecdote, votes: previousStateOfAnecdote.votes + 1}
      return sortAncdotes(state.map(anecdote => anecdote.id !== id ? anecdote : updatedAnecdote))
    }
    case 'NEW': {
      return state.concat(action.data.newAnecdote)
    }
    case 'INIT':
      return action.data.initialAnecdotes
    default:
       return state
  }
}

export default anecdoteReducer