import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LottoDetailPage } from './lotto-detail';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    LottoDetailPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(LottoDetailPage),
  ],
})
export class LottoDetailPageModule {}
