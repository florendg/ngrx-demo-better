import { createFeatureSelector, createSelector } from '@ngrx/store';
import { todoListFeatureKey, TodoListState } from './todo-list.reducer';

export const featureSelector = createFeatureSelector<TodoListState>(todoListFeatureKey);

export const selectItems = createSelector(
  featureSelector,
  (state) => state.items
);
