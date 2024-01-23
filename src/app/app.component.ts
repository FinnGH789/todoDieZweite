import { Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './ToDo/form/form.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AnalyticsComponent } from './ToDo/analytics/analytics.component';
import { LayoutComponent } from './layout/layout.component';
import { TodoStore } from '../state/todo.store';
import { STATE_SIGNAL } from '@ngrx/signals/src/state-signal';
import { getState } from '@ngrx/signals';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    InputComponent,
    ReactiveFormsModule,
    LayoutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [TodoStore]
})
export class AppComponent {

  todoStore = inject(TodoStore);

  constructor(){
    effect(() => {
      const state = getState(this.todoStore);
      console.log('Todo state changed', state);
    })
  }

}
