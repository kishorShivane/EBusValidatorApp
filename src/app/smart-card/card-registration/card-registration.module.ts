import { NgModule } from '@angular/core';
import { CardRegistrationComponent } from './card-registration.component';
import { CardRegistrationRoutingModule } from './card-registration-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CardRegistrationRoutingModule,
    SharedModule,
    NgbModule
    ],
  declarations: [
    CardRegistrationComponent
  ]  
})
export class CardRegistrationModule { }
