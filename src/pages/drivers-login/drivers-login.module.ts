import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriversLoginPage } from './drivers-login';

@NgModule({
  declarations: [
    DriversLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(DriversLoginPage),
  ],
})
export class DriversLoginPageModule {}
