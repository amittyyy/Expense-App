import { RouterModule, Routes} from '@angular/router';

//Import Components
import {NewEntryComponent} from './new-entry/new-entry.component';
import {EntriesComponent} from './entries/entries.component';
import { NgModule } from '@angular/core';

//Route

const routes: Routes = [
    { path:'', component:EntriesComponent},
    {path: 'entries', component:EntriesComponent},
    {path: 'new-entry', component:NewEntryComponent}
]

//Create Module

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouterModule{}