import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalezaComponent } from './naturaleza.component';

describe('NaturalezaComponent', () => {
  let component: NaturalezaComponent;
  let fixture: ComponentFixture<NaturalezaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaturalezaComponent]
    });
    fixture = TestBed.createComponent(NaturalezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
