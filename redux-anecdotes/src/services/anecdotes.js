import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export const createNewAnecdote = async (newAnecdote) => {
    const toBeAddedAnecdote = {
        content: newAnecdote,
        votes: 0
    }
    const response = await axios.post(baseUrl, toBeAddedAnecdote)
    return response.data
}

export const changeAnecdote = async (newAnecdote) => {
    const toBeAddedAnecdote = {
        content: newAnecdote.content,
        votes: newAnecdote.votes + 1,
        id: newAnecdote.id
    }

    const url = baseUrl + '/' + toBeAddedAnecdote.id

    const response = await axios.put(url, toBeAddedAnecdote)
    console.log(response)
    return response.data
}

export default  { getAll, createNewAnecdote, changeAnecdote } 