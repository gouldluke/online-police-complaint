import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { ComplaintComponent } from './basic-form/complaint/complaint.component';
import { OfficerComponent } from './basic-form/officer/officer.component';
import { PlaintiffComponent } from './basic-form/plaintiff/plaintiff.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    ComplaintComponent,
    OfficerComponent,
    PlaintiffComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
