import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nomeUsuario:string = "Luizinho";
  public num1:number = 5;
  public num2:number = 10;
  public resultadoSoma:number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumero(n1:number, n2:number): number{
    return n1 + n2;
  }

  ionViewDidLoad() {
    this.resultadoSoma = this.somaDoisNumero(this.num1, this.num2);
  }

}
