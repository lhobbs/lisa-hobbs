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
var config_service_1 = require('./../../services/config.service');
var resume_service_1 = require('./../../services/resume.service');
var ResumeMobileComponent = (function () {
    function ResumeMobileComponent(configService, resumeService) {
        this.configService = configService;
        this.resumeService = resumeService;
        this.configService.setTitle("Things I've Done");
    }
    ResumeMobileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resumeService.getJobs()
            .then(function (jobs) { _this.jobs = jobs; })
            .then(function (j) { return _this.filterJobs(); });
    };
    ResumeMobileComponent.prototype.filterJobs = function () {
        this.jobsCol1 = this.jobs.filter(function (v, i) { return i % 2 == 0; });
        this.jobsCol2 = this.jobs.filter(function (v, i) { return i % 2 == 1; });
    };
    ResumeMobileComponent = __decorate([
        core_1.Component({
            selector: 'resume-mobile',
            templateUrl: 'app/components/resume/resume-mobile.component.html',
            providers: [resume_service_1.ResumeService],
        }), 
        __metadata('design:paramtypes', [config_service_1.ConfigService, resume_service_1.ResumeService])
    ], ResumeMobileComponent);
    return ResumeMobileComponent;
}());
exports.ResumeMobileComponent = ResumeMobileComponent;
//# sourceMappingURL=resume-mobile.component.js.map