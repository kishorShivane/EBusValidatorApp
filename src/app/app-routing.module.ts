import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { BasePageComponent } from './layout/base-page.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'auth/signin',
        pathMatch:'full'
      },
      {
        path: 'auth',
        loadChildren: './auth/authentication/authentication.module#AuthenticationModule'
      }
    ]
  },
  {
    path: '',
    component: BasePageComponent,
    children: [
      {
        path: 'smartcard',
        loadChildren: './smart-card/smart-card.module#SmartCardModule'
      },
      {
        path: 'reports',
        loadChildren: './reports/reports.module#ReportsModule'
      }
    ]
  }
];

@NgModule({
  imports: 
  [RouterModule.forRoot(routes)],
  exports: 
  [RouterModule]
})
export class AppRoutingModule { }
