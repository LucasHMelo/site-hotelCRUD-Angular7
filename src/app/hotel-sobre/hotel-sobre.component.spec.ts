import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSobreComponent } from './hotel-sobre.component';

describe('HotelSobreComponent', () => {
  let component: HotelSobreComponent;
  let fixture: ComponentFixture<HotelSobreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelSobreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
