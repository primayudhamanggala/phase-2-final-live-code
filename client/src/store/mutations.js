import * as types from './mutation-types'


export const mutations = {
  //author mutations
  [types.ADD_AUTHOR] (state, payload) {
    state.authors.push(payload)
  },

  [types.GET_AUTHORS] (state, payload) {
    state.authors = payload
  },

  [types.UPDATE_AUTHOR] (state, payload) {
    state.authors = state.authors.map(author =>
      author._id === payload._id ? payload : author
    )
  },

  [types.REMOVE_AUTHOR] (state, payload) {
    state.authors = state.authors.filter(author =>
      author._id != payload._id
    )
  },

  //article mutations
  [types.ADD_ARTICLE] (state, payload) {
    state.articles.push(payload)
  },

  [types.GET_ARTICLES] (state, payload) {
    state.articles = payload
  },

  [types.UPDATE_ARTICLE] (state, payload) {
    state.articles = state.articles.map(article =>
      article._id === payload._id ? payload : article
    )
  },

  [types.REMOVE_ARTICLE] (state, payload) {
    state.articles = state.articles.filter(article =>
      article._id != payload._id
    )
  }
}
