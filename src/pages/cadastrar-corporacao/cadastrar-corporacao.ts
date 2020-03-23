import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CorporacaoService } from '../../services/domain/corporacao.service';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


@IonicPage()
@Component({
  selector: 'page-cadastrar-corporacao',
  templateUrl: 'cadastrar-corporacao.html',
})
export class CadastrarCorporacaoPage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public corporacaoService: CorporacaoService,
    public alertCtrl: AlertController) {
    
    this.formGroup = this.formBuilder.group({
      nome: ['', [Validators.required]]
    });
  }
    
   insereCorporacao(){
    this.corporacaoService.insert(this.formGroup.value)
    .subscribe(response => {
      this.showInsertOK();
    },
    error => {});    
}
showInsertOK() {
  let alert = this.alertCtrl.create({
    title: 'Sucesso!',
    message: 'Cadastro efetuado com sucesso!',
    enableBackdropDismiss: false,
    buttons: [
      {
        text: 'OK',
        handler: () => {
          this.navCtrl.pop();
        }
      }
    ]
  });
  alert.present();
}
}
