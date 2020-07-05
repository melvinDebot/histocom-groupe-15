import Vue from 'vue';
import VueRouter from 'vue-router';

// TEMPLATES
import PagePeriode from '../templates/PagePeriode.vue';
import ObjectDesc from '../templates/ObjectDesc.vue';
import Intro from '../components/Intro.vue';
import PageObjet from '../templates/PageObjet.vue';
import Quizz from '../templates/Quizz.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: Intro,
    meta: { transitionName: 'fade' },
  },
  {
    path: '/periode/:type',
    name: 'Periode',
    component: PagePeriode,
    meta: { transitionName: 'overlay-left' },
  },
  {
    path: '/objectdesc/:type/:activity',
    name: 'ObjectDesc',
    component: ObjectDesc,
    meta: { transitionName: 'fade' },
  },
  {
    path: '/pageobjet/:type',
    name: 'PageObject',
    component: PageObjet,
    meta: { transitionName: 'fade' },
  },
  {
    path: '/quizz/:period',
    name: 'Quizz',
    component: Quizz,
    meta: { transitionName: 'fade' },
  },
];

const router = new VueRouter({
  routes,
});

export default router;