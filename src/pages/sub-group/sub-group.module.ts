import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubGroupPage } from './sub-group';

// pipe
import { PipesModule } from '../../pipes/pipes.module';
// translation
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SubGroupPage,
  ],
  imports: [
    PipesModule,
    TranslateModule.forChild(),
    IonicPageModule.forChild(SubGroupPage),
  ],
})
export class SubGroupPageModule {}
