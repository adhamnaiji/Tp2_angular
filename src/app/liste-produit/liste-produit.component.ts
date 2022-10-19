import { Component, OnInit } from '@angular/core';
import { Produit } from '../modele/produit';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {
  ba='masquer'
product:Produit[]=[
{id:1,nom:"pc portable",prix:120,quantite:100,urlimage:"./assets/images/pcportable.png"},
{id:2,nom:"imprimante",prix:356,quantite:70,urlimage:"./assets/images/imprimante.jpg"},
{id:3,nom:"smart phone",prix:700,quantite:50,urlimage:"./assets/images/smartphone.jpg"}]
productf!:Produit[]
  constructor() { }

  ngOnInit(): void {
    this.productf=this.product
  }
  afficher(){
    if(this.ba=='masquer'){
      this.ba='afficher'
    }
    else
    this.ba='masquer'
  }

  set vari(a:string){
//console.log(a)
this.productf=this.filtrer(a)
  }

  filtrer(b:string):Produit[]{
    return this.product.filter(x=>x.nom==b)
  }

}
