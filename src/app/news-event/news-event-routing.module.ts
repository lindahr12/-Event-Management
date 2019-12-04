import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsEventPage } from './news-event.page';

const routes: Routes = [
  {
    path: '',
    component: NewsEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsEventPageRoutingModule {}
