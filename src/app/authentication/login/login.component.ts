import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogin(form: any): void {
    const { email, password } = form.value;

    this.authService.login(email, password).subscribe(
      (response : any) => {
        if (response.token) {
          // Si se recibe un token en la respuesta, guarda el token
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('token', response.token); // Guarda el token en localStorage
          this.router.navigate(['/dashboard']); // Redirige al dashboard u otra ruta protegida
        } else {
          alert('Credenciales incorrectas');
        }
      },
      (error : any) => {
        console.error('Error al iniciar sesión:', error);
        alert('Ocurrió un error al intentar iniciar sesión');
      }
    );
  }
}
