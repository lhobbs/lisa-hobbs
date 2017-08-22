import { Component, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { ProjectCardComponent } from './project-card/project-card.component';

import { Project } from './../../models/project';
import { Category } from './../../models/category';

import { ConfigService } from './../../services/config.service';
import { ProjectService } from './../../services/project.service';

@Component({
  selector: 'projects',
  templateUrl: 'app/components/projects/projects.component.html', 
  providers: [ProjectService],
})
export class ProjectsComponent  { 
projects: Project[];
projectsAll: Project[];
projectsCol1: Project[];
projectsCol2: Project[];
projectsCol3: Project[];
selectedProject: Project;

constructor(private http: Http, private configService: ConfigService, private projectService: ProjectService ) {
    this.configService.setTitle("Things I've Made");
    this.selectedProject = null;
}

ngOnInit () {
     this.projectService.getProjects()
     .then(projects =>{ this.projects = projects.reverse(); })
     .then(p => this.filterProjs());     
 }

 filterProjs() {
    this.projectsCol1 = this.projects.filter((v, i) => i%3 == 0);
     this.projectsCol2 = this.projects.filter((v, i) => i%3 == 1);
     this.projectsCol3 = this.projects.filter((v, i) => i%3 == 2);
 }

selectProj(proj) {
    this.selectedProject = proj;
}

}