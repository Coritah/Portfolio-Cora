import { Routes } from '@angular/router';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';

export const routes: Routes = [
    { path: "", pathMatch: "full", component: SinglepageComponent },
    { path: "**", component: SinglepageComponent },
];
