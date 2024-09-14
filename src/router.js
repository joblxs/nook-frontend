import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('./components/Index.vue')
    },
    {
        path: '/nav',
        name: 'Nav',
        component: () => import('./components/blog/common/Navigation.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;