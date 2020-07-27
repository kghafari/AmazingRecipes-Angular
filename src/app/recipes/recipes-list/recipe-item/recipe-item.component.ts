import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelect(recipeName: string){
    this.recipeSelected.emit(recipeName);
    console.log(this.recipeSelected);
    console.log(recipeName);
  }

}
