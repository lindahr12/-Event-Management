import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EventService} from "../event.service";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.page.html',
  styleUrls: ['./add-event.page.scss'],
})
export class AddEventPage implements OnInit {
  registerForm: FormGroup;
  private submitted: boolean;
  private User: any;

  constructor(public  eventservice: EventService,private formBuilder: FormBuilder,public navctrl:NavController) { }

  ngOnInit() {
    this.registerForm=this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      organizer: ['', Validators.required],
      email_event: ['', Validators.required],
      phonenumber: ['', Validators.required],

    });
  }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log(this.registerForm.value)
      console.log('not valide')
      return;
    }

    this.eventservice.addevent(this.registerForm.value).subscribe(res=>{

      console.log(res);
      this.User = res ;
      this.registerForm.reset();
      this.navctrl.navigateRoot('/home');

    },error => {
      console.log(error);
    })

  }



}

