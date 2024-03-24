import { NavUserComponent } from './../../components/nav-user/nav-user.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [CommonModule, NavUserComponent, RouterOutlet, FooterComponent],
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss'],
})
export class UserLayoutComponent {}
