import { signalStore, withComputed, withState } from '@ngrx/signals';
import { Todo } from '../models/todo';
import { computed } from '@angular/core';

type TodoState = {
  todos: Todo[];
  finishedTodos: Todo[];
  inProcessTodos: Todo[];
  canceledTodos: Todo[];
};

const initialState: TodoState = {
  todos: [],
  finishedTodos: [],
  inProcessTodos: [],
  canceledTodos: [],
};

export const TodoStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),

  withComputed(({ todos }) => ({
    todoCount: computed(() => todos().length),
  })),
);
