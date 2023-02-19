import { createFeature, createReducer, on } from '@ngrx/store'
import { addTodoItemAction } from './todo-list.actions'

export const todoListFeatureKey = 'todo-list'

export enum TodoItemStatus {
  NEW,
  IN_PROGRESS,
  CLOSED
}

export interface TodoItem {
  description: string;
  category: string;
  status: TodoItemStatus
}

export interface TodoListState {
  items: Array<TodoItem>;
}

export const initialState: TodoListState = {
  items: [],
}

const todoListReducer = createReducer(initialState,
  on(addTodoItemAction, (state, {item}) => ({
    ...state,
    items: [
      ...state.items,
      item
    ]
  })),
);

export const todoListFeature = createFeature({
    name: todoListFeatureKey,
    reducer: todoListReducer,
  },
)
