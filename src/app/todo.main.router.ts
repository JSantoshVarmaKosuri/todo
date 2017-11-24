import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const router: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})
export class MainRouter {

}
