import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { OfertaModel } from './oferta.model';
import { NgBrDirectives } from 'ng-brazil';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {
  oferta: OfertaModel = new OfertaModel();
  ofertas: Array<any> = new Array();

  constructor(private ofertaService: OfertasService) { }

  ngOnInit(): void {
    this.listarOfertas();
  }

  listarOfertas(){
    this.ofertaService.listarOferta().subscribe(ofertas => {
      this.ofertas = ofertas
    })
  }
  cadastrar(){
    // console.log(this.oferta);
    this.ofertaService.cadastrarOferta(this.oferta).subscribe(
    () => {
      this.oferta = new OfertaModel();
      this.listarOfertas();
    }
    ,() => {
      console.log("Deu ruim...");
    }
    );
    
  }
}
