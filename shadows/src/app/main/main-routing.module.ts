import { Routes } from "@angular/router";
import { WelcomeUiComponent } from "./components/welcome-ui/welcome-ui.component";
import { ProductionUiComponent } from "./components/production-ui/production-ui.component";
import { ReactionUiComponent } from "./components/reaction-ui/reaction-ui.component";
import { PlanetsUiComponent } from "./components/planets-ui/planets-ui.component";
import { MailsUiComponent } from "./components/mails-ui/mails-ui.component";
import { SettingsComponent } from "./components/settings/settings.component";


export const mainRoutes: Routes = [
    {
        path:'',
        children : [
            { path: '', component: WelcomeUiComponent},
            { path: 'production', component: ProductionUiComponent},
            { path: 'reaction', component: ReactionUiComponent},
            { path: 'planets', component: PlanetsUiComponent},
            { path: 'mails', component: MailsUiComponent},
            { path: 'settings', component: SettingsComponent}
        ]
    }
]