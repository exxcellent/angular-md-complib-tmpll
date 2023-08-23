import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'chips-demo',
    loadComponent: () => import('./pages/chips-demo/chips-demo.component').then(m => m.ChipsDemoComponent)
  },
  {
    path: 'button-demo',
    loadComponent: () => import('./pages/button-demo/button-demo.component').then(m => m.ButtonDemoComponent)
  },
  {
    path: 'checkbox-demo',
    loadComponent: () => import('./pages/checkbox-demo/checkbox-demo.component').then(m => m.CheckboxDemoComponent)
  },
  {
    path: 'radio-demo',
    loadComponent: () => import('./pages/radio-demo/radio-demo.component').then(m => m.RadioDemoComponent)
  },
  {
    path: 'input-demo',
    loadComponent: () => import('./pages/input-demo/input-demo.component').then(m => m.InputDemoComponent)
  },
  {
    path: 'card-demo',
    loadComponent: () => import('./pages/card-demo/card-demo.component').then(m => m.CardDemoComponent)
  },
  {
    path: 'sliders-demo',
    loadComponent: () => import('./pages/sliders-demo/sliders-demo.component').then(m => m.SlidersDemoComponent)
  }
];
