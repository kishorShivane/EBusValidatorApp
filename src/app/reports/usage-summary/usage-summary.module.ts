import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsageSummaryRoutingModule } from './usage-summary-routing.module';
import { UsageSummaryComponent } from './usage-summary.component';
import { DataTablesModule } from 'angular-datatables';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UsageSummaryComponent],
  imports: [
    CommonModule,
    UsageSummaryRoutingModule,
    DataTablesModule,
    SharedModule,
    BsDatepickerModule.forRoot(),
    FormsModule
  ]
})
export class UsageSummaryModule { }
