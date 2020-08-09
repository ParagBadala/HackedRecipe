import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailComponent } from './recipe-detail.component';
import { RecipeDetailResolver } from 'src/_guards/recipe-detail.resolver';

const routes: Routes = [
    {
      path: '',
      component: RecipeDetailComponent,
    //   resolve:{recipeInfo: RecipeDetailResolver}
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class RecipeDetailRoutingModule { }
  