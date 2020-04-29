<template>
  <div class='search-bar'>
    <input type='text' placeholder='搜索攻略' v-model="keyword" @keydown.enter='search' />
  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  components: {},
  data() {
    return {
      keyword: ''
    }
  },
  created() {},
  mounted() {},
  methods: {
    search(e) {
      let keyCode = window.event ? e.keyCode : e.which
      if (keyCode == 13) {
        this.$store.commit('newKeyword', this.keyword)
        // this.$router.push({ path: `/filter/${this.keyword}`})
        this.$router.push({ name: 'Filter', params: { keyword: this.keyword }})
      }
    }
  },
  computed: {
    getKeyword() {
      return this.$store.state.keyword
    }
  },
  watch: {
    getKeyword(val) {
      this.keyword = val
    }
  }
}
</script>

<style lang="less" scoped>
.search-bar {
  input {
    width: 250px;
    height: 28px;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 0 10px;
    outline: none;
    font-size: 14px;
  }
}
</style>
