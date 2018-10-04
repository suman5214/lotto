import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { LottoType } from '../lotto-types/common/LottoType';
import { GroupTypesPage } from '../group-types/group-types';

/**
 * Generated class for the LottoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lotto-detail',
  templateUrl: 'lotto-detail.html',
})
export class LottoDetailPage {

  public lottoType: LottoType;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.lottoType = this.navParams.get('lottoType');
  }

  viewGroupTypes(lottoType: LottoType){

    const lottoTypeModal = this.modalCtrl.create(
      GroupTypesPage,
      {
        lottoType: lottoType
      }
    )

    lottoTypeModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LottoDetailPage');
  }

}
