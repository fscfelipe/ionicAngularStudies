//aos imports para criar o side-menu, foram adicionados:
// ViewChild, Nav
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//Todas as páginas criadas devem ser referenciadas aqui
// e no arquivo app.module.ts
// import { } from '';
import {MapPage} from '../pages/map-page/map-page';

import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  //adicionado para criação do side menu
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any}>;

  //essa variável define a página inicial do aplicativo
  //se quiséssemos colocar a página do mapa seria 'MapPage'
  rootPage:any = HomePage;

  //os argumentos do construtor foram colocados em public, para o método de inicializar
  // o app utilizar essar variáveis.
  constructor(public platform: Platform, public statusBar: StatusBar,public splashScreen: SplashScreen) {
    this.initializeApp();

    //atribui a variável page com os componetes das páginas
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Mapa', component: MapPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


}

