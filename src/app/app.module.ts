import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderPrincipaleComponent } from './home/header-principale/header-principale.component';
import { AboutComponent } from './home/about/about.component';
import { EsperienzaComponent } from './home/esperienza/esperienza.component';
import { ContattiComponent } from './home/contatti/contatti.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home/home.component';
import { CoomingSoonComponent } from './shared/cooming-soon/cooming-soon.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderPrincipaleComponent,
    AboutComponent,
    EsperienzaComponent,
    ContattiComponent,
    CoomingSoonComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
