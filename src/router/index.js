import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '@/views/LoginView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    children: [
      {
        path: '/home/role',
        name: 'role',
        component: () => import('../views/RoleView.vue')
      },
      {
        path: '/home/order',
        name: 'order',
        component: () => import('../views/OrderView.vue')
      },
      {
        path: '/home/recommand',
        name: 'recommand',
        component: () => import('../views/Recommand.vue')
      },
      {
        path: '/home/nurse/info',
        name: 'nurse-info',
        component: () => import('../views/nurse/InfoView.vue')
      },
      {
        path: '/home/nurse/group-portrait',
        name: 'nurse-group-portrait',
        component: () => import('../views/nurse/GroupPortrait.vue')
      },
      {
        path: '/home/nurse/single-portrait',
        name: 'nurse-single-portrait',
        component: () => import('../views/nurse/SinglePortrait.vue')
      },
      {
        path: '/home/patient/info',
        name: 'patient-info',
        component: () => import('../views/patient/InfoView.vue')
      },
      {
        path: '/home/patient/group-portrait',
        name: 'patient-group-portrait',
        component: () => import('../views/patient/GroupPortrait.vue')
      },
      {
        path: '/home/patient/single-portrait',
        name: 'patient-single-portrait',
        component: () => import('../views/patient/SinglePortrait.vue')
      }
    ],
    redirect: '/home/order'
  }
]

const router = new VueRouter({
  routes
})

export default router
