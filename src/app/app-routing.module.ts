import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutproduitComponent } from './ajoutproduit/ajoutproduit.component';
import { DetailproduitComponent } from './detailproduit/detailproduit.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: 'produit',component:ListeProduitComponent},
  {path: 'product/:id',component:DetailproduitComponent},
  {path: 'ajoutproduit',component:AjoutproduitComponent},

  {path: '',redirectTo:"/produit",pathMatch:"full"}
,  {path: '**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
