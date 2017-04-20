import Vue from 'vue'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(ElementUI)


new Vue ({
  el: '#app',
  store,
  render: h => h(App)
})
