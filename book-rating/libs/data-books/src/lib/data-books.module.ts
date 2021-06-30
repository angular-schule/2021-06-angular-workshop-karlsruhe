import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, StoreModule } from '@ngrx/store';
import * as fromBook from './store/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './store/book.effects';
import { loadBooks } from './store/book.actions';

@NgModule({
  imports: [CommonModule,
    StoreModule.forFeature(fromBook.bookFeatureKey, fromBook.reducer),
    EffectsModule.forFeature([BookEffects])],
})
export class DataBooksModule {
  constructor(private store: Store) {
    this.store.dispatch(loadBooks());
  }
}
