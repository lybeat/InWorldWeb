<template>
  <div class='home'>
    <div class='carousel-container'>
      <carousel :contents='carouselContents' @cellClick='cellClick'></carousel>
    </div>
    <div class='content-container'>
      <div class='post-container'>
        <article-item :article='articles[0]'></article-item>
        <article-item></article-item>
        <article-item></article-item>
      </div>
      <div class='right-container'>
        <div class='hot-search-container'>
          <div class='category-container'>
            <i class='iconfont ohu-hot'></i>
            <h3 class='category'>热门搜索</h3>
          </div>
          <tags class='hot-search' :tags='tags'></tags>
        </div>
        <div class='hot-label-container'>
          <div class='category-container'>
            <i class='iconfont ohu-tag'></i>
            <h3 class='category'>标签</h3>
          </div>
          <tags class='hot-label' :tags='tags'></tags>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleItem from './article/ArticleItem'
import Tags from '../components/Tags'
import Carousel from '../components/Carousel'
import { getScrollTop } from '../util/window'

export default {
  name: 'Home',
  data() {
    return {
      articles: [
        {
          id: 1
        }
      ],
      tags: [
        {
          name: '公主连结Re: Dive'
        },
        {
          name: 'U3D'
        },
        {
          name: '那是一个怎么看都脱离现实，同时却又异常美丽珍贵的梦境'
        },
        {
          name: 'Android'
        },
        {
          name: 'Vue'
        },
        {
          name: 'Golang'
        },
        {
          name: 'Blender'
        }
      ],
      carouselContents: [
        {
          id: 1,
          image:
            'https://img.moegirl.org/common/7/76/Princess_connect_main_picture.png'
        },
        {
          id: 2,
          image:
            'https://img.moegirl.org/common/7/76/Princess_connect_main_picture.png'
        },
        {
          id: 3,
          image:
            'https://img.moegirl.org/common/7/76/Princess_connect_main_picture.png'
        }
      ]
    }
  },
  components: {
    ArticleItem,
    Tags,
    Carousel
  },
  mounted() {
    window.addEventListener('scroll', function() {
      console.log('height---------> ' + window.screen.height)
      console.log('scrollTop---------> ' + getScrollTop())
      console.log('clientHeight---------> ' + document.body.clientHeight)
      if (window.screen.height + getScrollTop() > document.body.clientHeight) {
        // 加载下一页数据
      }
    })
  },
  methods: {
    cellClick(index) {
      this.$router.push({ path: `article/${this.carouselContents[index].id}` })
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  width: 1200px;
  margin: 0 auto;

  .carousel-container {
    margin: 70px 0 0 0;
  }

  .content-container {
    display: flex;
    flex-direction: row;
    margin: 70px 0 0 0;

    .right-container {
      margin: 70px 0 0 50px;

      .category-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        line-height: 22px;
      }

      .hot-label-container {
        margin: 100px 0 0 0;
      }

      i {
        font-size: 22px;
        color: #333;
        margin: 0 10px 0 0;
      }
    }
  }
}
</style>
