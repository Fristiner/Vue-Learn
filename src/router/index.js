import { createRouter, createWebHashHistory } from 'vue-router';

// 制定路由规则

const routes = [
   {
      path: '/',
      name: 'main',
      component: () => import('@/views/Main.vue'),
      redirect: '/home',
      children: [
         {
            path: '/home',
            name: 'home',
            component: () => import('@/views/Home.vue'),
         },
         {
            path: 'user',
            name: 'user',
            component: () => import('@/views/User.vue'),
         },
      ],
   },
];

const router = createRouter({
   // 设置路由的模式
   history: createWebHashHistory(),
   routes: routes,
});

export default router;
