import {NgModule}   from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { CardRegistrationComponent } from './card-registration.component';

const cardRegistrationRoutes : Routes=[
    {
        path:'',
        component: CardRegistrationComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(cardRegistrationRoutes)
    ],
    exports:[RouterModule]
})

export class CardRegistrationRoutingModule{}