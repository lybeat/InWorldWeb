<template>
  <div class="banner">
    <img :src="image">
  </div>
</template>

<script>
export default {
  name:"banner",
  props: {
    image: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  height: 180px;
  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
}
</style>
