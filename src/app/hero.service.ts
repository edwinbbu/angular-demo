import { Injectable } from '@angular/core';
import { Hero } from './heros/hero';
import { HerosList } from './heros/mock-heros';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  
  getHeroes(): Hero[] {
    return HerosList;
  }
}
