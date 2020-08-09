import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailComponent } from './recipe-detail.component';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { SharedModule } from '../shared/shared.module';
import { RecipeDetailRoutingModule } from './recipe-detail-routing.module';



@NgModule({
  declarations: [
    RecipeDetailComponent
  ],
  imports: [
    CommonModule,
    RecipeDetailRoutingModule,
    SharedModule,
    NzButtonModule,
    NzIconModule,
    NzDividerModule
  ]
})
export class RecipeDetailModule { }
