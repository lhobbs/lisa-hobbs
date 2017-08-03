import { Component } from '@angular/core';

import { ConfigService } from './../../services/config.service';

@Component({
  selector: 'photo-menu',
  templateUrl: 'app/components/photo-menu/photo-menu.component.html',
})
export class PhotoMenuComponent  { 
    constructor (private configService: ConfigService ) {
        this.configService.setTitle("");
    }
 }