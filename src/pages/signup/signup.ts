import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CorporacaoService } from '../../services/donain/corporacao.service';
import { OrganizacaoService } from '../../services/donain/organizacao.service';
import { CorporacaoDTO } from '../../models/corporacao.dto'
import { OrganizacaoDTO} from '../../models/organizacao.dto'

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
    public organizacaoService: OrganizacaoService) {

    this.formGroup = this.formBuilder.group({
      email: ['Joaquim@gmail.com',[Validators.required, Validators.email]],
      corporacaoId: [null, [Validators.required]],
      organizacaoId: [null, [Validators.required]],
      senha: ['123',[Validators.required]],
      perfil: ['OPERACIONAL',[Validators.required]]
    });
  }

  ionViewDidLoad(){
    this.corporacaoService.findAll()
      .subscribe(response => {
        this.corporacoes = response;
        this.formGroup.controls.corporacaoId.setValue(this.corporacoes[0].id);
        this.updateOrganizaoes();
      },
      error => {});
  }

    updateOrganizaoes(){
      let corporacaoId = this.formGroup.value.corporacaoId;
      this.organizacaoService.findAll(corporacaoId)
        .subscribe(response => {
          this.organizacoes = response;
          this.formGroup.controls.corporacaoId.setValue(null);
        },
        error => {});
    }

  signupUser(){
    console.log("enviou o form");
  }
}
