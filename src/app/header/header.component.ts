import { Component, OnInit } from '@angular/core';
import { ApiService } from '../products/api.service';
import { CartService } from '../products/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{


  cartcount:number=0;
  constructor(private api:ApiService, private cart:CartService) { }


  ngOnInit():void{

    this.cart.cartlist.subscribe(
      (data:any)=>{
        this.cartcount = data.length;
      }
    )

  }

  search(event:any){
    let searchKey=event.target.value
    this.api.searchKey.next(searchKey)
  }

}
