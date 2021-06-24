import { Component } from '@angular/core';
import { Book } from '../shared/book';

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
}
