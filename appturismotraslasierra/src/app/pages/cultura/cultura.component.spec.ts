import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturaComponent } from './cultura.component';

describe('CulturaComponent', () => {
  let component: CulturaComponent;
  let fixture: ComponentFixture<CulturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CulturaComponent]
    });
    fixture = TestBed.createComponent(CulturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
