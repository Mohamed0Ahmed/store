import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { product } from 'src/app/shared/interfaces/products';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/search.pipe';
import { RouterLink } from '@angular/router';
import { WishlistService } from 'src/app/shared/services/wishlist.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselModule, FormsModule, SearchPipe, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  localStorage: any;
  constructor(
    private _EcomdataService: EcomdataService,
    private _WishlistService: WishlistService,
    private _ToastrService: ToastrService,
    private _CartService: CartService
  ) {}

  productData: product[] = [];
  productData2: product[] = [];
  serchTerm: string = '';
  wishlistData: string[] = [];
  Dataaa: any;
  isUser: boolean = false;

  ngOnInit(): void {
    //* get data
    this._EcomdataService.getAllProduct().subscribe({
      next: (response) => {
        this.productData = response.data;
        console.log(response.data);
      },
    });
    this._EcomdataService.getAllProductss().subscribe({
      next: (response) => {
        this.productData2 = response.data;
        console.log(response.data);
      },
    });

    //* get local
    if (localStorage.getItem('eToken')) {
      this.isUser = true;
    }
  }
  //* slider
  electro: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    dots: false,
    navSpeed: 700,
    navText: ['  ', '  '],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 2,
      },
      940: {
        items: 5,
      },
    },
    nav: true,
  };

  //* show Stars
  generateRatingArray(ratingAverage: number): any[] {
    return Array.from({ length: ratingAverage }, (star, index) => index);
  }
  //* add to wish list
  addOrRemove(id: string) {
    if (this.wishlistData.includes(id)) {
      this._WishlistService.removeWishlist(id).subscribe({
        next: (response) => {
          console.log(response);
          this._ToastrService.warning(response.message);
          this._WishlistService.wishNumber.next(response.data.length);
          this.wishlistData = response.data;
        },
      });
      //*
    } else {
      this._WishlistService.addToWishlist(id).subscribe({
        next: (response) => {
          console.log(response);
          this._ToastrService.success(response.message);
          this._WishlistService.wishNumber.next(response.data.length);
          this.wishlistData = response.data;
        },
        error: (error) => {
          console.log(error);
          this._ToastrService.error(error.error.message);
        },
      });
    }
  }
  //* ### add to cart
  addCart(id: String): void {
    this._CartService.addToCart(id).subscribe({
      next: (response) => {
        console.log(response);
        console.log(response.numOfCartItems);
        this._ToastrService.success(response.message);
        this._CartService.cartNubmer.next(response.numOfCartItems);
      },
      error: (err) => {
        console.log(err);
        this._ToastrService.error(err.error.message);
      },
    });
  }
  //* go up
  goUp(): void {
    scrollTo(0, 0);
  }
}
