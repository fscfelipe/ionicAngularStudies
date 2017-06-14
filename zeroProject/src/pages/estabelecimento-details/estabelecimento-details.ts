import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { PipeTransform, Pipe } from '@angular/core';

/**
 * Generated class for the EstabelecimentoDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-estabelecimento-details',
  templateUrl: 'estabelecimento-details.html',
})
export class EstabelecimentoDetails {

   item: FirebaseListObservable<any>;
   produtos: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    this.item = navParams.get('item');
    this.produtos =navParams.get('itemCardapios');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstabelecimentoDetails');
  }


  print(any){
    console.log(any);
  }
 

}
