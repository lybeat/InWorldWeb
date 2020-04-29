<template>
  <div class='tag' @click="gotoFilterPage">
    <p class='name'>{{ tag.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'tag',
  props: {
    tag: {
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
    gotoFilterPage() {}
  }
}
</script>

<style lang="less" scoped>
.tag {
  font-size: 14px;
  color: #999;
  line-height: 20px;
  margin: 0 20px 10px 0;
  &:hover {
    cursor: pointer;
  }
}
</style>
