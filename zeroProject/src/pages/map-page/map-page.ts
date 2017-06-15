import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-map-page',
  templateUrl: 'map-page.html',
})
export class MapPage {
 
    @ViewChild('map') mapElement;
    map: any;

    constructor(public navCtrl: NavController) {
      
    }

    ionViewDidLoad(){
      this.initMap();
    } 

    initMap(){
      let latLng = new google.maps.LatLng(-3.72839, -38.5234);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)

      var content = 'dfdf';
      
       // A new Info Window is created and set content
    var infowindow = new google.maps.InfoWindow({
       content: content,
    });

            
      //forma simples de adicionar marcador, ver como adicionar uma lista de marcadores
      // de uma vez, e trocar images, além de ver como conseguir os pontos geolocais a
      //partir de um endereço.
      var marker = new google.maps.Marker({
        position: latLng,
        map: this.map
      });

      marker.addListener('click', function() {
          infowindow.open(this.map, marker);
      });
      
    //icon: 'https://goo.gl/wUL3p7'er);

  
      
  }
  
    
}

 

