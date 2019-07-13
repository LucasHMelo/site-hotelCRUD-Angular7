import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHospedeComponent } from './get-hospede.component';

describe('GetHospedeComponent', () => {
  let component: GetHospedeComponent;
  let fixture: ComponentFixture<GetHospedeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetHospedeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetHospedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
