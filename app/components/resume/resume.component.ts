import { Component } from '@angular/core';

import { ConfigService } from './../../services/config.service';

@Component({
  selector: 'resume',
  templateUrl: 'app/components/resume/resume.component.html',
})
export class ResumeComponent  { 
    constructor (private configService: ConfigService ) {
        this.configService.setTitle("Things I've Done");
    }
 }