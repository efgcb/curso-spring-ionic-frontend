import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CorporacaoService } from '../../services/domain/corporacao.service';
import { OrganizacaoService } from '../../services/domain/organizacao.service';
import { UsuarioService } from '../../services/domain/usuario.service';
import { CorporacaoDTO } from '../../models/corporacao.dto'
import { OrganizacaoDTO} from '../../models/organizacao.dto'
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {


  formGroup: FormGroup;
  corporacoes: CorporacaoDTO[];
  organizacoes: OrganizacaoDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public corporacaoService: CorporacaoService,
    public organizacaoService: OrganizacaoService,
    public usuarioSerice: UsuarioService,
    public alertCtrl: AlertController) {

    this.formGroup = this.formBuilder.group({
      email: ['Joaquim@gmail.com',[Validators.required, Validators.email]],
      corporacaoId: [null, [Validators.required]],
      organizacaoId: [null, [Validators.required]],
      senhaUsuario: ['123456',[Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      perfil: ['OPERACIONAL',[Validators.required]]
    });
  }

  ionViewDidLoad(){
    this.corporacaoService.findAll()
      .subscribe(response => {
        this.corporacoes = response;
        this.formGroup.controls
        this.formGroup.controls.corporacaoId.setValue(this.corporacoes[0].id);
        this.updateOrganizacoes();
      },
      error => {});
  }

    updateOrganizacoes(){
      let corporacao_id = this.formGroup.value.corporacaoId;
      this.organizacaoService.findByCorporacao(corporacao_id)
        .subscribe(response => {
          this.organizacoes = response;
          this.formGroup.controls.organizacaoId.setValue(null);
        },
        error => {});
    }

  signupUser(){  
    this.usuarioSerice.insert(this.formGroup.value)
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
