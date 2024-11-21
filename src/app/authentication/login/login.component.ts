import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // Asegúrate de que el path es correcto
import { Router } from '@angular/router'; // Para redirigir al usuario después de iniciar sesión

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Método que se llama al enviar el formulario
  onLogin(): void {
    if (this.email && this.password) {
      this.authService.login(this.email, this.password).subscribe(
        (response) => {
          // Si el login es exitoso, redirige al usuario a la página principal o a donde desees
          localStorage.setItem('token', response.token); // Guarda el token en localStorage
          this.router.navigate(['/menu']); // Redirige a la página de menú o la que desees
        },
        (error) => {
          this.errorMessage = 'Correo electrónico o contraseña incorrectos.';
        }
      );
    } else {
      this.errorMessage = 'Por favor ingresa un correo y una contraseña válidos.';
    }
  }
}
