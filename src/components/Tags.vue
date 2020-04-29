<template>
  <div class='tags'>
    <div class='items-container'>
      <tag v-for='(t, index) in tags' :key='index' :tag='t'></tag>
    </div>
  </div>
</template>

<script>
import Tag from './Tag'

export default {
  name: 'tags',
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
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="less" scoped>
.tags {
  .items-container {
    margin: 20px 0 0 0;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
