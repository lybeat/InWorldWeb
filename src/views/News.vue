<template>
  <div class='news'>
    <article-item v-for='(article, index) in articleList' :key='index' :article='article'></article-item>
  </div>
</template>

<script>
import { getArticleList } from '../api/index'
import ArticleItem from '../components/ArticleItem'

export default {
  components: {
    ArticleItem
  },
  data() {
    return {
      articleList: [
        // {
        //   title: '三体',
        //   summary: '《三体》是刘慈欣创作的系列长篇科幻小说，由《三体》、《三体Ⅱ·黑暗森林》、《三体Ⅲ·死神永生》组成，第一部于2006年5月起在《科幻世界》杂志上连载，第二部于2008年5月首次出版，第三部则于2010年11月出版。作品讲述了地球人类文明和三体文明的信息交流、生死搏杀及两个文明在宇宙中的兴衰历程。其第一部经过刘宇昆翻译后获得了第73届雨果奖最佳长篇小说奖',
        //   author: '刘慈欣',
        //   time: '2011-07-08',
        //   type: "no-pic",
        // },
        // {
        //   title: '三体',
        //   summary: '没关系的，都一样',
        //   author: '刘慈欣',
        //   time: '2011-07-08',
        //   type: "one-pic",
        //   images: [
        //     'https://hbimg.huabanimg.com/ac45852ce415d11f76456eb8b84f338c15f8f3776640b-FGxXfw_fw658'
        //   ]
        // },
        // {
        //   title: '三体',
        //   summary: '没关系的，都一样',
        //   author: '刘慈欣',
        //   time: '2011-07-08',
        //   type: "multi-pic",
        //   images: [
        //     'https://hbimg.huabanimg.com/ac45852ce415d11f76456eb8b84f338c15f8f3776640b-FGxXfw_fw658',
        //     'https://hbimg.huabanimg.com/cf9c537ec9cfcd288ba921a74c44444b91f56b9b964b4-YBDCgf_fw658',
        //     'https://hbimg.huabanimg.com/6495ed3c426a8a9c83935064d2b450276f18c81c72f63-Fq4eJu_fw658',
        //     'https://hbimg.huabanimg.com/f9681d1040c49785a1f225da16779c15699167e2a7047-NBBhi8_fw658',
        //     'https://hbimg.huabanimg.com/da5a8a4973f7dac7e1aae7c379d5c4c7bde54a1d341645-cGEPcM_fw658'
        //   ]
        // },
        // {
        //   title: '三体',
        //   summary: '没关系的，都一样',
        //   author: '刘慈欣',
        //   time: '2011-07-08',
        //   type: "only-one-pic",
        //   images: [
        //     'https://hbimg.huabanimg.com/cf9c537ec9cfcd288ba921a74c44444b91f56b9b964b4-YBDCgf_fw658'
        //   ]
        // },
        // {
        //   title: '三体',
        //   summary: '没关系的，都一样',
        //   author: '刘慈欣',
        //   time: '2011-07-08',
        //   type: "all-pic",
        //   images: [
        //     'https://hbimg.huabanimg.com/ac45852ce415d11f76456eb8b84f338c15f8f3776640b-FGxXfw_fw658',
        //     'https://hbimg.huabanimg.com/cf9c537ec9cfcd288ba921a74c44444b91f56b9b964b4-YBDCgf_fw658',
        //     'https://hbimg.huabanimg.com/6495ed3c426a8a9c83935064d2b450276f18c81c72f63-Fq4eJu_fw658',
        //     'https://hbimg.huabanimg.com/f9681d1040c49785a1f225da16779c15699167e2a7047-NBBhi8_fw658',
        //     'https://hbimg.huabanimg.com/da5a8a4973f7dac7e1aae7c379d5c4c7bde54a1d341645-cGEPcM_fw658'
        //   ]
        // }
      ]
    }
  },
  mounted() {
    this.getNewsList()
  },
  methods: {
    getNewsList() {
      getArticleList().then(res => {
        this.articleList = res.data
        console.log('articleList: ' + res.code)
      })
    }
  }
}
</script>

<style lang="less">
</style>