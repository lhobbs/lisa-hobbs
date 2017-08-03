import { Component } from '@angular/core';

import { ConfigService } from './../../services/config.service';

@Component({
  selector: 'contact',
  templateUrl: 'app/components/contact/contact.component.html',
})
export class ContactComponent  {
    constructor (private configService: ConfigService ) {
        this.configService.setTitle("Say Hello");
    }
 }