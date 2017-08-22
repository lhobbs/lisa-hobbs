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
require('rxjs/add/operator/toPromise');
var project_1 = require('./../../../models/project');
var ProjectCardComponent = (function () {
    function ProjectCardComponent() {
        this.selected = new core_1.EventEmitter();
        // this.configService.setTitle("Things I've Made");
    }
    ProjectCardComponent.prototype.ngOnInit = function () {
        //  this.projectService.getProjects().then(projects =>{ this.projects = projects; });
    };
    ProjectCardComponent.prototype.onSelect = function (project) {
        this.selected.emit(project);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', project_1.Project)
    ], ProjectCardComponent.prototype, "project", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ProjectCardComponent.prototype, "selected", void 0);
    ProjectCardComponent = __decorate([
        core_1.Component({
            selector: 'project-card',
            templateUrl: 'app/components/projects/project-card/project-card.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectCardComponent);
    return ProjectCardComponent;
}());
exports.ProjectCardComponent = ProjectCardComponent;
//# sourceMappingURL=project-card.component.js.map