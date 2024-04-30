import { Component, Input } from '@angular/core';
import { LineInformationLanding } from '../model/line-information-landing.model';

@Component({
  selector: 'app-information-line-area-landing',
  standalone: true,
  imports: [],
  templateUrl: './information-line-area-landing.component.html',
  styleUrl: './information-line-area-landing.component.scss'
})
export class InformationLineAreaLandingComponent {

  @Input() informationLine!: LineInformationLanding;

}
