import { Component, OnInit } from '@angular/core';
import { HeroesService, Heores } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
   heroes:Heores[] = [];
  constructor(private _heroesService: HeroesService,
              private _router:Router) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeore(index:number){
      this._router.navigate( ['/heroe',index] );
  }

}
