import type { RouteRecordRaw } from 'vue-router';

export interface RouterService {
  name: string;
  registerRoutes: (routes: RouteRecordRaw[]) => void;
  getRoutes: () => RouteRecordRaw[];
}

export default class Router implements RouterService {
  public name: string;
  private routes: RouteRecordRaw[];

  constructor() {
    this.name = 'Router';
    this.routes = [];
  }

  registerRoutes(routes: RouteRecordRaw[]) {
    this.routes = [...this.routes, ...routes];
  }

  getRoutes() {
    return this.routes;
  }
}
