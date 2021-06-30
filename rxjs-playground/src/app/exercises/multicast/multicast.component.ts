import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, Observable } from 'rxjs';
import { share, shareReplay } from 'rxjs/operators';

import { MeasureValuesService } from './measure-values.service';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'rxw-multicast',
  templateUrl: './multicast.component.html',
})
export class MulticastComponent implements OnInit {

  listeners = [];
  logStream$ = new ReplaySubject<string>();

  measureValues$: Subject<number>; // später: Subject<number>;

  constructor(private mvs: MeasureValuesService, private es: ExerciseService) { }

  ngOnInit() {
    /******************************/

    // this.measureValues$ = this.mvs.getValues();

    // share()
    // this.measureValues$ = this.mvs.getValues().pipe(
    //   // share()  // Shortcut für ein new Subject()
    //   shareReplay(1) // Shortcut für ReplaySubject
    // );

    // TODO: BehaviorSubject/ReplaySubject ausprobieren
    this.measureValues$ = new Subject<number>();
    this.mvs.getValues().subscribe(this.measureValues$);

    /******************************/
  }

  addListener() {
    this.listeners.push(this.es.generateRandomString(5));
  }

  addConsoleListener() {
    const randomString = this.es.generateRandomString(5);
    this.measureValues$.subscribe(e => this.logStream$.next(`${randomString} ${e}`));
  }

}
