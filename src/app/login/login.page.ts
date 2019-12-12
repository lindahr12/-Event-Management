import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {ActivatedRoute} from "@angular/router";
import {NavController} from "@ionic/angular";
import {Storage} from '@ionic/storage';

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
    private maillogin: any;

  constructor(public userservice: UserService,public storage: Storage, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, public navctrl: NavController) {
  }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({

      email: ['', Validators.required],
      password: ['', Validators.required],

    });
      this.storage.get('email').then((val) => {
          this.maillogin =val;
          console.log(this.maillogin);
      });
  }


    login() {
        let formulairevalues = this.registerForm.value;
        this.userservice.login(formulairevalues).subscribe((res:any) => {
            let found= res.hits.hits;
            //console.log(formulairevalues.email);
            if (found.length != 0){
              //  alert('founddddd');
                this.navctrl.navigateRoot('/home');
                this.storage.set("email",formulairevalues.email);
                this.storage.get('email').then((val) => {
                    console.log('Your email is', val);
                });

            } else {
                alert('not found');
            }
        }, (err) =>{
            console.log(err);

        });
    }

}
