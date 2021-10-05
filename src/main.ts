import { createApp, defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import globalService, { Services } from './globalService';
import { run } from './bootstrap';
import { registerGlobalComponents } from './components';

import './assets/scss/global.scss';

registerGlobalComponents(globalService as unknown as Services);

const start = async () => {
  await run(globalService as unknown as Services);
  const routes = globalService.Router.getRoutes();
  const router = createRouter({
    routes: [
      ...routes,
      // {
      //     path: '/:pathMatch(.*)*',
      //     component: loadPage('NotFound'),
      //   },
    ],
    history: createWebHistory(),
  });
  const globalComponents = globalService.Component.getComponents();
  const app = createApp(App);

  app.config.globalProperties.services = globalService;

  globalComponents.forEach((component: any) => {
    const asyncComponent = defineAsyncComponent(
      () => import(/* @vite-ignore */ component.path),
    );
    app.component(component.name, asyncComponent);
  });

  app.use(router);
  app.mount('#app');
};

start();
