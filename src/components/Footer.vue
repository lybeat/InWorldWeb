<template>
  <div class='footer'>
    <p class='copyright'>代码里面有魔法 Copy@2020</p>
  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  methods: {}
}
</script>

<style lang="less" scoped>
.footer {
  position: relative;
  width: 100%;
  height: 200px;
  text-align: center;

  .copyright {
    position: absolute;
    margin: 0 0 20px 0;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -50%);
    font-size: 11px;
    color: #999;
  }
}
</style>
