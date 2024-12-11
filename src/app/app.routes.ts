import { Routes } from '@angular/router';
import { CepComponent } from './pages/cep/cep.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'cep/:cep', component: CepComponent },
  { path: '**', component: PageNotFoundComponent },
];
