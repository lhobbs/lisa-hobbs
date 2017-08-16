import { Component, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { ProjectCardComponent } from './project-card/project-card.component';
// import { ProjectCategoryComponent } from './project-category/project-category.component';
// import { ProjectCategoryItemComponent } from './project-category-item/project-category-item.component';
//import { ProjectDetailComponent } from './project-detail/project-detail.component';

import { Project } from './../../models/project';
import { Category } from './../../models/category';

import { ConfigService } from './../../services/config.service';
import { ProjectService } from './../../services/project.service';

@Component({
  selector: 'projects',
  templateUrl: 'app/components/projects/projects.component.html', 
  providers: [ProjectService],
  // declarations: [ProjectCardComponent]
})
export class ProjectsComponent  { 
projects: Project[];
projectsAll: Project[];
categories: Category[];
activeCategory: Category;
showAllCategory: Category;
//public changeEvent: EventEmitter = new EventEmitter();

constructor(private http: Http, private configService: ConfigService, private projectService: ProjectService ) {
    this.configService.setTitle("Things I've Made");
}

ngOnInit () {
     this.projectService.getProjects().then(projects =>{ this.projects = projects; });
     this.projectService.getCategories().then(categories => this.categories = categories);
    //  this.showAllCategory = new Category();
    //  this.showAllCategory.description = 'showAll';
    //  this.activeCategory = this.showAllCategory;
 }

//  filterProjects(category: Category) {
//      if (category.description == 'showAll')
//         this.projects = this.projectsAll;
//     else
//         this.projects = this.projectsAll.filter(project => project.categories.map(function(c) { return c.description; }).indexOf(category.description) > -1);
//  }

//  setActiveCategory(category: Category) {
//         this.activeCategory = category;
//         this.filterProjects(category);
//     }

//     changeCategory(category: Category) {
//         this.filterProjects(category);
//     }

}