import { Component, OnInit } from '@angular/core';
import { LancesService } from '../lances.service';
import { LanceModel } from './lance.model';
import { NgBrDirectives } from 'ng-brazil';

@Component({
  selector: 'app-lances',
  templateUrl: './lances.component.html',
  styleUrls: ['./lances.component.css']
})
export class LancesComponent implements OnInit {
  lance: LanceModel = new LanceModel();
  lances: Array<any> = new Array();

  constructor(private lanceService: LancesService) { }

  ngOnInit(): void {
    this.listarLances();
  }

  listarLances(){
    this.lanceService.listarLance().subscribe(lances => {
      this.lances = lances
    })
  }
  cadastrar(){
    // console.log(this.lance);
    this.lanceService.cadastrarLance(this.lance).subscribe(
    () => {
      this.lance = new LanceModel();
      this.listarLances();
    }
    ,() => {
      console.log("Deu ruim...");
    }
    );
    
  }
}
