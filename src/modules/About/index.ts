import type { Services } from '../../globalService';

const About = () => import('./About.vue');

export default async function (globalServices: Services) {
  const routerService = globalServices.Router;

  routerService.registerRoutes([
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ]);
}
