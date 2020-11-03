import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable, timer} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainNavComponent {
  time = new Date();
  $time: Observable<Date> = timer(0, 1000).pipe(map(() => new Date()));

  constructor() {
  }

}
