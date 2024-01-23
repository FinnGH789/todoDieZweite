import { Component } from '@angular/core';
import { FormComponent } from '../ToDo/form/form.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { AnalyticsComponent } from '../ToDo/analytics/analytics.component';

@Component({
  selector: 'tda-layout',
  standalone: true,
  imports: [FormComponent, ReactiveFormsModule, InputComponent, AnalyticsComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  formGroup = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(2)],
    }),
    priority: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(2)],
    }),
    status: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(2)],
    }),
  });
}
