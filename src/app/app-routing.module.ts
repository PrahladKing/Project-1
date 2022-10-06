import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { PageErrorComponent } from './country-list/page-error.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'list', component: CountryListComponent},
  {path: '**', component: PageErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRoutings =  [
  LoginPageComponent,
  CountryListComponent,
  PageErrorComponent
]
