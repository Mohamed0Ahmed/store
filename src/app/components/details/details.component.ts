import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/shared/services/wishlist.service';
import { product } from 'src/app/shared/interfaces/products';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, CarouselModule, RouterLink],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _EcomdataService: EcomdataService,
    private _CartService: CartService,
    private _toastr: ToastrService,
    private _WishlistService: WishlistService
  ) {}
  //* ##### variables
  productDetails: product = {} as product;
  wishlistData: string[] = [];
  pathImg: string = '';

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
      350: {
        items: 3,
      },
      940: {
        items: 5,
      },
    },
    nav: true,
  };

  //* ##### ngOnInit ######
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        let productId: any = param.get('id');
        console.log(productId);

        this._EcomdataService.getProductDetails(productId).subscribe({
          next: (response) => {
            this.productDetails = response.data;
            this.pathImg = this.productDetails.imageCover;
            console.log(this.productDetails);
          },
        });
      },
    });
  }

  //* ### add to cart
  addCart(id: String): void {
    this._CartService.addToCart(id).subscribe({
      next: (response) => {
        console.log(response);
        console.log(response.numOfCartItems);
        this._toastr.success(response.message);
        this._CartService.cartNubmer.next(response.numOfCartItems);
      },
      error: (err) => {
        console.log(err);
        this._toastr.error(err.error.message);
      },
    });
  }

  //* add to wish list
  addOrRemove(id: string) {
    if (this.wishlistData.includes(id)) {
      this._WishlistService.removeWishlist(id).subscribe({
        next: (response) => {
          console.log(response);
          this._toastr.success(response.message);
          this._WishlistService.wishNumber.next(response.data.length);
          this.wishlistData = response.data;
        },
      });
      //*
    } else {
      this._WishlistService.addToWishlist(id).subscribe({
        next: (response) => {
          console.log(response);
          this._toastr.success(response.message);
          this._WishlistService.wishNumber.next(response.data.length);
          this.wishlistData = response.data;
        },
      });
    }
  }
  //* show Stars
  generateRatingArray(ratingAverage: number): any[] {
    return Array.from({ length: ratingAverage }, (star, index) => index);
  }
  sayHello(id: string) {
    console.log('hello');
    this.pathImg = id;
  }
}
