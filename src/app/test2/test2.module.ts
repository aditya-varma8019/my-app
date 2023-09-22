import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home2Component } from '../home2/home2.component';
import { About2Component } from '../about2/about2.component';
import { RouterModule, Routes } from '@angular/router';

var routes:Routes = [
  {path:'home2', component:Home2Component},
  {path:'about2', component:About2Component},
  {path:'', redirectTo:'home2',pathMatch:'full'}
]

@NgModule({
  declarations: [
    Home2Component,
    About2Component
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class Test2Module { }
