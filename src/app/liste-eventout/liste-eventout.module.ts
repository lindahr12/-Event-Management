import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeEventoutPageRoutingModule } from './liste-eventout-routing.module';

import { ListeEventoutPage } from './liste-eventout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeEventoutPageRoutingModule
  ],
  declarations: [ListeEventoutPage]
})
export class ListeEventoutPageModule {}
