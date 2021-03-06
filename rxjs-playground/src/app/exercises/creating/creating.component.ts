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
     * 2. Implementiere auΓerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
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
    // const subscription = of('π', 'π€¬', 'π€ͺ').subscribe(observer);

    // 1b: Eigenes Observable
    // 4. Subscriber
    const observable = new Observable(subscriber => {

      subscriber.next('π');

      const x = setTimeout(() => subscriber.next('π'), 1000);
      const y = setTimeout(() => { subscriber.error('π€¬'); this.log('ZOMBIE CODE!'); }, 2000);
      // setTimeout(() => subscriber.next('π'), 3000);

      return () => {
        this.log('SCHNELL! Kill die Zombies!');
        clearTimeout(x);
        clearTimeout(y);
      };
    });

    // 3. Subscription
    const subscription = observable.subscribe(observer);
    setTimeout(() => subscription.unsubscribe(), 1000);


    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
