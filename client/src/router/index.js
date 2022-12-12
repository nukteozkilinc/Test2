import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'post',
    component: () => import(/* webpackChunkName: "about" */ '../views/PostView.vue'),
    meta: {
      title: 'Posts '
    }
  },
  {
    path: '/post/:id',
    name: 'Individual Post',
    component: () => import('../views/IndividualPost.vue'),
    meta: {
      title: 'Individual Post '
    }
  },
  {
    path: '/project',
    name: 'project',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProjectView.vue'),
    meta: {
      title: 'Projects '
    }
  },
  {
    path: '/proyect/:id',
    name: 'Individual Proyect',
    component: () => import('../views/IndividualProject.vue'),
    meta: {
      title: 'Proyect '
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue'),
    meta: {
      title: 'Contact '
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      title: 'About me '
    }
  },
  {
    path: '/admin',
    name: 'adminPost',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminPost.vue'),
    meta: {
      title: 'Admin Post '
    }
  },
  {
    path: '/adminProject',
    name: 'adminProject',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminProject.vue'),
    meta: {
      title: 'Admin Project '
    }
  },
  {
    path: '/adminContact',
    name: 'adminContact',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminContact.vue'),
    meta: {
      title: 'Admin Contact '
    }
  },
  {
    path: '/adminAbout',
    name: 'adminAbout',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminAbout.vue'),
    meta: {
      title: 'Admin About me '
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue'),
    meta: {
      title: 'Login Page'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if((to.name == 'adminPost' ||  to.name == 'adminProject' || to.name == 'adminContact' ||  to.name == 'adminAbout')&& store.getters.getToken == ''){
    next({name:'Login'})
  }
  else{
    next()
  }
})

export default router
