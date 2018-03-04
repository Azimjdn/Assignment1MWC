import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule} from 'angularfire2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { GrabABoatPage } from '../pages/grab-a-boat/grab-a-boat';
<<<<<<< HEAD
=======
// import { LoginPage } from '../pages/login/login';
>>>>>>> a8db0b7f9c7bf9263c7c3b43680fc1199454c996
import { BookingPage } from '../pages/booking/booking';
import { DriverPage } from '../pages/driver/driver';
import { DriversLoginPage } from '../pages/drivers-login/drivers-login';
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { WeatherForecastPage } from '../pages/weather-forecast/weather-forecast';
import { RegisterPage } from '../pages/register/register';

import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireDatabaseModule} from 'angularfire2/database';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    GrabABoatPage,
    BookingPage,
    DriverPage,
    DriversLoginPage,
    RegisterPage,
    MapPage,
    SchedulePage,
    WeatherForecastPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    GrabABoatPage,
    BookingPage,
    DriverPage,
    DriversLoginPage,
    RegisterPage,
    MapPage,
    SchedulePage,
    WeatherForecastPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
