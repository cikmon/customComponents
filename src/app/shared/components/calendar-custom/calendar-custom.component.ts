import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-calendar-custom',
  templateUrl: './calendar-custom.component.html',
  styleUrls: ['./calendar-custom.component.sass']
})
export class CalendarCustomComponent implements OnInit{
  @Input() selectedDay = new Date();
  @Output() selectedDayEvent: EventEmitter<any> = new EventEmitter();

  visibleDate = new Date(this.selectedDay.getTime());
   monthNames = [{full: 'January', small: 'Jan'}, {full: 'February', small: 'Feb'}, {full: 'March', small: 'Mar'}, {full: 'April', small: 'Apr'},
     {full: 'May', small: 'May'}, {full: 'June', small: 'Jun'}, {full: 'July', small: 'Jul'}, {full: 'August', small: 'Aug'}, {full: 'September', small: 'Sept'}, {full: 'October', small: 'Oct'}, {full: 'November', small: 'Nov'}, {full: 'December', small: 'Dec'}];
   weekName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  daysWeekDate = [];

  ngOnInit(): void {
    this.selectedDay.setHours(0, 0, 0, 0);
    this.visibleDate.setDate(this.visibleDate.getDate() - this.visibleDate.getDay());
    this.visibleDate.setHours(0, 0, 0, 0);
    this.generateDaysWeekDateFirst();
  }

  prev(): void {
    this.generateDaysWeekDatePrev();
  }

  next(): void {
    this.generateDaysWeekDateNext();
  }

  generateDaysWeekDateNext(): void {
    this.visibleDate.setDate(this.visibleDate.getDate() + 7);
    this.daysWeekDate = [];
    for (let i = 0; i < 7; i++) {
      let dateTmp = new Date(this.visibleDate);
      dateTmp.setDate(dateTmp.getDate() + i);
      this.daysWeekDate.push(dateTmp);
    }
  }
  generateDaysWeekDatePrev(): void {
    this.visibleDate.setDate(this.visibleDate.getDate() - 7);
    this.daysWeekDate = [];
    for (let i = 0; i < 7; i++) {
      let dateTmp = new Date(this.visibleDate);
      dateTmp.setDate(dateTmp.getDate() + i);
      this.daysWeekDate.push(dateTmp);
    }
  }


  setDay(index: number): void {
   this.selectedDay = this.daysWeekDate[index];
   this.selectedDayEvent.emit(this.selectedDay);
  }

  private generateDaysWeekDateFirst(): void {
    this.visibleDate = new Date(this.visibleDate.setDate(this.visibleDate.getDate()));
    for (let i = 0; i < 7; i++) {
      let dateTmp = new Date(this.visibleDate);
      dateTmp.setDate(dateTmp.getDate() + i);
      this.daysWeekDate.push(dateTmp);
    }
  }

}
