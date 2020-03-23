import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CorporacoesPage } from './corporacoes';

@NgModule({
  declarations: [
    CorporacoesPage,
  ],
  imports: [
    IonicPageModule.forChild(CorporacoesPage),
  ],
})
export class CorporacoesPageModule {}
