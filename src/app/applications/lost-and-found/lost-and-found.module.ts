import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LnfMainComponent } from './lnf-main/lnf-main.component';
import {​​ RouterModule, Routes }​​ from "@angular/router";
import {​​ SharedModule }​​ from "@app/shared/shared.module";
const routes: Routes = [
  {
    path:"main", 
    component:LnfMainComponent
  }
]

@NgModule({
  declarations: [LnfMainComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class LostAndFoundModule { }
