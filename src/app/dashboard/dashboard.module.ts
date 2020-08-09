import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NzIconModule,
    NzCardModule
  ]
})
export class DashboardModule { }
