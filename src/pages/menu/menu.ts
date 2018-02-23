import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GrabABoatPage } from '../grab-a-boat/grab-a-boat';
import { WeatherForecastPage } from '../weather-forecast/weather-forecast';
import { MapPage } from '../map/map';
import { SchedulePage } from '../schedule/schedule';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public gotoGrabABoat(){
    this.navCtrl.push(GrabABoatPage);
  }

  public gotoWeatherForecast(){
    this.navCtrl.push(WeatherForecastPage);
  }

  public gotoMap(){
    this.navCtrl.push(MapPage);
  }

  public gotoSchedule(){
    this.navCtrl.push(SchedulePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
