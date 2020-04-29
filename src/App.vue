<template>
  <div id='in-world'>
    <!-- <banner :image='bannerImage'></banner> -->
    <div class='top-bar'>
      <navigation class='navigation'></navigation>
      <search-bar class='search-bar'></search-bar>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <o-footer></o-footer>
  </div>
</template>

<script>
import Banner from './components/Banner'
import Navigation from './components/Navigation'
import SearchBar from './components/SearchBar'
import OFooter from './components/Footer'

export default {
  name: 'in-world',
  data() {
    return {
      bannerImage:
        'http://i0.hdslb.com/bfs/archive/ed92db305ae43c7fc8a59b1789934caa2636b876.png'
    }
  },
  components: {
    Banner,
    Navigation,
    SearchBar,
    OFooter
  }
}
</script>

<style lang='less' scoped>
#in-world {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  margin: 0 auto;
  overflow-x: hidden;

  .top-bar {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 80px;
    background-color: #fff;
    z-index: 100;
    box-shadow: 0px 5px 40px 0px rgba(17, 58, 93, 0.18) !important;

    .navigation {
      margin: 0 0 0 300px;
    }

    .search-bar {
      position: absolute;
      margin: 0 400px 0 0;
      right: 0;
    }
  }

  .bottom-space {
    width: 100%;
    height: 100px;
  }
}
</style>
