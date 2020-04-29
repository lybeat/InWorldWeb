<template>
  <div class='filter'>
    <div class='filter-info-container'>
      <p class='filter-info'>{{ message }}</p>
    </div>
    <div class='filter-result-container'>
      <filter-item></filter-item>
      <filter-item></filter-item>
      <filter-item></filter-item>
      <filter-item></filter-item>
      <filter-item></filter-item>
    </div>
  </div>
</template>

<script>
import FilterItem from './FilterItem'

export default {
  name: '',
  props: {
    keyword: {
      type: String,
      require: true
    }
  },
  components: {
    FilterItem
  },
  data() {
    return {
      oKeyword: '',
      message: ''
    }
  },
  mounted() {
    this.getFilterResult()
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.oKeyword = vm.keyword
      vm.getMessage()
    })
  },
  methods: {
    getFilterResult() {},
    getMessage() {
      this.message = this.oKeyword + "，共10个相关结果"
    }
  },
  computed: {
    getKeyword() {
      return this.$store.state.keyword
    }
  },
  watch: {
    getKeyword(val) {
      this.oKeyword = val
      this.getMessage()
      this.getFilterResult()
    }
  }
}
</script>

<style lang="less" scoped>
.filter {
  width: 1000px;
  margin: 50px auto;

  .filter-info-container {
    margin: 70px 0 0 0;
    color: #333;
    font-size: 20px;
    text-align: center;
  }

  .filter-result-container {
    margin: 100px 0 0 0;
  }
}
</style>
