// import { routes } from './routes.js';
import routes from 'pages-generated';

import { createRouter, createWebHashHistory } from 'vue-router';

console.log('routes', routes);

export function setupRouter() {
  const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
    // scrollBehavior: (to) => {
    //   return { left: 0, top: 0 };
    // },
  });

  // router.beforeEach(async (to) => {});

  return router;
}

export default setupRouter;
