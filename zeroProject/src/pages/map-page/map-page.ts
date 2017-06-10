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

    }
    
}

 

