import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SearchPipe } from 'src/app/search.pipe';

@Component({
  selector: 'app-nav-guest',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav-guest.component.html',
  styleUrls: ['./nav-guest.component.scss'],
})
export class NavGuestComponent {
  constructor() {}

  menuOpen: boolean = true;
  cart: number = 5;

  toggleNav(): void {
    this.menuOpen = !this.menuOpen;
  }
}
