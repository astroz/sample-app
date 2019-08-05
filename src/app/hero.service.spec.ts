import {TestBed} from '@angular/core/testing';

import {HeroService} from './hero.service';
import {MessageService} from './message.service';
import {HEROES} from './mock-heroes';
import {of} from 'rxjs';

describe('HeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  let heroService: HeroService;

  it('should be created', () => {
    const service: HeroService = TestBed.get(HeroService);
    expect(service).toBeTruthy();
  });

  it('#getValue should return real value from the real service', () => {
    heroService = new HeroService(new MessageService());
    expect(heroService.getHeroes()).toEqual(of(HEROES));
  });
});
