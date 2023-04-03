import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartarray:any=[];
  cartlist=new BehaviorSubject([])

  constructor() { }
//addtocart

addtocart(product:any){
  this.cartarray.push(product)
  this.cartlist.next(this.cartarray) // straem of data
  console.log(this.cartlist);
  
}

}
