import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('src/pages/HomePage.vue'),
      },
      {
        path: '/detalhes-carrinho',
        name: 'CartDetails',
        component: () => import('src/pages/CartDetailsPage.vue'),
      },
      {
        path: '/pagamento',
        name: 'PaymentPage',
        component: () => import('src/pages/PaymentPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
