import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import necessário para firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

//imports para tutorial do joshmorony, só para testes
import { AlertController, ActionSheetController } from 'ionic-angular';
import {Subject} from 'rxjs/Subject';

import { EstabelecimentoDetails } from '../estabelecimento-details/estabelecimento-details';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //AQUI PODEMOS DECLARAR VARIÁVEIS QUE PODERÃO SER MANIPULADAS
  // PARA SEREM ADICIONADAS FUNCIONALIDADES, COMO A LISTA DE OBJETOS
  // QUE SERÃO "IMPORTADOS" DE UM BANCO EM UM SERVIDOR
  // EX: public x: number = 0;
  // Para acessar a variável no página html, usar {{x}}

  itemsQuery: FirebaseListObservable<any[]>;
  originalItems: FirebaseListObservable<any[]>;
  items: FirebaseListObservable<any[]>;
  itemSubject: Subject<any>;
  
  

  constructor(public navCtrl: NavController, public alertCtrl: AlertController ,
  public db: AngularFireDatabase , public actionSheetCtrl: ActionSheetController) {
    this.itemSubject = new Subject();
    
    //para a função de pesquisa, e recebimento dos dados
    //é preciso ter atenção quanto a padronização do banco
    this.itemsQuery = db.list('/items', {
      query: {
        orderByChild: 'nome',
        equalTo: this.itemSubject
      }
    });

    this.originalItems = db.list('/items', {query: {orderByChild: 'nome'}});
    this.items = db.list('/items', {query: {orderByChild: 'nome'}});
    
  }

  //Aqui em baixo, poderão ser adicionador método que irão manipular
  //variáveis, ou irão retornar dados para a página html.
  //ex: 
  // printValor(){
  //    return this.x; 
  // }
  //Esse método pode ser acessado pela página html da seguinte forma
  //ex: <ion-buttons>
  //      <button ion-button block (click)="printValor()">Printar</button>
  //    </ion-buttons>
  //

  //Função de pesquisa da home
  pesquisar(searchEvent){
    let term = searchEvent.target.value || '';
    // We will only perform the search if we have 3 or more characters
    if (term.trim() === '' || term.trim().length < 3) {
      // Load cached users
      this.items = this.originalItems;
    } else {
       this.itemSubject.next(term) ;
       this.items = this.itemsQuery;
    }
  }

  addItem(){
  let prompt = this.alertCtrl.create({
    title: 'Nome do item',
    message: "Digite um nome para o item",
    inputs: [
      {
        name: 'title',
        placeholder: 'Name'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          this.items.push({
            title: data.title
          });
        }
      }
    ]
  });
  prompt.present();
}

showOptions(item, itemCardapios) {
  /*let actionSheet = this.actionSheetCtrl.create({
    title: 'O que você quer fazer?',
    buttons: [
      {
        text: 'Delete Item',
        role: 'destructive',
        handler: () => {
          this.removeItem(itemId);
        }
      },{
        text: 'Update title',
        handler: () => {
          this.updateItem(itemId, itemTitle);
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present();
  */
   this.navCtrl.push(EstabelecimentoDetails, {item, itemCardapios});
}

removeItem(itemId: string){
  this.items.remove(itemId);
}

updateItem(itemId, itemTitle){
  let prompt = this.alertCtrl.create({
    title: 'Item Name',
    message: "Update the name for this item",
    inputs: [
      {
        name: 'title',
        placeholder: 'Title',
        value: itemTitle
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          this.items.update(itemId, {
            title: data.title
          });
        }
      }
    ]
  });
  prompt.present();
}


}
