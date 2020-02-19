<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
*{
  margin 0
  padding 0
}
body {
  background-color #FBFBFB
}
ul{
  list-style none
}
a{
  text-decoration none 
  color #000
  cursor pointer
}
h2 {
  background-color #FFFFFF
}
</style>
