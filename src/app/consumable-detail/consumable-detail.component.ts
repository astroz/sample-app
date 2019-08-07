import {Component, Input, OnInit} from '@angular/core';
import {ConsumablesComponent} from '../consumables/consumables.component';
import {Consumable} from '../consumable';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-consumable-detail',
  templateUrl: './consumable-detail.component.html',
  styleUrls: ['./consumable-detail.component.sass']
})

export class ConsumableDetailComponent implements OnInit {

  constructor(private consumablesComponent: ConsumablesComponent,
              private heroService: HeroService) {
    this.hero = heroService.selectedHero;
  }

  @Input() consumable: Consumable;
  @Input() hero: Hero;

  addFood(consumable: Consumable) {
    this.heroService.addConsumable(consumable);
  }

  ngOnInit() { }

}
