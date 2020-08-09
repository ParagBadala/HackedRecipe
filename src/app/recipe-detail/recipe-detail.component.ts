import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/_models/recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  public id: any;
  public recipeData: Recipe;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log(this.route)
    this.route.data.subscribe(data => {
      this.recipeData = data.recipeInfo;
      console.log(this.recipeData)
    })
  }

  public navigateBack() {
    this.router.navigate(['']);
  }

}
