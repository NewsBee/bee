import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from '../views/SignUp.vue'
import login from '../views/login.vue'
import tentang from '../views/tentang.vue'
import MainMahasiswa from '../views/MainMahasiswa.vue'
import tambah from '../views/TambahMahasiswa.vue'
import Ganti from '../views/GantiMahasiswa.vue'
import halganti from '../views/ganti.vue'
import Admin from '../views/AdminMenu.vue'
import tambahuser from '../views/TambahUser.vue'
import GantiUser from '../views/GantiUser.vue'
import userupd from '../views/userupd.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/tentang',
    name: 'tentang',
    component: tentang
  },
  {
    path: '/userupd/:id',
    name: 'userupd',
    component: userupd
  },
  {
    path: '/GantiUser',
    name: 'GantiUser',
    component: GantiUser
  },
  {
    path: '/TambahUser',
    name: 'tambahuser',
    component: tambahuser
  },
  {
    path: '/AdminMenu',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/ganti/:id',
    name: 'halganti',
    component: halganti
  },
  {
    path: '/GantiMahasiswa',
    name: 'Ganti',
    component: Ganti
  },
  {
    path: '/TambahMahasiswa',
    name: 'tambah',
    component: tambah
  },
  {
    path: '/MainMahasiswa',
    name: 'MainMahasiswa',
    component: MainMahasiswa
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/login',
    name: 'login',
    component : login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
