import {RouterModule} from "@angular/router";
import {SummaryComponent} from "./summary/summary.component";
import {TimelineComponent} from "./timeline/timeline.component";
import {AddDataComponent} from "./add-data/add-data.component";
import {LoginPageComponent} from "./login-page/login-page.component";


const APP_ROUTES = [
    {path: '', redirectTo: '/summary', pathMatch: 'full'},
    {path: 'summary', component: SummaryComponent},
    {path: 'timeline', component: TimelineComponent},
    {path: 'addData', component: AddDataComponent},
    {path: 'login', component: LoginPageComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);