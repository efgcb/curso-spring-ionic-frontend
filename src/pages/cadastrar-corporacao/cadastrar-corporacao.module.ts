import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarCorporacaoPage } from './cadastrar-corporacao';
import { CorporacaoService } from '../../services/domain/corporacao.service';

@NgModule({
  declarations: [
    CadastrarCorporacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarCorporacaoPage),
  ]
})
export class CadastrarCorporacaoPageModule {}
