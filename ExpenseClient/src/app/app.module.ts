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

//Material Design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatCardModule, 
        MatSelectModule, MatTableModule, MatToolbarModule, MatDialogModule} from '@angular/material';
import { NewEntryComponent } from './new-entry/new-entry.component';

//forms
import {ReactiveFormsModule} from '@angular/forms';
import { UpdateEntryComponent } from './update-entry/update-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    FooterComponent,
    HeaderComponent,
    NewEntryComponent,
    UpdateEntryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    //Material Desing
    BrowserAnimationsModule, MatButtonModule, MatTableModule, MatInputModule,
    MatCardModule, MatSelectModule,MatToolbarModule,MatDialogModule,

    AppRouterModule,
    ReactiveFormsModule
  ],
  entryComponents: [UpdateEntryComponent],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
