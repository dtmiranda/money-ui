import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { TableModule } from 'primeng/table'
import{ CalendarModule } from 'primeng/calendar'


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    CalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
