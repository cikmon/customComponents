import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputValue = '';
  selectDate = null;
  listDatesAppointments = new Map([
    ['2020-11-12', 'first' ], ['2020-11-11', 'second' ],  ['2020-11-09', 'first' ], ['2020-11-08', 'second' ], ['2020-11-07', 'first' ], ['2020-11-06', 'second' ],
    ['2020-11-05', 'first' ], ['2020-11-04', 'second' ],  ['2020-11-03', 'first' ], ['2020-11-02', 'second' ], ['2020-11-01', 'first' ], ['2020-10-10', 'second' ]
  ]);

  selectDateEvent(event): void {
    this.selectDate = event;
  }
  selectInputEvent(event): void {
    this.inputValue = event;
  }
}
