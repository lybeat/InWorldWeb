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
    color: #333;
    padding: 10px 20px;
    &:hover {
      color: #f00;
      cursor: pointer;
      border: solid 1px #f00;
    }
  }
  .normal {
    color: #333;
    box-sizing: border-box;
    border: solid 1px #aaa;
    border-radius: 10px;
    margin: 0 5px;
  }
  .pressed {
    color: #f00;
    box-sizing: border-box;
    border: solid 1px #f00;
    border-radius: 10px;
    margin: 0 5px;
  }
}
</style>
