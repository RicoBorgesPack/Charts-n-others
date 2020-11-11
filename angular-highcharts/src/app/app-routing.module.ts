import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableComponent } from './table/table.component';
import { GraphsComponent } from './graphs/graphs.component';


const routes: Routes = [
  {
    path:"analytics", component: GraphsComponent
  },
  {path:"balance",component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
