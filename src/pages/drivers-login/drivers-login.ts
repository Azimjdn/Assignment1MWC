import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DriverPage } from '../driver/driver';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public gotoDrivers(){
    this.navCtrl.push(DriverPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DriversLoginPage');
  }

  login() {

  }

  register() {
    this.navCtrl.push('RegisterPage');
  }

}
