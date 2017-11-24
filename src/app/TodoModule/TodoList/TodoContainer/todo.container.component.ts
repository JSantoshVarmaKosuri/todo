import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Todo, TodoSaveModel, TodoModel } from '../../Models/todo.list.model';
import { AddTodo } from '../../Store/todo.list.actions';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'todo-container',
    templateUrl: 'todo.container.component.html',
    styleUrls: ['todo.container.component.scss']
})
export class TodoContainerComponent {
    createTodo: boolean;
    todosState: Observable<any>;

    constructor(private store: Store<any>, private router: Router) {
        this.createTodo = false;
        this.todosState = this.store.select('todoList');
    }

    onOpenEditor() {
        this.createTodo = !this.createTodo;
    }

    onCreateTodo(todo: TodoSaveModel) {
        this.store.dispatch(new AddTodo(new Todo(todo.title, todo.description)));
    }

    onEditTodo(todo) {
        this.router.navigate(['/home/list', todo._id]);
    }
}
