import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';

const routes: Routes = [{
  path: 'todo',
  pathMatch: 'full',
  loadChildren: async () => (await import('./modules/todo-list/todo-list.module')).TodoListModule
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
