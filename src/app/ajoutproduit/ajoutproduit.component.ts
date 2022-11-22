import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Produit } from '../modele/produit';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-ajoutproduit',
  templateUrl: './ajoutproduit.component.html',
  styleUrls: ['./ajoutproduit.component.css']
})
export class AjoutproduitComponent implements OnInit {
p!:Produit
  constructor(private ps:ProduitService,
              private rout:Router) { }

  ngOnInit(): void {
  }
  add(f:NgForm){
    this.p=f.value;
    this.ps.add(this.p).subscribe((data) =>{
      alert('ajoutavecsuccee')
      
    })
this.rout.navigate(['/produit']).then(()=>window.location.reload()) }


}
