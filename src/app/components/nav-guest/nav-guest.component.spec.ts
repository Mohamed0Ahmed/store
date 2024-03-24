import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavGuestComponent } from './nav-guest.component';

describe('NavGuestComponent', () => {
  let component: NavGuestComponent;
  let fixture: ComponentFixture<NavGuestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavGuestComponent]
    });
    fixture = TestBed.createComponent(NavGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
