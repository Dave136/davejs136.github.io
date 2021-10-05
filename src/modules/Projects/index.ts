import type { Services } from '../../globalService';

const Projects = () => import('./Projects.vue');

export default async function (globalServices: Services) {
  const routerService = globalServices.Router;

  routerService.registerRoutes([
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
    },
  ]);
}
