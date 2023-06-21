import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreDelComponenteCLIComponent } from './nombre-del-componente-cli.component';

describe('NombreDelComponenteCLIComponent', () => {
  let component: NombreDelComponenteCLIComponent;
  let fixture: ComponentFixture<NombreDelComponenteCLIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NombreDelComponenteCLIComponent]
    });
    fixture = TestBed.createComponent(NombreDelComponenteCLIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
