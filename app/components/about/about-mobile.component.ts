import { Component } from '@angular/core';

import { ConfigService } from './../../services/config.service';

@Component({
  selector: 'about-mobile',
  templateUrl: 'app/components/about/about-mobile.component.html'
})

export class AboutMobileComponent {  

constructor (private configService: ConfigService ) {
    this.configService.setTitle("A Little About Me");
}

}