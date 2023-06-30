import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermyconComponent } from './termycon.component';

describe('TermyconComponent', () => {
  let component: TermyconComponent;
  let fixture: ComponentFixture<TermyconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermyconComponent]
    });
    fixture = TestBed.createComponent(TermyconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
