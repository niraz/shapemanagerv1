import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routingComponents} from './route/app.route.component';
import {TraceComponent} from './tracemodule/trace.component';
import {TraceUploadComponent} from './tracemodule/traceupload/traceupload.component';
import {TraceLibraryComponent} from './tracemodule/tracelibrary/tracelibrary.component'
import {TracerManagementComponent} from './tracemodule/tracermanagement/tracemanagement.component';



@NgModule({
  imports:[ BrowserModule,routingComponents],
  declarations: [TraceComponent,TraceLibraryComponent,TraceUploadComponent,TracerManagementComponent ],
  bootstrap: [TraceComponent]
})
export class AppModule { }