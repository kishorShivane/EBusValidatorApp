import { NgModule } from '@angular/core';
import { ListCardRoutingModule } from './list-card-routing.module';
import { ListCardComponent } from './list-card.component';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, DecimalPipe } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ListCardRoutingModule,
    SharedModule,
    NgbModule
  ],
  declarations: [
    ListCardComponent
  ],
  providers: [DecimalPipe]
})
export class ListCardModule { 


}
