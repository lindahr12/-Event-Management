import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisteredPage } from './registered.page';

const routes: Routes = [
  {
    path: '',
    component: RegisteredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisteredPageRoutingModule {}
