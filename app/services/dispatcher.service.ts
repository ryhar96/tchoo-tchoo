import { Injectable } from '@angular/core';

import { Request } from './request-generator.service';
import { Car } from './request-generator.service';
import { RequestGeneratorService } from './request-generator.service';

@Injectable()
export class DispatcherService {

    private cars[]: Car;
    private requests[]: Request;

    private requestGenerator: RequestGeneratorService;

    addRequests(request: Request): void {
        requests.push(request);
    }

    

}