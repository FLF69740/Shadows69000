import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { CoreModule } from './core/core.module';
import { LandingpageModule } from './landingpage/landingpage.module';
import { ContactModule } from './contact/contact.module';

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
export class AppComponent {}
