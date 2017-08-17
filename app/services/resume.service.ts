import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Job } from './../models/job';

@Injectable()
export class ResumeService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getJobs(): Promise<Job[]> {
    return this.http.get('/data/jobs.json')
               .toPromise()
               .then(response => response.json() as Job[])
               .catch(this.handleError);
  }

  getJob(id: number): Promise<Job> {
    return this.http.get('data/jobs.json')
      .toPromise()
      .then(response => response.json().data as Job)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
