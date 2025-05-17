import { Component, Input } from '@angular/core';
import { MainNavData, NavElement } from '../models/nav.model';

@Component({
  selector: 'app-nav-el',
  templateUrl: './nav-el.component.html',
  styleUrls: ['./nav-el.component.css']
})
export class NavElComponent {

  @Input() title: string = '';
  @Input() data: MainNavData[] = []
  @Input() showBottomHr: boolean = true

}
