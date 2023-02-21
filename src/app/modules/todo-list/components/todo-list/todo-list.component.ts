import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectItems } from '../../store/todo-list.selector';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoItemStatus } from '../../store/todo-list.reducer';
import { addTodoItemAction } from '../../store/todo-list.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todoListItems$ = this.store$.select(selectItems);

  newTodoListItem = this.fb.group({
    category: this.fb.nonNullable.control(
      '',
      {
        validators: [],
      },
    ),
    description: this.fb.nonNullable.control('',
      { validators: [Validators.required] }),
    status: [TodoItemStatus.NEW, Validators.required],
  });

  constructor (
    private readonly store$: Store,
    private readonly fb: FormBuilder,
  ) {}

  saveTodoItem () {
    const todoItem = this.newTodoListItem.value;
    this.store$.dispatch(addTodoItemAction({
      item: {
        status: todoItem.status,
        description: todoItem.description === undefined ? '' : todoItem.description,
        category: todoItem.category === undefined ? 'unknown' : todoItem.category,
      },
    }));
  }
}
