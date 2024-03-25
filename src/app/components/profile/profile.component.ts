import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @ViewChild('fileInput')
  fileInput!: ElementRef;

  constructor(private _AuthService: AuthService) {}
  //* variables

  photo: string = './assets/images/user.jpg';
  selectedFile: File | null = null;
  message: string = '';
  Dataaa: any;
  userName: string = '';
  userEmail: string = '';
  usernumber: string = '';
  userAdress: string = '';
  userId: string = '';
  userAge: string = '';

  //*

  ngOnInit(): void {
    //* get id
    if (localStorage.getItem('eToken')) {
      let encodeToken: any = localStorage.getItem('eToken');
      let decodeToken = jwtDecode(encodeToken);
      this.Dataaa = decodeToken;
      console.log(this.Dataaa);

      this.userId = this.Dataaa.id;
      this.userEmail = this.Dataaa.id;
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
      this.userAdress = localStorage.getItem(`${this.userId} address `)!;
    //*
    if (localStorage.getItem(`${this.userId} age `))
      this.userAge = localStorage.getItem(`${this.userId} age `)!;
    //*
    if (localStorage.getItem(`${this.userId} phone `))
      this.usernumber = localStorage.getItem(`${this.userId} phone `)!;

    //* ### get pic

    if (localStorage.getItem(this.Dataaa.id)) {
      this.photo = localStorage.getItem(this.Dataaa.id)!;
    } else {
      this.photo = './assets/images/user.jpg';
    }
  }

  logoutUser(): void {
    this._AuthService.logout();
  }

  onUploadClicked(): void {
    this.fileInput.nativeElement.click();
  }
  //* ### Select photo
  onFileSelected(event: any): void {
    this.message = '';
    const file = event.target.files[0];

    if (file) {
      if (file.type.match(/image.*/)) {
        this.selectedFile = file;

        const reader = new FileReader();

        reader.onload = (event: any) => {
          this.photo = event.target.result;
          localStorage.setItem(this.Dataaa.id, this.photo);
        };

        reader.readAsDataURL(this.selectedFile!);
      }
      //*
      else {
        this.message = 'Please select an image file.';
      }
    }
  }
  //* #### Remove photo
  remove(): void {
    localStorage.removeItem(this.Dataaa.id);
    this.photo = './assets/images/user.jpg';
  }
}
