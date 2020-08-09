import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/_models/recipe';

@Component({
  selector: 'app-recipe-detail-modal',
  templateUrl: './recipe-detail-modal.component.html',
  styleUrls: ['./recipe-detail-modal.component.css']
})
export class RecipeDetailModalComponent implements OnInit {

  public recipeDetail: Recipe
  public isVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  public showModal(recipeDetail): void {
    this.recipeDetail = recipeDetail
    this.isVisible = true;
  }

  public handleOk(): void {
    this.isVisible = false;
  }

  public handleCancel(): void {
    this.isVisible = false;
  }

}
