import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'Book Rating';

  beSlow() {
    let x = 0;
    while(x < 100000) {
      x++;
      console.log(x)
    }

    this.title = '😎';
  }
}
