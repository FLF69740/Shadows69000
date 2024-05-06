import { Component } from '@angular/core';

import { HeaderComponent } from '../../../core/components/header/header.component';
import { FooterComponent } from '../../../core/components/footer/footer.component';
import { InformationAreaLandingComponent } from '../information-area-landing/information-area-landing.component';
import { LogoAreaLandingComponent } from '../logo-area-landing/logo-area-landing.component';
import { PasswordAreaLandingComponent } from '../password-area-landing/password-area-landing.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeaderComponent, 
    FooterComponent,
    InformationAreaLandingComponent,
    LogoAreaLandingComponent,
    PasswordAreaLandingComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
