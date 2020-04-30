<template>
  <div class='boss-item'>
    <o-header></o-header>
    <div class='contents-container'>
      <p class='content' v-for='(c, index) in contents' :key='index'>{{ c.title }}</p>
    </div>
    <view-more :path='"/boss"' :id="1"></view-more>
  </div>
</template>

<script>
import OHeader from '../../components/Header'
import ViewMore from '../../components/more/ViewMore'

export default {
  name: '',
  props: {},
  components: {
    OHeader,
    ViewMore
  },
  data() {
    return {
      contents: [
        {
          title: '关卡一：那是一个怎么看都脱离现实，同时却又异常美丽珍贵的梦境'
        },
        {
          title: '关卡一：那是一个怎么看都脱离现实，同时却又异常美丽珍贵的梦境'
        },
        {
          title: '关卡一：那是一个怎么看都脱离现实，同时却又异常美丽珍贵的梦境'
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {
    gotoUserHomePage() {},
    gotoDetailPage(id) {
      this.$router.push({ path: `/boss/${id}` })
    }
  }
}
</script>

<style lang="less" scoped>
.boss-item {
  width: 860px;
  margin: 70px auto;

  .cover-container {
    text-align: center;
    &:hover {
      cursor: pointer;
    }
    .cover {
      width: 860px;
      height: 220px;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  .title {
    margin: 50px 0 0 0;
    &:hover {
      cursor: pointer;
    }
  }

  .content {
    margin: 20px 0 0;
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

    .separator {
      margin: 0 10px;
      color: #ccc;
    }
  }

  .contents-container {
    margin: 30px 0 0 0;
    font-size: 16px;
    line-height: 18px;
    color: #666;
    letter-spacing: 1px;

    .content {
      margin: 20px 0 0 0;
    }
  }

  .more-container {
    margin: 40px 0 0 0;
    font-size: 14px;
    line-height: 18px;
    color: #999;
    text-align: center;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
