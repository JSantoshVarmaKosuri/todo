import { Component } from '@angular/core';

@Component({
    selector: 'todo-container',
    templateUrl: 'todo.container.component.html',
    styleUrls: ['todo.container.component.scss']
})
export class TodoContainerComponent {
    createTodo: boolean;

    constructor() {
        this.createTodo = false;
    }

    onOpenEditor() {
        this.createTodo = !this.createTodo;
    }

    onCreateTodo(todo) {
        console.log(todo);
    }
}
