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
    console.log("CHILD : " + itemName);

    switch(itemName) {
      case State.headerMainDeconnection :
        this.router.navigateByUrl('');
        break;
      case State.headerMainProduction :
        this.router.navigateByUrl('welcome/production');
        break;
      case State.headerMainReactions :
        this.router.navigateByUrl('welcome/reaction');
        break;
      case State.headerMainPlanets :
        this.router.navigateByUrl('welcome/planets');
        break;
      case State.headerMainMails :
        this.router.navigateByUrl('welcome/mails');
        break;
      case State.headerMainSettings :
        this.router.navigateByUrl('welcome/settings');
        break;
      case State.headerMainHome :
        this.router.navigateByUrl('welcome');
        break;
    }
  }



  

}
