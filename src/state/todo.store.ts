import { signalStore, withState } from "@ngrx/signals";
import { Todo } from "../models/todo";


type TodoState = {
    todos: Todo[];
    isLoading: boolean;
};

const initialState: TodoState = {
    todos: [],
    isLoading: false,
};

export const TodoStore = signalStore(
    { providedIn: 'root' },
    withState(initialState)
)