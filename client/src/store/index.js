import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  authors: [],
  articles: []
}


export default Vuex.Store({
  state
})
