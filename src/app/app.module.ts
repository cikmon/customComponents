import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {InputCustomComponent} from './shared/components/input-custom/input-custom.component';
import {FormsModule} from '@angular/forms';
import {CardCustomComponent} from './shared/components/card-custom/card-custom.component';
import {CalendarCustomComponent} from './shared/components/calendar-custom/calendar-custom.component';

@NgModule({
  declarations: [
    AppComponent, InputCustomComponent, CardCustomComponent, CalendarCustomComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
