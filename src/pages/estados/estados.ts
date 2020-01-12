import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstadoService } from '../../services/donain/estado.service';

/**
 * Generated class for the EstadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estados',
  templateUrl: 'estados.html',
})
export class EstadosPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public estadoService: EstadoService) {
  }

  ionViewDidLoad() {
    this.estadoService.findAll()
      .subscribe(response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });    
  } 
}
