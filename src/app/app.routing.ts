import {Route} from "@angular/router";
import {WelcomeComponent} from "./welcome/welcome.component";

export const APP_ROUTES: Route[] = [
    {path: '', component: WelcomeComponent},
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.routing').then(mod => mod.DASHBOARD_ROUTES)
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about.component').then((com) => com.AboutComponent)
    }
];
