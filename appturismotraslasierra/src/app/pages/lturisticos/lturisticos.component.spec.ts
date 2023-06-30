import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LturisticosComponent } from './lturisticos.component';

describe('LturisticosComponent', () => {
  let component: LturisticosComponent;
  let fixture: ComponentFixture<LturisticosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LturisticosComponent]
    });
    fixture = TestBed.createComponent(LturisticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
