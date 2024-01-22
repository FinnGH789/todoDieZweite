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
    FormComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnChanges {

  protected formGroup!: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(4)]),
      priority: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required])
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
}
