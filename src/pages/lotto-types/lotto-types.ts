import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { LottoType } from './common/LottoType';
import { PipeTransform, Pipe} from '@angular/core';

/**
 * Generated class for the LottoTypesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Pipe({name: 'times'})
export class TimesPipe implements PipeTransform {
  transform(value: number): any {
    const iterable = {};
    iterable[Symbol.iterator] = function* () {
      let n = 0;
      while (n < value) {
        yield ++n;
      }
    };
    return iterable;
  }
}

export class FillPipe implements PipeTransform {
  transform(value) {
    return (new Array(value)).fill(1);
  }
}

@Component({
  selector: 'page-lotto-types',
  templateUrl: 'lotto-types.html',

})
export class LottoTypesPage {
  public lottoType: LottoType[] = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private db: AngularFirestore) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LottoTypesPage');

    this.db.collection('lottoTypes').valueChanges().subscribe((res: LottoType[])=>{
      this.lottoType = res;
      console.log(this.lottoType);
    });
  }

}
