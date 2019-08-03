import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AuthSigninRoutingModule } from './auth-signin-routing.module';
import { AuthSigninComponent } from './auth-signin.component';


@NgModule({
  imports: [
    CommonModule,
    AuthSigninRoutingModule,
    ReactiveFormsModule,
    NgbModule    
  ],
  declarations: [
    AuthSigninComponent
  ]
})
export class AuthSigninModule { }
