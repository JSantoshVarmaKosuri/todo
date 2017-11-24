import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

import { TodoModel } from '../../Models/todo.list.model';
import { DeleteTodo } from '../../Store/todo.list.actions';

@Component({
    selector: 'todo-detail',
    templateUrl: 'todo.detail.component.html',
    styleUrls: ['todo.detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
    state: Observable<any>;
    todo: TodoModel;

    constructor(private store: Store<any>, private router: Router, private route: ActivatedRoute) {
        this.state = this.store.select('todoList');
    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.state
            .take(1)
            .subscribe((todoList) => {
                this.todo = todoList.todos.find((todo) => {
                    return todo._id === params.id;
                });

                if (!this.todo) {
                    this.router.navigate(['/home']);
                }
            });
        });
    }

    onRemove() {
        this.store.dispatch(new DeleteTodo(this.todo._id));
        this.router.navigate(['/home']);
    }

}
