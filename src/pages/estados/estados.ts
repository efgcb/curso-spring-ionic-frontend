import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstadoService } from '../../services/donain/estado.service';
import { EstadoDTO } from '../../models/estado.dto';

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

  items: EstadoDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public estadoService: EstadoService) {
  }

  ionViewDidLoad() {
    this.estadoService.findAll()
      .subscribe(response => {
        this.items = response;
      },
      error => {
        console.log(error);
      });    
  } 
}
