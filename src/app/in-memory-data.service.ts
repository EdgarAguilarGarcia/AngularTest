import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './Hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Valorant', power: 92},
      { id: 13, name: 'Warframe', power: 95},
      { id: 14, name: 'CS:GO', power: 80},
      { id: 15, name: 'Warzone 2.0', power: 75},
      { id: 16, name: 'Destiny 2', power: 79},
      { id: 17, name: 'Fall guys', power: 80},


    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}