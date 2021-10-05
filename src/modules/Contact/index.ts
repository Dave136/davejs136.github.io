import type { Services } from '../../globalService';

const Contact = () => import('./Contact.vue');

export default async function (globalServices: Services) {
  const routerService = globalServices.Router;

  routerService.registerRoutes([
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
  ]);
}
