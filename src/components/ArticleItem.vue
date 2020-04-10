<template>
  <div
    class='article-item'
    :class='state'
    @mouseenter='onMouseHover("selected")'
    @mouseleave='onMouseHover("normal")'
    @click='gotoArticleDetail(article.id)'
  >
    <div class='type-no-pic' v-if='article.type == "no-pic"'>
      <h3 class='title'>{{ article.title }}</h3>
      <p class='content'>{{ article.content }}</p>
      <div class='bottom-box'>
        <p class='author'>{{ article.author }}</p>
        <p class='time'>{{ article.createdAt }}</p>
      </div>
    </div>
    <div class='type-one-pic' v-if='article.type == "one-pic"'>
      <div class='text-box'>
        <h3 class='title'>{{ article.title }}</h3>
        <p class='content'>{{ article.content }}</p>
        <div class='bottom-box'>
          <p class='author'>{{ article.author }}</p>
          <p class='time'>{{ article.createdAt }}</p>
        </div>
      </div>
      <img :src='article.images[0]' class='cover' />
    </div>
    <div class='type-multi-pic' v-if='article.type == "multi-pic"'>
      <img v-for='(img, index) in article.images' :key='index' :src='img' />
      <h3 class='title'>{{ article.title }}</h3>
      <p class='content'>{{ article.content }}</p>
      <div class='bottom-box'>
        <p class='author'>{{ article.author }}</p>
        <p class='time'>{{ article.createdAt }}</p>
      </div>
    </div>
    <div class='type-only-one-pic' v-if='article.type == "only-one-pic"'>
      <img :src='article.images[0]' />
    </div>
    <div class='type-all-pic' v-if='article.type == "all-pic"'>
      <img v-for='(img, index) in article.images' :key='index' :src='img' />
    </div>
    <div class='divider'>
      <p class='line'></p>
    </div>
  </div>
</template>
  
<script>
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
      console.log('gotoArticleDetail: ' + id)

      this.$router.push({ path: `/article/${id}` })
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
  .title {
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .content {
    font-size: 14px;
    line-height: 24px;
    word-wrap: break-word;
    // text-indent: 2em;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .divider {
    .line {
      background: #ddd;
      width: 100%;
      height: 1px;
      margin: 0 auto;
    }
  }
  .type-no-pic {
    padding: 20px;
    .bottom-box {
      margin-top: 10px;
      .author {
        display: inline;
        font-size: 13px;
      }
      .time {
        display: inline;
        font-size: 13px;
        margin-left: 20px;
      }
    }
  }
  .type-one-pic {
    position: relative;
    height: 200px;
    .text-box {
      float: left;
      padding: 20px;
      .bottom-box {
        margin-top: 10px;
        bottom: 0;
        position: absolute;
        margin-bottom: 20px;
        .author {
          display: inline;
          font-size: 13px;
        }
        .time {
          display: inline;
          font-size: 13px;
          margin-left: 20px;
        }
      }
    }
    .cover {
      width: 200px;
      height: 200px;
      object-fit: cover;
      float: right;
    }
  }
  .type-multi-pic {
    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
    }
    .title {
      margin-top: 20px;
    }
    .bottom-box {
      margin-top: 10px;
      .author {
        display: inline;
        font-size: 13px;
      }
      .time {
        display: inline;
        font-size: 13px;
        margin-left: 20px;
      }
    }
  }
  .type-only-one-pic {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      height: 300px;
      overflow: hidden;
      object-fit: cover;
      margin: 0 auto;
    }
  }
  .type-all-pic {
    height: 300px;
    img {
      width: 300px;
      height: 300px;
      object-fit: cover;
    }
  }
}
</style>
