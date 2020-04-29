<template>
  <div class='o-more'>
    <div class='more-container' @click='gotoDetailPage'>
      <p class='more'>查看更多</p>
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
</style>
