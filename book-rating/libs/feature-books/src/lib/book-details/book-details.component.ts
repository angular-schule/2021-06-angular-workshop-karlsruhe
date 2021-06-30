import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookStoreService } from '@book-rating/data-books';
import { of } from 'rxjs';
import { catchError, map, retry, switchMap } from 'rxjs/operators';

@Component({
  selector: 'books-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  showDetails = false;

  book$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('isbn') || ''),
    switchMap(isbn => this.bs.getSingleBook(isbn).pipe(
      retry(3),
      catchError((err: HttpErrorResponse) => of({
        title: 'ERROR',
        rating: 0,
        description: err.message
      }))
    )),
  );

  constructor(private route: ActivatedRoute,
    private bs: BookStoreService) { }
}
