import { HomeComponent } from './features/home/home.component';
import { bootstrapApplication } from '@angular/platform-browser';   
import { provideRouter, Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: HomeComponent },
];


export const AppRoutingModule = provideRouter(routes);
