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
var project_service_1 = require('./../../../services/project.service');
var category_1 = require('./../../../models/category');
var ProjectCategoryComponent = (function () {
    function ProjectCategoryComponent() {
        this.changeEvent = new core_1.EventEmitter();
    }
    ProjectCategoryComponent.prototype.ngOnInit = function () {
        this.showAllCategory = new category_1.Category();
        this.showAllCategory.description = 'showAll';
    };
    ProjectCategoryComponent.prototype.setActiveCategory = function (category) {
        this.activeCategory = category;
        this.changeEvent.emit(category);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ProjectCategoryComponent.prototype, "categories", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', category_1.Category)
    ], ProjectCategoryComponent.prototype, "activeCategory", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ProjectCategoryComponent.prototype, "changeEvent", void 0);
    ProjectCategoryComponent = __decorate([
        core_1.Component({
            selector: 'project-categories',
            templateUrl: 'app/components/projects/project-category/project-category.component.html',
            providers: [project_service_1.ProjectService]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectCategoryComponent);
    return ProjectCategoryComponent;
}());
exports.ProjectCategoryComponent = ProjectCategoryComponent;
//# sourceMappingURL=project-category.component.js.map