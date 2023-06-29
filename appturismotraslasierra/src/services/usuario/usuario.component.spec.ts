import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioService } from '../usuario.service';

describe('UsuarioComponent', () => {
  let component: UsuarioService;
  let fixture: ComponentFixture<UsuarioService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioService]
    });
    fixture = TestBed.createComponent(UsuarioService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
