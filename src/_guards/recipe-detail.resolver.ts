import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CommonService } from '../_services/common.service';
import { Recipe } from '../_models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeDetailResolver implements Resolve<Recipe> {

  constructor(private commonService: CommonService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Recipe> {
    const id = route.paramMap.get('id')
    return this.commonService.getRecipeDetails(+id);
  }
}