import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-nav-user',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.scss'],
})
export class NavUserComponent implements OnInit {
  constructor(
    private _AuthService: AuthService,
    private _CartService: CartService,
    private _WishlistService: WishlistService
  ) {}

  menuOpen: boolean = true;
  cart: number = 0;
  wishlistNum: number = 0;

  //*open menu
  toggleNav(): void {
    this.menuOpen = !this.menuOpen;
  }

  //* logout
  logout(): void {
    this._AuthService.logout();
  }

  ngOnInit(): void {
    //* get cart number
    this._CartService.getUserCart().subscribe({
      next: (response) => {
        this.cart = response.numOfCartItems;
        console.log(response);
      },
    });
    this._CartService.cartNubmer.subscribe({
      next: (num) => {
        this.cart = num;
        console.log(num);
      },
    });
    //*#### get wish list num
    this._WishlistService.wishNumber.subscribe({
      next: (num) => {
        this.wishlistNum = num;
      },
    });
    this._WishlistService.getWishlist().subscribe({
      next: (response) => {
        this.wishlistNum = response.count;
      },
    });

    //*####
  }
}
