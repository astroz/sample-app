import {Component, Input, NgModule, OnInit} from '@angular/core';
import {ConsumablesComponent} from '../consumables/consumables.component';
import {Consumable} from '../consumable';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-consumable-detail',
  templateUrl: './consumable-detail.component.html',
  styleUrls: ['./consumable-detail.component.sass']
})

@NgModule({
    providers: [ HeroService ]
})
export class ConsumableDetailComponent implements OnInit {

  constructor(private consumablesComponent: ConsumablesComponent,
              private heroService: HeroService) { }

  @Input() consumable: Consumable;
  @Input() hero: Hero;

  addFood(consumable: Consumable) {
    this.consumablesComponent.addConsumable(consumable);
  }

  ngOnInit() {
    this.heroService.getSelectedHero().subscribe(hero => {this.hero = hero; console.log(hero + ' selected.'); });
  }

}
