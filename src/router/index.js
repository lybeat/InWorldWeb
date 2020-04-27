import Vue from 'vue'
import VueRouter from 'vue-router'

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  redirect: {
    name: 'Article'
  },
  component: require('@/views/Home').default,
  children: [{
      path: 'articles',
      name: 'Article',
      component: () => import('../views/Article.vue')
    },
    {
      path: 'about',
      name: 'About',
      component: () => import('../views/About.vue')
    },
    {
      path: 'articles/:id',
      name: 'ArticleDetail',
      component: () => import('../views/ArticleDetail.vue'),
      props: true
    }
  ]
}]

const router = new VueRouter({
  routes
})

export default router