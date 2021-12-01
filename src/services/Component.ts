interface ComponentRegister {
  name: string;
  component: any;
}

export interface ComponentService {
  name: string;
  components: Components;
  register: (Component: ComponentRegister, type: string) => Components;
  get: (type: string, name: string) => ComponentRegister | undefined;
  getComponents: () => ComponentRegister[];
}

interface Components {
  layout: [];
  error: [];
  [key: string]: ComponentRegister[];
}

export default class Component implements ComponentService {
  public name: string;
  public components: Components;

  constructor() {
    this.name = 'Component';

    this.components = {
      layout: [],
      error: [],
    };
  }

  register(component: ComponentRegister, type = 'shared') {
    if (!component.name) {
      throw 'Missing prop name in component';
    }

    this.components[type].push({
      name: component.name,
      component: component.component,
    });

    return this.components;
  }

  get(type: string, name: string) {
    return this.components[type].find((component) => component.name === name);
  }

  getComponents(): ComponentRegister[] {
    return Object.values(this.components).flat();
  }
}
