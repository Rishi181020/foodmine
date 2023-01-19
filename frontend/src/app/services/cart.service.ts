import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { Food } from '../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart=new Cart;
  private cartSubject:BehaviorSubject<Cart>=new BehaviorSubject(this.cart);
  constructor() { }

  addtoCart(food:Food): void{
    let cartItem=this.cart.Items.find(item=>item.food.id==food.id)
    if(cartItem)
    return;
    this.cart.Items.push(new CartItem(food));
    }
  
  removeFromCart(foodId:string):void{
    this.cart.Items=this.cart.Items.filter(item=>item.food.id!=foodId);
  }  

  changeQuantity(foodId:string,quantitiy:number){
    let cartItem=this.cart.Items.find(item=>item.food.id=foodId);
    if (!cartItem) return;
    cartItem.quantitiy=quantitiy;
    cartItem.price=quantitiy*cartItem.food.price;
  }

  clearCart(){
    this.cart=new Cart;
  }

  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }
}
