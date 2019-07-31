import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

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

  ngOnInit() {
    this.getHeroes();
    this.showOptions = false;
  }

}
