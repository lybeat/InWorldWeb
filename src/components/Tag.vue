<template>
  <div class="tag">
    <p class="name">{{ tag.name }}</p>
    <p class="count">{{ tag.count }}</p>
  </div>
</template>

<script>
export default {
  name:"tag",
  props: {
    tag: {
      type: Object,
      require: true
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>

</style>
