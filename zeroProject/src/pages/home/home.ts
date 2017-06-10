import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import necessário para firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

//imports para tutorial do joshmorony, só para testes
import { AlertController } from 'ionic-angular';

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

  items: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController ,db: AngularFireDatabase) {
    this.items = db.list('/items');
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
  pesquisar(){
    
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

}
