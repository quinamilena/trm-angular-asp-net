import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css'],
})
export class DataDrivenComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: [null],
      lastName: [null],
      city: [null],
      zip: [null],
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
