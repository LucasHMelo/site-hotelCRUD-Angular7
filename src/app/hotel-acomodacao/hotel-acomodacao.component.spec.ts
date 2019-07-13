import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelAcomodacaoComponent } from './hotel-acomodacao.component';

describe('HotelAcomodacaoComponent', () => {
  let component: HotelAcomodacaoComponent;
  let fixture: ComponentFixture<HotelAcomodacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelAcomodacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelAcomodacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
