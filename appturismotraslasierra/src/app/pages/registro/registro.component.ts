import { Component } from '@angular/core';
import { UsuarioService } from 'src/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
usuario: any;
NombreValid: any;
ApellidoValid: any;
Queatraccionvisitaste: any;
Brindanosopinion: any;

}

