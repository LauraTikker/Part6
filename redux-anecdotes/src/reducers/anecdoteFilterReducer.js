  
  export const filterAnecdotes = (filter) => {
    return {
      type: 'FILTER',
      data: {
        filter: filter
      }
    }
  }
  
  const anecdoteFilterReducer = (state = '', action) => {
    switch (action.type)  {
      case 'FILTER': {
        return action.data.filter
      }
      default:
         return state
    }
  }
  
  export default anecdoteFilterReducer