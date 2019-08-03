import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthoriseService } from 'src/app/shared/services/authorise.service';
import { User } from '../../../../models/user'
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})

export class AuthSigninComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthoriseService, 
    private notificationService: NotificationService) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        userName: ['', Validators.required],
        password: ['', Validators.required]
      }
    )
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    debugger;
    this.auth.authoriseUser(this.loginForm.controls.userName.value, this.loginForm.controls.password.value)
      .subscribe(data => {
        if (data) {
          this.notificationService.showSuccess("Log-in successful!!", "Message");
          this.router.navigate(["/smartcard/list"]);
        }
      });

  }

}
