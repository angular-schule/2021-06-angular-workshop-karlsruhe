import { Component, Input } from '@angular/core';
import { Book } from '@book-rating/data-books';

@Component({
  selector: 'books-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input()
  book?: Book;

  get stars(): undefined[] {
    return new Array(this.book?.rating);
  }
}
