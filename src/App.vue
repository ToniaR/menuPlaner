<template>
  <div id="app">
    <c-nav></c-nav>
    <router-view></router-view>
  </div>
</template>
 
<script>
import Nav from './components/Nav.vue'

export default {
  components: {
      'c-nav': Nav
  }
}
</script>
<style scoped>

</style>