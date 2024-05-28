import { Component, Input, OnInit } from '@angular/core';

import { StartHeadComponent } from '../../../landingpage/components/start-head/start-head.component';
import { HeaderAndFooterService } from '../../services/header-and-footer.service';
import { MainHeadComponent } from '../../../main/components/main-head/main-head.component';
import { State } from '../../services/state';
import { Router } from '@angular/router';

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

  startHeadString: String = State.headerLanding;
  mainHeadString: String = State.headerMain;

  public constructor(
    private service: HeaderAndFooterService,
    private router: Router
  ){}

  @Input('section') headerType!: String;

  ngOnInit(): void {
    console.log("HEADER COMPONENT : " + this.service.title + " - " + this.headerType);
  }

  onItemHeaderChange(itemName: String) {
    
    if (itemName === State.headerMainDeconnection) {
      console.log("CHILD : " + itemName);
      this.router.navigateByUrl('');
    }
  }



  

}
