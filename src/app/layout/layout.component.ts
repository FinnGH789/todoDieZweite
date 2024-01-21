import { Component } from '@angular/core';
import { FormComponent } from '../ToDo/form/form.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'tda-layout',
  standalone: true,
  imports: [FormComponent, ReactiveFormsModule, InputComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  public formGroupParent = new FormGroup({
    todoFormGroup: new FormGroup({
      name: new FormControl('', Validators.maxLength(2)),
      priority: new FormControl('', Validators.maxLength(2)),
      description: new FormControl('', Validators.maxLength(2)),
    }),
  });
}
