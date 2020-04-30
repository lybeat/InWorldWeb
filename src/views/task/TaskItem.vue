<template>
  <div class='main-line-item'>
    <o-header></o-header>
    <div class='task-container'>
      <p class='task-summary'>摄像头动画（任务的简单描述）</p>
    </div>
    <view-more :path='"/task"' :id="1"></view-more>
  </div>
</template>

<script>
import OHeader from '../../components/Header'
import ViewMore from '../../components/more/ViewMore'

export default {
  name: '',
  props: {},
  components: {
    OHeader,
    ViewMore
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
.main-line-item {
  width: 860px;
  margin: 70px auto;

  .task-container {
    min-height: 70px;
    padding: 20px;
    margin: 30px 0 0 0;
    border: 1px solid #ccc;
    border-radius: 10px;
    // background-color: #fff;
    // z-index: 100;
    // box-shadow: 0px 5px 40px 0px rgba(17, 58, 93, 0.18) !important;
    .task-summary {
      color: #999;
      font-size: 14px;
      line-height: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
