
const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

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

const initialState = anecdotesAtStart.map(asObject)

const sortAncdotes = (anecdotes) => {
  return anecdotes.sort((a, b) => a.votes > b.votes ? -1 : a.votes < b.votes ? 1 : 0)
}

const anecdoteReducer = (state = initialState, action) => {
  switch (action.type)  {
    case 'VOTE': {
      const id = action.data.id
      const previousStateOfAnecdote = state.find( anecdote => anecdote.id === id)
      const updatedAnecdote = {...previousStateOfAnecdote, votes: previousStateOfAnecdote.votes + 1}
      // showNotification(previousStateOfAnecdote.content)
      return sortAncdotes(state.map(anecdote => anecdote.id !== id ? anecdote : updatedAnecdote))
    }
    case 'NEW': {
      const newAnecdote = {
        content: action.data.newAnecdote,
        id: getId(),
        votes: 0
      }
      return state.concat(newAnecdote)
    }
    default:
       return state
  }
}

export default anecdoteReducer