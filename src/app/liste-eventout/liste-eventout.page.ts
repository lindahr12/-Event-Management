import { Component, OnInit } from '@angular/core';
import {EventService} from "../event.service";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-liste-eventout',
  templateUrl: './liste-eventout.page.html',
  styleUrls: ['./liste-eventout.page.scss'],
})
export class ListeEventoutPage implements OnInit {

  users : any;

  _id : any;
  private events: any;
  constructor(public eventservice : EventService,public navctrl:NavController) { }

  ngOnInit() {
    this.allevent();
  }
  allevent()
  {
    this.eventservice.all().subscribe((eventList : any) =>{this.events = eventList.hits.hits;})

  }
  remove(id) {


    this.eventservice.remove(id).subscribe(res => {
      console.log(res);
      this.navctrl.navigateRoot('/liste-event');



    })
  }


}

