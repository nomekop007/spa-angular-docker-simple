import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {


  heroe: any = {};
  img: string = "";

  constructor(private _activateRoute: ActivatedRoute, private _heroeService: HeroesService) {

    this._activateRoute.params.subscribe(params => {

      this.heroe = this._heroeService.getHeroe(params["id"]);


      if (this.heroe.casa === "Marvel") {
        this.img = "../../../assets/img/marvel.png";
      } else {
        this.img = "../../../assets/img/dc.png";
      }
      console.log(this.img);
    })
  }


}
