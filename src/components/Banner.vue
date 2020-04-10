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

<style lang="banner" scoped>

</style>
