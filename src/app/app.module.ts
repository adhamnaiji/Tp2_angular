import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { FormsModule } from '@angular/forms';
import { DetailproduitComponent } from './detailproduit/detailproduit.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AjoutproduitComponent } from './ajoutproduit/ajoutproduit.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListeProduitComponent,
    DetailproduitComponent,
    PagenotfoundComponent,
    AcceuilComponent,
    AjoutproduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
