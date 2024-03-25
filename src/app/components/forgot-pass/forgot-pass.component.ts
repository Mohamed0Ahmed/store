import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPassService } from 'src/app/shared/services/forgot-pass.service';
import { Router, RouterLink } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-forgot-pass',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss'],
})
export class ForgotPassComponent {
  constructor(
    private _ForgotPassService: ForgotPassService,
    private _Router: Router
  ) {}
  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;
  email: string = '';
  userMsg: string = '';
  color: boolean = true;

  //*#########
  forgot: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  //*
  resetCode: FormGroup = new FormGroup({
    resetCode: new FormControl(''),
  });

  //*
  newPass: FormGroup = new FormGroup({
    newPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w{6,12}$/),
    ]),
  });
  //*########
  forgotPass(): void {
    const userMail = this.forgot.value;
    this.email = userMail.email;
    this.userMsg = '';
    this._ForgotPassService.forgotPass(userMail).subscribe({
      next: (response) => {
        console.log(response);
        this.userMsg = response.message;
        this.color = false;
        this.step1 = false;
        this.step2 = true;
      },
      error: (err) => {
        console.log(err);
        this.userMsg = err.error.message;
        this.color = true;
      },
    });
  }
  //*
  resetCod(): void {
    const code = this.resetCode.value;
    this.userMsg = '';
    this._ForgotPassService.resetCode(code).subscribe({
      next: (response) => {
        console.log(response);
        this.userMsg = response.status;
        this.color = false;
        this.step2 = false;
        this.step3 = true;
      },
      error: (err) => {
        console.log(err);
        this.userMsg = err.error.message;
        this.color = true;
      },
    });
  }
  //*
  newPassword(): void {
    const form = this.newPass.value;
    form.email = this.email;
    this.userMsg = '';
    this._ForgotPassService.creatNew(form).subscribe({
      next: (response) => {
        console.log(response);
        this.userMsg = response.status;
        this.color = false;
        this._Router.navigate(['/guest/login']);
      },
      error: (err) => {
        console.log(err);
        this.userMsg = err.error.message;
        this.color = true;
      },
    });
  }
}
