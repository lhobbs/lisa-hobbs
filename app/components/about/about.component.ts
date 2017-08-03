import { Component } from '@angular/core';

import { ConfigService } from './../../services/config.service';

@Component({
  selector: 'about',
  templateUrl: 'app/components/about/about.component.html'
})

export class AboutComponent {  

constructor (private configService: ConfigService ) {
    this.configService.setTitle("A Little About Me");
}

}