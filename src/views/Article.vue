<template>
  <div class='article'>
    <h2 class='title'>{{ article.title }}</h2>
    <div class='info-box'>
      <p class='author'>{{ article.author }}</p>
      <p class='time'>{{ article.createdAt }}</p>
    </div>
    <p class='content'>{{ article.content }}</p>
  </div>
</template>

<script>
import { getArticleDetail } from '../api/index'

export default {
  name: 'article-detail',
  props: {
    id: {
      type: String,
      required: true,
      default: ''
    }
  },
  data() {
    return {
      article: {}
    }
  },
  mounted() {
    this.getArticle()
  },
  methods: {
    getArticle() {
      getArticleDetail(this.id).then(res => {
        this.article = res.data
      })
    }
  }
}
</script>

<style lang="less" scoped>
.article {
  width: 60%;
  margin: 0 auto;
  .title {
    margin-top: 50px;
    text-align: center;
  }
  .info-box {
    margin-top: 20px;
    text-align: center;
    .author {
      display: inline;
      font-size: 14px;
    }
    .time {
      display: inline;
      margin-left: 100px;
      font-size: 14px;
    }
  }
  .content {
    margin-top: 20px;
    text-indent: 2em;
    word-wrap: break-word;
    font-size:  15px;
    line-height: 24px;
  }
}
</style>
