import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { HeaderComponent } from '../_components/header/header.component';
import { RecipeDetailModalComponent } from '../_components/recipe-detail-modal/recipe-detail-modal.component';

import { FilterPipe } from 'src/_pipes/filter.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    RecipeDetailModalComponent,
    FilterPipe,

  ],
  imports: [
    CommonModule,
    FormsModule,
    NzGridModule,
    NzInputModule,
    NzModalModule,
    NzSpinModule
  ],
  exports: [
    HeaderComponent,
    RecipeDetailModalComponent,
    FilterPipe,
    NzGridModule,
    NzInputModule,
    NzModalModule,
    NzSpinModule
  ]
})
export class SharedModule { }
