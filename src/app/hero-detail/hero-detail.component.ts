import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {HeroesComponent} from '../heroes/heroes.component';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.sass']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private heroService: HeroService,
    private location: Location,
    private heroesComponent: HeroesComponent
  ) { }

  goBack(): void {
    this.location.back();
  }

  remove(): void {
    this.heroesComponent.removeHero(this.hero);
  }

  save(): void {
    this.heroesComponent.saveHeroes();
     // .subscribe(() => this.goBack());
  }

  ngOnInit() {
  }

}
