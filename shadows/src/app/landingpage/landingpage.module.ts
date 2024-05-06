import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationAreaLandingComponent } from './components/information-area-landing/information-area-landing.component';
import { InformationLineAreaLandingComponent } from './components/information-line-area-landing/information-line-area-landing.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LogoAreaLandingComponent } from './components/logo-area-landing/logo-area-landing.component';
import { PasswordAreaLandingComponent } from './components/password-area-landing/password-area-landing.component';
import { StartHeadComponent } from './components/start-head/start-head.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InformationAreaLandingComponent,
    InformationLineAreaLandingComponent,
    LandingPageComponent,
    LogoAreaLandingComponent,
    PasswordAreaLandingComponent,
    StartHeadComponent,
  ],
  exports: [
    InformationAreaLandingComponent,
    InformationLineAreaLandingComponent,
    LandingPageComponent,
    LogoAreaLandingComponent,
    PasswordAreaLandingComponent,
    StartHeadComponent
  ]
})
export class LandingpageModule { }
