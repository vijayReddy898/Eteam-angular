import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

   // have one variable to hold cartItems -- an array
   private currentCartItems: any[] = [
    {
      id: 2,
      name: 'Butter',
      category: 'Dairy',
      price: '$10'
    }
  ];

  // Step 1: Create BehaviorSubject with default value for making it observable
  private cartItemsList = new BehaviorSubject<any[]>(this.currentCartItems);

  // Step 2: Make the cartItemsList as observable
  // Create Observable for the above BehaviourSubject
  // so that any component can subscribe to it.
  latestCartItems: Observable<any[]> = this.cartItemsList.asObservable(); // latestCartItems will be subscribable

  constructor() {

  }

  updateCart(product: any): void {
    console.log(product);

    // send the above product to the backend to get it saved within cart.
    // handle success and error
    // if success do the following
    // keep the exisiting items and add one more into it
    this.latestCartItems.pipe(take(1)).subscribe( val => {
      console.log(val);
      console.log(...val); // spread operator
      const newArr = [...val, product];
      console.log(newArr);
      this.cartItemsList.next(newArr);
    });
  }

}
