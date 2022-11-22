import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Produit } from '../modele/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
host="http://localhost:3000/produit/"
  constructor(private client:HttpClient) { 

  }
  getallproduct():Observable<Produit[]>{
    return this.client.get<Produit[]>(this.host)
  }
  getproduitbyid(id:any){
    return this.client.get<Produit[]>(this.host+id)
  }
  remove(id:any):Observable<void>{
return this.client.delete<void>(this.host+id)
  }

  add(p:any):Observable<void>
  {
    return this.client.post<void>(this.host,p)
  }
}
