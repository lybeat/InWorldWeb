<template>
  <div class='main-line-detail'>
    <o-header></o-header>
    <div class='tasks-container'>
      <div class='task-container' v-for='(task, index) in tasks' :key='index'>
        <p class='task-summary'>{{ task.summary }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import OHeader from '../../components/Header'

export default {
  name: '',
  components: {
    OHeader
  },
  data() {
    return {
      tasks: [
        {
          summary: '摄像头动画（任务的简单描述）'
        },
        {
          summary: '摄像头动画（任务的简单描述）'
        },
        {
          summary: '摄像头动画（任务的简单描述）'
        },
        {
          summary: '摄像头动画（任务的简单描述）'
        },
        {
          summary: '摄像头动画（任务的简单描述）'
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="less" scoped>
.main-line-detail {
  width: 860px;
  margin: 70px auto;

  .tasks-container {
    margin: 50px 0 0 0;
  }

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
