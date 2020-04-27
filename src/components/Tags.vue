<template>
  <div class="tags">
    <tag v-for="(t, index) in tags" :key="index" :tag="t"></tag>
  </div>
</template>

<script>
import { Tag } from './Tag'

export default {
  name:"tags",
  props: {
    tags: {
      type: Array,
      require: true
    }
  },
  components: {
    Tag
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
