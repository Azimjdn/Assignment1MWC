import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the DriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driver',
  templateUrl: 'driver.html',
})
export class DriverPage {

  constructor(private afAuth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
    }
  
    ionViewWillLoad() {
      this.afAuth.authState.subscribe(data => {
        if(data && data.email && data.uid) {
          this.toast.create({
          message: 'Goodday Driver, ${data.email}',
          duration: 3000
        }).present();
      }
      else {
        this.toast.create({
          message: 'Authentication Failed.',
          duration: 3000
        }).present();
      }

})}}
