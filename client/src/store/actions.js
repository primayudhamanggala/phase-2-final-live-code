import * as types from './mutation-types'

//author actions
export const ADD_AUTHOR = ({commit}, authorData) => {
  axios.post(`http://localhost:3000/authors`, authorData)
  .then((res) => {
    commit(types.ADD_AUTHOR, res.data)
  })
  .catch((err) => {
    alert(err.message)
  })
}

export const GET_AUTHORS = ({commit}) => {
  axios.get(`http://localhost:3000/authors`)
  .then((res) => {
    commit(types.GET_AUTHORS, res.data)
  })
  .catch((err) => {
    alert(err.message)
  })
}

export const UPDATE_AUTHOR = ({commit}, authorData) => {
  axios.post(`http://localhost:3000/authors/${authorData._id}`, authorData)
  .then((res) => {
    commit(types.UPDATE_AUTHOR, res.data)
  })
  .catch((err) => {
    alert(err.message)
  })
}

export const REMOVE_AUTHOR = ({commit}, authorId) => {
  axios.post(`http://localhost:3000/authors/${authorId}`)
  .then((res) => {
    commit(types.REMOVE_AUTHOR, res.data)
  })
  .catch((err) => {
    alert(err.message)
  })
}

//article actions
export const ADD_ARTICLE = ({commit}, articleData) => {
  axios.post(`http://localhost:3000/articles`, articleData)
  .then((res) => {
    commit(types.ADD_ARTICLE, res.data)
  })
  .catch((err) => {
    alert(err.message)
  })
}

export const GET_ARTICLES = ({commit}) => {
  axios.get(`http://localhost:3000/articles`)
  .then((res) => {
    commit(types.GET_ARTICLES, res.data)
  })
  .catch((err) => {
    alert(err.message)
  })
}

export const UPDATE_ARTICLE = ({commit}, articleData) => {
  axios.post(`http://localhost:3000/articles/${articleData._id}`, articleData)
  .then((res) => {
    commit(types.UPDATE_ARTICLE, res.data)
  })
  .catch((err) => {
    alert(err.message)
  })
}

export const REMOVE_ARTICLE = ({commit}, articleId) => {
  axios.post(`http://localhost:3000/articles/${articleId}`)
  .then((res) => {
    commit(types.REMOVE_ARTICLE, res.data)
  })
  .catch((err) => {
    alert(err.message)
  })
}
