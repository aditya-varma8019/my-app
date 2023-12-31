import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { CountriesComponent } from './countries/countries.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MyformsComponent } from './myforms/myforms.component';


  var routes:Routes = [
    {path: "home", component: HomeComponent},
    {path: "aboutus", component: AboutusComponent},
    {path: "services", component: ServicesComponent},
    {path: "countries", component: CountriesComponent},
    {path: "assignment1", component: Assignment1Component},
    {path: "login", component: LoginComponent},
    {path: "signup", component: SignupComponent}, 
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'test2', loadChildren:() => import('./test2/test2.module').then(m => m.Test2Module)},
    {path:'test3', loadChildren:() => import('./test3/test3.module').then(m => m.Test3Module)},
    {path:'assignment1', loadChildren:() => import('./assignment1/assignment1.module').then(m => m.Assignment1Module)}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Assignment1Component,
    AboutusComponent,
    ServicesComponent,
    CountriesComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,FormsModule, RouterModule.forRoot(routes), HttpClientModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
