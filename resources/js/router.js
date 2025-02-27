import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Rastreio from './pages/Rastreio.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/rastreio',
    component: Rastreio
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;