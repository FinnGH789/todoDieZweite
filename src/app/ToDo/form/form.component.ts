import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, effect, inject } from '@angular/core';
import { InputComponent } from '../../input/input.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LayoutComponent } from '../../layout/layout.component';
import { Todo } from '../../../models/todo';
import { TodoStore } from '../../../state/todo.store';
import { getState } from '@ngrx/signals';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'tda-form',
  standalone: true,
  imports: [
    InputComponent,
    ReactiveFormsModule,
    LayoutComponent,
    FormComponent,
    JsonPipe
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {

  @Input() formGroupTodo!: FormGroup;

  todoStore = inject(TodoStore);

  constructor(){
    effect(() => {
      const state = getState(this.todoStore);
      console.log('Todo state changed', state);
    })
  }

onSubmit() {
  this.todoStore.todos().push(this.formGroupTodo.value);
  this.formGroupTodo.reset('')
}
    
}
