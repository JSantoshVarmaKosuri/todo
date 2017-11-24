import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../SharedModule/todo.shared.module';

import { TodoRouter } from './todo.router';

import { TodoListComponent } from './TodoList/todo.list.component';
import { TodoEditorComponent } from './TodoList/TodoEditor/todo.editor.component';
import { TodoContainerComponent } from './TodoList/TodoContainer/todo.container.component';
import { TodoCardComponent } from './TodoList/TodoCard/todo.card.component';
import { TodoDetailComponent } from './TodoList/TodoDetail/todo.detail.component';

import { TodoListReducers } from './Store/todo.list.reducer';

@NgModule({
    declarations: [
        TodoListComponent,
        TodoContainerComponent,
        TodoEditorComponent,
        TodoCardComponent,
        TodoDetailComponent
    ],
    imports: [
        SharedModule,
        FormsModule,
        StoreModule.forRoot({todoList: TodoListReducers}),
        TodoRouter
    ],
    exports: [TodoRouter]
})
export class TodoModule {

}
