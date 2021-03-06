import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Injectable } from "@angular/core";
import { OrganizacaoDTO } from '../../models/organizacao.dto';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class OrganizacaoService {

    constructor(public http: HttpClient) {

    }
    findByCorporacao(corporacao_id : string) : Observable<OrganizacaoDTO[]> {
        return this.http.get<OrganizacaoDTO[]>(`${API_CONFIG.baseUrl}/corporacoes/${corporacao_id}/organizacoes`);
    }
}