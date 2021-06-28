import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateBookComponent } from './create-book/create-book.component';

export const featureBooksRoutes: Route[] = [];

@NgModule({
  declarations: [
    BookComponent,
    DashboardComponent,
    CreateBookComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    DashboardComponent
  ]
})
export class FeatureBooksModule {}
