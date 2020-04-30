<template>
  <div class='article-item'>
    <img
      src='https://img.moegirl.org/common/7/76/Princess_connect_main_picture.png'
      alt
      class='cover'
      @click='gotoArticle(article.id)'
    />
    <h3 class='title' @click='gotoArticle(article.id)'>公主连结Re: Dive 低星推图技巧</h3>
    <p
      class='summary'
    >那是一个怎么看都脱离现实，同时却又异常美丽珍贵的梦境——在美丽的阿斯特莱亚大陆中心地区一个由兽人，精灵，魔族，人类等多种族群聚集在一起生活的王都“兰德索尔”。身为主人公的你在附近的平原苏醒，平稳的风声，花草茂盛。但是，丢失的只有你的记忆。在这陌生的世界里指...</p>
    <div class='meta'>
      <div class='author-container' @click='gotoUserPage(1)'>
        <img src='https://img.moegirl.org/common/1/1d/Pecoriinu.png' alt class='avatar' />
        <p class='username'>ohu</p>
      </div>
      <span class='separator'>|</span>
      <p class='tag' ref='tag' @click='gotoFilterPage'>游戏攻略</p>
      <span class='separator'>|</span>
      <p class='time'>2020-04-28</p>
      <span class='separator'>|</span>
      <p class='visits'>17阅读</p>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    article: {
      type: Object,
      require: true
    }
  },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {
    gotoArticle(id) {
      this.$router.push({ path: `/article/${id}` })
    },
    gotoUserPage(id) {
      this.$router.push({ path: `/user/${id}` })
    },
    gotoFilterPage() {
      let keyword = this.$refs.tag.textContent
      this.$store.commit('newKeyword', keyword)
      this.$router.push({ name: 'Filter', params: { keyword: this.keyword } })
    }
  }
}
</script>

<style lang="less" scoped>
.article-item {
  width: 860px;
  margin: 70px 0 0 0;

  .cover {
    width: 860px;
    height: 220px;
    object-fit: cover;
    border-radius: 10px;
    &:hover {
      cursor: pointer;
    }
  }

  .title {
    margin: 20px 0 0 0;
    &:hover {
      cursor: pointer;
    }
  }

  .summary {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 1px;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin: 20px 0 0 0;
  }

  .meta {
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: 20px;
    font-size: 11px;
    color: #999;
    margin: 20px 0 0 0;

    .author-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      &:hover {
        cursor: pointer;
      }
      .avatar {
        width: 25px;
        height: 25px;
        object-fit: cover;
        border-radius: 13px;
        margin: 0 5px 0 0;
      }
    }

    .tag {
      &:hover {
        cursor: pointer;
      }
    }

    .separator {
      margin: 0 10px;
      color: #ccc;
    }
  }
}
</style>
