import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { LoginComponent } from './login/login.component'; // Ajusta la ruta según la ubicación real del componente

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'country/:name', component: CountryDetailComponent },
  {path: 'home', component: HomeComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
