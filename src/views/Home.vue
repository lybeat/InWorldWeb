<template>
  <div class='home'>
    <el-menu :default-active='activeName' mode='horizontal' @select="switchMenu">
      <el-menu-item index='/news'>资讯</el-menu-item>
      <el-menu-item index="/about">关于</el-menu-item>
    </el-menu>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      activeName: 'news'
    }
  },
  activated() {
    this.$router.push({ path: this.activeName })
  },
  components: {},
  methods: {
    switchMenu(active) {
      this.activeName = active
      this.$router.push({ path: this.activeName })
    }
  }
}
</script>
