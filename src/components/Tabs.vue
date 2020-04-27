<template>
  <div class="tabs">
    <tab class="tab" v-for="(t, index) in tabs" :key="index" :tab="t" @click.native="clearAllState(index)"></tab>
  </div>
</template>

<script>
import Tab from './Tab'

export default {
  name:"",
  props: {},
  components: {
    Tab
  },
  data() {
    return {
      tabs: [
        {
          name: "文章",
          path: "/articles",
          state: 'pressed'
        },
        {
          name: "游戏",
          path: "/games",
          state: 'normal'
        },
        {
          name: "前端",
          path: "/games",
          state: 'normal'
        },
        {
          name: "后端",
          path: "/games",
          state: 'normal'
        },
        {
          name: "建模",
          path: "/games",
          state: 'normal'
        },
        {
          name: "日语",
          path: "/japanese",
          state: 'normal'
        },
        {
          name: "绘画",
          path: "/paintings",
          state: 'normal'
        },
        {
          name: "关于",
          path: "/about",
          state: 'normal'
        },
        
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    clearAllState(index) {
      this.tabs.forEach(tab => {
        tab.state = 'normal'
      });
      this.tabs[index].state = 'pressed'
    }
  },
};
</script>

<style lang="less" scoped>
.tabs {
  width: 60%;
  margin: 0 auto;
  display: flex;
  .tab {
    
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
