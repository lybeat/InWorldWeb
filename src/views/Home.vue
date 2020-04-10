<template>
  <div class='home'>
    <banner :image='bannerImage'></banner>
    <el-menu class='menu' :default-active='activeName' mode='horizontal' @select='switchMenu'>
      <el-menu-item index='/news'>资讯</el-menu-item>
      <el-menu-item index='/about'>关于</el-menu-item>
    </el-menu>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Banner from '../components/Banner'

export default {
  name: 'Home',
  data() {
    return {
      activeName: '/news',
      bannerImage:
        'http://i0.hdslb.com/bfs/archive/ed92db305ae43c7fc8a59b1789934caa2636b876.png'
    }
  },
  activated() {
    this.$router.push({ path: this.activeName })
  },
  components: {
    Banner
  },
  methods: {
    switchMenu(active) {
      if (active != this.activeName) {
        this.activeName = active
        this.$router.push({ path: this.activeName })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  .menu {
    width: 80%;
    margin: 0 auto;
  }
}
</style>
