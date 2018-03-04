import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { GrabABoatPage } from '../pages/grab-a-boat/grab-a-boat';
import { LoginPage } from '../pages/login/login';
import { BookingPage } from '../pages/booking/booking';
import { DriverPage } from '../pages/driver/driver';
import { DriversLoginPage } from '../pages/drivers-login/drivers-login';
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { SignupPage } from '../Pages/signup/signup';
import { WeatherForecastPage } from '../pages/weather-forecast/weather-forecast';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    GrabABoatPage,
    BookingPage,
    LoginPage,
    DriverPage,
    DriversLoginPage,
    MapPage,
    SchedulePage,
    SignupPage,
    WeatherForecastPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    GrabABoatPage,
    BookingPage,
    LoginPage,
    DriverPage,
    DriversLoginPage,
    MapPage,
    SchedulePage,
    SignupPage,
    WeatherForecastPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
