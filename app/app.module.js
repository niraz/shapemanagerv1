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
var app_route_component_1 = require('./route/app.route.component');
var trace_component_1 = require('./tracemodule/trace.component');
var traceupload_component_1 = require('./tracemodule/traceupload/traceupload.component');
var tracelibrary_component_1 = require('./tracemodule/tracelibrary/tracelibrary.component');
var tracemanagement_component_1 = require('./tracemodule/tracermanagement/tracemanagement.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_route_component_1.routingComponents],
            declarations: [trace_component_1.TraceComponent, tracelibrary_component_1.TraceLibraryComponent, traceupload_component_1.TraceUploadComponent, tracemanagement_component_1.TracerManagementComponent],
            bootstrap: [trace_component_1.TraceComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map