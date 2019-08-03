import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { BasePageComponent } from './layout//base-page.component';
import { AuthComponent } from './auth/auth.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { NavLogoComponent } from './layout/navigation/nav-logo/nav-logo.component';
import { NavContentComponent } from './layout/navigation/nav-content/nav-content.component';
import { NavigationItem } from './layout/navigation/navigation';
import { NavGroupComponent } from './layout/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './layout/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './layout/navigation/nav-content/nav-item/nav-item.component';
import { NavBarComponent } from './layout//nav-bar/nav-bar.component';
import { ToggleFullScreenDirective } from './shared/full-screen/toggle-full-screen';
import { NgbButtonsModule, NgbDropdownModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NavLeftComponent } from './layout/nav-bar/nav-left/nav-left.component';
import { NavSearchComponent } from './layout/nav-bar/nav-left/nav-search/nav-search.component';
import { NavRightComponent } from './layout/nav-bar/nav-right/nav-right.component';
import { ChatUserListComponent } from './layout/nav-bar/nav-right/chat-user-list/chat-user-list.component';
import { FriendComponent } from './layout/nav-bar/nav-right/chat-user-list/friend/friend.component';
import { ChatMsgComponent } from './layout/nav-bar/nav-right/chat-msg/chat-msg.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { LoadingScreenInterceptor } from './intersceptors/loading-screen.interceptor';
import { LoadingScreenComponent } from './shared/components/loading-screen/loading-screen.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    BasePageComponent,
    AuthComponent,
    NavigationComponent,
    NavLogoComponent,
    NavContentComponent,
    NavGroupComponent,
    NavCollapseComponent,
    NavItemComponent,
    NavBarComponent,
    ToggleFullScreenDirective,
    NavLeftComponent,
    NavSearchComponent,
    NavRightComponent,
    ChatUserListComponent,
    FriendComponent,
    ChatMsgComponent,
    LoadingScreenComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbButtonsModule,
    NgbTabsetModule,
    HttpClientModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut:3000
    }),
    BsDatepickerModule.forRoot()
  ],
  providers: [
    NavigationItem, 
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingScreenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
