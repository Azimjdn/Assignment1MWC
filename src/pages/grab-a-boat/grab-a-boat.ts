import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookingPage } from '../booking/booking';

/**
 * Generated class for the GrabABoatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grab-a-boat',
  templateUrl: 'grab-a-boat.html',
})
export class GrabABoatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public gotoBooking(){
    this.navCtrl.push(BookingPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrabABoatPage');
  }

}
