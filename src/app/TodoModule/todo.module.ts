import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../SharedModule/todo.shared.module';

import { TodoRouter } from './todo.router';

import { TodoListComponent } from './TodoList/todo.list.component';
import { TodoEditorComponent } from './TodoList/TodoEditor/todo.editor.component';
import { TodoContainerComponent } from './TodoList/TodoContainer/todo.container.component';

@NgModule({
    declarations: [
        TodoListComponent,
        TodoContainerComponent,
        TodoEditorComponent
    ],
    imports: [
        SharedModule,
        FormsModule,
        TodoRouter
    ],
    exports: [TodoRouter]
})
export class TodoModule {

}
