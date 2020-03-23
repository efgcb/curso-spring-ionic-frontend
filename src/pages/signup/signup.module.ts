import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import { CorporacaoService } from '../../services/domain/corporacao.service';
import { OrganizacaoService } from '../../services/domain/organizacao.service';
import { UsuarioService } from '../../services/domain/usuario.service';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
  ],
  providers: [
    CorporacaoService,
    OrganizacaoService,
    UsuarioService
  ]
})
export class SignupPageModule {}
