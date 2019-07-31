import {Component, OnInit} from '@angular/core';
import {Consumable} from '../consumable';

@Component({
  selector: 'app-consumables',
  templateUrl: './consumables.component.html',
  styleUrls: ['./consumables.component.sass']
})
export class ConsumablesComponent implements OnInit {

  selectedConsumable: Consumable;
  consumables: Consumable[];

  constructor() { }

  onSelect(consumable: Consumable): void {
    this.selectedConsumable = consumable;
  }

  ngOnInit() {
  }

}
