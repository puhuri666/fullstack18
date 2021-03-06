import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const newAnecdote = async (content) => {
  const response = await axios.post(url, { content, votes: 0 })
  return response.data
}

const updateAnecdote = async (id, updatedAnecdote) => {
  const response = await axios.put(`${url}/${id}`, updatedAnecdote)
  return response.data
}

export default {
  getAll,
  newAnecdote,
  updateAnecdote
}