import {Injectable} from '@angular/core';

import {MessageService} from './message.service';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

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
}
