import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GroupType } from '../group-types/common/GroupType';
import { LottoType } from '../lotto-types/common/LottoType';

// other pages
import { LottoDetailPage } from '../../pages/lotto-detail/lotto-detail';


/**
 * Generated class for the SubGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sub-group',
  templateUrl: 'sub-group.html',
})

export class SubGroupPage {

  public  subGroup: GroupType
          lottoType: LottoType;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.subGroup = this.navParams.get('subGroup');
    this.lottoType = this.navParams.get('lottoType');
  }

  viewLottoDetail(
    subGroup: GroupType,
    lottoType: LottoType
  ){
    this.navCtrl.push(
      LottoDetailPage,
      {
        subGroup: subGroup,
        lottoType: lottoType
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubGroupPage');
  }

}
