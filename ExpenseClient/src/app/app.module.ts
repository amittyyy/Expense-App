import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

//Service
import {EntryService} from './entry.service';
import { AppRouterModule } from './app-router.module';
import { HttpClientModule } from '@angular/common/http';
import {AuthService} from './auth.service';

//Material Design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatCardModule, 
        MatSelectModule, MatTableModule, MatToolbarModule,
        MatFormFieldModule, MatDialogModule,MatListModule,MatSortModule,MatPaginatorModule,
        MatIconModule,} from '@angular/material'; 

//Components
import { UpdateEntryComponent } from './update-entry/update-entry.component';
import { DeleteEntryComponent } from './delete-entry/delete-entry.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NewEntryComponent } from './new-entry/new-entry.component';

//forms
import {ReactiveFormsModule, FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    FooterComponent,
    HeaderComponent,
    NewEntryComponent,
    UpdateEntryComponent,
    DeleteEntryComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    //Material Desing
    BrowserAnimationsModule, MatButtonModule, MatTableModule, MatInputModule,
    MatCardModule, MatSelectModule,MatToolbarModule,MatDialogModule,MatListModule,
    MatFormFieldModule,MatSortModule,MatPaginatorModule,MatIconModule,

    AppRouterModule, FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [UpdateEntryComponent],
  providers: [EntryService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
