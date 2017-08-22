import { Component, Input } from '@angular/core';

import { Job } from './../../../models/job'

@Component({
  selector: 'resume-card',
  templateUrl: 'app/components/resume/resume-card/resume-card.component.html',
})
export class ResumeCardComponent  { 
    @Input() job: Job;
    showDescription: boolean;

    constructor () {
      this.showDescription = false;
    }
    toggleExtra() {
      // console.log(this.showDescription)
      this.showDescription = !this.showDescription;
    }
 }