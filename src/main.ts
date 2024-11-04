import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { HomeComponent } from './app/components/home/home.component';
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

// Usando bootstrapApplication para inicializar o AppComponent
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent } // Define a rota inicial
    ])
  ]
}).catch(err => console.error(err));