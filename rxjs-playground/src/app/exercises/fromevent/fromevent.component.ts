import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, startWith, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'rxw-fromevent',
  templateUrl: './fromevent.component.html',
})
export class FromeventComponent implements OnInit {

  currentWidth = 0;

  ngOnInit() {

    /**
     * Schreibe die jeweils aktuelle Fensterbreite in das Property `this.currentWidth`
     *
     * Nutze fromEvent, um das resize-Event auf window zu abonnieren.
     * Initialisiere das Observable mit der aktuellen Fensterbreite (`window.innerWidth`)
     * Entprelle den Eventstrom, damit nicht zu viele Events gefeuert werden.
     */

    /******************************/

    fromEvent(window, 'resize').pipe(
      // pure (gut)
      map((e: Event) => (e.target as Window).innerWidth),
      // impure (blöd)
      // map(() => window.innerWidth)
      debounceTime(1000),
      startWith(window.innerWidth)
    ).subscribe(w => this.currentWidth = w);

    /******************************/
  }

}
