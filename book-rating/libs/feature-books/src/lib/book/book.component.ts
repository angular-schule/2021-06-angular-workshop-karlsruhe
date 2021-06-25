import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '@book-rating/data-books';

@Component({
  selector: 'books-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input()
  book?: Book;

  @Output()
  rateDown = new EventEmitter<Book>();

  @Output()
  rateUp = new EventEmitter<Book>();

  get stars(): undefined[] {
    return new Array(this.book?.rating);
  }

  doRateDown(): void {
    this.rateDown.emit(this.book);
  }

  doRateUp(): void {
    this.rateUp.emit(this.book);
  }
}
