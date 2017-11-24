import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TodoModel } from '../../Models/todo.list.model';

@Component({
    selector: 'todo-card',
    templateUrl: 'todo.card.component.html',
    styleUrls: ['todo.card.component.scss']
})
export class TodoCardComponent {
    @Input() todo: TodoModel;
    @Output() edit = new EventEmitter<any>();

    onEdit() {
        this.edit.emit({ _id: this.todo._id});
    }
}
