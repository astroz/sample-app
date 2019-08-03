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

  onSelect(consumable: Consumable): void {
    this.selectedConsumable = consumable;
  }

  ngOnInit() {
    this.getConsumables();
  }

}
