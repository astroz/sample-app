import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {Consumable} from '../consumable';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];
  showOptions: boolean;

  constructor(private heroService: HeroService) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.heroService.setSelectedHero(hero);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  removeHero(hero: Hero): void {
    this.heroes.splice( this.heroes.indexOf(hero), 1 );
    this.selectedHero = null;
    this.saveHeroes();
  }

  saveHeroes(): void {
    this.heroService.saveHeroes(this.heroes);
  }

  clearHeroes(): void {
    this.selectedHero = null;
    this.heroes = null;
    this.heroService.saveHeroes(this.heroes);
  }

  loadDefaults(): void {
    this.clearHeroes();
    this.getHeroes();
  }

  addFoods(consumable: Consumable) {
    // this.heroService.setSelectedConsumable(consumable);
    // this.selectedHero.food.concat(consumable);
}

  clearFoods(): void {
    this.selectedHero.food = [];
    this.saveHeroes();
  }

  ngOnInit() {
    this.getHeroes();
    this.showOptions = false;

    this.heroService.getSelectedConsumable()
      .subscribe(consumable => {
        if (this.selectedHero) {
          console.log(' = hero = ' + this.selectedHero + ' consumable = ' + consumable);
          this.selectedHero.food.concat(consumable);
        }
    });
  }

}
