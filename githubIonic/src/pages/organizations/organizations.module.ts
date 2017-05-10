import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Organizations } from './organizations';

@NgModule({
  declarations: [
    Organizations,
  ],
  imports: [
    IonicPageModule.forChild(Organizations),
  ],
  exports: [
    Organizations
  ]
})
export class OrganizationsModule {}
