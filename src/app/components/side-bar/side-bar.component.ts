import { Component } from '@angular/core';
import { MainMenuElements, SupportMenuElements } from '../common/nav.data';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  menuMainData = MainMenuElements
  supportMenuData = SupportMenuElements

}

