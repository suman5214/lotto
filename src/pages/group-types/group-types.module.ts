import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupTypesPage } from './group-types';

// pipe
import { PipesModule } from '../../pipes/pipes.module';
// translation
import { TranslateModule } from '@ngx-translate/core';
// material
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    GroupTypesPage,
  ],
  imports: [
    PipesModule,
    MatProgressBarModule,
    IonicPageModule.forChild(GroupTypesPage),
    TranslateModule.forChild()
  ],
})
export class GroupTypesPageModule {}
