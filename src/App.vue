<template>
  <div id="in-world">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'in-world',
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#in-world {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  width: 100%;
  overflow-x: hidden;
}
</style>
