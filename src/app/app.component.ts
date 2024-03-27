import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _NgxSpinnerService: NgxSpinnerService) {}

  title = 'Store';
  darkMode: boolean = false;

  ngOnInit() {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      this.darkMode = JSON.parse(storedDarkMode);
    }

    initFlowbite();
  }

  toggle() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
    console.log('hello');
  }
}
