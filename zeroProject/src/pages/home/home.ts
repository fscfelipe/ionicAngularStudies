import { Component } from '@angular/core';
import { NavController, ViewController, Nav } from 'ionic-angular';

//import necessário para firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

//imports para tutorial do joshmorony, só para testes
import { AlertController, ActionSheetController } from 'ionic-angular';
import {Subject} from 'rxjs/Subject';

import { EstabelecimentoDetails } from '../estabelecimento-details/estabelecimento-details';
import { MapPage } from '../map-page/map-page';



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
  public toggled: boolean;

  estabQuery: FirebaseListObservable<any[]>;
  originalEstabele: FirebaseListObservable<any[]>;
  estabelecimentos: FirebaseListObservable<any[]>;
  estabSubject: Subject<any>;
  estabArray: Array<any>;
  originalEstabArray: Array<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController ,
  public db: AngularFireDatabase , public actionSheetCtrl: ActionSheetController) {
    //instanciando as tabs

     this.toggled = false;
    this.estabelecimentos = db.list('/estabelecimentos');
    this.estabArray = new Array;
    this.originalEstabArray = new Array;
    this.iniciarEstabelecimentos();
    this.estabArray = this.originalEstabArray;

    /*this.itemSubject = new Subject();
    
    //para a função de pesquisa, e recebimento dos dados
    //é preciso ter atenção quanto a padronização do banco
    this.itemsQuery = db.list('/items', {
      query: {
        orderByChild: 'nome',
        equalTo: this.itemSubject
      }
    });

    this.originalItems = db.list('/items', {query: {orderByChild: 'nome'}});
    this.items = db.list('/items', {query: {orderByChild: 'nome'}});*/
    
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

    toggleSearch() {
       this.toggled = this.toggled ? false : true;
       this.estabArray = this.originalEstabArray;
    }

  iniciarEstabelecimentos(){
    this.getDB('/estabelecimentos').subscribe( snapshot => {
      snapshot.forEach(redes => {
        this.getDB('/estabelecimentos/'+redes.key).subscribe(estabelecimento =>{
          estabelecimento.forEach(dados => {
             this.originalEstabArray.push(dados);
          });
        });
      });
    });
  }

  getDB(url: string): FirebaseListObservable<any>{
    return this.db.list(url, {preserveSnapshot: true});
  }

  printa(item){
    console.log(item);
  }

  pesquisar(nome){
    let term: string = nome.target.value || '';
    console.log(term);
    if (term.trim() === '' || term.trim().length < 3){
      this.estabArray = this.originalEstabArray;
    }else{
      this.estabArray = [];
      this.originalEstabArray.forEach(element => {
          let aux: string = element.val().nome;
          if( aux.toLowerCase().includes(term.toLowerCase())){
            this.estabArray.push(element);
           }
      });

    }
  }

  getArrayEstab(){
    return this.originalEstabArray;
  }

  showOptions(estabelecimento, estabKey) {
    //depois que a pessoa clicar no estabelecimento pesquisado, a tab de pesquisa irá fechar
    this.toggleSearch();
   this.navCtrl.push(EstabelecimentoDetails, {estabelecimento, estabKey});
  }

}
