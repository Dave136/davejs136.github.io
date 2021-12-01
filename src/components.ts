import { defineAsyncComponent } from 'vue';
import type { Services } from './globalService';

// Layouts
const layouts = [
  {
    name: 'Layout',
    component: defineAsyncComponent(() => import('./core/Layout/Layout.vue')),
  },
];

// ErrorPage
const errors = [
  {
    name: '404',
    component: defineAsyncComponent(() => import('./core/ErrorPage/404.vue')),
  },
];

function registerLayouts(services: Services) {
  layouts.forEach((layout) => services.Component.register(layout, 'layout'));
}

function registerErrorPage(services: Services) {
  errors.forEach((error) => services.Component.register(error, 'error'));
}

export function registerGlobalComponents(globalServices: Services) {
  registerLayouts(globalServices);
  registerErrorPage(globalServices);
}
