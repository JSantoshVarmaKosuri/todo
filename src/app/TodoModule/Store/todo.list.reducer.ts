import * as fromTodoListActions from './todo.list.actions';

import { TodoModel } from '../Models/todo.list.model';

const init_state: { todos: TodoModel[] } = {
    todos: [{
        title: 'Test Title',
        description: 'Test Description',
        createdAt: new Date().toUTCString(),
        _id: new Date().valueOf().toString()
    }, {
        title: 'Test Title',
        description: 'Test Description',
        createdAt: new Date().toUTCString(),
        _id: new Date().valueOf().toString()
    }, {
        title: 'Test Title',
        description: 'Test Description',
        createdAt: new Date().toUTCString(),
        _id: new Date().valueOf().toString()
    }, {
        title: 'Test Title',
        description: 'Test Description',
        createdAt: new Date().toUTCString(),
        _id: new Date().valueOf().toString()
    },  {
        title: 'Test Title',
        description: 'Test Description',
        createdAt: new Date().toUTCString(),
        _id: new Date().valueOf().toString()
    }]
};

export function TodoListReducers(state = init_state, action) {
    let copied_state: any;

    switch (action.type) {
        case fromTodoListActions.ADD_TODO:
            copied_state = {
                ...state,
                todos: [...state.todos, action.payload]
            };
            return copied_state;
        case fromTodoListActions.DELETE_TODO:
            copied_state = {
                ...state,
                todos: [...state.todos]
            };

            const todoIndex = copied_state.todos.findIndex((todo) => {
                return todo._id === action.payload;
            });

            if (todoIndex > -1) { copied_state.todos.splice(todoIndex, 1); }

            return copied_state;
        default:
            return state;
    }
}
