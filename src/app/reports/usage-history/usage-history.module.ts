import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsageHistoryRoutingModule } from './usage-history-routing.module';
import { UsageHistoryComponent } from './usage-history.component';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from 'src/app/shared/shared.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsageHistoryComponent],
  imports: [
    CommonModule,
    UsageHistoryRoutingModule,
    DataTablesModule,
    SharedModule,
    BsDatepickerModule.forRoot(),
    FormsModule
  ]
})
export class UsageHistoryModule { }
