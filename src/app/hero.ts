import {Consumable} from './consumable';

export class Hero {
  id: number;
  name: string;
  type: string;
  food: Consumable[];

  constructor(id: number, name: string, type: string, food?: Consumable[]) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.food = food || [];
  }

  addFood(consumable: Consumable): void {
    if (!this.food) {
      this.food = [];
    }
    this.food.push(consumable);
  }
}
