import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const reportsRouting : Routes = [
  {
    path:'',
    loadChildren:'./usage-summary/usage-summary.module#UsageSummaryModule'
  },
  {
    path:'usageSummary',
    loadChildren:'./usage-summary/usage-summary.module#UsageSummaryModule'
  },
  {
    path:'usageHistory',
    loadChildren:'./usage-history/usage-history.module#UsageHistoryModule'
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(reportsRouting)
  ],
  exports:[RouterModule]
})
export class ReportsRoutingModule { }
