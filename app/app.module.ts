import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TraceComponent }   from './tracemodule/trace.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ TraceComponent ],
  bootstrap:    [ TraceComponent ]
})
export class AppModule { }