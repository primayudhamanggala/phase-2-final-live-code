<template>
  <div id="app">
    <HeadNav></HeadNav><br>
    <Articles></Articles>
  </div>
</template>

<script>
import HeadNav from './components/HeadNav.vue'
import Articles from './components/Articles.vue'

export default {
  components: {
    HeadNav,
    Articles
  }
}
</script>
