import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { CoreModule } from './core/core.module';
import { LandingpageModule } from './landingpage/landingpage.module';
import { ContactModule } from './contact/contact.module';
import { HeaderAndFooterService } from './core/services/header-and-footer.service';
import { State } from './core/services/state';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    HttpClientModule,
    RouterOutlet, 
    CoreModule,
    LandingpageModule,
    ContactModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  buttonText!: String;
  headerType!: String;

  constructor(private service: HeaderAndFooterService){}

  ngOnInit(): void {
    this.buttonText = State.footerContact;
    this.headerType = State.headerLanding;
  }

  onActivate(newRoute: object) {
    console.log("App component -> activate signal : " + newRoute.constructor.name);
    this.buttonText = this.service.definefooterButtonText(newRoute.constructor.name);
    this.headerType = this.service.defineHeaderState(newRoute.constructor.name);
    console.log("MASTER - HEADER : " + this.headerType);
    console.log("Service : " + this.service.title);
  }

}
