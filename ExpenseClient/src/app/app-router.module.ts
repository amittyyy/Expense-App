import { RouterModule, Routes} from '@angular/router';

//Import Components
import {NewEntryComponent} from './new-entry/new-entry.component';
import {EntriesComponent} from './entries/entries.component';
import {DeleteEntryComponent} from './delete-entry/delete-entry.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';

import { NgModule } from '@angular/core';

//Route
const routes: Routes = [
    { path:'', component:EntriesComponent},
    {path: 'entries', component:EntriesComponent},
    {path: 'new-entry', component:NewEntryComponent},
    {path: 'delete-entry/:id', component:DeleteEntryComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'login', component:LoginComponent},
]

//Create Module

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule
    ]
})

export class AppRouterModule{}