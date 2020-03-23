import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CorporacaoService } from '../../services/domain/corporacao.service';
import { CorporacaoDTO } from '../../models/corporacao.dto';



@IonicPage()
@Component({
  selector: 'page-corporacoes',
  templateUrl: 'corporacoes.html',
})
export class CorporacoesPage {

  items: CorporacaoDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public corporacaoService: CorporacaoService) {
  }

  ionViewDidLoad() {
    this.corporacaoService.findAll()
      .subscribe(response => {
        this.items = response;
      },
      error => {});  
  } 
  cadastrarCorporacao() {
    this.navCtrl.push('CadastrarCorporacaoPage');
  }

  showOrganizacoes(corporacao_id : string){
    this.navCtrl.push('OrganizacoesPage', {corporacao_id: corporacao_id});

  }
}
