import { Component, Input } from '@angular/core';
import { InputComponent } from '../../input/input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'tda-form',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  validationToDo = new FormGroup({
    name: new FormControl<string>('', {
      validators: [Validators.required, Validators.maxLength(2)],
    }),
    priority: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(255)],
    }),
    description: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(255)],
    }),
  });

  get f() {
    return this.validationToDo.controls;
  }

  testForm = new FormGroup({
    testName: new FormControl<string>('', {
      validators: [Validators.maxLength(2)],
    })})

    get testcontrol() {
      return this.testForm.controls;
    }
}
