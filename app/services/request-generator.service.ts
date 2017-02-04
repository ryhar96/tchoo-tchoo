import { Injectable } from '@angular/core';
import { Request } from '../classes/request';
import { DispatcherService } from './dispatcher.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RequestGeneratorService {
    
    private dispatcherService: DispatcherService;

    public addDispatcher(dispatcherService: DispatcherService) {
        this.dispatcherService = dispatcherService;
        this.createRequest();
    }
    
    private createRequest(): void{
        Observable.interval(5000).subscribe(x => {
            this.dispatcherService.addRequest(new Request(20,20,20,20));
        });
    }

}
