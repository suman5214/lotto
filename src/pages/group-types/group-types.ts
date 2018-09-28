import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { GroupType } from './common/GroupType';

// other pages
import { SubGroupPage } from '../../pages/sub-group/sub-group';

import { TranslateService } from '@ngx-translate/core';
/**
 * Generated class for the GroupTypesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-group-types',
  templateUrl: 'group-types.html',
})


export class GroupTypesPage {
  // use type to define the data format
  public groupTypes: GroupType[] = [];
  
  constructor(public navCtrl: NavController, 
    private db: AngularFirestore,
    public navParams: NavParams,
    translate: TranslateService) {
      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang('en');
  }

  ionViewWillEnter(){
    
    this.db.collection('groupTypes').valueChanges().subscribe((res: GroupType[])=>{
      this.groupTypes = res;
    });
    
  }

  viewSubGroup(subGroup:GroupType){
    this.navCtrl.push(
      SubGroupPage,
      {
        subGroup: subGroup
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupTypesPage');
  }

}
