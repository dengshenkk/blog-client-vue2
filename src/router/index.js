import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/article',
    component: () => import('@/layout/default'),
    children: [
      {
        path: 'article',
        name: 'article',
        component: () =>
          import(/* webpackChunkName: "article" */ '@/views/article/index')
      },
      {
        path: 'tag',
        name: 'tag',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "tag" */ '../views/tag/index.vue')
      },
      {
        path: 'category',
        name: 'category',
        component: () =>
          import(/* webpackChunkName: "category" */ '../views/category/index.vue')
      },
      {
        path: 'comment',
        name: 'comment',
        component: () =>
          import(/* webpackChunkName: "comment" */ '../views/comment/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/login/index.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/register/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
