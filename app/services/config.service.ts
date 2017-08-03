import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

export interface PageTitle {
   value:string;
}

@Injectable()
export class ConfigService {

  constructor(private http: Http) {}

pageTitle: PageTitle = {value: "Lisa Hobbs"};

setTitle(title: string) {
    this.pageTitle.value = title;
}

getTitle() {
    return this.pageTitle.value;
}

}