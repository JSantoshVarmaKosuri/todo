import { Component } from '@angular/core';

@Component({
    selector: 'todo-header',
    templateUrl: 'todo.header.component.html',
    styleUrls: ['todo.header.component.scss']
})
export class HeaderComponent {
    toggleMenu: boolean;

    constructor() {
        this.toggleMenu = false;
    }

    onMenu() {
        this.toggleMenu = !this.toggleMenu;
    }
}
