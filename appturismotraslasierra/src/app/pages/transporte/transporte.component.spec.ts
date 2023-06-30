import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporteComponent } from './transporte.component';

describe('TransporteComponent', () => {
  let component: TransporteComponent;
  let fixture: ComponentFixture<TransporteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransporteComponent]
    });
    fixture = TestBed.createComponent(TransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
