import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';
import { jwtDecode } from 'jwt-decode';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-nav-user',
  standalone: true,
  imports: [CommonModule, RouterLink, ProfileComponent],
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.scss'],
})
export class NavUserComponent implements OnInit {
  constructor(
    private _AuthService: AuthService,
    private _CartService: CartService,
    private _WishlistService: WishlistService,
    private _Router: Router
  ) {}

  menuOpen: boolean = true;
  userOpen: boolean = true;
  cart: number = 0;
  wishlistNum: number = 0;
  Dataaa: any;
  windowWidth: number = 0;
  photo: string = '';
  scrolled: boolean = false;

  //*open menu
  toggleNav(): void {
    this.menuOpen = !this.menuOpen;
  }
  togglemenu(): void {
    this.userOpen = !this.userOpen;
  }

  //* logout
  logout(): void {
    this._AuthService.logout();
  }
  //* navigato to profile
  profile(): void {
    this._Router.navigate(['/profile']);
    this.userOpen = !this.userOpen;
  }
  setting(): void {
    this._Router.navigate(['/setting']);
    this.userOpen = !this.userOpen;
  }

  ngOnInit(): void {
    //* get id
    if (localStorage.getItem('eToken')) {
      let encodeToken: any = localStorage.getItem('eToken');
      let decodeToken = jwtDecode(encodeToken);
      this.Dataaa = decodeToken;
    }
    //* get cart number
    this._CartService.getUserCart().subscribe({
      next: (response) => {
        this.cart = response.numOfCartItems;
      },
    });
    this._CartService.cartNubmer.subscribe({
      next: (num) => {
        this.cart = num;
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
    //* CLOSE MENU
    this.userOpen = false;
    //* get user profile
    if (localStorage.getItem(this.Dataaa.id)) {
      // this.photo = localStorage.getItem(this.Dataaa.id)!;
      this._CartService.chgStr(localStorage.getItem(this.Dataaa.id)!);
      this._CartService.strCurr.subscribe((data) => (this.photo = data));
    } else {
      this._CartService.strCurr.subscribe((data) => (this.photo = data));
    }

    //*####
  }
}
