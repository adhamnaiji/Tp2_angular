import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../modele/produit';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.component.html',
  styleUrls: ['./detailproduit.component.css']
})
export class DetailproduitComponent implements OnInit {
//id!:number
 product!:Produit[]/*=[
//   {id:1,nom:"pc portable",prix:120,quantite:0,urlimage:"./assets/images/pcportable.png"},
//   {id:2,nom:"imprimante",prix:356,quantite:70,urlimage:"./assets/images/imprimante.jpg"},
//   {id:3,nom:"smart phone",prix:700,quantite:50,urlimage:"./assets/images/smartphone.jpg"}]*/
  p:any
  constructor(private ar:ActivatedRoute,
              private route:Router,
              private pservice:ProduitService) { }

  ngOnInit(): void {
    
    let id=this.ar.snapshot.params['id'];
    this.pservice.getproduitbyid(id).subscribe((data)=>{
      this.p=data;
    })
    // this.ar.paramMap.subscribe((par:any)=>{
    //   this.id =par.get('id')
    // })
//this.p=this.product.find(x=>x.id==id)
    
  }
  home(){
this.route.navigate(['/produit']);
  }


}
