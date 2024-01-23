import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { InputComponent } from '../../input/input.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LayoutComponent } from '../../layout/layout.component';

@Component({
  selector: 'tda-form',
  standalone: true,
  imports: [
    InputComponent,
    ReactiveFormsModule,
    LayoutComponent,
    FormComponent
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {

  @Input() formGroupTodo!: FormGroup;

}
