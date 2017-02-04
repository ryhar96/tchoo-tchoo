import { Injectable, Inject } from '@angular/core';

import { Request } from '../classes/request';
//import { Car } from './request-generator.service';
import { RequestGeneratorService } from './request-generator.service';

@Injectable()
export class DispatcherService {

    //private cars[]: Car;
    private requests: Request[];

    private requestGenerator: RequestGeneratorService;
    
    constructor() {
        this.requests = [];
        this.requestGenerator = new RequestGeneratorService();
        this.requestGenerator.addDispatcher(this);
    }

    addRequest(request: Request): void {
        this.requests.push(request);
        console.log(this.requests);
    }

}