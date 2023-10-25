import {Route} from "@angular/router";

export const DASHBOARD_ROUTES: Route[] = [
    {
        path: '',
        loadComponent: () => import('./dashboard.component').then((com => com.DashboardComponent))
    },
    {
        path: 'today',
        loadComponent: () => import('./today/today.component').then((com => com.TodayComponent))
    }
];

