import Vue from 'vue'
import VueRouter from 'vue-router'

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(VueRouter)

const routes = [{
    path: '',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import('../views/article/ArticleDetail.vue'),
    props: true
  },
  {
    path: '/task',
    name: 'Task',
    component: () => import('../views/task/Task.vue')
  },
  {
    path: '/task/:id',
    name: 'TaskDetail',
    component: () => import('../views/task/TaskDetail.vue'),
    props: true
  },
  {
    path: '/boss',
    name: 'Boss',
    component: () => import('../views/boss/Boss.vue')
  },
  {
    path: '/boss/:id',
    name: 'BossDetail',
    component: () => import('../views/boss/BossDetail.vue'),
    props: true
  },
  {
    path: '/filter',
    name: 'Filter',
    component: () => import('../views/filter/Filter.vue'),
    props: true
  },
  {
    path: '/user/:id',
    name: 'User',
    component: () => import('../views/user/User.vue'),
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router