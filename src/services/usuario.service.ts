import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Usuario } from "../models/usuario";
import { API_CONFIG } from "../config/api.config";
import { StorageService } from "./storage.service";

@Injectable()
export class UsuarioService {

    constructor(public http: HttpClient, public storage: StorageService) {
    }

    findByEmail(email: string) : Observable<Usuario> {
             return this.http.get<Usuario>(`${API_CONFIG.baseUrl}/usuario/email?value=${email}`);
            
    }
}