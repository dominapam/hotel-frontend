import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestConsultationComponent } from './guest-consultation.component';

describe('GuestConsultationComponent', () => {
  let component: GuestConsultationComponent;
  let fixture: ComponentFixture<GuestConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
