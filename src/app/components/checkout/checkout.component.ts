import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  constructor(
    private _FormBuilder: FormBuilder,
    private _ActivatedRoute: ActivatedRoute,
    private _CartService: CartService
  ) {}
  //* varialbes

  cartId: any = '';
  userData: object = {};

  //* form group
  checkOut: FormGroup = this._FormBuilder.group({
    details: ['', Validators.required],
    phone: [
      '',
      [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
    ],
    city: ['', Validators.required],
  });

  //* send id
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        console.log(param.get('id'));
        this.cartId = param.get('id');
      },
    });
  }

  //* when user click
  handleForm(): void {
    console.log(this.checkOut.value);
    this.userData = this.checkOut.value;

    this._CartService.checkOut(this.cartId, this.userData).subscribe({
      next: (response) => {
        console.log(response);
        if (response.status == 'success') {
          window.open(response.session.url, '_self');
        }
      },
    });
  }
}
