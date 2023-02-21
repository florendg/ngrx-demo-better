import { createAction, props } from '@ngrx/store';
import { type TodoItem } from './todo-list.reducer';

export const addTodoItemAction = createAction(
  '[TodoList] Add item',
  props<{ item: TodoItem }>()
);
