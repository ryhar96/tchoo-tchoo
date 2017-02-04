import { Injectable } from '@angular/core';
import { Request } from '../classes/request';
import { DispatcherService } from './dispatcher.service';
import { Observable } from 'rxjs/Rx';

const LAT_MAX = 45.548669;
const LAT_MIN = 45.548286;

const LON_MIN = -73.754601;
const LON_MAX = -73.532482;

const RANDOM_PERIODE_MAX = 5000;

@Injectable()
export class RequestGeneratorService {
    
    private dispatcherService: DispatcherService;

    public addDispatcher(dispatcherService: DispatcherService) {

        this.dispatcherService = dispatcherService;
        this.sendFixedTimeRequest(5000);
    }
    
    private sendFixedTimeRequest(periode: number): void{
        Observable.interval(periode).subscribe(x => {
            this.dispatcherService.addRequest(this.createRandomRequest());
        });
    }

    private sendRandomTimeRequest(): void{
        let periode: number =  (Math.random() * RANDOM_PERIODE_MAX | 0) + 1;
        Observable.interval(periode).subscribe(x => {
            this.dispatcherService.addRequest(this.createRandomRequest());
        });
}

    private createRandomRequest(): Request{

        //haut-gauche: 45.548669, -73.754601
        //haut-droite: 45.548286, -73.532482
        //bas-gauche: 45.461971, -73.597082
        //bas-droite: 45.462841, -73.785334
        
        let srcLon : number = Number((Math.random() * (LON_MAX - LON_MIN) + LON_MIN).toFixed(6)) ;
        let destLon : number = Number((Math.random() * (LON_MAX - LON_MIN) + LON_MIN).toFixed(6));

        let srcLat : number = Number((Math.random() * (LAT_MAX - LAT_MIN) + LAT_MIN).toFixed(6));
        let destLat : number = Number((Math.random() * (LAT_MAX - LAT_MIN) + LAT_MIN).toFixed(6));
        
        return (new Request(srcLon,srcLat,destLon,destLat));
    }

}
