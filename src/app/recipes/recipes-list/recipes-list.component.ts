import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Rattatouie", "I honestly have no idea what rattatouie is", "https://i.imgur.com/P8sakyK.jpg"),
    new Recipe("RattaTWOie", "Something else here", "https://i.imgur.com/P8sakyK.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(selectedRecipe: Recipe){
    this.recipeWasSelected.emit(selectedRecipe);
  }

}
