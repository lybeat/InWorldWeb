<template>
  <div class='boss-detail'>
    <o-header></o-header>
    <div class='contents-container'>
      <p
        class='content'
        v-for='(c, index) in contents'
        :key='index'
        @click='gotoArticlePage(1)'
      >{{ c.title }}</p>
    </div>
  </div>
</template>

<script>
import OHeader from '../../components/Header'

export default {
  name: '',
  props: {},
  components: {
    OHeader
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
        },
        {
          title: '关卡一：那是一个怎么看都脱离现实，同时却又异常美丽珍贵的梦境'
        },
        {
          title: '关卡一：那是一个怎么看都脱离现实，同时却又异常美丽珍贵的梦境'
        },
        {
          title: '关卡一：那是一个怎么看都脱离现实，同时却又异常美丽珍贵的梦境'
        },
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
    gotoArticlePage(id) {
      this.$router.push({ path: `/article/${id}` })
    }
  }
}
</script>

<style lang="less" scoped>
.boss-detail {
  width: 860px;
  margin: 70px auto;

  .contents-container {
    margin: 50px 0 0 0;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 1px;
    color: #333;

    .content {
      margin: 30px 0 0 0;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
