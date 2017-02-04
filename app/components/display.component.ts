import { Component } from '@angular/core';

import { DispatcherService } from '../services/dispatcher.service';

@Component({
    selector: 'my-display',
    template: 'azazeaze'
})

export class DisplayComponent {
    constructor(
        private dispatcher: DispatcherService
    ) { }
}
