import { NgModule } from '@angular/core';
import { IonicPageModule, NavParams, NavController, ToastController  } from 'ionic-angular';
import { DriverPage } from './driver';
import {AngularFireAuth } from 'angularfire2/auth';

@NgModule({
  declarations: [
    DriverPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverPage),
  ]
})
export class DriverPageModule {
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
})
}}
