import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsageSummaryComponent } from './usage-summary.component';


const usageSummaryRouting: Routes = [{
  path:'',
  component: UsageSummaryComponent
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(usageSummaryRouting)
  ],
  exports:[RouterModule]
})
export class UsageSummaryRoutingModule { }
