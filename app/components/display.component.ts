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
//------------------------------------------------------------------------------------------------

    constructor(
        private dispatcher: DispatcherService,
        public mapService: MapService
    ) {   
        //this.createCar(0);
      }

    private requests: Request[];
    public map: any;
    selectedRequest:Request;

    ngOnInit() {
        this.dispatcher.setComponent(this);
        this.car = new Car(45.517814, -63.645481, this.mapService);
        var mapProp = {
            center: new google.maps.LatLng(45.517814, -73.645481),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        console.log(document.getElementById("googleMap"));
        let map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        this.mapService.init(map);
        this.car.moveCarTo(-73.645481, 45.517814);
    }

    public updateRequests() {
        this.requests = this.dispatcher.requests;
    }
    onSelect(request: Request): void {
    this.selectedRequest = request;
  }

}
