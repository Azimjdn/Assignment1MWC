import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DriverPage } from '../driver/driver';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public gotoDrivers(){
    this.navCtrl.push(DriverPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DriversLoginPage');
  }

}
