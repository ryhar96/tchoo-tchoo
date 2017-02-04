import { Injectable } from '@angular/core';
import { Request } from '../classes/request';
import { DispatcherService } from './dispatcher.service';

@Injectable()
export class RequestGeneratorService {
    
    private dispatcherService: DispatcherService;

    constructor (dispatcherService : DispatcherService) {
        this.dispatcherService = dispatcherService;
        setInterval(() => {this.createRequest(); }, 2000);
    }
    
    createRequest(): void{
        this.dispatcherService.addRequests(new Request(20,20,20,20));
    }

}
