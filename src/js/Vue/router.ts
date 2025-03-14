import { createRouter, createWebHistory } from 'vue-router';
import { getRoutes } from '../parsePages';

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: getRoutes(),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }

        if (to.hash) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        el: to.hash,
                        behavior: 'smooth',
                        top: 100,
                    });
                }, 500);
            });
        }
        return { top: 0 };
    },
});

export default router;
