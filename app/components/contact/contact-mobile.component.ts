import { Component } from '@angular/core';

import { ConfigService } from './../../services/config.service';

@Component({
  selector: 'contact-mobile',
  templateUrl: 'app/components/contact/contact-mobile.component.html',
})
export class ContactMobileComponent  {
    constructor (private configService: ConfigService ) {
        this.configService.setTitle("Say Hello");
    }
 }