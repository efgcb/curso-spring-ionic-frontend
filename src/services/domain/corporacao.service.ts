import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Injectable } from "@angular/core";
import { CorporacaoDTO } from '../../models/corporacao.dto';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class CorporacaoService {

    constructor(public http: HttpClient) {

    }
    findAll() : Observable<CorporacaoDTO[]> {
        return this.http.get<CorporacaoDTO[]>(`${API_CONFIG.baseUrl}/corporacoes`);
    }

    insert(obj: CorporacaoDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/corporacoes`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }
}