import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthService } from '../../services/auth.service';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public showView: String ;
  public loginForm: FormGroup;
  public registerForm: FormGroup;
  public authError: String;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private auth: AuthService) {
                this.showView = 'login-home';
                this.loginForm = this.formBuilder.group({
                  "email": ["",
                  Validators.compose([Validators.required,Validators.email])
                  ],
                  "password": ["", Validators.required]
                })

                this.registerForm = this.formBuilder.group({
                  "userName": ["",
                  Validators.compose([Validators.required,Validators.minLength(6)])
                  ],
                  "phoneNumber": ["", Validators.required],
                  "email": ["",
                  Validators.compose([Validators.required,Validators.email])
                  ],
                  "password": ["", Validators.required]
                });
  }

  setView(loginView){
    this.showView = loginView;
    this.authError = '';
    this.loginForm.reset();
    this.registerForm.reset();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logout(){
    this.auth.logout();
  }

  loginWithEmail(){

    let data = this.loginForm.value;

		let credentials = {
			email: data.email,
			password: data.password
    };

		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.setRoot(HomePage),
				error => this.authError = error.message
			);
  }
  signUpWithEmail() {
		let data = this.registerForm.value;
		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signUp(credentials).then(
			() => this.navCtrl.setRoot(HomePage),
			error => this.authError = error.message
		);
  }
  loginWithGoogle() {
    this.auth.signInWithGoogle().then(
        () => this.navCtrl.setRoot(HomePage),
        error => console.log(error.message)
      );
  }
}
