import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeroesComponent} from './heroes.component';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import {RouterModule} from '@angular/router';
import {Hero} from '../hero';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent, HeroDetailComponent ],
      imports: [ FormsModule, RouterModule.forRoot([]) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set selected hero properly', () => {
    const hero = new Hero(0, 'Testo', 'Testo');

    component.onSelect(hero);
    expect(component.selectedHero).toEqual(hero);
  });
});
