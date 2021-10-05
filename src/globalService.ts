import Router, { RouterService } from './services/Router';
import Component, { ComponentService } from './services/Component';

export interface Services {
  Router: RouterService;
  Component: ComponentService;
}

export interface GlobalServices {
  [key: string]: string;
}

class GlobalService implements GlobalServices {
  [k: string]: any;
  protected services: string[];

  constructor() {
    this.services = [];
  }

  register(Service: any) {
    const service = new Service(this);
    const serviceName = service.name;

    if (this.services.includes(serviceName)) {
      throw new Error(`Service ${serviceName} already exist`);
    }

    this.services.push(serviceName);
    this[serviceName] = service;
  }
}

const globalService = new GlobalService();

globalService.register(Router);
globalService.register(Component);

export default globalService;
