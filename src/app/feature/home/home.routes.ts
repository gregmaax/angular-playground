import {Routes} from '@angular/router';

export default <Routes>[
  {
    path: '',
    providers: [],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./home.component').then((m) => m.HomeComponent),
      },
    ],
  },
];
