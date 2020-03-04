import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx";
import { MunicipioDTO } from "../../models/municipio.dto";




@Injectable()
export class MunicipioService {

    constructor(public http: HttpClient) {
    }

    findAll(estado_id: string) : Observable<MunicipioDTO> {
             return this.http.get<MunicipioDTO>(`${API_CONFIG.baseUrl}/estados/${estado_id}/municipios`);            
    }
}