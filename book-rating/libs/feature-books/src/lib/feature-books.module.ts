import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookDetailsComponent } from './book-details/book-details.component';
import { Store } from '@ngrx/store';
import { loadBooks } from 'libs/data-books/src/lib/store/book.actions';

export const featureBooksRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: DashboardComponent },
  { path: ':isbn', component: BookDetailsComponent }
];

@NgModule({
  declarations: [
    BookComponent,
    DashboardComponent,
    CreateBookComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(featureBooksRoutes), // Bug im Generator!
    ReactiveFormsModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class FeatureBooksModule {
  constructor(private store: Store) {
    this.store.dispatch(loadBooks());
  }
}
