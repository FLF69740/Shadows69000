import { Component, Input, OnInit } from '@angular/core';

import { StartHeadComponent } from '../../../landingpage/components/start-head/start-head.component';
import { HeaderAndFooterService } from '../../services/header-and-footer.service';
import { MainHeadComponent } from '../../../main/components/main-head/main-head.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    StartHeadComponent,
    MainHeadComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  constructor(private service: HeaderAndFooterService){}

  @Input('section') headerType!: String;

  ngOnInit(): void {
    console.log("HEADER COMPONENT : " + this.service.title + " - " + this.headerType);
  }

  

}
