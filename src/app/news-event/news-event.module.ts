import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsEventPageRoutingModule } from './news-event-routing.module';

import { NewsEventPage } from './news-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsEventPageRoutingModule
  ],
  declarations: [NewsEventPage]
})
export class NewsEventPageModule {}
