import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'form',
    loadChildren: () =>
      import('./template-driven/template-driven.module').then(
        (m) => m.TemplateDrivenModule
      ),
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./data-driven/data-driven.module').then(
        (m) => m.DataDrivenModule
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: '' },
];

export const PagesRoutes = RouterModule.forChild(routes);
