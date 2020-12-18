import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-custom',
  templateUrl: './card-custom.component.html',
  styleUrls: ['./card-custom.component.sass']
})
export class CardCustomComponent {
@Input() listDatesAppointments = new Set();
@Input() titleText = '';
@Input() urlImage = '';

}
