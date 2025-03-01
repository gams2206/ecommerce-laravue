import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Rastreio from './pages/Rastreio.vue';
import SobreNos from './pages/SobreNos.vue';
import FaleConosco from './pages/FaleConosco.vue';
import Privacidade from './pages/Privacidade.vue';
import Entrega from './pages/Entrega.vue';
import Frete from './pages/Frete.vue';
import Trocas from './pages/Trocas.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/rastreio',
    component: Rastreio
  },
  {
    path: '/sobre-nos',
    component: SobreNos
  },
  {
    path: '/fale-conosco',
    component: FaleConosco
  },
  {
    path: '/politicas-de-privacidade',
    component: Privacidade
  },
  {
    path: '/prazo-de-entrega',
    component: Entrega
  },
  {
    path: '/politica-de-frete',
    component: Frete
  },
  {
    path: '/trocas-e-devolucoes',
    component: Trocas
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, left: 0 };
  }
});

export default router;