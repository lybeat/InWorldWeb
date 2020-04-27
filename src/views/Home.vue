<template>
  <div class='home'>
    <banner :image='bannerImage'></banner>
    <tabs class="tabs"></tabs>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class='bottom-space'></div>
  </div>
</template>

<script>
import Banner from '../components/Banner'
import Tabs from '../components/Tabs'

export default {
  name: 'Home',
  data() {
    return {
      bannerImage:
        'http://i0.hdslb.com/bfs/archive/ed92db305ae43c7fc8a59b1789934caa2636b876.png'
    }
  },
  activated() {},
  components: {
    Banner,
    Tabs
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.home {
  .tabs {
    margin-top: 20px;
  }
  .bottom-space {
    width: 100%;
    height: 100px;
  }
}
</style>
