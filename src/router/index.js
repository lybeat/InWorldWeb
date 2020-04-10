import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: {name: 'News'},
    component: require('@/views/Home').default,
    children: [
      {
        path: 'news',
        name: 'News',
        component: () => import('../views/News.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/About.vue')
      },
      {
        path: 'article/:id',
        name: 'Article',
        component: () => import('../views/Article.vue'),
        props: true
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
