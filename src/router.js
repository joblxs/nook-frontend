import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('./components/Index.vue')
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () => import('./components/blog/List.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;