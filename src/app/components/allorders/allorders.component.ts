import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/shared/services/cart.service';
import { UserOrders } from 'src/app/shared/interfaces/user-orders';
import { jwtDecode } from 'jwt-decode';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [CommonModule, RouterLink, CarouselModule],
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss'],
})
export class AllordersComponent implements OnInit {
  constructor(private _CartService: CartService) {}
  //* variables
  Dataa: any;
  userOrders: UserOrders[] = [];
  openIndex: number = -1;
  ngOnInit(): void {
    if (localStorage.getItem('eToken')) {
      let encodeToken: any = localStorage.getItem('eToken');
      let decodeToken = jwtDecode(encodeToken);
      this.Dataa = decodeToken;
    }

    this._CartService.getUserOrders(this.Dataa.id).subscribe({
      next: (response) => {
        console.log(response);
        this.userOrders = response;
      },
    });
  }



  toggleHeight(index: number) {
    if (this.openIndex === index) {
      this.openIndex = -1;
    } else {
      this.openIndex = index;
    }
  }
}
