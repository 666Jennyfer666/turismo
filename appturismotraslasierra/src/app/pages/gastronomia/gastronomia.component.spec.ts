import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastronomiaComponent } from './gastronomia.component';

describe('GastronomiaComponent', () => {
  let component: GastronomiaComponent;
  let fixture: ComponentFixture<GastronomiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GastronomiaComponent]
    });
    fixture = TestBed.createComponent(GastronomiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
