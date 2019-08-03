import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsageHistoryComponent } from './usage-history.component';

const usageHistoryRouting: Routes = [{
  path:'',
  component: UsageHistoryComponent
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(usageHistoryRouting)
  ],
  exports:[RouterModule]
})
export class UsageHistoryRoutingModule { }
