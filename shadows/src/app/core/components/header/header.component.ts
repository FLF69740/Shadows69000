import { Component, OnInit } from '@angular/core';

import { StartHeadComponent } from '../../../landingpage/components/start-head/start-head.component';
import { HeaderAndFooterService } from '../../services/header-and-footer.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [StartHeadComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  constructor(private service: HeaderAndFooterService){}


  ngOnInit(): void {
    console.log("HEADER COMPONENT : " + this.service.title);
  }

}
