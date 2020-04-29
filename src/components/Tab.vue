<template>
  <div class='tab' @click='gotoPage(tab.path)'>
    <p class='name' :class='tab.state'>{{ tab.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'tab',
  props: {
    tab: {
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
    gotoPage(path) {
      this.$router.push({ path: path })
    }
  }
}
</script>

<style lang="less" scoped>
.tab {
  .name {
    color: #555;
    padding: 10px 20px;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    &:hover {
      color: #f00;
      cursor: pointer;
    }
  }
  .normal {
    color: #333;
  }
  .pressed {
    color: #f00;
  }
}
</style>
