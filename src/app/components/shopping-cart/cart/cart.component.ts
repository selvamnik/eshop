import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [
    { id: 1, proudctId: 1, productName: 'Test 1', qty: 4, price: 100 },
    { id: 2, proudctId: 3, productName: 'Test 3', qty: 5, price: 50 },
    { id: 3, proudctId: 2, productName: 'Test 2', qty: 3, price: 150 },
    { id: 4, proudctId: 4, productName: 'Test 4', qty: 2, price: 200 }
  ];
  cartTotal = 0;
  constructor(private msg:MessengerService) { }
  product!:Product;
  ngOnInit(): void {
    // this.msg.getMsg().subscribe(product: Product)  => { 
    //   console.log(product);
    // this.cartItems.push({
    //     productName:string ;
    //     productName :product.name
    //  })

    this.cartTotal = 0
    this.cartItems.forEach(item => {
    this.cartTotal += (item.qty * item.price)
    })
   
    // })  
  }

}
