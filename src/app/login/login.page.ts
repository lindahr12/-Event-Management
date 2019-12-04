import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {ActivatedRoute} from "@angular/router";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private registerForm: FormGroup;
  private email: any;
  private password: any;
  private Parse: any;
  private name: any;
  private toastCtrl: any;
  private alertCtrl: any;

  constructor(public userservice: UserService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, public navctrl: NavController) {
  }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({

      email: ['', Validators.required],
      password: ['', Validators.required],

    });
  }


    login() {
        let formulairevalues = this.registerForm.value;
        this.userservice.login(formulairevalues).subscribe((res:any) => {
            let found= res.hits.hits;
            if (found.length != 0){
              //  alert('founddddd');
                this.navctrl.navigateRoot('/home');

            } else {
                alert('not found');
            }
        }, (err) =>{
            console.log(err);

        });
    }

}
