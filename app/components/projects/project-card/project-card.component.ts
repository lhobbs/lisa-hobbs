import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { Project } from './../../../models/project';

@Component({
  selector: 'project-card',
  templateUrl: 'app/components/projects/project-card/project-card.component.html', 
})
export class ProjectCardComponent  { 
@Input() project: Project;
@Output()
  selected:EventEmitter<string> = new EventEmitter();

constructor() {
    // this.configService.setTitle("Things I've Made");
}

ngOnInit () {
    //  this.projectService.getProjects().then(projects =>{ this.projects = projects; });
 }

 onSelect(project) {
    this.selected.emit(project);
  }

}