import {Component, OnDestroy, OnInit} from '@angular/core';
import {distinctUntilChanged, filter, Observable, Observer, skip, Subscription, takeWhile} from "rxjs";

@Component({
  selector: 'app-rxjs-test',
  templateUrl: './rxjs-test.component.html',
  styleUrls: ['./rxjs-test.component.scss']
})
export class RxjsTestComponent implements OnInit, OnDestroy {

  // @ts-ignore
  private subscription: Subscription;


  public ngOnInit(): void {

    const customRandomObs = Observable.create((observer: Observer<number>) => {
      setInterval(() => {
        observer.next(Math.round(Math.random() * 40));
      }, 1500)
    })
    this.subscription = customRandomObs
      .pipe(
        skip(2),
        filter((num: number) => {
          console.log('the number is:', num);
          return num % 2 !== 0
        }),
        takeWhile((num: number) => num < 30),
        distinctUntilChanged(),
      )
      .subscribe(
        (data: number) => {
          console.log(data);
        },
        (error: Error) => {
          console.log(error);
        },
        () => {
          console.log('Completed!');
        }
      )
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
