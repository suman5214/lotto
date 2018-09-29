import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LottoTypesPage } from './lotto-types';
import { TimesPipe } from './lotto-types'
@NgModule({
  declarations: [
    LottoTypesPage,
    TimesPipe
  ],
  imports: [
    IonicPageModule.forChild(LottoTypesPage),
  ],
})
export class LottoTypesPageModule {}
