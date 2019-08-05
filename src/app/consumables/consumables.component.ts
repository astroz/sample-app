import {Component, OnInit} from '@angular/core';
import {Consumable} from '../consumable';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-consumables',
  templateUrl: './consumables.component.html',
  styleUrls: ['./consumables.component.sass']
})
export class ConsumablesComponent implements OnInit {

  selectedConsumable: Consumable;
  consumables: Consumable[];

  constructor(private heroService: HeroService) { }

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
