import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TodoModule } from './TodoModule/todo.module';

import { MainRouter } from './todo.main.router';

import { MainComponent } from './todo.main.component';

import { UtilsService } from './Services/todo.utils.service';

@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        BrowserModule,
        TodoModule,
        MainRouter
    ],
    exports: [],
    providers: [UtilsService],
    bootstrap: [MainComponent]
})
export class MainModule {

}
