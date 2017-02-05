import { Injectable } from '@angular/core';
import { MapService } from './map.service'


@Injectable()
export class AreaService {
    
    constructor(
        public mapService: MapService
    ) { }

    
    
}
