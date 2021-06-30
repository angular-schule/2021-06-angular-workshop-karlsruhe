import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookStoreService } from '@book-rating/data-books';
import { map, share, shareReplay, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'books-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  showDetails = false;
  showLoadingIndicator = false;

  book$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('isbn') || ''),
    tap(() => this.showLoadingIndicator = true),
    switchMap(isbn => this.bs.getSingleBook(isbn)),
    tap(() => this.showLoadingIndicator = false),
  );

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }
}
