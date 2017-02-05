import { Component, OnInit } from '@angular/core';

import { DispatcherService } from '../services/dispatcher.service';
import { Request } from '../classes/request';
import { MapService } from '../services/map.service';

declare var google:any;

@Component({
    selector: 'my-display',
    templateUrl: '../../assets/templates/display.component-template.html',
   // styleUrls:['../../assets/stylessheets/styles.css']
})

export class DisplayComponent implements OnInit {

    constructor(
        private dispatcher: DispatcherService,
        public mapService: MapService
    ) { }

    private requests: Request[];
    public map: any;

    ngOnInit() {
        this.dispatcher.setComponent(this);

        var mapProp = {
            center: new google.maps.LatLng(45.517814, -73.645481),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        console.log(document.getElementById("googleMap"));
        let map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        this.mapService.init(map);
    }

    public updateRequests() {
        this.requests = this.dispatcher.requests;
    }

}
