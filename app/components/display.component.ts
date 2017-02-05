import { Component, OnInit } from '@angular/core';

import { DispatcherService } from '../services/dispatcher.service';
import { Request } from '../classes/request';
import { MapService } from '../services/map.service';
//------------------------------------------------------------------------------------------------
import { Car } from '../classes/car';
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
const LAT_MAX = 45.548669;
const LAT_MIN = 45.548286;

const LON_MIN = -73.754601;
const LON_MAX = -73.532482;
//------------------------------------------------------------------------------------------------

declare var google:any;

@Component({
    selector: 'my-display',
    templateUrl: '../../assets/templates/display.component-template.html',
   // styleUrls:['../../assets/stylessheets/styles.css']
})

export class DisplayComponent implements OnInit {

//------------------------------------------------------------------------------------------------
    public car: Car;
    styleArray:any[];
    public nCars = 20; 
//------------------------------------------------------------------------------------------------

    constructor(
        public dispatcher: DispatcherService,
        public mapService: MapService
        
    ) { 
     
    this.styleArray = [
    {
      featureType: 'road',
      stylers: [
        { saturation: -80 }
      ]
    },{
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        { hue: '#00d4ff' },
        { saturation: 50 }
      ]
    },{
      featureType: 'road',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    }];
      }

    private requests: Request[];
    private cars: Car[];
    public map: any;
    selectedRequest:Request;

    ngOnInit() {
        this.dispatcher.setComponent(this);
        this.car = new Car(45.517814, -73.645481, this.mapService);
        var mapProp = {
            center: new google.maps.LatLng(45.517814, -73.645481),
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: this.styleArray
        };
        console.log(document.getElementById("googleMap"));
        let map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        this.mapService.init(map);
        map = this.mapService.map;
        this.car.moveCarTo(-73.645481, 44.517814);
    }

    public updateRequests() {
        this.requests = this.dispatcher.requests;
    }

    public updateCars() {
        this.cars = this.dispatcher.cars;
        for( let car of this.cars)
        {
            car.marker = new google.maps.Marker(
                {
                    position: { lat: car.currentLat, lng: car.currentLon },
                    map: this.mapService.map,
                    icon: '../../assets/rcar2.png' 

                }
            )
        }
    }

}
