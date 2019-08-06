import {Injectable} from '@angular/core';

import {MessageService} from './message.service';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable, of, Subject} from 'rxjs';
import {Consumable} from './consumable';
import {CONSUMABLES} from './consumables';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private selectedConsumable: Consumable;

  heroes: Hero[];
  currentHeroes: Subject<Hero[]> = new Subject<Hero[]>();

  selectedHero: Hero;
  selectedHeroChange: Subject<Hero> = new Subject<Hero>();

  constructor(private messageService: MessageService) {
    this.selectedHeroChange.subscribe( hero => this.selectedHero = hero);
    this.currentHeroes.subscribe( heroes => this.heroes = heroes);
  }

  getHeroes(): Observable<Hero[]> {
    let heroes = [];

    if (!localStorage.getItem('Heroes')) {
      heroes = HEROES;
    } else {
      const heroList = JSON.parse(localStorage.getItem('Heroes'));
      heroList.forEach(hero => {
        heroes.push(new Hero(hero.id, hero.name, hero.type, hero.food));
      });
    }

    this.heroes = heroes;
    return of(heroes);
  }

  saveHeroes(heroes?: Hero[]): void {
    if (heroes) { this.heroes = heroes; }
    localStorage.setItem('Heroes', JSON.stringify(this.heroes));
  }

  setSelectedHero(hero: Hero): void {
    this.selectedHeroChange.next(hero);
    // this.selectedHero = hero;
    console.log('Set hero ' + hero.name);
  }

  getSelectedHero(): Observable<Hero> {
    return of(this.selectedHero);
  }

  // Consumable Stuff

  addConsumable(consumable: Consumable) {
    console.log('adding consumable ' + consumable + ' to hero ' + this.selectedHero);
    this.selectedHero.addFood(consumable);
    this.saveHeroes();
  }

  setSelectedConsumable(consumable: Consumable) {
    this.selectedConsumable = consumable;
  }

  getSelectedConsumable(): Observable<Consumable> {
    return of(this.selectedConsumable);
  }

  getConsumables(): Observable<Consumable[]> {
    return of(CONSUMABLES);
  }
}
