import { Component, OnInit } from '@angular/core';
import { EmbarcadoresService } from '../embarcadores.service';
import { EmbarcadorModel } from './embarcador.model';

@Component({
  selector: 'app-embarcadores',
  templateUrl: './embarcadores.component.html',
  styleUrls: ['./embarcadores.component.css']
})
export class EmbarcadoresComponent implements OnInit {
  embarcador: EmbarcadorModel = new EmbarcadorModel();
  embarcadores: Array<any> = new Array();

  constructor(private embarcadorService: EmbarcadoresService) { }

  ngOnInit(): void {
    this.listarEmbarcadores();
  }

  listarEmbarcadores(){
    this.embarcadorService.listarEmbarcador().subscribe(embarcadores => {
      this.embarcadores = embarcadores
    })
  }
  cadastrar(){
    // console.log(this.embarcador);
    this.embarcadorService.cadastrarEmbarcador(this.embarcador).subscribe(
    () => {
      this.embarcador = new EmbarcadorModel();
      this.listarEmbarcadores();
    }
    ,() => {
      console.log("Deu ruim...");
    }
    );
    
  }
}
