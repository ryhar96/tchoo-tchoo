import { Component,OnInit } from '@angular/core';

import { DispatcherService } from '../services/dispatcher.service';

import { AgmCoreModule } from 'angular2-google-maps/core';
declare var google:any;
@Component({
    selector: 'my-display',
    templateUrl: '../../assets/templates/display.component-template.html'
})

export class DisplayComponent implements OnInit {

    title: string = 'My first angular2-google-maps project';
    lat: number = 51.678418;
    lng: number = 7.809007;

   // constructor(private dispatcher: DispatcherService) { }
        ngOnInit() {
        var mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    }

}
