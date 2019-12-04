import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {ActivatedRoute} from "@angular/router";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-registered',
  templateUrl: './registered.page.html',
  styleUrls: ['./registered.page.scss'],
})

export class RegisteredPage implements OnInit {
  registerForm: FormGroup;
  private submitted: boolean;
  private User: any;

  constructor(public userservice: UserService, private formBuilder: FormBuilder, public navctrl: NavController) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],

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

    this.userservice.add(this.registerForm.value).subscribe(res => {

      console.log(res);
      this.User = res;
      this.registerForm.reset();
      this.navctrl.navigateRoot('/home');

    }, error => {
      console.log(error);
    })

  }


}
