import {Component, Input, OnInit} from '@angular/core';
import {Consumable} from '../consumable';
import {HeroService} from '../hero.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-consumables',
  templateUrl: './consumables.component.html',
  styleUrls: ['./consumables.component.sass']
})
export class ConsumablesComponent implements OnInit {

  selectedConsumable: Consumable;
  consumables: Consumable[];
  selectedHero: Hero;

  @Input() set hero(value: Hero) {
    this.selectedHero = value;
  }
  get hero(): Hero {
    return this.selectedHero;
  }

  constructor(private heroService: HeroService) {
    this.heroService.selectedHeroChange.subscribe(hero => this.selectedHero = hero);
  }

  getConsumables(): void {
    this.heroService.getConsumables()
      .subscribe(consumables => this.consumables = consumables);
  }

  addConsumable(consumable: Consumable): void {
    this.heroService.setSelectedConsumable(consumable);
  }

  onSelect(consumable: Consumable): void {
    this.selectedConsumable = consumable;
    this.heroService.setSelectedConsumable(consumable);
  }

  ngOnInit() {
    this.getConsumables();
  }

}
