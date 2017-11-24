import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'todo-editor',
    templateUrl: 'todo.editor.component.html',
    styleUrls: ['todo.editor.component.scss']
})
export class TodoEditorComponent {
    @Output() dismiss = new EventEmitter<any>();
    @Output() create = new EventEmitter<any>();

    onCreateTodo(form: NgForm) {
        form.reset();
        this.create.emit(form.value);
        this.dismiss.emit();
    }

    onDismiss() {
        this.dismiss.emit();
    }
}
