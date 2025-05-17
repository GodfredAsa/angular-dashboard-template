import { Component, Input } from '@angular/core';

@Component({
  selector: 'stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.css']
})
export class StatsCardComponent {

  @Input() title: string = '' // bg-red-300
  @Input() titleIcon: string = ''
  @Input() titleIconBG: string = ''


  @Input() iconClasses: string = ''
  @Input() amount: number = 0.0
  @Input() transactionPeriod: string = ''
  @Input() isIncreased: boolean = true;
}
