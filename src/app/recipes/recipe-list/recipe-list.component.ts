import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('Test Recipe 1', 'A test desc', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sweet-and-sticky-tofu-with-baby-bok-choy-1642786258.jpg?crop=0.731xw:0.486xh;0.139xw,0.257xh&resize=640:*'),
    new Recipe('Test Recipe 2', 'A test desc', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sweet-and-sticky-tofu-with-baby-bok-choy-1642786258.jpg?crop=0.731xw:0.486xh;0.139xw,0.257xh&resize=640:*')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
