import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelReservarComponent } from './hotel-reservar.component';

describe('HotelReservarComponent', () => {
  let component: HotelReservarComponent;
  let fixture: ComponentFixture<HotelReservarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelReservarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelReservarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
