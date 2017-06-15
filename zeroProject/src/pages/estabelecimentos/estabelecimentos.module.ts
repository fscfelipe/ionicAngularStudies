import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Estabelecimentos } from './estabelecimentos';

@NgModule({
  declarations: [
    Estabelecimentos,
  ],
  imports: [
    IonicPageModule.forChild(Estabelecimentos),
  ],
  exports: [
    Estabelecimentos
  ]
})
export class EstabelecimentosModule {}
