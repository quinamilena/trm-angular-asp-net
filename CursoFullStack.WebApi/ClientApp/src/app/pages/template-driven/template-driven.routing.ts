import { RouterModule, Routes } from '@angular/router';

import { TemplateDrivenComponent } from './template-driven.component';

const routes: Routes = [
  { path: 'template-driven', component: TemplateDrivenComponent },
];

export const TemplateDrivenRoutes = RouterModule.forChild(routes);
