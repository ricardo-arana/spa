import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "src/app/servicios/heroes.service";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styles: []
})
export class HeroeComponent implements OnInit {
  heroe: any = {};
  constructor(private _activadedRotute: ActivatedRoute, private _heroesService: HeroesService) {
    this._activadedRotute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeore(params["id"].toString());
    });
  }

  ngOnInit() {}
}
