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

   estabelecimento: Object;
   estabKey: string;

   produtosArray: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    this.estabelecimento = navParams.get('estabelecimento');
    this.estabKey = navParams.get('estabKey');
    this.produtosArray = new Array;
    this.iniciarCadapios(); 
  }

  iniciarCadapios(){
    this.getDB('/cardapios/'+this.estabKey).subscribe( snapshot => {
      snapshot.forEach(cardapio => {
        this.getDB('/cardapios/'+this.estabKey+'/'+cardapio.key).subscribe( tipoCardapio => {
          tipoCardapio.forEach(dadosCardapio => {
            this.produtosArray.push(dadosCardapio);
          })
        });
      });
    });
  }

  getDB(url: string): FirebaseListObservable<any>{
    return this.db.list(url, {preserveSnapshot: true});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstabelecimentoDetails');
  }


  print(any){
    console.log(any);
  }
 

}
