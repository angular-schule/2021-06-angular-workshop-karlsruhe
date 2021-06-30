import { Component, OnInit } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent implements OnInit {

  logStream$ = new ReplaySubject<string | number>();

  ngOnInit() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/

    // 2. Observer
    const observer = {
      next:  e => this.log(e),
      error: err => this.log('ERROR' + err),
      complete: () => this.log('COMPLETE')
    }

    // 1. Observable
    // (ABC|)
    // const subscription = of('😎', '🤬', '🤪').subscribe(observer);

    // 1b: Eigenes Observable
    // 4. Subscriber
    const observable = new Observable(subscriber => {

      subscriber.next('😎');

      setTimeout(() => subscriber.next('😎'), 1000);
      setTimeout(() => subscriber.error('🤬'), 2000);
      setTimeout(() => subscriber.next('😆'), 3000);
    });

    // 3. Subscription
    const subscription = observable.subscribe(observer);
    setTimeout(() => subscription.unsubscribe(), 4000);


    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
