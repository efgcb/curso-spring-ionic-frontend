import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrganizacaoDTO } from '../../models/organizacao.dto';



@IonicPage()
@Component({
  selector: 'page-organizacoes',
  templateUrl: 'organizacoes.html',
})
export class OrganizacoesPage {

  items: OrganizacaoDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = [
      {
      id: "1",
      nome: "Organização",
      ddd: "011",
      telefone: "982536938",
      contato: "Eduardo",
      email: "efgcb@windowslive.com"
    }
    ]
  };
}
