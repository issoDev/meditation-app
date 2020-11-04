import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '../views/Home.vue';
import About from '../views/About.vue'
import ListenMusic from '../views/ListenMusic.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/music/:id',
    name: 'listen-music',
    component: ListenMusic
  }

];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;