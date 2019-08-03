import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  showSuccess(message, title="Success") {
    this.toastr.success(message, title);
  }

  showError(message, title="Error") {
    this.toastr.error(message, title);
  }

  shoInfo(message, title="Information") {
    this.toastr.info(message, title);
  }
  
  showWarning(message, title="Warning") {
    this.toastr.warning(message, title);
  }
}