import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeEventoutPage } from './liste-eventout.page';

const routes: Routes = [
  {
    path: '',
    component: ListeEventoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeEventoutPageRoutingModule {}
