import { Routes } from '@angular/router';
import { LandingPageComponent } from './landingpage/components/landing-page/landing-page.component';
import { MailFormComponent } from './contact/components/mail-form/mail-form.component';

export const routes: Routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full'},
    { path: 'landing', component: LandingPageComponent},
    { path: 'mailform', component: MailFormComponent}
];
