import { Injectable, Inject } from '@angular/core';

import { Request } from '../classes/request';
//import { Car } from './request-generator.service';
import { RequestGeneratorService } from './request-generator.service';
import { DisplayComponent } from '../components/display.component';

@Injectable()
export class DispatcherService {

    //private cars[]: Car;
    public requests: Request[];
    public displayComponent: DisplayComponent;
    public requestGenerator: RequestGeneratorService;
    
    constructor() {
        this.requests = [];
        this.requestGenerator = new RequestGeneratorService();
        this.requestGenerator.addDispatcher(this);
    }

    public setComponent(displayComponent: DisplayComponent) {
        this.displayComponent = displayComponent;
    }

    public addRequest(request: Request): void {
        this.requests.push(request);
        this.displayComponent.updateRequests();
        console.log(this.requests);
    }

}