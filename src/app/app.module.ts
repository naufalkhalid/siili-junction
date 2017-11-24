import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search.component';
import { FourOhfourComponent } from './four-ohfour/four-ohfour.component';
const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: '', component: LoginComponent },
  { path: '404', component: FourOhfourComponent },
  { path: '**', redirectTo: '/404' }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    SearchComponent,
    FourOhfourComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
