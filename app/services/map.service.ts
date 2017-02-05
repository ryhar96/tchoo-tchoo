import { Injectable, OnInit } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';

declare var google:any;

@Injectable()
export class MapService {
    
    public map: any;

    public google: any = google;

    init(map: any) {
        this.map = map;
    }

}
