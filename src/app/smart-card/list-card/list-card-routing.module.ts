import { NgModule } from '@angular/core';
import {Routes, RouterModule}  from '@angular/router'
import { ListCardComponent } from './list-card.component';

let listCardRouting: Routes = [{
path: '',
component: ListCardComponent
}]

@NgModule({
  imports: [
    RouterModule.forChild(listCardRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class ListCardRoutingModule { }
