import Vue from 'vue'
import VueRouter from 'vue-router'
import PagePeriode from '../templates/PagePeriode.vue';
import ObjectDesc from '../templates/ObjectDesc.vue';
import Intro from '../components/Intro.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Intro',
    component: Intro,
    meta: { transitionName: `fade` }
  },
  {
    path: '/periode/:type',
    name: 'Periode',
    component: PagePeriode,
    meta: { transitionName: `fade` }
  },
  {
    path: '/objectdesc/:type',
    name: 'ObjectDesc',
    component: ObjectDesc,
    meta: { transitionName: `fade` }
  },
  {
    path: '/about',
    name: 'About',
    meta: { transitionName: `zoom` },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router

