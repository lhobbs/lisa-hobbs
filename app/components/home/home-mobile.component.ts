import { Component } from '@angular/core';

import { ConfigService } from './../../services/config.service';

@Component({
  selector: 'home-mobile',
  templateUrl: 'app/components/home/home-mobile.component.html',
})
export class HomeMobileComponent  { 
    constructor (private configService: ConfigService ) {
        this.configService.setTitle("Lisa Hobbs");
    }
 }