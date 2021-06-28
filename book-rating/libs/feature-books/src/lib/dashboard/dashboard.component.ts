import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Book, BookRatingService } from '@book-rating/data-books';

@Component({
  selector: 'books-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // Vorsicht: BUG sobald wir AJAX machen!
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  books: Book[] = [
    {
      isbn: '001',
      title: 'Angular',
      description: 'Tolles Buch',
      rating: 5,
    },
    {
      isbn: '002',
      title: 'React',
      description: 'Ok Buch',
      rating: 3,
    },
    {
      isbn: '003',
      title: 'jQUery',
      description: 'Altes Buch',
      rating: 1,
    },
  ];

  constructor(private bs: BookRatingService) {
    // console.log(bs);
  }

  doRateDown(book: Book): void {
    const ratedBook = this.bs.rateDown(book);
    this.updateAndSort(ratedBook);
  }

  doRateUp(book: Book): void {
    const ratedBook = this.bs.rateUp(book);
    // const ratedBook = {
    //   ...book,
    //   rating: book.rating < 5 ? ++book.rating : 5
    // };
    this.updateAndSort(ratedBook);
  }

  updateAndSort(ratedBook: Book): void {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating)
  }

  addBook(newBook: Book): void {
    this.books = [...this.books, newBook];
  }
}
