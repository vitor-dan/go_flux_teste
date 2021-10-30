import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LanceModel } from './lances/lance.model';

@Injectable({
  providedIn: 'root'
})
export class LancesService {

  protected urlAPI: string = "http://localhost:3000/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };

  constructor(private http: HttpClient) { }

  cadastrarLance(lance: LanceModel): Observable<LanceModel>{
    return this.http.post<LanceModel>(this.urlAPI + "lance", lance, this.httpOptions);
  }
  
  listarLance(): Observable<any>{
    return this.http.get(this.urlAPI + "lance");
  }
}
