import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { CoreModule } from './core/core.module';
import { LandingpageModule } from './landingpage/landingpage.module';
import { ContactModule } from './contact/contact.module';
import { HeaderAndFooterService } from './core/services/header-and-footer.service';

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

  constructor(private service: HeaderAndFooterService){}

  ngOnInit(): void {
    this.buttonText = "CONTACT";
  }

  onActivate(newRoute: object) {
    console.log("App component -> activate signal : " + newRoute.constructor.name);
    this.buttonText = this.definefooterButtonText(newRoute.constructor.name);
    console.log("Service : " + this.service.title);
  }

  private definefooterButtonText(data: String) : String {
    switch(data) {
      case "_MailFormComponent" : 
        this.service.title = "Section Mail"; 
        return "BACK";
      case "_LandingPageComponent" : 
        this.service.title = "Section Landing"; 
        return "CONTACT";
      default : 
        return "CONTACT";
    }
  }

}
