import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Rattatouie", "I honestly have no idea what rattatouie is", "https://i.imgur.com/P8sakyK.jpg"),
    new Recipe("RattaTWOie", "Something else here", "https://i.imgur.com/P8sakyK.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
