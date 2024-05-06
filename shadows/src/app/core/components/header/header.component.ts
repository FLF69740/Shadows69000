import { Component } from '@angular/core';

import { StartHeadComponent } from '../../../landingpage/components/start-head/start-head.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [StartHeadComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
