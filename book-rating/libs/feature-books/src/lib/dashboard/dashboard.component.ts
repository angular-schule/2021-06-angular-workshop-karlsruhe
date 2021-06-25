import { Component } from '@angular/core';
import { Book, BookRatingService } from '@book-rating/data-books';

@Component({
  selector: 'books-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
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
  }

  doRateDown(book: Book): void {
    const ratedBook = this.bs.rateDown(book);
    this.updateAndSort(ratedBook);
  }

  doRateUp(book: Book): void {
    const ratedBook = this.bs.rateUp(book);
    this.updateAndSort(ratedBook);
  }

  updateAndSort(ratedBook: Book): void {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating)
  }
}
