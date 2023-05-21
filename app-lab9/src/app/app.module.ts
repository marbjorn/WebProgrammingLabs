import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeriodicalsModule } from './periodicals/periodicals.module';
import { PeriodicalCenterComponent } from './periodicals/periodical-center/periodical-center.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    PeriodicalsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
