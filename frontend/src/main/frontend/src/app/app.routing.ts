import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/index';


const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);