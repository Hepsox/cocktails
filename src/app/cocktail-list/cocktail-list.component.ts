import { Component, inject } from '@angular/core';
import { Cocktail } from '../types/cocktailType';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css',
})
export class CocktailListComponent {
  cocktails: Cocktail[] = [];

  private cocktailService = inject(CocktailService);

  onClick() {
    this.cocktails = this.cocktailService.getCocktails();
  }
}
