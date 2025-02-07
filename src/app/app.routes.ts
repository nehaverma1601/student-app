import { Routes } from '@angular/router';
import { CreateStudentComponent } from './components/students/add/add.component';
import { StudentDetailsComponent } from './components/students/details/details.component';
import { StudentListComponent } from './components/students/list/list.component';
import { UpdateStudentComponent } from './components/students/edit/edit.component';

export const routes: Routes = [
    {path:'list', component:StudentListComponent},
    {path:'add', component:CreateStudentComponent},
    {path:'details/:id', component:StudentDetailsComponent},
    {path:'edit/:id', component:UpdateStudentComponent},
    {path:'', redirectTo:'/list', pathMatch:'full'}
];
