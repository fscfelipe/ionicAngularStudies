import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Classes from the tutorial
import { Users } from '../pages/users/users';
import { Repos } from '../pages/repos/repos';
import { Organizations } from '../pages/organizations/organizations';
import { GithubUsers } from '../providers/github-users';
import {UserDetails} from '../pages/user-details/user-details';

@NgModule({
  declarations: [
    MyApp,
    Users,
    Repos,
    Organizations,
    UserDetails
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Users,
    Repos,
    Organizations,
    UserDetails
  ],
  providers: [
    GithubUsers, // Add GithubUsers provider
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
