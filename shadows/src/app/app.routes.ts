import { Routes } from '@angular/router';
import { LandingPageComponent } from './landingpage/components/landing-page/landing-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full'},
    { path: 'landing', component: LandingPageComponent},
    { 
        path: 'mailform', 
        loadChildren: () =>
            import('./contact/contact-routing.module')
                .then(m => m.contactRoutes)
    }
];
