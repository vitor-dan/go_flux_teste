import { Component, OnInit } from '@angular/core';
import { TransportadoresService } from '../transportadores.service';
import { TransportadorModel } from './transportador.model';

@Component({
  selector: 'app-transportadores',
  templateUrl: './transportadores.component.html',
  styleUrls: ['./transportadores.component.css']
})
export class TransportadoresComponent implements OnInit {
  transportador: TransportadorModel = new TransportadorModel();
  transportadores: Array<any> = new Array();

  constructor(private transportadorService: TransportadoresService) { }

  ngOnInit(): void {
    this.listarTransportadores();
  }

  listarTransportadores(){
    this.transportadorService.listarTransportador().subscribe(transportadores => {
      this.transportadores = transportadores
    })
  }
  cadastrar(){
    // console.log(this.transportador);
    this.transportadorService.cadastrarTransportador(this.transportador).subscribe(
    () => {
      this.transportador = new TransportadorModel();
      this.listarTransportadores();
    }
    ,() => {
      console.log("Deu ruim...");
    }
    );
    
  }
}
