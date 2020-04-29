<template>
  <div class='o-header'>
    <div class='cover-container' @click='gotoDetailPage(1)'>
      <img
        src='https://img.moegirl.org/common/7/76/Princess_connect_main_picture.png'
        alt
        class='cover'
      />
    </div>
    <h2 class='title' @click='gotoDetailPage(1)'>公主连结Re: Dive 低星推图技巧</h2>
    <div class='meta'>
      <div class='author-container' @click='gotoUserHomePage'>
        <img src='https://img.moegirl.org/common/1/1d/Pecoriinu.png' alt class='avatar' />
        <p class='username'>ohu</p>
        <span class='separator'>|</span>
      </div>
      <p class='tag'>游戏攻略</p>
      <span class='separator'>|</span>
      <p class='time'>2020-04-28</p>
      <span class='separator'>|</span>
      <p class='visits'>17阅读</p>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    oData: {
      type: Object,
      require: true
    }
  },
  methods: {
    gotoDetailPage() {},
    gotoUserHomePage() {}
  }
}
</script>

<style lang="less" scoped>
.o-header {
  width: 860px;
  margin: 70px auto 0 auto;

  .cover-container {
    text-align: center;
    &:hover {
      cursor: pointer;
    }
    .cover {
      width: 860px;
      height: 220px;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  .title {
    margin: 50px 0 0 0;
    &:hover {
      cursor: pointer;
    }
  }

  .content {
    margin: 20px 0 0;
  }

  .meta {
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: 20px;
    font-size: 11px;
    color: #999;
    margin: 20px 0 0 0;

    .author-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      &:hover {
        cursor: pointer;
      }

      .avatar {
        width: 25px;
        height: 25px;
        object-fit: cover;
        border-radius: 13px;
        margin: 0 5px 0 0;
      }
    }

    .separator {
      margin: 0 10px;
      color: #ccc;
    }
  }
}
</style>
