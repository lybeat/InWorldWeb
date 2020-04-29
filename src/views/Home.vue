<template>
  <div class='home'>
    <div class='post-container'>
      <article-item :article='articles[0]'></article-item>
      <article-item></article-item>
      <article-item></article-item>
    </div>
    <div class='right-container'>
      <div class='hot-search-container'>
        <h3 class='category'>热门搜索</h3>
        <tags class='hot-search' :tags='tags'></tags>
      </div>
      <div class='hot-label-container'>
        <h3 class='category'>标签</h3>
        <tags class='hot-label' :tags='tags'></tags>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleItem from './article/ArticleItem'
import Tags from '../components/Tags'

export default {
  name: 'Home',
  data() {
    return {
      articles: [
        {
          id: 1
        }
      ],
      tags: [
        {
          name: '公主连结Re: Dive'
        },
        {
          name: 'U3D'
        },
        {
          name: '那是一个怎么看都脱离现实，同时却又异常美丽珍贵的梦境'
        },
        {
          name: 'Android'
        },
        {
          name: 'Vue'
        },
        {
          name: 'Golang'
        },
        {
          name: 'Blender'
        }
      ]
    }
  },
  components: {
    ArticleItem,
    Tags
  },
  activated() {},
  methods: {}
}
</script>

<style lang="less" scoped>
.home {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  .right-container {
    margin: 70px 0 0 50px;

    .hot-search-container {

    }

    .hot-label-container {
      margin: 70px 0 0 0;
    }
  }
}
</style>
