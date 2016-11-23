import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {TraceComponent} from '../tracemodule/trace.component';
import {TraceUploadComponent} from '../tracemodule/traceupload/traceupload.component';
import {TraceLibraryComponent} from '../tracemodule/tracelibrary/tracelibrary.component'
import {TracerManagementComponent} from '../tracemodule/tracermanagement/tracemanagement.component';

const routes: Routes =[
    {path :'', pathMatch: 'full', redirectTo: 'tracermanagement'},   
    {path: 'traceupload',component: TraceUploadComponent},
    {path: 'tracelibrary',component: TraceLibraryComponent},
    {path: 'tracermanagement',component: TracerManagementComponent}
    ];
// @NgModule({
//     imports:[RouterModule.forRoot(routes)],
//     exports:[RouterModule]
// })

export const routingComponents :  ModuleWithProviders =
  RouterModule.forRoot(routes); //[TraceComponent,TraceLibraryComponent,TraceUploadComponent,TracerManagementComponent]

