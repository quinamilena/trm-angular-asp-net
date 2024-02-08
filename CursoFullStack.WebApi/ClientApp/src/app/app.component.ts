import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'app';

  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-chart-bar',
        routerLink: [''],
      },
      {
        label: 'Template Driven',
        icon: 'pi pi-fw pi-book',
        routerLink: ['form/template-driven'],
      },
      {
        label: 'Data Driven',
        icon: 'pi pi-fw pi-book',
        routerLink: ['form/data-driven'],
      },
    ];
  }
}
