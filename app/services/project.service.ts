import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Project } from './../models/project';
import { Category } from './../models/category';

@Injectable()
export class ProjectService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getProjects(): Promise<Project[]> {
    return this.http.get('/data/projects.json')
               .toPromise()
               .then(response => response.json() as Project[])
               .catch(this.handleError);
  }


  getProject(id: number): Promise<Project> {
    return this.http.get('data/projects.json')
      .toPromise()
      .then(response => response.json().data as Project)
      .catch(this.handleError);
  }

  getCategories(): Promise<Category[]> {
    return this.http.get('/data/categories.json')
               .toPromise()
               .then(response => response.json() as Category[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
