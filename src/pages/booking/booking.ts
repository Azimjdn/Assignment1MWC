import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
  set: Date; // refer to [(ngModel)]="set" //
  time: Date; // refer to [(ngModel)]="time" //

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Submit',
      subTitle: 'You will be notified soon!',
      buttons: ['Ok']
    });

    alert.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
  }

}
