import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OfertaModel } from './ofertas/oferta.model';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  protected urlAPI: string = "http://localhost:3000/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };

  constructor(private http: HttpClient) { }

  cadastrarOferta(oferta: OfertaModel): Observable<OfertaModel>{
    return this.http.post<OfertaModel>(this.urlAPI + "oferta", oferta, this.httpOptions);
  }
  
  listarOferta(): Observable<any>{
    return this.http.get(this.urlAPI + "oferta");
  }
}
