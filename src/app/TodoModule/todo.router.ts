import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoListComponent } from './TodoList/todo.list.component';
import { TodoContainerComponent } from './TodoList/TodoContainer/todo.container.component';

const router: Routes = [
    { path: 'home', component: TodoListComponent, children: [
        {path: '', component: TodoContainerComponent},
        {path: 'list', component: TodoContainerComponent}
    ] }
];

@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})
export class TodoRouter {

}
