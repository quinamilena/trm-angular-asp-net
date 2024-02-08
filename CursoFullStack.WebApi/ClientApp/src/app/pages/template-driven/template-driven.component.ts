import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
})
export class TemplateDrivenComponent implements OnInit {
  firstName = null;
  lastName = null;
  city = null;
  zip = null;

  constructor() {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    console.log(f.value);
  }
}
