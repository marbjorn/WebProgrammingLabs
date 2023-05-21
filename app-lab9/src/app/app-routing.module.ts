import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeriodicalDetailsComponent } from './periodicals/periodical-details/periodical-details.component';
import { PeriodicalCenterComponent } from './periodicals/periodical-center/periodical-center.component';
import { PeriodicalListComponent } from './periodicals/periodical-list/periodical-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  { path: 'detail/:id', component: PeriodicalDetailsComponent },
  { path: 'items', component: PeriodicalListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
