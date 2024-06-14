import { Routes } from "@angular/router";
import { WelcomeUiComponent } from "./components/welcome-ui/welcome-ui.component";
import { ProductionUiComponent } from "./components/production-ui/production-ui.component";
import { ReactionUiComponent } from "./components/reaction-ui/reaction-ui.component";
import { PlanetsUiComponent } from "./components/planets-ui/planets-ui.component";
import { MailsUiComponent } from "./components/mails-ui/mails-ui.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { AuthGuard } from "../core/services/auth.guard";


export const mainRoutes: Routes = [
    {
        path:'',
        children : [
            { path: '', component: WelcomeUiComponent, canActivate: [AuthGuard]},
            { path: 'production', component: ProductionUiComponent, canActivate: [AuthGuard]},
            { path: 'reaction', component: ReactionUiComponent, canActivate: [AuthGuard]},
            { path: 'planets', component: PlanetsUiComponent, canActivate: [AuthGuard]},
            { path: 'mails', component: MailsUiComponent, canActivate: [AuthGuard]},
            { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]}
        ]
    }
]