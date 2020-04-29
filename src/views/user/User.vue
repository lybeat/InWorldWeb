<template>
  <div class='user'>
    <div class='basic-info-container'>
      <img
        src='https://img.moegirl.org/common/7/76/Princess_connect_main_picture.png'
        alt
        class='avatar'
      />
      <p class='username'>幻想乡，</p>
    </div>
    <div class='Statistics-container'></div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="less" scoped>
.user {
  width: 1200px;
  margin: 50px auto;

  .basic-info-container {
    margin: 70px 0 0 0;
    text-align: center;

    .avatar {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 50px;
      &:hover {
        box-shadow: 0 0 5px 5px rgba(17, 58, 93, 0.2) !important;
      }
    }

    .username {
      margin: 10px 0 0 0;
      font-size: 16px;
      color: #333;
      line-height: 20px;
    }
  }
}
</style>
