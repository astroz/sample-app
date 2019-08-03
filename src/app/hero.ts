import {Consumable} from './consumable';

export class Hero {
  id: number;
  name: string;
  type: string;
  food?: Consumable[];
}
