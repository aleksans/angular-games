import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SnakefieldComponent } from './snakefield/snakefield.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { BullsAndCowsComponent } from './bulls-and-cows/bulls-and-cows.component';

const routes: Routes = [
  { path: 'heroes', component: SnakefieldComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'bulls-and-cows', component: BullsAndCowsComponent },
  { path: '', redirectTo: '/bulls-and-cows', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
