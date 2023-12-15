// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SHA256 } from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  usuario: string = '';
  contrasena: string = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    // Encriptar la contraseña antes de compararla
    const contrasenaEncriptada = SHA256(this.contrasena).toString();

    // Comparar con las credenciales correctas
    const usuarioCorrecto = 'Sebastiansrcb';
    const contrasenaCorrectaEncriptada = '70bd8714a2d856538c68cb92919d6573f4c690959e148dc133f6f043c0e41199';

    if (this.usuario === usuarioCorrecto && contrasenaEncriptada === contrasenaCorrectaEncriptada) {
      // Redirigir a la página después de iniciar sesión correctamente.
      this.router.navigate(['/home']);
    } else {
      console.log('Credenciales incorrectas');
      console.log(contrasenaCorrectaEncriptada);
      console.log(contrasenaEncriptada);
    }
  }
}
