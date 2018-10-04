import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LottoTypesPage } from './lotto-types';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    LottoTypesPage
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(LottoTypesPage),
  ],
})
export class LottoTypesPageModule {}
