<template>
  <div class='article-detail'>
    <p class='title'>{{ article.title }}</p>
    <div class='meta'>
      <img src='https://img.moegirl.org/common/0/0c/Kyaru.png' alt class='avatar' />
      <p class='author'>{{ user.username }}</p>
      <ohu-icon class='icon-time' icon='clock'></ohu-icon>
      <p class='time'>{{ formatTime(article.createdOn) }}</p>
    </div>
    <div class='contents'>
      <div class='content' v-for='(c, index) in article.contents' :key='index'>
        <p class='text' v-if='c.type == 0'>{{c.content}}</p>
        <div class='image' v-if='c.type == 1'>
          <img :src='c.content' alt />
          <p class='desc'>{{ c.desc }}</p>
        </div>
        <div class='video' v-if='c.type == 2'></div>
        <vue-markdown v-if="c.type == 10"> {{ c.content }} </vue-markdown>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticleDetail } from '../api/index'
import { formatTimestamp } from '../util/time'
import VueMarkdown from 'vue-markdown'

export default {
  name: 'article-detail',
  props: {
    id: {
      type: String,
      required: true,
      default: ''
    }
  },
  components: {
    VueMarkdown
  },
  data() {
    return {
      article: {},
      user: {}
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getArticle()
    })
  },
  methods: {
    getArticle() {
      getArticleDetail(this.id).then(res => {
        this.article = res.data
        this.user = this.article.user
      })
    },
    formatTime(timestamp) {
      return formatTimestamp(timestamp)
    }
  }
}
</script>

<style lang="less" scoped>
.article-detail {
  width: 60%;
  margin: 0 auto;
  .title {
    margin-top: 50px;
    line-height: 30px;
    font-size: 20px;
    font-weight: 700;
  }
  .meta {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    font-size: 14px;
    line-height: 20px;
    color: #999;
    .avatar {
      width: 30px;
      height: 30px;
      object-fit: cover;
      border-radius: 50%;
    }
    .author {
      margin-left: 5px;
    }
    .icon-time {
      margin-left: 30px;
      width: 15px;
      height: 15px;
    }
    .time {
      margin-left: 5px;
    }
  }
  .contents {
    margin-top: 50px;
    .text {
      text-indent: 2em;
      word-wrap: break-word;
      font-size: 15px;
      line-height: 30px;
      color: #333;
      margin-top: 20px;
    }
    .image {
      text-align: center;
      margin: 0 auto;
      margin-top: 20px;
      p {
        color: #999;
        font-size: 14px;
        margin-top: 10px;
      }
    }
  }
}
</style>
