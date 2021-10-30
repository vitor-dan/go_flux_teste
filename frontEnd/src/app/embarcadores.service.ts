import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmbarcadorModel } from './embarcadores/embarcador.model';

@Injectable({
  providedIn: 'root'
})
export class EmbarcadoresService {

  protected urlAPI: string = "http://localhost:3000/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };

  constructor(private http: HttpClient) { }

  cadastrarEmbarcador(embarcador: EmbarcadorModel): Observable<EmbarcadorModel>{
    return this.http.post<EmbarcadorModel>(this.urlAPI + "embarcador", embarcador, this.httpOptions);
  }
  
  listarEmbarcador(): Observable<any>{
    return this.http.get(this.urlAPI + "embarcador");
  }
}
