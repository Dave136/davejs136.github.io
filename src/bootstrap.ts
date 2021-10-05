import type { Services } from './globalService';

const modules = [
  import('./modules/Home/index'),
  import('./modules/Projects/index'),
  import('./modules/About/index'),
  import('./modules/Contact/index'),
];

export async function run(globalServices: Services) {
  const initModules = modules.map(async (module) => {
    const mod = await module;

    return mod.default(globalServices);
  });

  return Promise.all(initModules);
}
