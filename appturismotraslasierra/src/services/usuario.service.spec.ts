import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsuarioResena, UsuarioConsulta, UsuarioNotificacion } from './usuario.service';

describe('UsuarioService', () => {
  let service: UsuarioResena;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsuarioResena]
    });
    service = TestBed.inject(UsuarioResena);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
