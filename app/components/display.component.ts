import { Component, OnInit } from '@angular/core';

import { DispatcherService } from '../services/dispatcher.service';
import { Request } from '../classes/request';

declare var google:any;
@Component({
    selector: 'my-display',
    templateUrl: '../../assets/templates/display.component-template.html',
   // styleUrls:['../../assets/stylessheets/styles.css']
})

export class DisplayComponent implements OnInit {

    constructor(private dispatcher: DispatcherService) { }

    private requests: Request[];

     ngOnInit() {
        var mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        this.dispatcher.setComponent(this);
    }

    public updateRequests() {
        this.requests = this.dispatcher.requests;
    }

}
