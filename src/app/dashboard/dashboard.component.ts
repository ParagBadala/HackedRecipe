import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/_services/common.service';
import { Recipe } from '../../_models/recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public recipes: Recipe[];
  public error: any;
  public filterValue: string;

  @ViewChild('recipeDetailModal') recipeDetailModal:any;

  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit(): void {
    this.commonService.fetchRecipes().subscribe(data => {
      this.recipes = data;
      this.commonService.setLocalStorage('recipeData', data);
    }, err => {
      this.error = err
    })

    this.filterRecipe();
  }

  public viewReceipeDetail(recipeId) {
    this.router.navigate(['',recipeId]);
  }

  public showModal(recipeDetail) {
    this.recipeDetailModal.showModal(recipeDetail)
  }

  public filterRecipe() {
    this.commonService.getFilterValue().subscribe(value => {
      this.filterValue = value
    })
  }

}
