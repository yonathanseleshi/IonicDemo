import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BuyoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html',
})
export class BuyoutPage implements OnInit{


  item = []

  constructor(private navParams: NavParams, private navCtrl: NavController) {
  }


  ngOnInit(){

    this.item = this.navParams.get('item')
  }

  onConfirmPurchase(){


    this.navCtrl.popToRoot()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyoutPage');
  }

}
