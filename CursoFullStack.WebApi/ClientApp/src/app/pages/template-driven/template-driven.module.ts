import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';

import { TemplateDrivenComponent } from './template-driven.component';
import { TemplateDrivenRoutes } from './template-driven.routing';
import { FormsModule, NgForm } from '@angular/forms';

@NgModule({
  declarations: [TemplateDrivenComponent],
  imports: [
    CommonModule,
    TemplateDrivenRoutes,
    FormsModule,

    ButtonModule,
    InputTextModule,
    DividerModule,
  ],
})
export class TemplateDrivenModule {}
