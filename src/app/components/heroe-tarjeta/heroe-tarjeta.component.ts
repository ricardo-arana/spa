import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe:any = {}
  @Input() index:number;

  @Output() heroeSelecionado:EventEmitter<number>;
  constructor(private _router:Router,
              ) { 
                  this.heroeSelecionado = new EventEmitter();

              }

  ngOnInit() {
  }

  verHeore(){
     this._router.navigate( ['/heroe',this.index] );
    //this.heroeSelecionado.emit(this.index);
  }

}
