import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'books-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  bookForm = new FormGroup({
    isbn: new FormControl('', [Validators.required, Validators.minLength(3)]),
    title: new FormControl('', Validators.required),
    description: new FormControl('')
  });

  isInvalid(name: string): boolean {
    const control = this.bookForm.get(name);
    return !!control && control.touched && control.invalid;
  }

  hasError(name: string, code: string): boolean {
    const control = this.bookForm.get(name);
    return !!control && control.touched && control.hasError(code)
  }

  submitForm() {
    const newBook = {
      ...this.bookForm.value,
      rating: 1
    };

    // Hands On!
    // 1. Emitiere das Event 'create' mit dem neuen Buch
    // 2. Subscribe auf das Ereignis im Dashboard
    // 3. Füge das neue Buch dem Array hinzu

    this.bookForm.reset();
  }
}
