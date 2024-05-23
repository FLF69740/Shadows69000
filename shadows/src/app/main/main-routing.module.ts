import { Routes } from "@angular/router";
import { WelcomeUiComponent } from "./components/welcome-ui/welcome-ui.component";


export const mainRoutes: Routes = [
    {
        path:'',
        children : [
            { path: '', component: WelcomeUiComponent}
        ]
    }
]