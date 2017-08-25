import { Component, Input } from '@angular/core';

import { Job } from './../../../models/job'

@Component({
  selector: 'resume-card-mobile',
  templateUrl: 'app/components/resume/resume-card/resume-card-mobile.component.html',
})
export class ResumeCardMobileComponent  { 
    @Input() job: Job;
    showDescription: boolean;

    constructor () {
    //   this.showDescription = false;
    }
    
 }