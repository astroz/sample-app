import {TestBed} from '@angular/core/testing';

import {HeroService} from './hero.service';
import {HEROES} from './mock-heroes';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});

    // credit for mock local storage:
    // https://medium.com/@armno/til-mocking-localstorage-and-sessionstorage-in-angular-unit-tests-a765abdc9d87

    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };

    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
  });

  let heroService: HeroService;

  it('should be created', () => {
    const service: HeroService = TestBed.get(HeroService);
    expect(service).toBeTruthy();
  });

  it('should return default heroes when getHeroes is called before changes', () => {
    heroService = TestBed.get(HeroService);
    heroService.getHeroes().subscribe(heroes => expect(heroes).toEqual(HEROES));
  });

  it('should successfully save and retrieve heroes from localstorage after modification', () => {
    heroService = TestBed.get(HeroService);
    heroService.getHeroes().subscribe(heroes => {
      expect(heroes).toEqual(HEROES);
      heroes.pop();
      heroService.saveHeroes(heroes);
      heroService.getHeroes().subscribe(newHeroes => {
        expect(heroes).toEqual(newHeroes);
        expect(heroes).not.toBe(newHeroes); // important to ensure that we've got two distinct yet same (data-wise) elements
      });
    });
  });
});
