import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransportadorModel } from './transportadores/transportador.model';

@Injectable({
  providedIn: 'root'
})
export class TransportadoresService {

  protected urlAPI: string = "http://localhost:3000/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };

  constructor(private http: HttpClient) { }

  cadastrarTransportador(transportador: TransportadorModel): Observable<TransportadorModel>{
    return this.http.post<TransportadorModel>(this.urlAPI + "transportador", transportador, this.httpOptions);
  }
  
  listarTransportador(): Observable<any>{
    return this.http.get(this.urlAPI + "transportador");
  }
}
