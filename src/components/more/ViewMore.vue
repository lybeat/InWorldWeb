<template>
  <div class='view-more'>
    <div class='more-container' @click='gotoDetailPage'>
      <p class='more'>查看更多</p>
      <i class='iconfont ohu-arrow_right'></i>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    id: {
      type: Number,
      require: true
    },
    path: {
      type: String,
      require: true
    }
  },
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {
    gotoDetailPage() {
      this.$router.push({ path: `${this.path}/${this.id}` })
    }
  }
}
</script>

<style lang="less" scoped>
.view-more {
  .more-container {
    margin: 40px 0 0 0;
    font-size: 14px;
    line-height: 18px;
    color: #999;
    text-align: center;
    position: relative;
    &:hover {
      cursor: pointer;
    }

    .more {
      display: inline;
    }

    .iconfont {
      position: absolute;
      margin: 0 0 0 5px;
    }
  }
}
</style>
