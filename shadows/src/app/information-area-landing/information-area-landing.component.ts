import { Component, OnInit } from '@angular/core';

import { InformationLineAreaLandingComponent } from '../information-line-area-landing/information-line-area-landing.component';
import { LineInformationLanding } from '../model/line-information-landing.model';

@Component({
  selector: 'app-information-area-landing',
  standalone: true,
  imports: [InformationLineAreaLandingComponent],
  templateUrl: './information-area-landing.component.html',
  styleUrl: './information-area-landing.component.scss'
})
export class InformationAreaLandingComponent implements OnInit {

  linesInformation!: LineInformationLanding[];

  ngOnInit(): void {
    this.linesInformation = [
      {
        picture: "/assets/pictures/amarr.png",
        name: "AMARR"
      },
      {
        picture: "/assets/pictures/sons_of_sylph.png",
        name: "SONS OF SYLPH"
      },
      {
        picture: "/assets/pictures/cva.png",
        name: "CVA"
      }
    ];
  }



}
