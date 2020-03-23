import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrganizacaoDTO } from '../../models/organizacao.dto';
import { OrganizacaoService } from '../../services/domain/organizacao.service';



@IonicPage()
@Component({
  selector: 'page-organizacoes',
  templateUrl: 'organizacoes.html',
})
export class OrganizacoesPage {

  items: OrganizacaoDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public organizacaoService: OrganizacaoService) {
  }

  ionViewDidLoad() {
    let corporacao_id = this.navParams.get('corporacao_id');
    this.organizacaoService.findByCorporacao(corporacao_id)
      .subscribe(response => {
        this.items = response;
      },
      error => {});
  }
}
