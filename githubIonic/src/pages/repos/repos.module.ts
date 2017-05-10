import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Repos } from './repos';

@NgModule({
  declarations: [
    Repos,
  ],
  imports: [
    IonicPageModule.forChild(Repos),
  ],
  exports: [
    Repos
  ]
})
export class ReposModule {}
