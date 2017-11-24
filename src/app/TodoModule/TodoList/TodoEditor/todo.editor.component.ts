import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UtilsService, FormErrors } from '../../../Services/todo.utils.service';

@Component({
    selector: 'todo-editor',
    templateUrl: 'todo.editor.component.html',
    styleUrls: ['todo.editor.component.scss']
})
export class TodoEditorComponent {
    @Output() dismiss = new EventEmitter<any>();
    @Output() create = new EventEmitter<any>();

    errors: FormErrors;

    constructor(private utilsService: UtilsService) {
        this.errors = {
            valid: false,
            message: null,
            controls: {
                tittle: {
                    required: false
                },
                desctription: {
                    required: false
                }
            }
        };
    }

    onCreateTodo(form: NgForm) {
        if (form.value.title && form.value.description) {
            this.create.emit(form.value);
            form.reset();
            this.dismiss.emit();
        }
    }

    onDismiss(form: NgForm) {
        form.reset();
        this.dismiss.emit();
    }
}
