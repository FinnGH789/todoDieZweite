import { Component, inject } from '@angular/core';
import { TodoStore } from '../../../state/todo.store';

@Component({
  selector: 'tda-analytics',
  standalone: true,
  imports: [],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent {

  todoStore = inject(TodoStore);

}
