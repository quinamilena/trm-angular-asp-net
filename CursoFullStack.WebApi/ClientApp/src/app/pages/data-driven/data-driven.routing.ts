import { RouterModule, Routes } from '@angular/router';

import { DataDrivenComponent } from './data-driven.component';

const routes: Routes = [
  { path: 'data-driven', component: DataDrivenComponent },
];

export const DataDrivenRoutes = RouterModule.forChild(routes);
