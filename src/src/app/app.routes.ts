import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'Veylix Tech | Custom Software & AI Solutions',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
    title: 'About Us | Veylix Tech',
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services').then((m) => m.Services),
    title: 'Services | Veylix Tech',
  },
  {
    path: 'solutions',
    loadComponent: () => import('./pages/solutions/solutions').then((m) => m.Solutions),
    title: 'Solutions | Veylix Tech',
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./pages/portfolio/portfolio').then((m) => m.Portfolio),
    title: 'Portfolio | Veylix Tech',
  },
  {
    path: 'process',
    loadComponent: () => import('./pages/process/process').then((m) => m.Process),
    title: 'Development Process | Veylix Tech',
  },
  {
    path: 'why-us',
    loadComponent: () => import('./pages/why-us/why-us').then((m) => m.WhyUs),
    title: 'Why Veylix Tech',
  },
  {
    path: 'technologies',
    loadComponent: () => import('./pages/technologies/technologies').then((m) => m.Technologies),
    title: 'Technology Stack | Veylix Tech',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
    title: 'Contact | Veylix Tech',
  },
  { path: '**', redirectTo: '' },
];
