import { Component } from '@angular/core';

import { ConfigService } from './../../services/config.service';
import { ResumeService } from './../../services/resume.service'

import { Job } from './../../models/job';

@Component({
  selector: 'resume-mobile',
  templateUrl: 'app/components/resume/resume-mobile.component.html',
  providers: [ResumeService],
})
export class ResumeMobileComponent  { 
    jobs: Job[]
    jobsCol1: Job[];
    jobsCol2: Job[];

    constructor (private configService: ConfigService, private resumeService: ResumeService ) {
        this.configService.setTitle("Things I've Done");
    }

    ngOnInit () {
        this.resumeService.getJobs()
            .then(jobs =>{ this.jobs = jobs; })
            .then(j => this.filterJobs());
    }

    filterJobs() {
        this.jobsCol1 = this.jobs.filter((v, i) => i%2 == 0);
        this.jobsCol2 = this.jobs.filter((v,i) => i%2 == 1);
    }
 }