import { Action } from '@ngrx/store';

import { TodoModel } from '../Models/todo.list.model';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export class AddTodo implements Action {
    readonly type =  ADD_TODO;

    constructor(public payload: TodoModel) {}
}

export class DeleteTodo implements Action {
    readonly type = DELETE_TODO;

    constructor(public payload: string) {}
}

export type TodoListActions = AddTodo | DeleteTodo;
