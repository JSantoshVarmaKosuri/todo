import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoListComponent } from './TodoList/todo.list.component';
import { TodoContainerComponent } from './TodoList/TodoContainer/todo.container.component';
import { TodoDetailComponent } from './TodoList/TodoDetail/todo.detail.component';

const router: Routes = [
    { path: 'home', component: TodoListComponent, children: [
        {path: '', component: TodoContainerComponent},
        {path: 'list', component: TodoContainerComponent},
        {path: 'list/:id', component: TodoDetailComponent}
    ] }
];

@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})
export class TodoRouter {

}
