import * as types from './mutation-types'


export const mutations = {
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
    
  }
}
