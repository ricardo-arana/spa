import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {
  heroes: any[] = [];
  termino: string = '';

  constructor(private _activadedRotute: ActivatedRoute, private _heoresServicies: HeroesService, private _router: Router) {}

  ngOnInit() {
    this._activadedRotute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heoresServicies.buscarHeroes(params['termino']);
    });
  }

  verHeore(index: number) {
    this._router.navigate(['/heroe', index]);
  }
}
