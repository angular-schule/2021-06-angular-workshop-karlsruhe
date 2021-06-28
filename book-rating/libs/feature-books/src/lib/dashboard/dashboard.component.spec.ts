import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book, BookRatingService } from '@book-rating/data-books';
import { BookComponent } from '../book/book.component';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  // let ratingMock: BookRatingService; // Variante 2

  beforeEach(async () => {

    // ratingMock = { .. } // Variante 2
    const ratingMock = {
      // jasmine: spyOn()
      rateUp: jest.fn(b => b) // jest
    };

    await TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        BookComponent // Integration-Test
      ],
      providers: [
        {
          provide: BookRatingService,
          useValue: ratingMock
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call BookRatingService to rateUp', () => {

    const rs = TestBed.inject(BookRatingService); // Variante 1
    const book = { isbn: '000' } as Book;
    component.doRateUp(book);

    expect(rs.rateUp).toHaveBeenLastCalledWith(book);
    expect(rs.rateUp).toHaveBeenCalledTimes(1);
  });
});
