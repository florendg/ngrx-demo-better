import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import {StoreModule} from "@ngrx/store";
import {todoListFeature} from "./store/todo-list.reducer";

@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(todoListFeature)
  ]
})
export class TodoListModule { }
