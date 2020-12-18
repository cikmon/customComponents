import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';


@Component({
  selector: 'app-input-custom',
  templateUrl: './input-custom.component.html',
  styleUrls: ['./input-custom.component.scss']
})
export class InputCustomComponent implements OnInit, AfterViewInit{
  @Input() pattern = '';
  @Input() inputLabel = 'Input Label';

  @Input()  inputValue = '';
  @Input() errorMessage = 'Error Message';
  @Output() valueEvent: EventEmitter<any> = new EventEmitter();

  @ViewChild('inputLabelEl') inputLabelEl: ElementRef;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
   this.setStyleLabel();
  }
  setStyleLabel(): void{
    if (this.inputValue.length > 0) {
      this.inputLabelEl.nativeElement.style.top = '-3px';
      this.inputLabelEl.nativeElement.style.fontSize = '10px';
    } else {
      this.inputLabelEl.nativeElement.style.top = '8px';
      this.inputLabelEl.nativeElement.style.fontSize = '16px';
    }
  }

  inputKeydown(): void {
    this.setStyleLabel();
    this.valueEvent.emit(this.inputValue);
  }
}
