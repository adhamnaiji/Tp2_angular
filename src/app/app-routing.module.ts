import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';

const routes: Routes = [
  {path: 'produit',component:ListeProduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
