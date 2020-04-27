<template>
  <div class='article-item'>
    <img :src='article.coverUrl' class='cover' @click='gotoArticleDetail(article.id)' />
    <div class='content'>
      <p class='title' @click='gotoArticleDetail(article.id)'>{{ article.title }}</p>
      <p class='summary'>{{ article.summary }}</p>
      <div class='meta'>
        <img src='https://img.moegirl.org/common/0/0c/Kyaru.png' alt class='avatar' />
        <p class='author'>{{ article.user.username }}</p>
        <ohu-icon class='icon-time' icon='clock'></ohu-icon>
        <p class='time'>{{ formatTime(article.createdOn) }}</p>
      </div>
    </div>
  </div>
</template>
  
<script>
import { formatTimestamp } from '../util/time'

export default {
  name: 'article-item',
  props: {
    article: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      state: 'normal'
    }
  },
  methods: {
    onMouseHover(state) {
      this.state = state
    },
    gotoArticleDetail(id) {
      this.$router.push({ path: `/articles/${id}` })
    },
    formatTime(timestamp) {
      return formatTimestamp(timestamp)
    }
  }
}
</script>

<style lang="less" scoped>
.normal {
  background: #fff;
}
.selected {
  background: #ddd;
}
.article-item {
  position: relative;
  height: 160px;
  .cover {
    width: 160px;
    height: 160px;
    object-fit: cover;
    position: absolute;
    right: 0;
    cursor: pointer;
  }
  .content {
    padding-right: 180px;
    .title {
      font-size: 20px;
      font-weight: 700;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 50px;
      line-height: 1.5;
      cursor: pointer;
      &:hover {
        color: #f00;
      }
    }
    .summary {
      font-size: 14px;
      line-height: 24px;
      word-wrap: break-word;
      // text-indent: 2em;
      margin-top: 10px;
      color: #999;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    .meta {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 10px;
      bottom: 0;
      position: absolute;
      margin-bottom: 20px;
      line-height: 20px;
      font-size: 14px;
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
  }
}
</style>
