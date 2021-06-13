import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-find-heroe',
  templateUrl: './find-heroe.component.html',
  styleUrls: ['./find-heroe.component.css']
})
export class FindHeroeComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor(private _heroesService: HeroesService, private _activateRouter: ActivatedRoute) {


  }

  ngOnInit(): void {
    this._activateRouter.params.subscribe((parms) => {

      this.termino = parms["heroe"];
      this.heroes = this._heroesService.findHeroes(parms["heroe"]);
    })
  }



}
