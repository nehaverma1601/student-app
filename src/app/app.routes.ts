import { Routes } from '@angular/router';
import { AddComponent } from './posts/add/add.component';
import { ListComponent } from './posts/list/list.component';
import { EditComponent } from './posts/edit/edit.component';

export const routes: Routes = [
    {path:'list', component:ListComponent},
    {path:'add', component:AddComponent},
    {path:'edit/:id', component:EditComponent},
    {path:'', redirectTo:'/list', pathMatch:'full'}
];
