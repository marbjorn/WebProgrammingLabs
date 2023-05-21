import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodicalListComponent } from './periodical-list/periodical-list.component';
import { PeriodicalCenterComponent } from './periodical-center/periodical-center.component';
import { PeriodicalDetailsComponent } from './periodical-details/periodical-details.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PeriodicalListComponent,
    PeriodicalCenterComponent,
    PeriodicalDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PeriodicalCenterComponent,
    PeriodicalDetailsComponent,
    PeriodicalListComponent
  ]
})
export class PeriodicalsModule { }
