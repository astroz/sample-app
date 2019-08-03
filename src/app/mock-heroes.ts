import {Hero} from './hero';
import {HeroType} from './hero-type';

export const HEROES: Hero[] = [
  { id: 1, name: HeroType.Glenys, type: HeroType.Glenys },
  { id: 2, name: HeroType.Hex,    type: HeroType.Hex },
  { id: 3, name: HeroType.Ley,    type: HeroType.Ley },
  { id: 4, name: HeroType.Linail, type: HeroType.Linail },
  { id: 5, name: HeroType.Oratio, type: HeroType.Oratio },
  { id: 6, name: HeroType.Ouzo,   type: HeroType.Ouzo },
  { id: 7, name: HeroType.Prime,  type: HeroType.Prime },
  { id: 8, name: HeroType.Wyvera, type: HeroType.Wyvera },
];
