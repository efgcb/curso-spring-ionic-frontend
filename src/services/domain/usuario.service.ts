import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { UsuarioDTO } from "../../models/usuario.dto";
import { API_CONFIG } from "../../config/api.config";
import { StorageService } from "../storage.service";



@Injectable()
export class UsuarioService {

    constructor(
        public http: HttpClient,
        public storage: StorageService) {
    }

    findByEmail(email: string) : Observable<UsuarioDTO> {
            
        let token = this.storage.getLocalUser().token;
        let authHeader = new HttpHeaders({'Authorization': 'Bearer ' + token});
        return this.http.get<UsuarioDTO>(
            `${API_CONFIG.baseUrl}/usuario/email?value=${email}`,
            {'headers': authHeader});
            
    }

    insert(obj: UsuarioDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/usuario`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }
}