import {Injectable} from '@angular/core';

import {MessageService} from './message.service';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {Consumable} from './consumable';
import {CONSUMABLES} from './consumables';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private selectedConsumable: Consumable;
  private selectedHero: Hero;

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    let heroList = JSON.parse(localStorage.getItem('Heroes'));
    if (!heroList) { heroList = HEROES; }

    this.messageService.add('HeroService: fetched heroes ');
    return of(heroList);
  }

  saveHeroes(heroes): void {
    localStorage.setItem('Heroes', JSON.stringify(heroes));
  }

  setSelectedHero(hero: Hero): void {
    this.selectedHero = hero;
    console.log('Set hero ' + hero.name);
  }

  getSelectedHero(): Observable<Hero> {
    return of(this.selectedHero);
  }

  // Consumable Stuff

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
