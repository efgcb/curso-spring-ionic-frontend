import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrganizacoesPage } from './organizacoes';

@NgModule({
  declarations: [
    OrganizacoesPage,
  ],
  imports: [
    IonicPageModule.forChild(OrganizacoesPage),
  ],
})
export class OrganizacoesPageModule {}
