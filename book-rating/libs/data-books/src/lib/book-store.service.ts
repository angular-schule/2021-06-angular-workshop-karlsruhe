import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '..';
import { InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken('apiUrl');

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor(
    private http: HttpClient,
    @Inject(API_URL) private api: string
  ) {

  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.api + '/books');
  }

  getSingleBooks(isbn: string): Observable<Book> {
    return this.http.get<Book>(this.api + '/books/' + isbn);
  }
}
