import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeDetailResolver } from 'src/_guards/recipe-detail.resolver';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: ':id',
    loadChildren: () => import('../app/recipe-detail/recipe-detail.module').then(m => m.RecipeDetailModule),
    // component: RecipeDetailComponent,
    resolve:{recipeInfo: RecipeDetailResolver}
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
