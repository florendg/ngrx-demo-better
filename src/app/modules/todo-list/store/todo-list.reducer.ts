import {createFeature, createReducer} from "@ngrx/store";

export const todoListFeatureKey = 'todo-list';

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

export const initialState :TodoListState = {
  items: []
}

export const todoListFeature = createFeature({
  name: todoListFeatureKey,
  reducer: createReducer(initialState)
});
