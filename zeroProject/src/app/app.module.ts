import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//Aqui também serão referenciadas as páginas
import { MapPage } from '../pages/map-page/map-page';
import { EstabelecimentoDetails } from '../pages/estabelecimento-details/estabelecimento-details';


//imports necessários para utilizar o firebase
// ver link para info: https://github.com/angular/angularfire2/blob/master/docs/1-install-and-setup.md
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';


//Também é necessário adicionar as referências nas 'declarations'
// e nos 'entryComponents'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapPage,
    EstabelecimentoDetails
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase, 'cardappio'),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapPage,
    EstabelecimentoDetails
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
