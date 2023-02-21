import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { StoreModule } from '@ngrx/store';
import { todoListFeature } from './store/todo-list.reducer';
import { type Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'

const routes: Route[] = [
  {
    path: '',
    component: TodoListComponent
  }
];

@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(todoListFeature),
    RouterModule.forChild(routes)
  ]
})
export class TodoListModule { }
