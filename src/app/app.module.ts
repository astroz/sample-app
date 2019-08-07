import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {MessagesComponent} from './messages/messages.component';
import {ConsumablesComponent} from './consumables/consumables.component';
import {ConsumableDetailComponent} from './consumable-detail/consumable-detail.component';
import {HeroService} from './hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    ConsumablesComponent,
    ConsumableDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    HeroService,
    HeroesComponent,
    ConsumablesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
