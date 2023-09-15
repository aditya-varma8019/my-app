import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';

  var routes:Routes = [
    {path: "home", component: HomeComponent},
    { path: "aboutus", component: AboutusComponent},
    {path: "services", component: ServicesComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Assignment1Component,
    AboutusComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
