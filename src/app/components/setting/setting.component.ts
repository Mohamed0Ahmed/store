import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormControlOptions,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
  constructor(
    private _UserService: UserService,
    private _AuthService: AuthService
  ) {}

  photo: string = './assets/images/user.jpg';
  selectedFile: File | null = null;
  message: string = '';
  Dataaa: any;
  userName: string = '';
  userEmail: string = '';
  usernumber: string = '01111111111';
  userPhone: string = 'Add Your Number';
  userAdress: any[] = [];
  userAdres: string = 'Add Your Adress';
  userId: string = '';
  userAge: string = 'Add Your Age';
  nameUpdated: boolean = false;
  mailUpdated: string = '';
  ageUpdated: string = '';
  numberUpdated: string = '';
  addressUpdated: string = '';
  passMsg: string = '';

  ngOnInit(): void {
    //*
    this._AuthService.saveUserData();

    //* get id
    if (localStorage.getItem('eToken')) {
      let encodeToken: any = localStorage.getItem('eToken');
      let decodeToken = jwtDecode(encodeToken);
      this.Dataaa = decodeToken;
      this.userId = this.Dataaa.id;
      console.log(this.Dataaa.name);
      this.userName = localStorage.getItem(`${this.userId} name `)!;
      this.userEmail = localStorage.getItem('mail')!;
    }
    //*#####
    this.userName = this.Dataaa.name;
    this.userEmail = localStorage.getItem('mail')!;
    if (localStorage.getItem(`${this.userId} name `))
      this.userName = localStorage.getItem(`${this.userId} name `)!;
    //*
    if (localStorage.getItem(`${this.userId} address `))
      this.userAdres = localStorage.getItem(`${this.userId} address `)!;
    //*
    if (localStorage.getItem(`${this.userId} age `))
      this.userAge = localStorage.getItem(`${this.userId} age `)!;
    //*
    if (localStorage.getItem(`${this.userId} phone `))
      this.userPhone = localStorage.getItem(`${this.userId} phone `)!;

    //* ### get pic

    if (localStorage.getItem(this.Dataaa.id)) {
      this.photo = localStorage.getItem(this.Dataaa.id)!;
    } else {
      this.photo = './assets/images/user.jpg';
    }
  }
  //* Update Use Name ####
  updateName: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
  });
  changeName(): void {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    this.userName = nameInput.value;
    console.log(this.userName);
    localStorage.setItem(`${this.userId} name `, this.userName);
    nameInput.value = '';
    this.nameUpdated = true;
  }

  //* Update Email ######
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
  });

  updateEmail(): void {
    this.mailUpdated = '';
    const userData = {
      name: this.userName,
      email: this.registerForm.value.email,
      phone: this.usernumber,
    };
    //*
    this._UserService.updateUserData(userData).subscribe({
      next: (response) => {
        const nameInput = document.getElementById('mail') as HTMLInputElement;
        this.userName = response.user.name;
        this.userEmail = response.user.email;
        this.mailUpdated = response.message;
        console.log(response);
        localStorage.setItem('mail', this.userEmail);
        nameInput.value = '';
      },
      error: (err) => {
        this.mailUpdated = err.error.errors.msg;
        console.log(err);
      },
    });
  }

  //* #### Update addresses

  //* form update
  address: FormGroup = new FormGroup({
    details: new FormControl('', [
      Validators.minLength(10),
      Validators.maxLength(40),
      Validators.required,
    ]),
  });

  //* ### Add address
  addAddress(): void {
    this.addressUpdated = '';
    const userData = {
      name: this.userName,
      details: this.address.value.details,
      phone: this.usernumber,
      city: 'cairo',
    };
    this._UserService.addAddress(userData).subscribe({
      next: (response) => {
        this.address.reset();
        this.userAdress = response.data;
        this.addressUpdated = response.message;
        console.log(response);
        localStorage.setItem(
          `${this.userId} address `,
          this.getLastElement(this.userAdress).details
        );
        this.userAdres = localStorage.getItem(`${this.userId} address `)!;
      },
    });
  }
  getLastElement(array: any[]): any {
    if (array.length === 0) {
      return 'Add your Address';
    }
    return array[array.length - 1];
  }

  //* #### Update Age
  //* age form
  age: FormGroup = new FormGroup({
    age: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(1[0-9]|2[0-9]|[3-5][0-9]|60)$/),
    ]),
  });

  addAge(): void {
    const nameInput = document.getElementById('age') as HTMLInputElement;

    this.ageUpdated = '';
    if (this.age.invalid) {
      this.ageUpdated = 'Valid Age 10 to 60';
    }
    //*
    else {
      this.userAge = nameInput.value;
      localStorage.setItem(`${this.userId} age `, this.userAge);
      this.ageUpdated = 'Updated';
      nameInput.value = '';
    }
  }

  //* #### Update number
  number: FormGroup = new FormGroup({
    phone: new FormControl('', [
      Validators.pattern(/^(1[0-9]|2[0-9]|[3-5][0-9]|60)$/),
    ]),
  });

  addnumber(): void {
    const nameInput = document.getElementById('phone') as HTMLInputElement;

    this.numberUpdated = '';
    if (this.number.invalid) {
      this.numberUpdated = 'Enter a valid number';
    }
    //*
    else {
      this.userPhone = nameInput.value;
      localStorage.setItem(`${this.userId} phone `, this.userPhone);
      this.numberUpdated = 'Updated';
      nameInput.value = '';
    }
  }
  //* Reset password

  resetPassword: FormGroup = new FormGroup(
    {
      currentPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w{6,12}$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w{6,12}$/),
      ]),
      rePassword: new FormControl(''),
    },
    { validators: [this.confirmPass] } as FormControlOptions
  );

  //* ##### confirmPassword ######
  confirmPass(group: FormGroup): void {
    const pass = group.get('password');
    const rePass = group.get('rePassword');
    if (rePass?.value == '') {
      rePass?.setErrors({ required: true });
    } else if (pass?.value != rePass?.value) {
      rePass?.setErrors({ missMatch: true });
    }
  }
  resetPass(): void {
    const userData = this.resetPassword.value;
    this.passMsg = '';
    this.passMsg = '';
    this._UserService.updataPass(userData).subscribe({
      next: (response) => {
        console.log(response);
        localStorage.setItem('eToken', response.token);
        this.passMsg = response.message;
        this.resetPassword.reset();
        localStorage.setItem('eToken', response.token);
        localStorage.setItem(`${this.userId} name ` , response.user.name)
        
      },
      error: (err) => {
        console.log(err);
        this.passMsg = err.error.errors.msg;
      },
    });
  }
}
