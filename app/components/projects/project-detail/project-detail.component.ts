import { Component, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { ConfigService } from './../../../services/config.service';
import { ProjectService } from './../../../services/project.service';
import { Project } from './../../../models/project';

@Component({
  selector: 'project-detail',
  templateUrl: 'app/components/projects/project-detail/project-detail.component.html',
  providers: [ProjectService]
})

export class ProjectDetailComponent   {
@Input() project: Project;

constructor(private http: Http, private projectService: ProjectService, 
    private configService: ConfigService ) {}

    ngOnInit () {
        this.configService.setTitle("Things I've Made");
    }
}