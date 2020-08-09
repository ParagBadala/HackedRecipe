import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Recipe } from '../_models/recipe';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private baseUrl = 'http://starlord.hackerearth.com/'
  private recipeData$: Observable<Recipe[]>

  constructor(private _http: HttpClient) { }

  /**
   * Http Methods
   */

  fetchRecipes(): Observable<Recipe[]> {
    this.recipeData$ = this._http.get<Recipe[]>(this.baseUrl + 'recipe');
    this.setLocalStorage('recipeData$', this.recipeData$)
    return this.recipeData$
  }

  getRecipeDetails(recipeId): any {
    if(!this.recipeData$){
      this.fetchRecipes();
    }
   let localRecipedata$ = this.recipeData$;
   return localRecipedata$.pipe(map(data=>data.filter(data=>data.id === recipeId))).pipe(map(data=>data[0]))
  }

  /**
   * Helper Methods
   */

   private _filterValue$ = new Subject();

   setFilterValue(acc: string) {
     console.log(acc);
    this._filterValue$.next(acc);
   }

   getFilterValue(): Observable<any> {
     return this._filterValue$.asObservable();
   }

   private _loading$ = new Subject();

   setLoading(acc:boolean) {
    this._loading$.next(acc);
   }

   getLoading(): Observable<any> {
     return this._loading$.asObservable();
   }


   /**
    * storage functions
    */

    setLocalStorage(name, data) {
      try {
        localStorage.setItem(name, JSON.stringify(data));
      } catch(error) {
        if(error.name.indexOf('QUOTA') !== -1) {
          alert('Local browser storage has been exceeded. Re-Enter data.');
        }
      }
    }

    getLocalStorage(name): any {
      console.log(localStorage, name, !localStorage[name], localStorage[name] === 'undefined')
      if(!localStorage[name] || localStorage[name] === 'undefined') {
        return '';
      } else {
        return JSON.parse(localStorage.getItem(name));
      }
    }

}
