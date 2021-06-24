import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const featureBooksRoutes: Route[] = [];

@NgModule({
  declarations: [
    BookComponent,
    DashboardComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    DashboardComponent
  ]
})
export class FeatureBooksModule {}
