import type { Services } from './globalService';

// Layouts
const layouts = [
  {
    name: 'Layout',
    path: './core/Layout/Layout.vue',
  },
];

// ErrorPage
const errors = [
  {
    name: '404',
    path: './core/ErrorPage/404.vue',
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
