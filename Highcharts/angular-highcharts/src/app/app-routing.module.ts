import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvisorComponent } from './Pages/advisor/advisor.component';
import { AnalyticsComponent } from './Pages/analytics/analytics.component';
import { BalanceComponent } from './Pages/balance/balance.component';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  {
    path:"analytics", component: AnalyticsComponent
  },
  {
    path:"balance", component: BalanceComponent
  },
  {
    path:"advisor", component: AdvisorComponent
  }
  ,
  {
    path:"", component: HomeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
