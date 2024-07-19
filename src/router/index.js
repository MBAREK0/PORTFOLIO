import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'portfolio',
    component: function () {
      return import(/* webpackChunkName: "home" */ '../views/HomeView.vue');
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,  // Use 'el' instead of 'selector'
        behavior: 'smooth'
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };  // Use 'left' and 'top' instead of 'x' and 'y'
    }
  }
});

export default router;
