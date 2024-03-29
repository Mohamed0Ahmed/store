import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private _HttpClient: HttpClient) {}

  //* cartnav number
  cartNubmer: BehaviorSubject<number> = new BehaviorSubject(0);

  //*#### profile photo

  private strSrc = new BehaviorSubject('./assets/images/user.jpg');
  readonly strCurr = this.strSrc.asObservable();
  chgStr(strNew: string) {
    this.strSrc.next(strNew);
  }

  //* add from home and details to cart
  addToCart(id: String): Observable<any> {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      { productId: id }
    );
  }

  //* show cart details in cart component
  getUserCart(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`);
  }

  //* remove product from cart
  removeItem(id: string): Observable<any> {
    return this._HttpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`
    );
  }

  //* update count of amount of product
  updateCount(id: string, count: number): Observable<any> {
    return this._HttpClient.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      { count: count }
    );
  }

  //* clear cart
  clearCart(): Observable<any> {
    return this._HttpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/`
    );
  }
  //* online payment
  checkOut(id: string, userData: object): Observable<any> {
    const encodedUrl = encodeURIComponent(
      'https://mohamed0ahmed.github.io/store/#'
    );
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=${encodedUrl}`,
      {
        shippingAddress: userData,
      }
    );
  }
  //* cash payment
  cash(id: string, userData: object): Observable<any> {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/orders/${id}`,
      {
        shippingAddress: userData,
      }
    );
  }

  //* get user orders
  getUserOrders(id: string): Observable<any> {
    return this._HttpClient.get(
      `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`
    );
  }
}
