import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'old-demo',
    loadComponent: () => import('./pages/old-demo/old-demo.component').then(m => m.OldDemoComponent)
  },
  {
    path: 'chips-demo',
    loadComponent: () => import('./pages/chips-demo/chips-demo.component').then(m => m.ChipsDemoComponent)
  },
  {
    path: 'button-demo',
    loadComponent: () => import('./pages/button-demo/button-demo.component').then(m => m.ButtonDemoComponent)
  }
];
