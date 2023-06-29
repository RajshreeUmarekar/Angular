import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaretakerComponent } from './caretaker/caretaker.component';
import { CookComponent } from './cook/cook.component';
import { DriverComponent } from './driver/driver.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MaidComponent } from './maid/maid.component';
import { NannyComponent } from './nanny/nanny.component';
import { NurseComponent } from './nurse/nurse.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'maid', component: MaidComponent },
  { path: 'cook', component: CookComponent },
  { path: 'nanny', component: NannyComponent },
  { path: 'driver', component: DriverComponent },
  { path: 'caretaker', component: CaretakerComponent },
  { path: 'nurse', component: NurseComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
