import { Component } from '@angular/core';

import { ConfigService } from './../../services/config.service';

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.component.html',
})
export class HomeComponent  { 
    constructor (private configService: ConfigService ) {
        this.configService.setTitle("Lisa Hobbs");
    }
 }