import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import { CorporacaoService } from '../../services/donain/corporacao.service';
import { OrganizacaoService } from '../../services/donain/organizacao.service';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
  ],
  providers: [
    CorporacaoService,
    OrganizacaoService
  ]
})
export class SignupPageModule {}
