import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { CoreModule } from './core/core.module';
import { LandingpageModule } from './landingpage/landingpage.module';
import { ContactModule } from './contact/contact.module';
import { HeaderAndFooterService } from './core/services/header-and-footer.service';
import { State } from './core/services/state';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet, 
    CoreModule,
    LandingpageModule,
    ContactModule
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
    this.buttonText = this.definefooterButtonText(newRoute.constructor.name);
    this.headerType = this.defineHeaderState(newRoute.constructor.name);
    console.log("MASTER - HEADER : " + this.headerType);
    console.log("Service : " + this.service.title);
  }

  private definefooterButtonText(data: String) : String {
    switch(data) {
      case "_MailFormComponent" : 
        this.service.title = "Section Mail"; 
        return State.footerBack;
      case "_LandingPageComponent" : 
        this.service.title = "Section Landing"; 
        return State.footerContact;
      case "_WelcomeUiComponent" :
        this.service.title = "Section Welcome";
        return State.footerWelcome;
      case "_ProductionUiComponent" :
        this.service.title = "Section " + State.headerMainProduction;
        return State.footerWelcome;
      case "_ReactionUiComponent" :
        this.service.title = "Section " + State.headerMainProduction;
        return State.footerWelcome;
      case "_PlanetsUiComponent" :
        this.service.title = "Section " + State.headerMainProduction;
        return State.footerWelcome;
      case "_MailsUiComponent" :
        this.service.title = "Section " + State.headerMainProduction;
        return State.footerWelcome;
      case "_SettingsComponent" :
        this.service.title = "Section " + State.headerMainProduction;
        return State.footerWelcome;
      default : 
        return State.footerContact;
    }
  }

  private defineHeaderState(data: String) : String {
    switch(data) {
      case "_WelcomeUiComponent" :
        return State.headerMain;
      case "_ProductionUiComponent" :
        return State.headerMain;
      case "_ReactionUiComponent" :
        return State.headerMain;
      case "_PlanetsUiComponent" :
        return State.headerMain;
      case "_MailsUiComponent" :
        return State.headerMain;
      case "_SettingsComponent" :
        return State.headerMain;
      default : 
        return State.headerLanding;
    }
  }

}
