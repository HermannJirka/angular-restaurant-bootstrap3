import { Recipe } from './../../model/recipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is test description recipe',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
      new Recipe('A test recipe', 'This is test description recipe',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
