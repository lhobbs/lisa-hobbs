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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var config_service_1 = require('./../../services/config.service');
var project_service_1 = require('./../../services/project.service');
var ProjectsComponent = (function () {
    function ProjectsComponent(http, configService, projectService) {
        this.http = http;
        this.configService = configService;
        this.projectService = projectService;
        this.configService.setTitle("Things I've Made");
        this.selectedProject = null;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getProjects()
            .then(function (projects) { _this.projects = projects.reverse(); })
            .then(function (p) { return _this.filterProjs(); });
    };
    ProjectsComponent.prototype.filterProjs = function () {
        this.projectsCol1 = this.projects.filter(function (v, i) { return i % 3 == 0; });
        this.projectsCol2 = this.projects.filter(function (v, i) { return i % 3 == 1; });
        this.projectsCol3 = this.projects.filter(function (v, i) { return i % 3 == 2; });
    };
    ProjectsComponent.prototype.selectProj = function (proj) {
        this.selectedProject = proj;
    };
    ProjectsComponent = __decorate([
        core_1.Component({
            selector: 'projects',
            templateUrl: 'app/components/projects/projects.component.html',
            providers: [project_service_1.ProjectService],
        }), 
        __metadata('design:paramtypes', [http_1.Http, config_service_1.ConfigService, project_service_1.ProjectService])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;
//# sourceMappingURL=projects.component.js.map