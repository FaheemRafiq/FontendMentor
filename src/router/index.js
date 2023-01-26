import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../views/LandingPage.vue"),
    },
    {
      path: '/qrcode',
      name: 'QRcode',
      component: () => import("../components/QRCode.vue"),
    },
    {
      path: '/card',
      name: 'Card',
      component: () => import("../components/Card.vue"),
    },
    {
      path: '/form',
      name: 'Form',
      component: () => import("../MultiSetupForm/MainLayout.vue"),
      children:[
        {
          path: '',
          component: () => import("../components/FormInfo.vue"),
        },{
          path:'plan',
          component: () => import("../components/FormPlan.vue")
        },
        {
          path:'add',
          component: () => import("../components/FormAddOns.vue")
        },
        {
          path:'summary',
          component: () => import("../components/FormSummary.vue")
        }
      ]
    },
  ]
})

export default router
