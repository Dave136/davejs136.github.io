import type { Services } from '../../globalService';

const Home = () => import('./Home.vue');

export default async function (globalServices: Services) {
  const routerService = globalServices.Router;

  routerService.registerRoutes([
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
  ]);
}
