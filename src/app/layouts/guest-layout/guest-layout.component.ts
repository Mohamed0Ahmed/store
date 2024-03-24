import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavGuestComponent } from 'src/app/components/nav-guest/nav-guest.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  selector: 'app-guest-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavGuestComponent ,FooterComponent],
  templateUrl: './guest-layout.component.html',
  styleUrls: ['./guest-layout.component.scss'],
})
export class GuestLayoutComponent {}
