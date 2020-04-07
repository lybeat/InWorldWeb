<template>
  <div class="news">
    <h1>新闻资讯</h1>
  </div>
</template>

<script>
import api from '../api/index'

export default {
  data() {
    return
  },
  mounted() {
    this.getArticleList()
  },
  components: {

  },
  methods: {
    getArticleList() {
      api.getArticleList()
    }
  }
}
</script>

<style lang="scss">

</style>