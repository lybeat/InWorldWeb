<template>
  <div class="navigation">
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
          name: "首页",
          path: "/",
          state: 'pressed'
        },
        {
          name: "系统任务",
          path: "/task",
          state: 'normal'
        },
        {
          name: "升级材料",
          path: "/upup",
          state: 'normal'
        },
        {
          name: "Boss副本",
          path: "/boss",
          state: 'normal'
        }
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
.navigation {
  display: flex;
  flex-direction: row;
  align-items: center;
  .tab {
    
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
