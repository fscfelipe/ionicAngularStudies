import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../map-page/map-page';
import { HomePage } from '../home/home';

/**
 * Generated class for the Estabelecimentos page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-estabelecimentos',
  templateUrl: 'estabelecimentos.html',
})
export class Estabelecimentos {

  mapPage = MapPage;
  homePage = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Estabelecimentos');
  }

}
