import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { DriverPage } from '../driver/driver';
import {AngularFireAuth} from 'angularfire2/auth';
import { User } from '../../Model/user';


/**
 * Generated class for the DriversLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-drivers-login',
  templateUrl: 'drivers-login.html',
})
export class DriversLoginPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }
  
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad DriversLoginPage');
  // }

 login(user: User) {
  try {
    const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    if (result) {
      this.navCtrl.push('DriverPage');
    }
  }
  catch(e){
    console.error(e);
  }
}

  register() {
    this.navCtrl.push('RegisterPage');
  }
  
  }
