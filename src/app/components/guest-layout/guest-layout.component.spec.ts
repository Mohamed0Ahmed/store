import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestLayoutComponent } from './guest-layout.component';

describe('GuestLayoutComponent', () => {
  let component: GuestLayoutComponent;
  let fixture: ComponentFixture<GuestLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GuestLayoutComponent]
    });
    fixture = TestBed.createComponent(GuestLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
