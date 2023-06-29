import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaidComponent } from './maid/maid.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import {RouterModule} from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { CookComponent } from './cook/cook.component';
import { NannyComponent } from './nanny/nanny.component';
import { DriverComponent } from './driver/driver.component';
import { CaretakerComponent } from './caretaker/caretaker.component';
import { NurseComponent } from './nurse/nurse.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MaidComponent,
    RegisterComponent,
    LoginComponent,
    CookComponent,
    NannyComponent,
    DriverComponent,
    CaretakerComponent,
    NurseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexLayoutModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatDialogModule,
    RouterModule
  ],
  providers: [ MatDatepickerModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
