import { Routes } from "@angular/router";
import { MailFormComponent } from "./components/mail-form/mail-form.component";


export const contactRoutes: Routes = [
    {
        path:'',
        children : [
            { path: '', component: MailFormComponent}
        ]
    }
];