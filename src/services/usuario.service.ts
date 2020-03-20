import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Usuario } from "../models/usuario.dto";
import { API_CONFIG } from "../config/api.config";


@Injectable()
export class UsuarioService {

    constructor(
        public http: HttpClient) {
    }

    findByEmail(email: string) : Observable<Usuario> {
             return this.http.get<Usuario>(`${API_CONFIG.baseUrl}/usuario/email?value=${email}`);
            
    }

    insert(obj: Usuario) {
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