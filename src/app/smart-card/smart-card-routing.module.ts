import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
        {
            path: '',
            loadChildren: './list-card/list-card.module#ListCardModule'
        },
        {
            path: 'list',
            loadChildren: './list-card/list-card.module#ListCardModule'
        },
        {
            path: 'register',
            loadChildren: './card-registration/card-registration.module#CardRegistrationModule'
        },
        {
          path: 'register/:id',
          loadChildren: './card-registration/card-registration.module#CardRegistrationModule'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartCardRoutingModule { }
