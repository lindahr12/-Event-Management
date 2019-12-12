import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {EventService} from "../event.service";
import {ActivatedRoute} from "@angular/router";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.page.html',
  styleUrls: ['./edit-event.page.scss'],
})
export class EditEventPage implements OnInit {

  private registerForm: any;
  private User: Object;
  private id: string;
  name: any;
  description: any;
  date: any;
  organizer:any;
  email_event:any;
  phonenumber: any;

  constructor(public eventservice: EventService, private formBuilder: FormBuilder,private activatedRoute: ActivatedRoute,public navctrl:NavController) {
  }

  ngOnInit() {

    this.id= this.activatedRoute.snapshot.paramMap.get('id');


    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      organizer: ['', Validators.required],
      email_event: ['', Validators.required],
      phonenumber: ['', Validators.required],

    });
    this.eventservice.getid(this.id).subscribe((res:any) => {
      console.log(res);

      if(res.found==true) {
        this.id = res._id;
        this.name = res._source.name;
        this.description = res._source.description;
        this.date = res._source.date;
        this.organizer = res._source.organizer;
        this.email_event = res._source.email_event;
        this.phonenumber = res._source.phonenumber;
      }else if(res.found==false)
      {
        alert("user not found");
        this.navctrl.navigateRoot('/liste-event');

      }
    }, error => {
      console.log(error);
      if(!error._found)
        alert("event not found");
      else
        alert("autre")
      this.navctrl.navigateRoot('/liste-event');
    });



  }

  edit() {
    this.eventservice.update(this.id, this.registerForm.value).subscribe(res => {

          console.log(res);
          //this.User = res;
          //this.registerForm.reset();
          this.navctrl.navigateRoot('/liste-event');

        }
        , error => {
          console.log(error);
        })
  }


}

