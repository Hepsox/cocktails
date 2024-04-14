import { Injectable } from '@angular/core';
import { Cocktail } from './types/cocktailType';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor() {}

  getCocktails(): Cocktail[] {
    return [
      {
        name: 'gin',
        price: 230000000,
      },
      {
        name: 'tonic',
        price: 21,
      },
    ];
  }
}
