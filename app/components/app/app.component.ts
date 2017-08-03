import { Component } from '@angular/core';
// import $ from "jquery";
declare var $:JQueryStatic;

export interface PageTitle {
  value:string;
}

import { ConfigService } from './../../services/config.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/components/app/app.component.html',
  providers: [ConfigService]
})
export class AppComponent  { 
pageTitle: PageTitle;

  constructor (private configService: ConfigService) {
    this.pageTitle = configService.pageTitle;
  }

 }

$(function(){
    // $('#navTitle').css('display', 'none');

    // $(window).scroll(function(){
    //         if( $(window).scrollTop() > 50 ) {
    //                 $('#navTitle').css('display', 'block');
    //         } else {
    //                 $('#navTitle').css('display', 'none');
    //         }
    //   });
  });