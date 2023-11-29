import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
Q9Component
import { Q2Component } from './app/q2/q2.component';
import { Q3Component } from './app/q3/q3.component';
import { Q4Component } from './app/q4/q4.component';
import { Q5Component } from './app/q5/q5.component';
import { Q6Component } from './app/q6/q6.component';
import { Q7Component } from './app/q7/q7.component';
import { Q8Component } from './app/q8/q8.component';
import { Q9Component } from './app/q9/q9.component';
import { Q1Component } from './app/q1/q1.component';

var routes:Routes = [
  {path:'q1', component: Q1Component},
  {path:'q2', component: Q2Component},
  {path:'q3', component: Q3Component},
  {path:'q4', component: Q4Component},
  {path:'q5', component: Q5Component},
  {path:'q6', component: Q6Component},
  {path:'q7', component: Q7Component},
  {path:'q8', component: Q8Component},
  {path:'q9', component: Q9Component},
  {path:'', redirectTo:'q1', pathMatch:'full'}
]
@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class Assignment1Module { }
