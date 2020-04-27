<template>
  <div class='news'>
    <article-item
      class='article-item'
      v-for='(article, index) in articles'
      :key='index'
      :article='article'
    ></article-item>
  </div>
</template>

<script>
import { getArticles } from '../api/index'
import ArticleItem from '../components/ArticleItem'

export default {
  components: {
    ArticleItem
  },
  data() {
    return {
      articles: []
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      getArticles(0).then(res => {
        this.articles = res.data.lists
      })
    }
  }
}
</script>

<style lang="less">
.news {
  .article-item {
    width: 60%;
    margin: 0 auto;
  }
}
</style>