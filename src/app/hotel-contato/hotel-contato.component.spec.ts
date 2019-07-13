import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelContatoComponent } from './hotel-contato.component';

describe('HotelContatoComponent', () => {
  let component: HotelContatoComponent;
  let fixture: ComponentFixture<HotelContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
