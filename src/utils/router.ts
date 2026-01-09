export type Route = '/' | '/mapmind' | '/pocket-assistant' | '/contact' | '/impressum' | '/datenschutz';

type RouteHandler = () => void;

class Router {
  private routes: Map<Route, RouteHandler> = new Map();
  private currentRoute: Route = '/';
  private listeners: ((route: Route) => void)[] = [];

  constructor() {
    window.addEventListener('popstate', () => {
      this.navigate(this.getRouteFromPath(), false);
    });
  }

  private getRouteFromPath(): Route {
    const path = window.location.pathname;
    const validRoutes: Route[] = ['/', '/mapmind', '/pocket-assistant', '/contact', '/impressum', '/datenschutz'];
    return validRoutes.includes(path as Route) ? (path as Route) : '/';
  }

  register(route: Route, handler: RouteHandler): void {
    this.routes.set(route, handler);
  }

  navigate(route: Route, pushState = true): void {
    if (pushState) {
      window.history.pushState({}, '', route);
    }
    this.currentRoute = route;
    const handler = this.routes.get(route);
    if (handler) {
      handler();
    }
    this.listeners.forEach(callback => callback(route));
    window.scrollTo(0, 0);
  }

  get route(): Route {
    return this.currentRoute;
  }

  init(): void {
    this.navigate(this.getRouteFromPath(), false);
  }

  onRouteChange(callback: (route: Route) => void): () => void {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }
}

export const router = new Router();
