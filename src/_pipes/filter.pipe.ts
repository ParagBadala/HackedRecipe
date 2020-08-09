import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../_models/recipe';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Recipe[], args?: string): Recipe[] {
    let filter = args ? args.toLowerCase():null;
    return filter ? value.filter(
      (recipe:Recipe)=>{return recipe.name.toLowerCase().indexOf(filter)!=-1}
      ):value;
   }
}