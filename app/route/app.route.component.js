"use strict";
var router_1 = require('@angular/router');
var traceupload_component_1 = require('../tracemodule/traceupload/traceupload.component');
var tracelibrary_component_1 = require('../tracemodule/tracelibrary/tracelibrary.component');
var tracemanagement_component_1 = require('../tracemodule/tracermanagement/tracemanagement.component');
var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'tracermanagement' },
    { path: 'traceupload', component: traceupload_component_1.TraceUploadComponent },
    { path: 'tracelibrary', component: tracelibrary_component_1.TraceLibraryComponent },
    { path: 'tracermanagement', component: tracemanagement_component_1.TracerManagementComponent }
];
// @NgModule({
//     imports:[RouterModule.forRoot(routes)],
//     exports:[RouterModule]
// })
exports.routingComponents = router_1.RouterModule.forRoot(routes); //[TraceComponent,TraceLibraryComponent,TraceUploadComponent,TracerManagementComponent]
//# sourceMappingURL=app.route.component.js.map