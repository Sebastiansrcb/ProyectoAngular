import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SHA256 } from 'crypto-js';

interface Usuario {
  nombreUsuario: string;
  contrasenaEncriptada: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  usuario: string = '';
  contrasena: string = '';
  mostrarMensaje: boolean = false;

  usuariosRegistrados: Usuario[] = [
    {
      nombreUsuario: 'Sebastiansrcb',
      contrasenaEncriptada: '70bd8714a2d856538c68cb92919d6573f4c690959e148dc133f6f043c0e41199',
    },{
      nombreUsuario: 'Pancho',
      contrasenaEncriptada: '3ae643d65f437d9103f74f38ab66465aafb6e1b521a1662359d5165d447ce494',
    },{
      nombreUsuario: 'Marco',
      contrasenaEncriptada: '64b782abe4dba6732a79424b55b7bf9db28f57c91bc7f92c2a122f5de78700e8',
    },
    // Agrega más usuarios si es necesario
  ];

  constructor(private router: Router) {}

  onSubmit(): void {
    // Encriptar la contraseña antes de compararla
    const contrasenaEncriptada = SHA256(this.contrasena).toString();

    // Iterar sobre la lista de usuarios registrados
    const usuarioEncontrado = this.usuariosRegistrados.find(
      (usuario) => usuario.nombreUsuario === this.usuario && usuario.contrasenaEncriptada === contrasenaEncriptada
    );

    if (usuarioEncontrado) {
      // Redirigir a la página después de iniciar sesión correctamente.
      this.router.navigate(['/home']);
    } else {
      console.log('Credenciales incorrectas');
      this.mostrarMensaje = true;
    }
  }
}
