import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ReportsService } from '../reports.service';
import { Router } from '@angular/router';
import { usageSummary } from '../../../models/reports';
import { Subject } from 'rxjs';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-usage-summary',
  templateUrl: './usage-summary.component.html',
  styleUrls: ['./usage-summary.component.scss']
})
export class UsageSummaryComponent implements OnInit {
  @ViewChild('usageSummaryResult') usageSummaryResult: ElementRef;
  constructor(private service: ReportsService, private router: Router, private notificationService: NotificationService) {
  }

  //Date control properties
  bsConfig: Partial<BsDatepickerConfig> = Object.assign({}, {
    containerClass: "theme-blue",
    dateInputFormat: 'DD-MM-YYYY'
  });

  //Datatable properties
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();


  //Form properties
  fromDate: Date;
  toDate: Date;
  filteredData: usageSummary[];

  ngOnInit(): void {

    this.dtOptions = {
      searching: false,
      pageLength: 15,
      dom: 'Bfrtip',
      buttons: [
        {
          extend: 'excel',
          text: 'Download Excel',
          className: 'btn btn-primary'
        },
        {
          extend: 'pdf',
          text: 'Download PDF',
          className: 'btn btn-primary'
        }]
    };

    // this.service.GetAllTransactions().subscribe(data => {
    //   debugger;
    //   this.filteredData = data;
    //   this.dtTrigger.next();
    // });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  searchUsageSummary() {
    if (!(this.fromDate && this.toDate)) {
      this.notificationService.showWarning("Please enter from and to date!!", "Warning");
    }
    else {
      this.service.GetTransactions(this.fromDate, this.toDate).subscribe(data => {
        debugger;
        this.filteredData = data;
        this.toggleResultGrid();
      });
    }
  }


  toggleResultGrid() {
    var resultCount = this.filteredData.length;
    if ( resultCount > 0) {
      this.dtTrigger.next();
      this.usageSummaryResult.nativeElement.style = "display:block;";
      this.notificationService.shoInfo(resultCount+": records found!!","Information");
    }
    else {
      this.usageSummaryResult.nativeElement.style = "display:none;";
      this.notificationService.shoInfo("No matching records found!!","Information")
    }
  }
}
