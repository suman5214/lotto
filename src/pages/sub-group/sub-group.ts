import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GroupType } from '../group-types/common/GroupType';

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

  public subGroup: GroupType;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.subGroup = this.navParams.get('subGroup');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubGroupPage');
  }

}
