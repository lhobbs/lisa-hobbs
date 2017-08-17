//import './rxjs-extensions';
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
// import { AppRoutingModule } from './app-routing.module';
var config_service_1 = require('./services/config.service');
// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';
var app_component_1 = require('./components/app/app.component');
var home_component_1 = require('./components/home/home.component');
var photo_menu_component_1 = require('./components/photo-menu/photo-menu.component');
var about_component_1 = require('./components/about/about.component');
var projects_component_1 = require('./components/projects/projects.component');
var resume_component_1 = require('./components/resume/resume.component');
var resume_card_component_1 = require('./components/resume/resume-card/resume-card.component');
var contact_component_1 = require('./components/contact/contact.component');
var project_card_component_1 = require('./components/projects/project-card/project-card.component');
var project_detail_component_1 = require('./components/projects/project-detail/project-detail.component');
// import { ProjectCategoryComponent } from './components/projects/project-category/project-category.component';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                photo_menu_component_1.PhotoMenuComponent,
                about_component_1.AboutComponent,
                projects_component_1.ProjectsComponent,
                resume_component_1.ResumeComponent,
                resume_card_component_1.ResumeCardComponent,
                contact_component_1.ContactComponent,
                project_detail_component_1.ProjectDetailComponent,
                project_card_component_1.ProjectCardComponent
            ],
            providers: [config_service_1.ConfigService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map