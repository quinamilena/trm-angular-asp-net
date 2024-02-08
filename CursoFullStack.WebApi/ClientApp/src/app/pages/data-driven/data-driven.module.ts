import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';

import { DataDrivenComponent } from './data-driven.component';
import { DataDrivenRoutes } from './data-driven.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DataDrivenComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    DataDrivenRoutes,

    DividerModule,
    ButtonModule,
    InputTextModule,
  ],
})
export class DataDrivenModule {}
